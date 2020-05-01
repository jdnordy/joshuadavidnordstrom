import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default HomePage;
