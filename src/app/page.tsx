import Markdown from 'react-markdown';
import Cartridge from './components/cartridge/cartridge';
import { Project } from './models/project';
import godotSharper from './projects/godot-sharper';
import pp from './projects/photon-phighters';
import pitchBlack from './projects/pitch-black';
import rehypeRaw from 'rehype-raw';
import weave from './projects/weave';

export default function Home() {
  const projects: Project[] = [weave, pitchBlack, pp, godotSharper];
  const fanOf: string[] = ['Linux', 'C#', 'Godot', 'CI'];

  return (
    <div className="mt-16 px-8">
      <h1 className="text-9xl font-bold">Theo Wiik</h1>
      <p className="text-xl mt-4 mb-8">
        Passionate about software. Experienced in Fullstack, but aspires to work
        with systems programming and game development.
      </p>

      {/* Cartridges */}
      <h2 className="text-4xl font-bold">Projects</h2>

      <div className="flex flex-row p-8 my-4 bg-blue-200 rounded-xl">
        {projects.map((project) => (
          <div className="mr-8 mb-4" key={project.id}>
            <Cartridge image={project?.cartridgeImage}></Cartridge>
          </div>
        ))}
      </div>

      <div className="mb-8">
        {fanOf.map((thing) => (
          <span
            key={thing}
            className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {thing}
          </span>
        ))}
      </div>

      {projects.map((project) => (
        <div key={project.id} className="mb-10 border rounded-xl p-4">
          {/* Title */}
          <h2 className="text-3xl font-bold">{project.name}</h2>

          {/* Tags */}
          {project.tags.length > 0 && (
            <div className="mt-3 mb-4">
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

          {/* Short description */}
          <p className="text-md mt-2">{project.shortDescription}</p>

          <hr className="my-4" />

          {/* Body */}
          <div className="">
            <Markdown rehypePlugins={[rehypeRaw]}>
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
        </div>
      ))}
    </div>
  );
}
