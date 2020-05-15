import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import { Leftnav, Rightnav } from '../';

type Props = {
  page: string;
};

const Navbar: React.FC<Props> = ({ page }) => {
  const [leftnavDis, setLeftnavDis] = useState(false);

  const toggleLeftnav = () => {
    setLeftnavDis(!leftnavDis);
  };

  useEffect(() => {
    const ln = document.getElementById('leftnav_container')!;
    const backdrop = document.getElementById('backdrop')!;
    if (!leftnavDis) {
      ln.classList.remove(styles.leftnav_view);
      ln.classList.add(styles.leftnav_hide);
      backdrop.classList.remove(styles.backdrop_view);
      backdrop.classList.add(styles.backdrop_hide);
      document.querySelector('body')!.style.overflow = '';
    } else {
      ln.classList.remove(styles.leftnav_hide);
      ln.classList.add(styles.leftnav_view);
      backdrop.classList.remove(styles.backdrop_hide);
      backdrop.classList.add(styles.backdrop_view);
      document.querySelector('body')!.style.overflow = 'hidden';
    }
  });

  return (
    <nav className={styles.nav_container}>
      <div id="backdrop" className={styles.backdrop} onClick={toggleLeftnav} />
      <div id="leftnav_container">
        <Leftnav page={page} />
      </div>
      <div className={styles.mobile_buttons}>
        <button onClick={toggleLeftnav}>
          <svg
            id="i-menu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
          </svg>
        </button>
        <button>
          <svg
            id="i-ellipsis-vertical"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="currentcolor"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <circle cx="16" cy="8" r="1.2" />
            <circle cx="16" cy="16" r="1.2" />
            <circle cx="16" cy="24" r="1.2" />
          </svg>
        </button>
      </div>
      <Rightnav />
    </nav>
  );
};

export default Navbar;
