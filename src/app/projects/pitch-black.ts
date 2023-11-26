import { Project } from '../models/project';

const pitchBlack: Project = {
  id: 'pitch-black',
  name: 'PITCH-BLACK',
  description: `
hello

*Gameplay*
<iframe width="560" height="315" src="https://www.youtube.com/embed/10nakQkVuGc?si=EEQxlkdZsKLO6FxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `,
  shortDescription: 'game made for game jam',
  tags: ['Godot', 'Game Development', 'C#', 'CSharpier', 'Roslynator'],
  images: ['/projects/weave/placeholder.png'],
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/weave-game/weave',
    },
    // Add other links if available
  ],
};

export default pitchBlack;
