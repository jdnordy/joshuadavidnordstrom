import React from 'react';
import Link from 'next/link';
// import components
import { Layout, Content } from '../components';

const JoshuaDavid: React.FC = () => {
  const og = {
    ogTitle: 'Home',
    ogDescription:
      'A public archives of creations and writings by a problem solver and perpetual learner.',
    // ogImage: '',
    article: false,
  };
  return (
    <Layout page="joshua" og={og}>
      <main className="joshua">
        <header>
          <img src="/joshua.jpeg" />
          <div>
            <h1>JOSHUA</h1>
            <h1>DAVID</h1>
            <h1>NORDSTROM</h1>
          </div>
        </header>
        <Content content="">
          <p>
            I was introduced to programming while in grad school and I was
            hooked. Four years later, I am a software engineer currently focused
            on full-stack Javascript web development. I recently developed and
            deployed{' '}
            <Link href="/writings/[slug]" as="/writings/nautilus">
              <a className="no_blank">Nautilus</a>
            </Link>
            , an Electron desktop application built with React and D3 that
            visualizes a Docker Compose instance.
          </p>
          <p>
            Currently, I'm developing for{' '}
            <a href="https://www.winebud.com">winebud</a>, a virtual wine cellar
            and social media web app. (If you're intrigued, shoot me an{' '}
            <a href="mailto:joshua@jdnordstrom.com">email</a> and I'll get you
            an account). I'm translating the legacy PHP code into React and
            containerizing the application with Docker.
          </p>
          <p>
            <Link href="/writings/[slug]" as="/writings/this-website">
              <a className="no_blank">This website</a>
            </Link>{' '}
            functions as my personal portfolio and an archive of musings as I
            continue growing as an engineer--always learning, problem solving,
            and evolving in accord with the ever changing landscape of web
            technology. See the code behind the site{' '}
            <a href="https://github.com/jdnordy/joshuadavidnordstrom">here</a>.
          </p>

          <h2>What I'm Learning</h2>
          <p>Here's a few things that I am currently learning...</p>
          <ul>
            <li>
              The{' '}
              <a
                href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)"
                target="_blank"
              >
                LAMP
              </a>{' '}
              tech stack, specifically with PHP.
            </li>
            <li>
              <a href="https://deno.land/" target="_blank">
                Deno
              </a>{' '}
              and whether or not it will replace node. My intial
              thoughts--support for typescript out fo the box is pretty sweet.
            </li>
            <li>
              <a
                href="https://www.xml.com/pub/a/2002/12/18/dive-into-xml.html"
                target="_blank"
              >
                RSS feeds
              </a>{' '}
              and how to incorporate one into this site.
            </li>
          </ul>
        </Content>
      </main>
    </Layout>
  );
};

export default JoshuaDavid;
