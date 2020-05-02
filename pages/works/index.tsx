import React from "react";

import { Leftnav } from "../../components";
import { Rightnav } from "../../components";

const Works: React.FC = () => {
  return (
    <div className="container">
      <Leftnav page={"works"} />
      <section>
        <h1>Works</h1>
        <p>Here will be a list of works.</p>
      </section>
      <Rightnav />
    </div>
  );
};

export default Works;
