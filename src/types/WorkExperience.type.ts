import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface WorkExperienceType {
  place: string;
  acronym: string;
  description: string;
  duration: string;
  logo: AstroComponentFactory;
  projects: ProjectInteface[] | null;
}

interface ProjectInteface {
  name: string;
  description: string;
}
