import { Project } from '../models/project';

const godolors: Project = {
  id: 'godolors',
  name: 'godolors',
  description: `
godolors is small project that generates a color palette for the Godot color constants, something that I felt was missing from the official documentation. The cheat sheet is added to the Godot documentation as a pull request, and is available in the official documentation.
  `,
  shortDescription: 'Color palette for Godot color constants',
  tags: ['Open Source Contribution'],
  images: ['projects/godolors/colors-v1.png'],
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/theowiik/godolors',
    },
    {
      name: 'Godot Color Docs',
      url: 'https://docs.godotengine.org/en/stable/classes/class_color.html',
    },
  ],
  cartridgeImage: 'projects/godolors/colors-v1.png',
};

export default godolors;
