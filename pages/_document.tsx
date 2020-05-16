import Document, { Html, Head, Main, NextScript } from 'next/document';

const google = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'UA-166852828-1');
`;

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-166852828-1"
          ></script>
          <script dangerouslySetInnerHTML={{ __html: google }}></script>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="A public archives of creations and writings by a problem solver and perpetual learner."
          />
          <meta
            name="keywords"
            content="joshua, david, nordstrom, software, engineer, web, developer, dev, programmer, creations, writings, archives"
          />
          <link rel="icon" type="image/png" href="/logo_v6.png" />
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
