import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// join the current working director with _writings dir to to get path
const writingsDirectory = join(process.cwd(), '_writings');

export function getWritingSlugs() {
  return fs.readdirSync(writingsDirectory);
}

interface GetWritingBySlug {
  (slug: string, fields: string[]): {};
}

interface Items {
  [prop: string]: string;
}

export const getWritingBySlug: GetWritingBySlug = (slug, fields = []) => {
  // handle gathering slugs from fs readdirSync
  const realSlug = slug.replace(/\.md$/, '');
  const writingPath = join(writingsDirectory, `&{slug}.md`);
  const fileContents = fs.readFileSync(writingPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Items = {};

  fields.forEach((f) => {
    switch (f) {
      case 'slug':
        items[f] = realSlug;

      case 'content':
        items[f] = content;

      default:
        if (data[f]) {
          items[f] = data[f];
        }
    }
  });

  return items;
};

interface GetAllWritings {
  (fields: string[]): Array<{}>;
}

export const getAllWritings: GetAllWritings = (fields = []) => {
  const slugs = getWritingSlugs();
  return slugs.map((slug) => getWritingBySlug(slug, fields));
};
