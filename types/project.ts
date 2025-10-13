export type ProjectField = 'ALL' | 'Android' | 'iOS' | 'Web' | 'ML';

export const TAB_LABELS: Record<string, string> = {
  ALL: '전체',
  Android: '안드로이드',
  iOS: 'iOS',
  Web: '웹',
  ML: 'ML',
};

export interface Retrospect {
  name: string;
  field: string;
  content: string;
}

export interface Project {
  name: string;
  title: string;
  thumbnail: string;
  content: string | string[];
  tags: string[];
  team: string[];
  field: ProjectField[];
  generation: number;
  program: string[] | null;
  retrospects: Retrospect[];
  deployLink?: string | null;
  playStoreLink?: string;
  linkTreeLink?: string;
  oneStoreLink?: string;
  webLink?: string;
  description: string;
}

export interface ProjectUIModel extends Project {
  url: string;
}

export type ProjectCardType = Pick<
  ProjectUIModel,
  'title' | 'field' | 'thumbnail' | 'tags' | 'generation' | 'url'
>;
