import { Project } from '../models/project';

const weave: Project = {
  id: 'weave',
  name: 'weave',
  description: `
Steer your line without crashing into each other, work together to get the highest score!
The game is heavily inspired by Acthung die Kurve, but with a twist where you work together instead of against each other.

*bold text here*, _italic text here_, and ~strikethrough text here~.

A game made in the Game Development Project course at Chalmers/GU.
  `,
  shortDescription:
    'Steer your line without crashing into each other, work together to get the highest score!',
  tags: [],
  images: [
    '/projects/weave/placeholder.png',
    '/projects/weave/placeholder.png',
    '/projects/weave/placeholder.png',
    '/projects/weave/placeholder.png',
    '/projects/weave/placeholder.png',
  ],
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/weave-game/weave',
    },
  ],
};

export default weave;
