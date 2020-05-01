import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page!</p>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
};

export default About;
