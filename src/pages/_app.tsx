import 'styles/index.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
            name="description"
            content="A public archives of creations and writings by a problem solver and perpetual learner."
        />
        <meta
            name="keywords"
            content="joshua, david, nordstrom, software, engineer, web, developer, dev, programmer, creations, writings, archives"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
