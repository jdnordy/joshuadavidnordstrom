import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// COMPONENETS
import { Navbar } from '../';
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

  const router = useRouter();

  const google = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-166852828-1', {
      page_title: ${subPage ? subPage : page},
      page_path: ${router.asPath}
    });
  `;

  return (
    <>
      <Head>
        <title>{title}</title>
        <script
          dangerouslySetInnerHTML={{ __html: google }}
          key="google"
        ></script>
      </Head>
      <div className={styles.main_container}>{children}</div>
      <Navbar page={page} />
    </>
  );
};

export default Layout;
