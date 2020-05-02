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
      <a className={selected ? styles.selected : ""}>{label}</a>
    </div>
  </Link>
);

export default Navigator;
