import React from "react";

import { Navbar } from "../../components";

const Writings: React.FC = () => {
  return (
    <>
      <Navbar page={"writings"} />
      <section>
        <h1>Writings</h1>
        <p>Here will be a list</p>
      </section>
    </>
  );
};

export default Writings;
