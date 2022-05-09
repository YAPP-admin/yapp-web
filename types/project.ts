export type ProjectField = "Android" | "iOS" | "Web" | "ML"

export interface Project {
    title: string;
    thumbnail: string;
    content: string;
    tags: string[];
    team: string[];
    field: ProjectField[];
    generation: number;
    program: string[] | null;
    deployLink: string | null;
    description: string;
}