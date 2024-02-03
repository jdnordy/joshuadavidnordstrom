import { marked } from 'marked';
import { GetStaticProps } from 'next';
import Image from 'next/image';

import { getWritingBySlug } from 'lib/api';
// import components
import { Layout, Content } from 'components';

interface JoshuaDavidProps {
  content: string
}

const JoshuaDavid = ({ content }: JoshuaDavidProps) => {
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
          <Image src="/joshua.jpeg" alt="loading image..."/>
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
        props: { content: marked.parse(content as string) }
    }
}

export default JoshuaDavid;
