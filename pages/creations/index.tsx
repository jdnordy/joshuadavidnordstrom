import React from 'react';

import { Layout, CreationCard } from '../../components';

import creations from './creations.config';

const Works: React.FC = () => (
  <Layout page="creations">
    <main className="creations">
      <h1>CREATIONS</h1>
      {creations.map((c, i) => (
        <CreationCard {...c} key={i} />
      ))}
    </main>
  </Layout>
);

export default Works;
