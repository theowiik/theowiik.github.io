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
import ImageGallery from 'react-image-gallery';
import godolors from './projects/godolors';
import './page.css';

export default function Home() {
  const projects: Project[] = [weave, pitchBlack, pp, godotSharper, godolors];
  const fanOf: string[] = ['Fullstack', 'Chalmers M.Sc.'];
  const [selectedProject, setSelectedProject] = useState<string | undefined>();

  const cartridgeClicked = (id: string) => {
    setSelectedProject(id);
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto xl:px-32 mt-16">
      <h1 className="text-6xl lg:text-8xl font-bold mb-1">Theo Wiik</h1>
      {fanOf.map((thing) => (
        <span
          key={thing}
          className="inline-block bg-emerald-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2"
        >
          {thing}
        </span>
      ))}
      <p className="text-xl mt-2">
        Software Engineer based in Gothenburg. Reach me on{' '}
        <a
          href="https://www.linkedin.com/in/theo-wiik/"
          target="_blank"
          className="text-emerald-300 font-bold"
        >
          LinkedIn
        </a>
        . Passionate about software. Experienced in Fullstack, but aspires to
        work with systems programming and game development.
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
            className="mb-10 my-32"
            id={project.id}
            hidden={selectedProject !== project.id}
          >
            {/* Title */}
            <span className="text-5xl font-bold">{project.name}</span>
            <br />
            <span className="font-mono">{project.shortDescription}</span>

            {/* Tags */}
            {project.tags.length > 0 && (
              <div className="mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-emerald-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2"
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
            <Markdown rehypePlugins={[rehypeRaw]} className="mt-4 mb-16">
              {project.description}
            </Markdown>

            <div className="bg-emerald-700 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Gallery</h2>

              <ImageGallery
                items={project.images.map((image) => ({
                  original: image,
                  thumbnail: image,
                }))}
                infinite={true}
                showPlayButton={false}
                showFullscreenButton={false}
                autoPlay={true}
                thumbnailPosition="bottom"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-64"></div>
    </div>
  );
}
