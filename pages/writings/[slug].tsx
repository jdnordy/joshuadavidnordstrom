import { GetStaticProps, GetStaticPaths } from 'next';
import marked from 'marked';
// components
import { Layout, Title, Content } from '../../components';
import Link from 'next/link';
// api
import { getWritingBySlug, getAllWritings } from '../../lib/api';

interface otherWriting {
  slug: string;
  date: string;
  title: string;
}

type Props = {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  content: string;
  coverImage: string;
  prev: otherWriting | null;
  next: otherWriting | null;
};

const aWriting: React.FC<Props> = ({
  title,
  subtitle,
  author,
  date,
  coverImage,
  content,
  prev,
  next,
}) => {
  const og = {
    ogTitle: title,
    ogDescription: subtitle,
    ogImage: coverImage ? coverImage : '',
    article: true,
  };
  return (
    <Layout page="writings" subPage={title} og={og}>
      <main className="a_writing">
        <Title {...{ date, title, author, coverImage }} />
        <Content {...{ content }} />
        <footer>
          {prev && (
            <Link href="/writings/[slug]" as={`/writings/${prev.slug}`}>
              <a id="prev_writing">
                &laquo;
                {prev.title.length <= 25
                  ? prev.title.toLowerCase()
                  : prev.title.toLowerCase().slice(0, 24).concat('...')}
              </a>
            </Link>
          )}
          <Link href="/writings">
            <a id="all_writings">all writings</a>
          </Link>
          {next && (
            <Link href="/writings/[slug]" as={`/writings/${next.slug}`}>
              <a id="next_writing">
                {next.title.length <= 25
                  ? next.title.toLowerCase()
                  : next.title.toLowerCase().slice(0, 24).concat('...')}
                &raquo;
              </a>
            </Link>
          )}
        </footer>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // find previous and next writings
  // 1. get all writings
  const writings = getAllWritings(['slug', 'date', 'title']).sort(
    // 2. sort writings by date
    (a, b) => Date.parse(a.date as string) - Date.parse(b.date as string),
  );
  // 3. find index of current writing by matching slug
  const i = writings.findIndex((item) => params?.slug === item.slug);
  // 4. set prev and next slugs
  const prev = i > 0 ? writings[i - 1] : null;
  const next = i < writings.length - 1 ? writings[i + 1] : null;
  const fields = [
    'title',
    'subtitle',
    'author',
    'date',
    'content',
    'coverImage',
  ];
  const writing = getWritingBySlug(params?.slug as string, fields);
  const content = marked(writing.content as string);
  return {
    props: {
      ...writing,
      content,
      prev,
      next,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const writings = getAllWritings(['slug']);
  return {
    paths: writings.map((w) => {
      return { params: { slug: w.slug as string } };
    }),
    fallback: false,
  };
};

export default aWriting;
