import React, { useState } from 'react';
// COMPONENETS
import { Leftnav, Rightnav } from '../';
// STYLES
import styles from './styles.module.scss';
import Navbar from '../Navbar';

type Props = {
  page: string;
};

const Layout: React.FC<Props> = ({ page, children }) => {
  return (
    <>
      <title>{page}</title>
      <div className={styles.main_container}>{children}</div>
      <Navbar page={page} />
    </>
  );
};

export default Layout;
