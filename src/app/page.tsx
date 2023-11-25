import { Project } from './models/project';
import pp from './data/photon-phighters';
import weave from './data/weave';

export default function Home() {
  const projects: Project[] = [pp, weave];

  return (
    <main>
      <p>hello world</p>

      {projects.map((project) => (
        <div key={project.id}>
          <h1>{project.name}</h1>
          <h1>{project.description}</h1>
        </div>
      ))}
    </main>
  );
}
