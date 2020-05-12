import React, { useState } from 'react';
// COMPONENETS
import { Leftnav, Rightnav } from '../';
// STYLES
import styles from './styles.module.scss';
import Navbar from '../Navbar';

type Props = {
  page: string;
  subPage?: string;
};

const Layout: React.FC<Props> = ({ page, children, subPage }) => {
  const title = `${page.split('')[0].toUpperCase() + page.slice(1)}${
    subPage ? '/' + subPage : ''
  }`;
  return (
    <>
      <title>{title}</title>
      <div className={styles.main_container}>{children}</div>
      <Navbar page={page} />
    </>
  );
};

export default Layout;
