import React from "react";
import Link from "next/link";

type Props = {
  page: string;
};

interface HeaderStyle {
  display: string;
  flexDirection: "column";
}

const headerStyle: HeaderStyle = {
  display: "flex",
  flexDirection: "column",
};

const Navbar: React.FC<Props> = ({ page }) => {
  const pages = ["joshuadavid", "writings", "works"];

  return (
    <header style={headerStyle}>
      {pages.map((el, i) => {
        // generate the link
        const link = el === "joshuadavid" ? "/" : `/${el}`;
        // determine which pages is selected
        const className = el === page ? "selected" : "a";
        return (
          <Link href={link} key={i}>
            <a className={className}>{el}</a>
          </Link>
        );
      })}
    </header>
  );
};

export default Navbar;
