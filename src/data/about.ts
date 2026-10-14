import type { TechKey } from "./tech";

export const SKILL_GROUPS: { title: string; tech: TechKey[] }[] = [
    { title: "Frontend", tech: ["react", "nextjs", "typescript", "tailwind", "redux", "astro"] },
    { title: "Backend", tech: ["nodejs", "express", "spring"] },
    { title: "Bases de datos", tech: ["postgresql", "mysql", "mongodb", "firebase", "turso"] },
    { title: "Cloud & DevOps", tech: ["aws", "linux", "windows", "git"] },
];

export const EDUCATION = {
    degree: "Ingeniería en Sistemas",
    school: "Universidad ECCI",
    date: "2023 — En curso",
};

export const LANGUAGES = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "B2" },
];

export const CERTIFICATIONS = {
    issuer: "Platzi",
    courses: ["TypeScript", "React Avanzado", "Git y GitHub", "MySQL", "AWS Cloud Practitioner", "Java Spring", "Tailwind", "Express"],
};
