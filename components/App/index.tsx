import React from "react";

import { Leftnav, Rightnav } from "../";

type Props = {
  Component: React.FC;
  page: string;
};

const App: React.FC<Props> = ({ Component, page }) => {
  return (
    <div className="container">
      <Leftnav page={page} />
      <Component />
      <Rightnav />
    </div>
  );
};

export default App;
