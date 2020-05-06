import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// join the current working director with _writings dir to to get path
const writingsDirectory = join(process.cwd(), '_writings');

export function getWritingSlugs() {
  return fs.readdirSync(writingsDirectory);
}

interface GetWritingBySlug {
  (slug: string, fields: string[]): Items;
}

export type Items = {
  [prop: string]: string | number;
};

export const getWritingBySlug: GetWritingBySlug = (slug, fields = []) => {
  // handle gathering slugs from fs readdirSync
  const realSlug = slug.replace(/\.md$/, '');
  const writingPath = join(writingsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(writingPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Items = {};

  fields.forEach((f) => {
    if (f === 'slug') items[f] = realSlug;
    else if (f === 'content') items[f] = content;
    else if (data[f]) items[f] = data[f];
  });

  return items;
};

interface GetAllWritings {
  (fields: string[]): Array<Items>;
}

export const getAllWritings: GetAllWritings = (fields = []) => {
  const slugs = getWritingSlugs();
  return slugs.map((slug) => getWritingBySlug(slug, fields));
};
