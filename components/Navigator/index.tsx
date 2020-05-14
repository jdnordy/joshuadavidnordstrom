import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

type Props = {
  link: string;
  selected: boolean;
  label: string;
};

const Navigator: React.FC<Props> = ({ link, selected, label }) => (
  <Link href={link}>
    <a
      className={styles.navigator}
      onClick={() => (document.querySelector('body')!.style.overflow = '')}
    >
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={selected ? styles.selected : ''}
      >
        <circle cx="50" cy="50" r="50" />
      </svg>
      <span>{label}</span>
    </a>
  </Link>
);

export default Navigator;
