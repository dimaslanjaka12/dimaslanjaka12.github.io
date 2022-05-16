import { extract } from 'article-parser';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import gulp from 'gulp';
import md5 from 'md5';
import Parser from 'rss-parser';
import { join } from 'upath';
import yaml from 'yaml';
import configData from './src/types/_config.json';

const parser = new Parser();
const configYml = join(__dirname, '_config.yml');
const configYmlRead = readFileSync(configYml, 'utf-8');
const config: typeof configData = yaml.parse(configYmlRead);
writeFileSync(join(__dirname, 'src/types/_config.json'), JSON.stringify(config, null, 2));
const destDir = join(__dirname, config.source_dir, '_posts');
if (existsSync(destDir)) rmSync(destDir, { recursive: true });
if (!existsSync(destDir)) mkdirSync(destDir);

gulp.task('parse', async () => {
  const feed = await parser.parseURL('https://www.webmanajemen.com/rss.xml');
  //console.log(feed.title);
  for (let i = 0; i < feed.items.length; i++) {
    const item = feed.items[i];
    const post = {
      metadata: {
        title: '',
        description: '',
        author: 'dimaslanjaka@gmail.com (Dimas lanjaka)',
        url: '',
        date: String(new Date()),
        updated: String(new Date())
      },
      body: ''
    };
    if (item.title) post.metadata.title = item.title;
    if (item.summary) {
      post.metadata.description = item.summary;
    } else if (item.contentSnippet) {
      post.metadata.description = item.contentSnippet;
    }
    if (item.creator) {
      post.metadata.author = item.creator;
    }
    if (item.isoDate) {
      post.metadata.date = post.metadata.updated = item.isoDate;
    } else if (item.pubDate) {
      post.metadata.date = post.metadata.updated = item.pubDate;
    }
    if (item.title.toLowerCase().includes('xampp'))
      if (item.link) {
        const readMore = `<hr/> <a href="${item.link}" rel="follow" class="button" id="read-more">Read More</a> <hr/>`;
        let buildPost = '';
        try {
          const article = await extract(item.link);
          if (!article) {
            console.log(`cannot parse article from ${item.link}`);
            buildPost = `${item['content:encodedSnippet']} ${readMore}`;
            const parseUrl = new URL(item.link);
            const saveTo = join(destDir, md5(parseUrl.pathname) + '.md');
            writeFileSync(saveTo, buildPost);
            return;
          }
          if (article.description) post.metadata.description = article.description;
          if (article.title) post.metadata.title = article.title;
          if (article.published) post.metadata.date = article.published;
          if (article.author) post.metadata.author = article.author;
          post.metadata.url = item.link;

          post.body = `${article.title} - ${article.description} ${item['content:encodedSnippet']} ${readMore}`;
          buildPost = `---\n${yaml.stringify(post.metadata)}---\n\n${post.body}`;
          const parseUrl = new URL(item.link);
          const saveTo = join(destDir, md5(parseUrl.pathname) + '.md');
          writeFileSync(saveTo, buildPost);
        } catch (error) {
          console.log(error);
        }
      }
  }
});
