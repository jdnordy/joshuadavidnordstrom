import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
// components
import { Layout } from '../../components';
// api
import { getWritingBySlug, getAllWritings } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

type Props = {
  title: string;
  subtitle: string;
  author: {
    name: string;
    pic: string;
  };
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
  return (
    <Layout page="">
      <h1>{title}</h1>
      <img src={coverImage} />
      <h2>{subtitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
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
  const content = await markdownToHtml(writing.content);
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