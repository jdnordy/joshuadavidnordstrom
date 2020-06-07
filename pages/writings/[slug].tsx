import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import marked from 'marked';
// components
import { Layout, Title, Content } from '../../components';
import Link from 'next/link';
// api
import { getWritingBySlug, getAllWritings } from '../../lib/api';

type Props = {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  content: string;
  coverImage: string;
};

const aWriting: React.FC<Props> = ({
  title,
  subtitle,
  author,
  date,
  coverImage,
  content,
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
          <Link href="/writings">
            <a>back to writings</a>
          </Link>
        </footer>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
