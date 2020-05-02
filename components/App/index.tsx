import React from "react";
// COMPONENETS
import { Leftnav, Rightnav } from "../";
// STYLES
import styles from "./styles.module.scss";

type Props = {
  page: string;
};

const App: React.FC<Props> = ({ page, children }) => {
  return (
    <div className={styles.container}>
      <Leftnav page={page} />
      {children}
      <Rightnav />
    </div>
  );
};

export default App;
