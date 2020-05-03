import React from 'react';

import { Layout } from '../../components';

const Writings: React.FC = () => (
  <Layout page="writings">
    <main>
      <h1>Writings</h1>
      <ul>
        <li>Newest Writing</li>
        <li>Oldest Writing</li>
      </ul>
    </main>
  </Layout>
);

export default Writings;
