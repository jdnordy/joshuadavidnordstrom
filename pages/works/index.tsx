import React from "react";

import { Navbar } from "../../components";

const Works: React.FC = () => {
  return (
    <div>
      <Navbar page={"works"} />
      <section>
        <h1>Works</h1>
        <p>Here will be a list of works.</p>
      </section>
    </div>
  );
};

export default Works;
