import './app.css';
import { Project } from './model/project';

function App() {
  const projects: Project[] = [
    {
      id: '1',
      name: 'Project A',
      shortDescription: 'A short description of Project A',
      description: 'A detailed description of Project A',
      tags: ['React', 'JavaScript'],
    },
    {
      id: '2',
      name: 'Project B',
      shortDescription: 'A short description of Project B',
      description: 'A detailed description of Project B',
      tags: ['Node', 'Express'],
    },
  ];

  return (
    <div>
      <h1>Project List</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.shortDescription}</p>
            <div>Tags: {project.tags.join(', ')}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
