const fs = require('fs');
const { join } = require('path');
const matter = require('gray-matter');
const marked = require('marked');

const RSS_PATH = join(process.cwd(), 'public/rss.xml');
const WRITINGS_PATH = join(process.cwd(), '_writings');

let header = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" 
      xmlns:atom="http://www.w3.org/2005/Atom" 
      xmlns:webfeeds="http://webfeeds.org/rss/1.0"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
    >
      <channel>
        <title>jdnordstrom.com</title>
        <description>
          A public archives of creations and writings by a problem solver and perpetual learner.
        </description>
        <link>https://jdnordstrom.com</link>
        <atom:link href="https://jdnordstrom.com/rss.xml" rel="self" type="application/rss+xml"/>
        <webfeeds:cover image="https://jdnordstrom.com/joshua_og.jpeg"/>
        <webfeeds:icon>https://jdnordstrom.com/logo_v6.png</webfeeds:icon>
        <webfeeds:logo>https://jdnordstrom.com/logo_v6.png</webfeeds:logo>
        <webfeeds:accentColor>0004fa</webfeeds:accentColor>
        <language>en-us</language>
  `;
writeHeader(RSS_PATH, header);

const writings = getWritings(WRITINGS_PATH);

for (let i = 0; i < writings.length; i++) {
  const { fileContent, slug } = writings[i];
  writeItem(RSS_PATH, fileContent, slug);
}

writeFooter(RSS_PATH, '</channel></rss>');

/**
 * *************
 * gets all blog writings
 * *************
 * @param {path string to writings folder} WRITINGS_PATH
 * @returns array of writings objects sorted by pubDate DESC
 * writings object: { slug: file name, fileContent: parsed markdown }
 */
function getWritings(WRITINGS_PATH) {
  return fs
    .readdirSync(WRITINGS_PATH)
    .map((file) => {
      const pathToWriting = join(WRITINGS_PATH, file);
      const fileContent = fs.readFileSync(pathToWriting);
      return {
        slug: file,
        fileContent: matter(fileContent),
      };
    })
    .sort(
      (a, b) =>
        Date.parse(b.fileContent.data.date) -
        Date.parse(a.fileContent.data.date),
    );
}

/**
 * *************
 * writes header to rss file
 * *************
 * @param {path to rss file} RSS_PATH
 * @param {rss header to set} header
 */
function writeHeader(RSS_PATH, header) {
  fs.writeFileSync(RSS_PATH, header);
}

/**
 * *************
 * writes item to rss file
 * *************
 * @param {path to writings dir} WRITINGS_PATH
 * @param {parsed markedown} fileContent
 * @param {name of writing file} slug
 */
function writeItem(WRITINGS_PATH, fileContent, slug) {
  const { data, content } = fileContent;
  const realSlug = slug.replace(/\.md$/, '');
  let item = `<item>`;
  item += `<title>${data.title}</title>`;
  item += `<dc:creator>${data.author}</dc:creator>`;
  item += `<description><![CDATA[${marked(content)}]]></description>`;
  item += `<pubDate>${new Date(data.date).toUTCString()}</pubDate>`;
  item += `<link>https://jdnordstrom.com/writings/${realSlug}</link>`;
  item += `<guid isPermaLink="true">https://jdnordstrom.com/writings/${realSlug}</guid>`;
  item += `</item>`;
  fs.appendFileSync(WRITINGS_PATH, item);
}

/**
 * *************
 * appends footer to end of rss file
 * *************
 * @param {path to rss file} RSS_PATH
 * @param {footer for rss xml} footer
 */
function writeFooter(RSS_PATH, footer) {
  fs.appendFileSync(RSS_PATH, footer);
}
