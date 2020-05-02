import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

type Props = {
  link: string;
  selected: boolean;
  label: string;
};

const Navigator: React.FC<Props> = ({ link, selected, label }) => (
  <Link href={link}>
    <div className={styles.navigator}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={selected ? styles.selected : ""}
      >
        <circle cx="50" cy="50" r="50" />
      </svg>
      <a>{label}</a>
    </div>
  </Link>
);

export default Navigator;
