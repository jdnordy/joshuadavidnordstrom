import React from 'react';
// import components
import { Layout, Content } from '../components';

const JoshuaDavid: React.FC = () => (
  <Layout page="joshua">
    <main className="joshua">
      <header>
        <img src="/joshua-bw.jpg" />
        <div>
          <h1>JOSHUA</h1>
          <h1>DAVID</h1>
          <h1>NORDSTROM</h1>
        </div>
      </header>
      <Content content="">
        <p>
          In 2016, I was introduced to programming while in seminary and I was
          hooked. Four years later, I am a software engineer currently focused
          on full-stack Javascript web development. I love what I do because I
          am a problem solver at heart and a perpetual learner.
        </p>
        <blockquote>
          <p>
            I love what I do because I am a problem solver at heart and a
            perpetual learner.
          </p>
        </blockquote>
        <p>
          When faced with a problem, I am excited and my brain starts running,
          speeding down every path trying to find a solution. I find it hard to
          rest with an unresolved challenge laid before me. My brain will even
          keep working while I sleep. It has happened on numerous occasions
          where I will fall asleep with a lingering problem and wake up with a
          solution. Or I'll simply dig in, research, and implement until I have
          arrived at the optimal solution. And then, I get that buzz, that
          feeling of accomplishment, that feeling of bringing something new to
          life and I keep coming back for more.
        </p>
        <p>
          Expanding my knowledge has always been core to what defines me. From
          plumbing the depth of the Christian faith to studying and discussing
          the classics during my{' '}
          <a href="https://www.biola.edu/torrey">honors program</a> in
          university, I've been driven by a hunger to learn. Software
          engineering is the culmination of this drive. I like to say that I've
          always been a one at heart--researching, implmenting, assessing,
          repeat. Now, it's just activated.
        </p>

        <p>
          This website functions as my personal porfolio and an archive of
          musings as I continue to the journey of a software engineer--always
          learning and problem solving. The landscape of web development is ever
          evolving and so the areas to explore are endless.
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
