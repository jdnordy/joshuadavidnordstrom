type CreationsList = Array<{
  title: string;
  subtitle: string;
  image: string;
  description: string;
  link: string | null;
  internalLink: string | null;
}>;

const creationsList: CreationsList = [
  {
    title: 'Nautilus',
    subtitle: 'A Docker Compose Charting Tool',
    image: '/nautilus_logo.png',
    link: null,
    internalLink: '/writings/nautilus',
    description:
      'An interactive D3 visualizing tool that dynamically renders essential Docker Compose properties onto an Electron GUI, built to reduce cognitive load and simplify the development environment for engineers.',
  },
  {
    title: 'SnapDesk',
    subtitle: 'Foster Collaboration among Teams',
    image: '/snapdesk_logo_c.svg',
    link: 'https://github.com/team-snapdesk/snapdesk',
    internalLink: null,
    description:
      'Conveniently ask co-workers for help by posting tickets with a snap rating and topic to the SnapDesk help board. Fellow workers can accept tickets and recieve snaps for helping out.',
  },
  {
    title: 'Taco Finder',
    subtitle: 'Hungry for Tacos?',
    image: '/taco_finder.gif',
    link: 'https://github.com/jdnordy/taco-finder',
    internalLink: null,
    description:
      "This chrome extension I developed with some dev friends. It's the first creation I built from scratch and although simple, I learned much about collaboration, UX focused design and quering APIs (we used Yelp's for this creation).",
  },
];

export default creationsList;
