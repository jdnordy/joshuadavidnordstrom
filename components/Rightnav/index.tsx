import React from 'react';
// import Link from "next/link";
// styles
import styles from './styles.module.scss';

type Props = {};
const Rightnav: React.FC<Props> = () => {
  return (
    <header className={styles.rightnav}>
      <span>Right Nav</span>
    </header>
  );
};

export default Rightnav;
