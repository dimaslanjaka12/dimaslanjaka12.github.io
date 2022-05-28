export interface RSS {
  [key: string]: any;
  items: Item[];
  image: Image;
  title: string;
  description: string;
  generator: string;
  link: string;
  language: string;
  copyright: string;
  lastBuildDate: string;
  docs: string;
}

export interface Item {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  author: string;
  'content:encoded': string;
  'content:encodedSnippet': string;
  enclosure: Enclosure;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
}

export interface Enclosure {
  url: string;
  length: string;
  type: string;
}

export interface Image {
  link: string;
  url: string;
  title: string;
}
