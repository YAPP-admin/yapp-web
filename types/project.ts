export type ProjectField = 'Android' | 'iOS' | 'Web' | 'ML';

export interface Retospect {
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
  retospects: Retospect[];
  deployLink: string | null;
  description: string;
}
