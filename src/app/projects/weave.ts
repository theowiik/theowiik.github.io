import { Project } from '../models/project';

const weave: Project = {
  id: 'weave',
  name: 'weave',
  description: `
<h1 className="text-3xl font-bold">About the game</h1>

Steer your line without crashing into each other, working together to achieve the highest score. Developed during the Game Development Project course at Chalmers/GU.

<br/>

<h1 className="text-3xl font-bold">Contributions</h1>

In this project, my contributions included coding, creating music, developing the scoreboard system, providing knowledge in Godot, and managing CI.

<br/>

<h1 className="text-3xl font-bold">Gameplay</h1>

The game challenges players to navigate lines through dynamic environments, emphasizing coordination and teamwork for high scoring.

<br/>

<iframe width="100%" height="400" src="https://www.youtube.com/embed/Fw0T2zQHsvo?si=_OK8h9soOaqvfOgD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `,
  shortDescription:
    'A collaborative line-steering game developed at Chalmers/GU, focusing on teamwork and high scores.',
  tags: ['C#', 'Godot', 'Music', 'Game Development', 'Roslynator'],
  images: [
    'projects/weave/exhibition1.jpeg',
    'projects/weave/exhibition3.jpeg',
    'projects/weave/exhibition2.jpeg',
    'projects/weave/start-screen.png',
    'projects/weave/gameplay1.png',
    'projects/weave/game-over.png',
  ],
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/weave-game/weave',
    },
  ],
  cartridgeImage: 'projects/weave/logo.png',
};

export default weave;
