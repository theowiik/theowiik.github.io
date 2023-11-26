'use client';
import Markdown from 'react-markdown';
import Cartridge from './components/cartridge/cartridge';
import { Project } from './models/project';
import godotSharper from './projects/godot-sharper';
import pp from './projects/photon-phighters';
import pitchBlack from './projects/pitch-black';
import rehypeRaw from 'rehype-raw';
import weave from './projects/weave';
import { useState } from 'react';

export default function Home() {
  const projects: Project[] = [weave, pitchBlack, pp, godotSharper];
  const fanOf: string[] = [
    // 'Chalmers',
    // 'Linux',
    // 'Software Engineering and Technology M.Sc.',
  ];

  const [selectedProject, setSelectedProject] = useState<string | undefined>();

  const cartridgeClicked = (id: string) => {
    setSelectedProject(id);
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mt-16 px-8">
      <h1 className="text-6xl lg:text-8xl font-bold">Theo Wiik</h1>
      {fanOf.map((thing) => (
        <span
          key={thing}
          className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {thing}
        </span>
      ))}
      <p className="text-xl mt-2">
        Passionate about software. Experienced in Fullstack, but aspires to work
        with systems programming and game development.
      </p>
      {/* Cartridges */}
      <div className="flex flex-wrap justify-center items-center my-8 gap-8">
        {projects.map((project) => (
          <div
            className="flex justify-center items-center"
            key={project.id}
            onClick={() => cartridgeClicked(project.id)}
          >
            <Cartridge
              image={project?.cartridgeImage}
              link={project.id}
            ></Cartridge>
          </div>
        ))}
      </div>

      <div id="projects">
        {projects.map((project) => (
          <div
            key={project.id}
            className="mb-10 border border-blue-300 rounded-xl p-4"
            id={project.id}
            hidden={selectedProject !== project.id}
          >
            {/* Title */}
            <span className="text-4xl font-bold">{project.name}</span>
            <br />
            <span>{project.shortDescription}</span>

            {/* Tags */}
            {project.tags.length > 0 && (
              <div className="mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                className="text-blue-400 mr-2 mb-2"
              >
                [{link.name}]
              </a>
            ))}

            {/* Body */}
            <Markdown rehypePlugins={[rehypeRaw]} className="mt-4">
              {project.description}
            </Markdown>

            {/* Images */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {project.images.map((image, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1">
                  <img
                    src={image}
                    alt={`Project ${project.name} image ${index + 1}`}
                    className="object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-64"></div>
    </div>
  );
}
