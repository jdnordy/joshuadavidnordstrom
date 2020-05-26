import React from 'react';
import Head from 'next/head';
// COMPONENETS
import { Navbar, OgTags } from '../';
// STYLES
import styles from './styles.module.scss';

type Props = {
  page: string;
  subPage?: string;
};

const Layout: React.FC<Props> = ({ page, children, subPage }) => {
  const title = `${page.split('')[0].toUpperCase() + page.slice(1)}${
    subPage ? ' - ' + subPage : ''
  }`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.main_container}>{children}</div>
      <Navbar page={page} />
    </>
  );
};

export default Layout;
