---
title: 'This Website'
coverImage: ''
date: '2020-05-13'
author: Joshua David Nordstrom
---

Job hunting during a global pandemic is not easy. I send out around 5 applications a day with a custom cover letter and hear back on 1 out of 10, usually a rejection, not even a phone screen. Yes, there is an increase in qualified candidate, people are getting laid off, many companies are no longer expanding, and I get it; but it's still a bummer.

But, amidst all this craziness, the last thing I wanted was to be distracted from my passion--programming. I needed a project to continue growing as an engineer and be faced with problems that need solving.

I recently spoke with a friend from undergrad, Jared Gorski. We talked about web development, his work at Liferay (he's doing some pretty cool stuff with their [DXP cloud](https://www.liferay.com/products/dxp-cloud)), my work on [Nautilus](https://nautilusdev.com) (a dev tool that visualizes Docker Compose instances). He also started sharing with my how he recently updated his [website](https://jaredgorski.org/), updated to improve speed. After our conversation, I checked it out and I was inspired. Most of my work has been on SPA working with React, but the idea of pre-built HTML to serve content quickly got me thinking. I had already been thinking about SSR (server side rendering) and how to leverage it. Thus, the mission to build this website was born.

## Next.js and React

![Next.js Logo](/white-nextjs.png)

This website is built with [Next.js](https://nextjs.org/), a complete solution to pre-rendering React for lightning fast serving of static webpages. Next.js comes ready for production with the option of pre-rendering your React website at build time or running a Next.js server that renders the HTML server side on each request. The former being significantly faster and the best the way to maximize the benefits of Next.js.

React has a definite sweet spot of use cases. When building an application that relies heavily on dynamic data with each view changing based on the current user, React shines. The ability to write modular, functional, and declarative components is unparalleled in other frameworks, hence the popularity for React over others. But, the trend towards treating React as a silver bullet for modern development is a bit off. A website such as this one which provide the same view for all users doesn't need to push the _building_ of the HTML to the client; enter Next.js.

## Server-Side Rendering - The Ghost of Web Development Past

The concept of SSR is not new when it comes to web development; Django, Flask/Python, PHP are all about server side rendering. The client makes a request for a webpage, the server queries database for data, server renders the HTML based on data and then serves the HTML to the client along with statics assets such as JavaScript, CSS and media based on subsequent requests. I recently started working on a web application called [winebud](https://www.winebud.com/). It's built with PHP and the folder structure is strikingly similar to Next.js. PHP is just server side rendering in it's prime.

So, what's the big deal about Next.js?

Next.js offers the ability to write React while leveraging the benefits of SSR. While it is true that it shines when building an SPA with dynamic data, React is great because it's just functional, declarative JavaScript. It allows for clean code; enforces one way data flow; and enables the creation of reusable components. I could go on, but if you've worked with React you get it. It'd be a bummer to say bye-bye to React when it came time to develop a static website.

> React is great because it's just functional, declarative JavaScript.

With Next.js, you get to build out your static website by writing React. There is some on-boarding that comes with how Next.js handles pages and learning new APIs for fetching dynamic data. But, at the core, it's just React. And so, by extensions, it's just JavaScript.

All that being said, here are my thoughts about the good and the bad.

## The Good

### 1. Time to first paint is lightning fast

Duh. This is the point of per-rendered HTML. Seriously, try it out. Click around my website and notice how quickly the view is rendered.

As previously mentioned, Next.js builds the HTML from you React and then deploys the static HTML into production. Thus, no need to wait for React to build the webpage for you client side; it's already good to go. Next.js even allows for fetching of dynamic data at build time. While this doesn't work great for data this constantly updating, it works great for a site like this. Jdnordstrom really only gets new data when I add a new writing. So, it's easy to have Next.js rebuild and redeploy the all HTML with the updated content.

### 2. The dev environment requires minimal configuration

No need to mess with Webpack or Babel or server setup. Next.js comes with all of this pre-built. It even comes Typescript ready, which if you haven't used Typescript... it's the best thing ever and if you aren't using it yet, you should be because it's really the best... seriously... I worked with it for the first time on Nautilus and I'm a convert and you should be as well.

Simply yarn (or npm if you're still into that) install next.js create a pages directory, add an index.tsx file (or .jsx if you're still using vanilla JavaScript even after my rant), and you're on your way.

### 3. Deployment with Vercel is simple and JAMStack compliant

[JAMStack](https://jamstack.org/) is a philosophy about web development. It stands for JavaScript, APIs and Markdown. The idea is that your website is only comprised of these three techs. This is achieved by serving all content from a CDN, serving only static assets and leveraging available APIs to do the heavy lifting work a server would normally do.

Vercel, created by the makers of Next.js, functions as a light weight CI/CD tool that webhooks into your GitHub repo. It builds and deploys the website to a production like environment on all PRs. And then deploys into production on merges into the default branch. It's integrated with Next.js which makes the configuration minimal and a great solution.

## The Bad

### 1. No persistent state across the website

While this might be obvious given that Next.js is not an SPA, I had to reconcile with it in development. 

### 2. Forced to write _"bad"_ React for consistent layout across pages

### 3. 

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjM0Nzk5NTc3LC05MDY1MzUyOTMsLTIxNT
YyNDkxOSwtNTM3MzQzMjcwXX0=
-->