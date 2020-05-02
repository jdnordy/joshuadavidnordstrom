import React from "react";

import { Leftnav } from "../../components";
import { Rightnav } from "../../components";

const Writings: React.FC = () => {
  return (
    <div className="container">
      <Leftnav page={"writings"} />
      <section>
        <h1>Writings</h1>
        <p>Here will be a list</p>
      </section>
      <Rightnav />
    </div>
  );
};

export default Writings;
