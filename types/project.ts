export type ProjectField = 'Android' | 'iOS' | 'Web' | 'ML';

export interface Retrospect {
  name: string;
  field: string;
  content: string;
}

export interface Project {
  title: string;
  thumbnail: string;
  content: string;
  tags: string[];
  team: string[];
  field: ProjectField[];
  generation: number;
  program: string[] | null;
  retrospects: Retrospect[];
  deployLink: string | null;
  description: string;
}

export interface ProjectUIModel extends Project {
  url: string;
}
