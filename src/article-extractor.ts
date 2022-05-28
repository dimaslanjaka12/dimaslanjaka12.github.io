import { extract } from 'article-parser';
import axios from 'axios';
import { deepmerge } from 'deepmerge-ts';
import jdom from './jdom';

const dom = new jdom();

const getHTML = async (url: string): Promise<string | null> => {
  const res = await axios.get(url);
  if (res.status === 200) return res.data;
};

const customParser = async (html: string) => {
  const doc = dom.parse(html);
  dom.close();
  return {};
};

export const parseArticle = async (url: any) => {
  const html = await getHTML(url);
  const article = await extract(html);
  const otherData = await customParser(html);
  const type = Object.assign(article, otherData);
  return deepmerge(article, otherData) as typeof type;
};

export default parseArticle;
