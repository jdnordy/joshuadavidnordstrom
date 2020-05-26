import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  article: boolean;
};

const OgTags: React.FC<Props> = ({
  ogTitle,
  ogDescription,
  ogImage,
  article,
}) => {
  const router = useRouter();
  return (
    <Head>
      <meta
        property="og:url"
        content={'https://jdnordstrom.com' + router.pathname}
        key="og:url"
      />
      <meta property="og:title" content={ogTitle} key="og:title" />
      <meta
        property="og:description"
        content={ogDescription}
        key="og:description"
      />
      <meta
        property="og:image"
        content={ogImage ? ogImage : 'https://jdnordstrom.com/joshua_og.jpeg'}
        key="og:image"
      />
      <meta property="og:image:width" content="1200" key="og:image:width" />
      <meta property="og:image:height" content="630" key="og:image:height" />
      <meta
        property="og:type"
        content={article ? 'article' : 'website'}
        key="og:type"
      />
    </Head>
  );
};

export default OgTags;
