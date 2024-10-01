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
    <div className="container mx-auto mt-16 xl:px-32">
      <h1 className="mb-1 text-6xl font-bold lg:text-8xl">Theo Wiik</h1>
      {fanOf.map((thing) => (
        <span
          key={thing}
          className="mb-2 mr-2 inline-block rounded-full bg-emerald-300 px-3 py-1 text-sm font-semibold text-gray-800"
        >
          {thing}
        </span>
      ))}
      <p className="mt-2 text-xl">
        Software Engineer based in Gothenburg. Reach me on{' '}
        <a
          href="https://www.linkedin.com/in/theo-wiik/"
          target="_blank"
          className="font-bold text-emerald-300"
        >
          LinkedIn
        </a>
        . Passionate about software. Experienced in Fullstack, but aspires to
        work with systems programming and game development.
      </p>
      {/* Cartridges */}
      <div className="my-8 flex flex-wrap items-center justify-center gap-8">
        {projects.map((project) => (
          <div
            className="flex items-center justify-center"
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
            className="my-32 mb-10"
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
                    className="mb-2 mr-2 inline-block rounded-full bg-emerald-300 px-3 py-1 text-sm font-semibold text-gray-800"
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
                className="mb-2 mr-2 text-blue-400"
              >
                [{link.name}]
              </a>
            ))}

            {/* Body */}
            <Markdown rehypePlugins={[rehypeRaw]} className="mb-16 mt-4">
              {project.description}
            </Markdown>

            <div className="rounded-lg bg-emerald-700 p-8">
              <h2 className="mb-4 text-3xl font-bold">Gallery</h2>

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
