import { Project } from '../models/project';

const weave: Project = {
  id: 'weave',
  name: 'weave',
  description: `
**About the game:**<br/>
Steer your line without crashing into each other, working together to achieve the highest score. Developed during the Game Development Project course at Chalmers/GU.

<br/>

**Contributions:**<br/>
In this project, my contributions included coding, creating music, developing the scoreboard system, providing knowledge in Godot, and managing CI.

<br/>

**Gameplay:**<br/>
The game challenges players to navigate lines through dynamic environments, emphasizing coordination and teamwork for high scoring.

<br/>

**Gameplay:**<br/>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/Fw0T2zQHsvo?si=_OK8h9soOaqvfOgD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `,
  shortDescription:
    'A collaborative line-steering game developed at Chalmers/GU, focusing on teamwork and high scores.',
  tags: ['C#', 'Godot', 'Music', 'Game Development', 'Roslynator'],
  images: [], // Add paths to images or screenshots of the game
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/weave-game/weave',
    },
    // Additional links can be added here
  ],
  cartridgeImage: 'projects/weave/logo.png',
};

export default weave;
