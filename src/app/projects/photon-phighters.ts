import { Project } from '../models/project';

const photonPhighters: Project = {
  id: 'photon-phighters',
  name: 'Photon Phighters',
  description: `
Epic game
  `,
  shortDescription: 'this is the short description',
  tags: [],
  images: ['projects/photon-phighters/gameplay.png'],
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/weave-game/weave',
    },
  ],
  cartridgeImage: 'projects/photon-phighters/cartridge.png',
};

export default photonPhighters;
