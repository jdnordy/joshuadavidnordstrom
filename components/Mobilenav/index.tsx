import React, { useState } from 'react';
import styles from './styles.module.scss';

import { Leftnav, Rightnav } from '../';

type Props = {
  page: string;
};

const Mobilenav: React.FC<Props> = ({ page }) => {
  const [leftnavDis, setLeftnavDis] = useState(false);
  const [rightnavDis, setRightnavDis] = useState(false);

  const toggleLeftnav = () => setLeftnavDis(!leftnavDis);

  return (
    <>
      <nav className={styles.mobile_nav}>
        <button onClick={toggleLeftnav}>
          <svg
            id="i-menu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="none"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
          </svg>
        </button>
        <button>dots</button>
      </nav>
      {leftnavDis && (
        <>
          <div className={styles.backdrop} onClick={toggleLeftnav} />
          <Leftnav page={page} />
        </>
      )}
      {rightnavDis && <Rightnav />}
    </>
  );
};

export default Mobilenav;
