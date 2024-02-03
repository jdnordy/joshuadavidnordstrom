import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import Leftnav from './Leftnav';
import Rightnav from './Rightnav';

type Props = {
  page: string;
};

const Navbar: React.FC<Props> = ({ page }) => {
  /**
   * ******************
   * TOGGLE THE LEFTNAV ON MOBILE
   * ******************
   */
  // state to control the leftnav
  const [leftnavShow, setLeftnavShow] = useState(false);
  // function to toggle leftnav on click
  const toggleLeftnav = () => {
    setLeftnavShow(!leftnavShow);
    setRightnavShow(false);
  };
  // change the class based on toggled state
  useEffect(() => {
    const ln = document.getElementById('leftnav_container')!;
    const backdrop = document.getElementById('backdrop')!;
    if (!leftnavShow) {
      ln.classList.remove(styles.leftnav_view);
      ln.classList.add(styles.leftnav_hide);
    } else {
      ln.classList.remove(styles.leftnav_hide);
      ln.classList.add(styles.leftnav_view);
    }
    if (!leftnavShow && !rightnavShow) {
      backdrop.classList.remove(styles.backdrop_view);
      backdrop.classList.add(styles.backdrop_hide);
      document.querySelector('body')!.style.overflow = '';
    } else {
      backdrop.classList.remove(styles.backdrop_hide);
      backdrop.classList.add(styles.backdrop_view);
      document.querySelector('body')!.style.overflow = 'hidden';
    }
  }, [leftnavShow]);

  /**
   * ******************
   * TOGGLE THE RIGHTNAV ON MOBILE
   * ******************
   */
  // state to control the rightnav
  const [rightnavShow, setRightnavShow] = useState(false);
  // function to toggle leftnav on click
  const toggleRightnav = () => {
    setRightnavShow(!rightnavShow);
    setLeftnavShow(false);
  };
  // change the class based on toggled state
  useEffect(() => {
    const ln = document.getElementById('rightnav_container')!;
    const backdrop = document.getElementById('backdrop')!;
    if (!rightnavShow) {
      ln.classList.remove(styles.rightnav_view);
      ln.classList.add(styles.rightnav_hide);
      backdrop.classList.remove(styles.backdrop_view);
      backdrop.classList.add(styles.backdrop_hide);
      document.querySelector('body')!.style.overflow = '';
    } else {
      ln.classList.remove(styles.rightnav_hide);
      ln.classList.add(styles.rightnav_view);
      backdrop.classList.remove(styles.backdrop_hide);
      backdrop.classList.add(styles.backdrop_view);
      document.querySelector('body')!.style.overflow = 'hidden';
    }
    if (!leftnavShow && !rightnavShow) {
      backdrop.classList.remove(styles.backdrop_view);
      backdrop.classList.add(styles.backdrop_hide);
      document.querySelector('body')!.style.overflow = '';
    } else {
      backdrop.classList.remove(styles.backdrop_hide);
      backdrop.classList.add(styles.backdrop_view);
      document.querySelector('body')!.style.overflow = 'hidden';
    }
  }, [rightnavShow]);

  const backdropClick = () => {
    if (leftnavShow) setLeftnavShow(false);
    if (rightnavShow) setRightnavShow(false);
  };

  return (
    <nav className={styles.nav_container}>
      <div id="backdrop" className={styles.backdrop} onClick={backdropClick} />
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
        <button onClick={toggleRightnav}>
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
      <div id="rightnav_container" className={styles.rightnav_container}>
        <Rightnav />
      </div>
    </nav>
  );
};

export default Navbar;
