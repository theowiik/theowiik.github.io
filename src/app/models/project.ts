export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  tags: string[];
  images: string[];
  links: ProjectLink[];
  cartridgeImage?: string;
}

export interface ProjectLink {
  name: string;
  url: string;
}
