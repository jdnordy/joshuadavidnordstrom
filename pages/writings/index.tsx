import React from "react";

import { App } from "../../components";

const Writings: React.FC = () => (
  <App page="writings">
    <section>
      <h1>Writings</h1>
      <ul>
        <li>Newest Writing</li>
        <li>Oldest Writing</li>
      </ul>
    </section>
  </App>
);

export default Writings;
