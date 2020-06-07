import React from 'react';
// import Link from "next/link";
// styles
import styles from './styles.module.scss';

type Props = {};
const Rightnav: React.FC<Props> = () => {
  return (
    <nav className={styles.rightnav}>
      <div>
        {/* svgs from https://github.com/danklammer/bytesize-icons*/}
        <a href="mailto:joshua@jdnordstrom.com" target="_blank">
          <svg
            id={styles.mail}
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
            <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" />
          </svg>
        </a>
        <a href="https://github.com/jdnordy" target="_blank">
          <svg
            id={styles.github}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="32"
            height="32"
          >
            <path
              strokeWidth="0"
              fill="currentColor"
              d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"
            />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/jdnordy/" target="_blank">
          <svg
            id={styles.linkedin}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a href="https://jdnordstrom.com/rss.xml">
          <svg
            id={styles.rss}
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
            <circle cx="6" cy="26" r="2" fill="currentColor" />
            <path d="M4 15 C11 15 17 21 17 28 M4 6 C17 6 26 15 26 28" />
          </svg>
        </a>
      </div>
      <p>
        <span>Joshua Nordstrom</span>
        <span>©2020</span>
      </p>
    </nav>
  );
};

export default Rightnav;
