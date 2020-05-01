import React from "react";
// import components
import { Navbar } from "../components";

const HomePage: React.FC = () => {
  return (
    <div className="main">
      <Navbar page={"joshuadavid"} />
      <section>
        <h1>Welcome to Next.js!</h1>
      </section>
    </div>
  );
};

export default HomePage;
