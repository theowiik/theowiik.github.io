import { Project } from '../models/project';

const photonPhighters: Project = {
  id: 'photon-phighters',
  name: 'Photon Phighters',
  description: `
In Photon Phighters, two teams battle to cover the map with light or darkness by firing their flashlight.

Players can also attack their enemy to stop them from coloring the map. The team who has covered the largest area of the map after each round wins.

After each round the losing team gets to choose a power-up which will help them in the next round.
  `,
  shortDescription: 'this is the short description',
  tags: [],
  images: ['projects/photon-phighters/gameplay.png'],
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/weave-game/weave',
    },
    {
      name: 'itch.io',
      url: 'https://theowiik.itch.io/photon-phighter',
    },
  ],
  cartridgeImage: 'projects/photon-phighters/cartridge.png',
};

export default photonPhighters;
