import { Project } from '../models/project';

const photonPhighters: Project = {
  id: 'photon-phighters',
  name: 'Photon Phighters',
  description: `
<h1 className="text-3xl font-bold">About Photon Phighters</h1>

In this dynamic game, two teams engage in a unique battle of light versus darkness. Each team uses flashlights to either cover the map with light or engulf it in shadow. The gameplay is not just about territory control; players can also attack their opponents to thwart their efforts in coloring the map. After each round, the trailing team gets a chance to select a power-up, turning the tide in the next round. This strategic element adds depth and excitement to each match.

<br/>

<h1 className="text-3xl font-bold">Gameplay mechanics</h1>

Strategic and fast-paced, the game challenges teams to skillfully use their flashlights, balancing between aggressive play and territorial control. Power-ups after each round add a layer of strategy, making every round unpredictable and thrilling.
  `,
  shortDescription:
    'A strategic game of light and darkness, where teams battle in an territory control match. March Game Jam 23.',
  tags: ['Godot', 'Game Development', 'Team Strategy', 'March Game Jam'],
  images: ['projects/photon-phighters/gameplay.png'],
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/theowiik/photon-phighters',
    },
    {
      name: 'itch.io',
      url: 'https://theowiik.itch.io/photon-phighter',
    },
  ],
  cartridgeImage: 'projects/photon-phighters/cartridge.png',
};

export default photonPhighters;
