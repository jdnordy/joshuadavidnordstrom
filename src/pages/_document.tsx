import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-166852828-1"
          />
          <link rel="icon" type="image/png" href="/logo_v6.png" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="jdnordstrom.com"
            href="https://jdnordstrom.com/rss.xml"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
