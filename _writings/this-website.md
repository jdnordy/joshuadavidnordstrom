---
title: 'This Website'
coverImage: ''
date: '2020-05-13'
author: Joshua David Nordstrom
---

Job hunting during a global pandemic is not easy. I send out 5 applications a day with a custom cover letter and hear back on 1 out of 10, usually a rejection, not even a phone screen. Available, qualified candidates are on the rise and hiring freezes abound.

But amidst all this craziness, the last thing I wanted to avoid distraction. I needed a project to continue growing as an engineer and doing what I love--coding.

I recently spoke with a friend from undergrad, Jared Gorski. We talked about web development, his work at Liferay, my work on [Nautilus](https://nautilusdev.com) (a dev tool that visualizes Docker Compose instances). He also started sharing with my how he recently updated his [website](https://jaredgorski.org/) to improve speed. After our conversation, I checked it out and was inspired. I had already been thinking about SSR (server side rendering) and how to leverage it. Thus, the mission to build this website was born.

## Next.js and React

![Next.js Logo](/white-nextjs.png)

This website is built with [Next.js](https://nextjs.org/), a complete solution to pre-rendering React for lightning fast serving of static webpages. Next.js comes ready for production with the option of pre-rendering your React website at build time or running a Next.js server that renders the HTML server side on each request. The former being significantly faster and preferred to maximize the benefits of Next.js.

React has a definite sweet spot of use cases. When building an application that relies heavily on dynamic data with each view changing based on the current user, React shines. The ability to write modular, functional, and declarative components is unparalleled in other frameworks, hence the popularity for React over others. But, the trend towards treating React as a silver bullet for modern development is a bit off. A website such as this one which provides the same view for all users doesn't need to push the _building_ of the HTML to the client; enter Next.js.

## Server-Side Rendering - An Old Tech Reskinned

The concept of SSR is not new when it comes to web development; Django, Flask/Python, PHP are all about server side rendering. The client requests a webpage, server queries database, server renders HTML based on data and then serves the HTML to the client along with statics assets on subsequent requests. I recently started working on a web application called [winebud](https://www.winebud.com/). It's built with PHP and the folder structure is strikingly similar to Next.js. PHP is server side rendering in it's prime.

So, what's the big deal about Next.js?

Next.js offers the ability to write React while leveraging the benefits of SSR. While it is true that it shines when building an SPA with dynamic data, React is also great because it's just JavaScipt--functional and declarative. It allows for clean code; enforces one way data flow; and enables the creation of reusable components. I could go on, but if you've worked with React you get it. It'd be a bummer to say bye-bye to React when it came time to develop a static website.

With Next.js, you get to build out your static website by writing React. There is some on-boarding that comes with how Next.js handles pages and learning new APIs for fetching dynamic data. But, at the core, it's just React. And so, by extensions, it's just JavaScript.

All that being said, here are my thoughts about the good and the bad.

## The Good

### 1. Time to first paint is lightning fast

Duh. This is the point of per-rendered HTML. Seriously, try it out. Click around my website and notice how quickly the view is rendered.

As previously mentioned, Next.js builds the HTML from your React and then deploys the static HTML into production. Thus, no need to wait for React to build the webpage for you client side; it's already good to go. Next.js even allows for fetching of dynamic data at build time. While this doesn't work great for data this constantly updating, it works great for a site like this. Jdnordstrom really only gets new data when I add a new writing. So, it's easy to have Next.js rebuild and redeploy the all HTML with the updated content.

### 2. The dev environment requires minimal configuration

No need to mess with Webpack or Babel or server setup. Next.js comes with all of this pre-built. It even comes Typescript ready, which if you haven't used Typescript and benefited from the glories of static type checking... it's the best thing ever and if you aren't using it yet, you should be. I worked with it for the first time on Nautilus and I'm a convert and you should be as well.

Simply yarn (or npm if you're still into that) install next.js create a pages directory, add an index.tsx file and you're on your way.

### 3. Deployment with Vercel is simple and JAMStack compliant

[JAMStack](https://jamstack.org/) or JavaScript, APIs and Markdown is a philosophy about web development. The idea is that your website is only comprised of these three techs. This is achieved by serving all content from a CDN, serving only static assets and leveraging available APIs to do the heavy lifting work a server would normally do.

Vercel, created by the makers of Next.js, functions as a light weight CI/CD tool that webhooks into your GitHub repo. It builds and deploys the website to a production like environment on all PRs. And then deploys into production on merges into the default branch. It's integrated with Next.js which makes the configuration minimal and a simple solution.

## The Bad

### 1. It's still a React app

What I mean by this is that all of the React files still accompany a Next.js website and these files are comparatively large to the rest of the application. By itself, React weighs in around [106kb](https://reactjs.org/blog/2017/09/26/react-v16.0.html#reduced-file-size). This is large by comparison--the HTML for the home page here is a measly 6.26kb and uses minimal CSS and JavaScript (not accounting for the React ecosystem). What this means is that this website would be significantly faster without React and Next.js.

Most static websites don't need React running in the background. While this does come with certain benefits, it still feels a bit too heavy for the simplicity of many static webpages (this one being a prime example).

### 2. Time to interactivity still "slow"

I want to caveat this by saying that "slow" is a relative term; we're talking about milliseconds here. But in web development, the faster the website the better UX, which means higher returning user rater, which means greater profit.

The time to first paint is lightning fast because of the pre-rendering powers of Next.js. Yet as mentioned in the point above, the JavaScript file is large. This means the time to webpage responsiveness is the same speed as a React site. While the time to first paint is a huge benefit, Next.js only goes halfway in boosting the speed of your webpage.

And we're back to the fact that writing in plain JavaScript, HTML and CSS will be the fastest when it comes to a static site. This leads to a question of whether or not these negatives out weight the benefits of developing in React. Vanilla web development is a lot of copy and pasting. React improves the dev environment so much so that it's a worthy trade-off.

## A Quick Note about Design

Minimal and old school internet modernized are the design goals for this website. In order to achieve this, the two step process of designing and then implementing were a growth inducing challenge.

Graphic design is a whole field of expertise that I've only dabbled in as an amateur. I usually design by starting out with a vision and then changing it based on what looks good once I see it. But, envisioning and then implementing in CSS at the same time is laborious. Ideally, I'd learn adobe one day.

CSS is easy to learn, but difficult to master. In the past, I've turned to styling libraries such as Bootstrap and Material UI to make CSS less scary. But, I felt these libraries stunting my growth as a frontend developer. This website is all home-brew CSS. Here's what I learned: there's a lot that can be achieved with CSS sans JavaScript and the transition property is hard.

## Final Thoughts

This website was a journey in exploring the new (or rather the reskinned) technology of server-side rendering and a study on static website optimization. I learned a lot as a software engineer, had fun, and am proud of the end product. Programming excites me. I am constantly iterating upon projects and expanding my sphere of knowledge. [jdnordstrom.com](https://jdnordstrom.com) will continue to evolve as I evolve as a software engineer.

<!--stackedit_data:
eyJoaXN0b3J5IjpbOTA3NjcwMTE5XX0=
-->
