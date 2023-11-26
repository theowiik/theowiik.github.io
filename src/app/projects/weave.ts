import { Project } from '../models/project';

const weave: Project = {
  id: 'weave',
  name: 'weave',
  description: `

**About the game:** Steer your line without crashing into each other, work together to get the highest score. A game made in the Game Development Project course at Chalmers/GU.

**Contributions:** Coding, Music, Scoreboard System, Godot Knowledge, CI

<iframe width="50%" height="315" src="https://www.youtube.com/embed/Fw0T2zQHsvo?si=7EsnmMX4tAbqcEsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  `,
  shortDescription:
    'A collaborative line-steering game developed at Chalmers/GU, focusing on teamwork and scoring high.',
  tags: ['C#', 'Godot', 'Music', 'Game Development', 'Roslynator'],
  images: [],
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/weave-game/weave',
    },
    // Add other links if available
  ],
  cartridgeImage: 'projects/weave/logo.png',
};

export default weave;
