import '../styles/index.scss';
import React from 'react';

type Props = {
  Component: any;
  pageProps: {};
};

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
