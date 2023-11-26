import { Project } from '../models/project';

const weave: Project = {
  id: 'weave',
  name: 'weave',
  description: `
Steer your line without crashing into each other, work together to get the highest score. A game made in the Game Development Project course at Chalmers/GU. Includes features like a start screen, gameplay interface, and a scoreboard setup using environment variables. Utilizes CSharpier for formatting and supports plugins like Roslynator and EditorConfig.
  `,
  shortDescription:
    'A collaborative line-steering game developed at Chalmers/GU, focusing on teamwork and scoring high.',
  tags: ['Godot', 'Game Development', 'C#', 'CSharpier', 'Roslynator'],
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
