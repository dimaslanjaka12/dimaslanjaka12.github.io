import { writeFileSync } from 'fs';
import gulp from 'gulp';
import Parser from 'rss-parser';
import { join } from 'upath';
//import yaml from 'yaml';
let parser = new Parser();

gulp.task('parse', async () => {
  let feed = await parser.parseURL('https://www.webmanajemen.com/rss.xml');
  //console.log(feed.title);
  const item = feed.items[0];
  writeFileSync(join(__dirname, 'tmp', 'root.json'), JSON.stringify(feed, null, 2))
  /*for (let i = 0; i < feed.items.length; i++) {
    const item = feed.items[i];
    console.log(item.title + ':' + item.link)
  }*/
})