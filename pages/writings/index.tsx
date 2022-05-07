// components
import { Layout } from '../../components';
import Link from 'next/link';
// api functions
import { getAllWritings, Items } from '../../lib/api';
import { GetStaticProps } from 'next';

type Props = {
  writings: Array<Items>;
};

const Writings: React.FC<Props> = ({ writings }) => {
  const og = {
    ogTitle: 'Writings',
    ogDescription: 'A collection of writings by Joshua David Nordstrom.',
    // ogImage: '',
    article: false,
  };

  return (
    <Layout page="writings" og={og}>
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z" />
          </svg>
        </div>
        <ol reversed>
          {writings
            .sort(
              (a, b) =>
                Date.parse(b.date as string) - Date.parse(a.date as string),
            )
            .map((w, i) => (
              <Link href="/writings/[slug]" as={`/writings/${w.slug}`} key={i}>
                <a className="writing_link">
                  <li>
                    <div>
                      <span>{w.title}</span>
                      <i>{w.date}</i>
                    </div>
                  </li>
                </a>
              </Link>
            ))}
        </ol>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fields = ['title', 'author', 'date', 'slug'];
  return {
    props: {
      writings: getAllWritings(fields),
    },
  };
};

export default Writings;
