import React from 'react';
// import components
import { Layout, Content } from '../components';

const JoshuaDavid: React.FC = () => (
  <Layout page="joshua">
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
          I was introduced to programming while in grad school and I was hooked.
          Four years later, I am a software engineer currently focused on
          full-stack Javascript web development. I recently developed and
          deployed <a href="https://nautilusdev.com">Nautilus</a>, an Electron
          desktop application built with React and D3 that visualizes a Docker
          Compose instance.
        </p>
        <p>
          Currently, I'm developing for{' '}
          <a href="https://www.winebud.com">winebud</a>, a virtual wine cellar
          and social media web app. (If you're intrigued, shoot me an{' '}
          <a href="mailto:joshua@jdnordstrom.com">email</a> and I'll get you an
          account). I'm translating the legacy PHP code into React and
          containerizing the application with Docker.
        </p>
        <p>
          <a href="/writings/this-website">This website</a> functions as my
          personal portfolio and an archive of musings as I continue growing as
          an engineer--always learning, problem solving, and evolving in accord
          with the ever changing landscape of web technology. See the code
          behind the site{' '}
          <a href="https://github.com/jdnordy/joshuadavidnordstrom">here</a>.
        </p>

        <h2>What I'm Learning</h2>
        <p>Here's a few things that I am currently learning...</p>
        <ul>
          <li>
            <a href="https://nextjs.org/docs/getting-started" target="_blank">
              Next.js
            </a>{' '}
            and the improved UX that accompanies pre-built HTML
          </li>
          <li>
            <a href="https://jamstack.org/" target="_blank">
              JAMStack
            </a>{' '}
            and the benefits serverless web development.
          </li>
          <li>
            <a
              href="https://macwright.org/2020/05/10/spa-fatigue.html"
              target="_blank"
            >
              To use or not use React?
            </a>
          </li>
        </ul>
      </Content>
    </main>
  </Layout>
);

export default JoshuaDavid;
