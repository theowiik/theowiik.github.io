import { Project } from '../models/project';

const godotSharper: Project = {
  id: 'godot-sharper',
  name: 'GodotSharper',
  description: `
<h1 className="text-3xl font-bold">Overview</h1>

GodotSharper is a utility library designed to enhance and simplify the development process in Godot C# projects. It provides a range of tools and functionalities to streamline various aspects of game development.

<br/>

<h1 className="text-3xl font-bold">Features</h1>

The library includes features like autowiring, node instantiation, node retrieval, and various list and scene utilities, each crafted to optimize the development workflow in Godot. Current efforts focus on the Autowiring feature, with more enhancements planned for future updates.
  `,
  shortDescription:
    'A utility library for Godot C# projects, offering a range of tools for game development enhancements.',
  tags: ['Godot', 'C#', 'Game Development', 'Utility Library'],
  images: ['projects/godot-sharper/godot-sharper.png'],
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/theowiik/GodotSharper',
    },
  ],
  cartridgeImage: 'projects/godot-sharper/godot-sharper.png',
};

export default godotSharper;
