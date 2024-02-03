import Link from 'next/link';

import styles from './styles.module.scss';

interface NavigatorProps {
  link: string;
  selected: boolean;
  label: string;
}

const Navigator = ({ link, selected, label }: NavigatorProps) => (
  (<Link
    href={link}
    className={styles.navigator}
    onClick={() => (document.querySelector('body')!.style.overflow = '')}>

    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={selected ? styles.selected : ''}
    >
      <circle cx="50" cy="50" r="50" />
    </svg>
    <span>{label}</span>

  </Link>)
);

export default Navigator;
