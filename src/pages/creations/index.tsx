import { Layout, CreationCard } from '../../components';

import creations from '../../lib/creations.config';

const Works: React.FC = () => {
  const og = {
    ogTitle: 'Creations',
    ogDescription: 'A collection of creations by Joshua David Nordstrom.',
    // ogImage: '',
    article: false,
  };
  return (
    <Layout page="creations" og={og}>
      <main className="creations">
        <div className="title_circle">
          <svg
            id="i-code"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27" />
          </svg>
        </div>
        {creations.map((c, i) => (
          <CreationCard {...c} key={i} />
        ))}
      </main>
    </Layout>
  );
};

export default Works;
