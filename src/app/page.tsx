import { Project } from './models/project';
import pp from './data/photon-phighters';
import weave from './data/weave';

export default function Home() {
  const projects: Project[] = [pp, weave];
  const fanOf: string[] = ['Linux', 'C#', 'Godot', 'CI'];

  return (
    <div className="mt-16">
      <p className="text-9xl font-bold">Theo Wiik</p>
      <p className='text-xl'>
        Passionate about software. Experienced in Fullstack, but aspires to work with systems programming and game development.
      </p>

      {fanOf.map((thing) => (
        <p key={thing}>{thing}</p>
      ))}

      {projects.map((project) => (
        <div key={project.id}>
          <h1>{project.name}</h1>
          <h1>{project.description}</h1>
        </div>
      ))}
    </div>
  );
}
