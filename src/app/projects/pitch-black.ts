import { Project } from '../models/project';

const pitchBlack: Project = {
  id: 'pitch-black',
  name: 'PITCH-BLACK',
  description: `
**About the game:**<br/>
In PITCH-BLACK, you find yourself in a dark, mysterious environment. Your mission is to discover hidden enemies using the innovative Rocket2000 technology. This game was developed for the Godot Wild Jam #19.

<br/>

**Gameplay:**<br/>
The gameplay involves navigating through a darkened world, relying on the Rocket2000 to reveal and confront hidden threats.

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/10nakQkVuGc?si=EEQxlkdZsKLO6FxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `,
  shortDescription:
    'A game made for Godot Wild Jam #19, with the theme of "discovery".',
  tags: ['Godot', 'Game Development', 'Game Jam'],
  images: [], // Add paths to images or screenshots of the game
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/weave-game/weave', // Update with the correct GitHub URL for PITCH-BLACK
    },
    {
      name: 'itch.io',
      url: 'https://theowiik.itch.io/pitch-black',
    },
  ],
  cartridgeImage: 'projects/pitch-black/cartridge.png',
};

export default pitchBlack;
