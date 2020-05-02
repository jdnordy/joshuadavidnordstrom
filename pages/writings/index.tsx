import React from 'react';

import { Layout } from '../../components';

const Writings: React.FC = () => (
  <Layout page="writings">
    <section>
      <h1>Writings</h1>
      <ul>
        <li>Newest Writing</li>
        <li>Oldest Writing</li>
      </ul>
    </section>
  </Layout>
);

export default Writings;
