---
title: 'The Creation of Nautilus'
coverImage: ''
date: '2020-05-24'
author: Joshua David Nordstrom
---

[Nautilus](https://nautilusdev.com) is a Docker dev tool that visualizes [Compose](https://docs.docker.com/compose/) instances showing important data about each service such as ports, volumes and bind mounts. It's an Electron desktop application built with React, Typescript and D3.

The Nautilus team deployed the application on April 17th and we received great feedback from the Docker community. Our product hit top 10 on Hacker News at launch date and was mentioned on Google's Kubernetes Podcast ([episode 99](https://kubernetespodcast.com/episode/099-kpt/)) as hot news related to microservices.

## How Nautilus Came to Be

As a software engineer always seeking growth, I had multiple dev friends encourage me to build something. I researched what to build and if it would be possible to create with a team of other bright engineers. I discovered OS Labs, a nonprofit tech accelerator, through which I met the Nautilus team--Danny, Michael, Aris and Tyler.

As we discussed what excited us about the current web development landscape, we discovered a shared interest in DevOps, specifically containerization and container orchestration. After research and interaction with the Docker community, we heard an expressed desire for a Compose instance visualizer.

We were excited by the idea and got to work.

## The Goals for Nautilus

From the very beginning, we approached Nautilus with three main goals.

1. **Nautilus should be interactive and prioritize the most important information about each microservice by displaying it visually.** To achieve this, we chose to work with [D3.js](https://d3js.org/), a powerful tool for data visualization.

2. **Nautilus should protect the proprietary data of all users wanting to visualize their compose instance.** This meant that _uploading_ a docker-compose.yml file to a web server was not an option. Fortunately, we found [Electron](https://www.electronjs.org/) to be the perfect solution. By creating a desktop application, developers could _open_ their compose file rather than upload.

3. **Nautilus should have a code base built for scale.** We knew that if Nautilus was successful and well received (as it indeed turned out to be), there would be a high possibility that OS Labs would bring in other engineers to work on Nautilus. Thus, we wanted to guard against technical debt from the beginning rather than playing catch-up down the road. For this purpose, we incorporated [Typescript](https://www.typescriptlang.org/). While it meant a bit of on-boarding and more written code, the benefits of static type checking leading to less errors and more maintainable code won us over.

## Technical Challenges along The Way

Unexpected technical challenges are par for the course when developing; Nautilus was no exception. The first major technical challenge faced was that by virtue of their relationship to the DOM, React and D3 don't play well together.

D3 interfaces with DOM in a similar way to jQuery--you select DOM elements, which are linked linked with a D3 object and then can use the D3 api to manipulate them. React interacts with the DOM through objects that represent the actual DOM (see [the VDOM](https://reactjs.org/docs/faq-internals.html) and [React fiber](https://github.com/acdlite/react-fiber-architecture)).

Our solution to working with D3 in React was to run all D3 DOM manipulations in the useEffect function which fires after React has updated the actual DOM. This is necessary because if the D3 logical ran in the functional component prior to the return statement, D3 would attempt to manipulate DOM elements that don't exist yet.

This ties into how component lifecycles work in React. To oversimplify, the actual DOM doesn't update until a React function returns a React Element. Thus, placing all D3 functions in useEffect allow them to run after the component is actually rendered on the DOM.

For example, here's an overview of the flow of rendering when Nautilus renders containers:

```
|--> file gets uploaded
  |--> react component renders d3 container div
    |--> react fires useEffect function
      |--> d3 selects container div
	      |--> d3 renders svgs within container div.
```

While this solved one problem, it lead to another--persisting the D3 simulation across React state changes.

We used the D3 force graph simulation to visualize the Compose instance. We added two _views_ for the services--a [depends on](https://docs.docker.com/compose/compose-file/#depends_on) view and a [networks](https://docs.docker.com/compose/compose-file/#networks) view.

The `depends_on` property controls the order in which Compose will start each microservice. If a service such as MyApp depends on another such as AppDb, then Compose will wait to start the MyApp container until the AppDB container is running.

The `network` property controls what network each service should join. When in a shared network, the services can access each other by the service name on the specified `CONTAINER_PORT`. By default, Compose puts all services in one network. However, it is common to have multiple networks, such as a backend network and frontend network in a Compose application.

In order to have Nautilus visualize these relationships, the application needed to have a smooth transition from the depends on view to the networks view. We wanted the containers to glide into their new position, rather than removed from the DOM and then re-rendered in their new position.

The issue here is that the variable pointing to the D3 simulation object needed to be outside the useEffect functions. We used two useEffect functions--one controlling the depends on view and on controlling the networks view--and both needed the simulation variable within their scope. But if the simulation variable were to be initialized by React, it would be re-intialized on state changes.

We came up with the solution to create a [global namespace](https://www.codeproject.com/Articles/829254/JavaScript-Namespace) that existed "outside" of React containing the d3 nodes, links, and force graph objects. Nautilus calls this d3State. The only time React interacted with d3State was on a file upload where it "set" the d3state. This setting restarts the d3 simulation with the new node values based on the parsed docker-compose.yml file.

To synthesize what's happening here, D3 controls the simulation data and all DOM elements associated with it. React controls what the simulation should be showing by telling D3 what to do with the simulation.

Take for example toggling ports on in Nautilus by clicking the ports button.

![ports toggle on](/nautilus_ports.gif)

Here's what's happening under the hood:

```
|--> User clicks ports button
  |--> React state updates toggling ports on
    |--> useEffect containing d3 port logic fires
        (this is React telling d3 to show the ports)
      |--> d3 selects container nodes from the DOM
        |--> d3 appends port svgs to containers based on objects in d3State
```

This way, React and D3 work together to visualize the data instead of fighting for control over the DOM.

## What I Learned from Nautilus

**Developing an application from scratch is hard.** There is a lot that goes into it--designing the UI, always thinking about the end user, setting up the dev environment, building out a code base, figuring out deployment solutions, etc. It's a lot of work and each decision is extra weighty because it will affect the trajectory of the application.

**Polishing an application for production, even harder.** The Nautilus team built out the MVP fairly quickly, despite the difficulty of building something from scratch. Much of our work was dedicated to that last 20% that makes an application production ready.

It's slow and tedious work where significant changes aren't happening to the application. Finding edge cases, optimizing the code base, interacting with real users, and making small tweaks to UI are necessary parts of the process.

## The Future of Nautilus

The Nautilus founders will continue to maintain the application while seeking other opportunities to build cool stuff. We feel that the application has achieved what we wanted and are excited by exploring other opportunities.

Nautilus will continue to grow. OS Labs has offered to bring in another team of software engineers based in NY to continue working on the application. I'm excited about the posssibility that within the next couple of months Nautilus 2.0 should become available for download.

Stay connected by joining our [slack](https://app.slack.com/client/T0119QAGYP5), following the Nautilus repo on [github](https://github.com/open-source-labs/nautilus), or checking out the [website](https://nautilusdev.com).
