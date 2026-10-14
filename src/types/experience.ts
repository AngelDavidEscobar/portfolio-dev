import type { TechKey } from "../data/tech";

export interface Experience {
    company: string;
    role: string;
    date: string;
    description: string;
    highlights?: string[];
    tech: TechKey[];
    link?: string;
}
