import React from 'react';
import Link from 'next/link';
import marked from 'marked';
import { GetStaticProps, GetStaticPaths } from 'next';

import { getWritingBySlug } from '../lib/api';
// import components
import { Layout, Content } from '../components';

type Props = {
    content: string
}

const JoshuaDavid: React.FC<Props> = ({ content }) => {
  const og = {
    ogTitle: 'Home',
    ogDescription:
      'A public archives of creations and writings by a problem solver and perpetual learner.',
    // ogImage: '',
    article: false,
  };
  return (
    <Layout page="joshua" og={og}>
      <main className="joshua">
        <header>
          <img src="/joshua.jpeg" />
          <div>
            <h1>JOSHUA</h1>
            <h1>DAVID</h1>
            <h1>NORDSTROM</h1>
          </div>
        </header>
        <Content content={ content } />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
    const { content } = getWritingBySlug('about', ['content']);
    return {
        props: { content: marked(content as string) }
    }
}

export default JoshuaDavid;
