export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  tags: string[];
  images: string[];
  links: ProjectLink[];
}

export interface ProjectLink {
  name: string;
  url: string;
}
