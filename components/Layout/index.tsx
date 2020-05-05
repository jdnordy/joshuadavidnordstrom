import React from 'react';
// COMPONENETS
import { Leftnav, Rightnav } from '../';
// STYLES
import styles from './styles.module.scss';

type Props = {
  page: string;
};

const Layout: React.FC<Props> = ({ page, children }) => {
  return (
    <>
      <title>{page}</title>
      <div className={styles.main_container}>{children}</div>
      <div className={styles.nav_container}>
        <Leftnav page={page} />
        <Rightnav />
      </div>
    </>
  );
};

export default Layout;
