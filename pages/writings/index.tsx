import React from 'react';
// components
import { Layout } from '../../components';
// api functions
import { getAllWritings } from '../../lib/api';

type Props = {
  writings: Array<{}>;
};

const Writings: React.FC<Props> = ({ writings }) => (
  <Layout page="writings">
    <main className="writings">
      <div className="title_circle">
        <svg
          id="i-compose"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="none"
          stroke="currentcolor"
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="2"
        >
          <path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z" />
        </svg>
      </div>
      <ul>
        <li>Newest Writing</li>
        <li>Oldest Writing</li>
      </ul>
    </main>
  </Layout>
);

export async function getStaticProps() {
  const fields = ['title', 'author', 'date', 'id'];
  return {
    props: {
      writings: getAllWritings(fields),
    },
  };
}

export default Writings;
