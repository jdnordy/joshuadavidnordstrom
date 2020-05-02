import React from "react";
// import components
import { Leftnav } from "../components";
import { Rightnav } from "../components";

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <Leftnav page={"joshuadavid"} />
      <section>
        <h1>joshua david nordstrom</h1>
      </section>
      <Rightnav />
    </div>
  );
};

export default HomePage;
