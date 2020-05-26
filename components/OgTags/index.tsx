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
      <meta property="og:url" content={router.asPath} key="og:url" />
      <meta property="og:title" content={ogTitle} key="og:title" />
      <meta
        property="og:description"
        content={ogDescription}
        key="og:description"
      />
      <meta
        property="og:image"
        content={ogImage ? ogImage : 'https://jdnordstrom.com/logo_v6.png'}
        key="og:image"
      />
      <meta
        property="og:type"
        content={article ? 'article' : 'website'}
        key="og:type"
      />
    </Head>
  );
};

export default OgTags;
