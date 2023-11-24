import { Project } from './models/project';

export default function Home() {
  const projects: Project[] = [
    {
      id: 1,
      name: 'EcoSolutions',
      shortDescription: 'Eco-friendly product solutions',
      description:
        'Developing sustainable and eco-friendly products for a greener future.',
      tags: ['environment', 'sustainability', 'green'],
    },
    {
      id: 2,
      name: 'TechTrends',
      shortDescription: 'Latest in technology',
      description:
        'A project dedicated to exploring and implementing the latest technological trends.',
      tags: ['technology', 'innovation', 'future'],
    },
    {
      id: 3,
      name: 'HealthPlus',
      shortDescription: 'Healthcare innovations',
      description:
        'Focused on creating innovative solutions to modern healthcare challenges.',
      tags: ['health', 'innovation', 'well-being'],
    },
  ];

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
