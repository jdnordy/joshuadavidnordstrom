type CreationsList = Array<{
  title: string;
  subtitle: string;
  image: string;
  description: string;
  link: string;
}>;

const creationsList: CreationsList = [
  {
    title: 'Nautilus',
    subtitle: 'A Docker Compose Charting Tool',
    image: '/nautilus_logo.jpg',
    link: 'https://nautilusdev.com/',
    description:
      'An interactive D3 visualizing tool that dynamically renders essential Docker Compose properties onto an Electron GUI, built to reduce cognitive load and simplify the development environment for engineers.',
  },
  {
    title: 'SnapDesk',
    subtitle: 'Foster Collaboration among Teams',
    image: '/snapdesk_logo_c.svg',
    link: 'https://github.com/Just5Coders/snapdesk_1',
    description:
      'An interactive D3 visualizing tool that dynamically renders essential Docker Compose properties onto an Electron GUI, built to reduce cognitive load and simplify the development environment for engineers.',
  },
];

export default creationsList;
