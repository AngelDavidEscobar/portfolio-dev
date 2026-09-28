import type { ImageMetadata } from "astro";
import type { TechKey } from "../data/tech";

export interface Project {
    title: string;
    description: string;
    image: ImageMetadata;
    imageAlt: string;
    tech: TechKey[];
    liveUrl: string;
    repoUrl?: string;
}