import React from "react";
import Link from "next/link";
// styles
import styles from "./styles.module.scss";

type Props = {
  page: string;
};
const Leftnav: React.FC<Props> = ({ page }) => {
  const pages = ["joshua", "writings", "works"];

  return (
    <header className={styles.leftnav}>
      {pages.map((el, i) => {
        // generate the link
        const link = el === "joshua" ? "/" : `/${el}`;
        // determine which pages is selected
        const className = el === page ? styles.selected : "a";
        return (
          <Link href={link} key={i}>
            <a className={className}>{el}</a>
          </Link>
        );
      })}
    </header>
  );
};

export default Leftnav;
