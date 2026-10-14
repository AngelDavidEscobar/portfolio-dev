export const TECH = {
    astro: { label: "Astro", icon: "simple-icons:astro" },
    tailwind: { label: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
    typescript: { label: "TypeScript", icon: "simple-icons:typescript" },
    react: { label: "React", icon: "simple-icons:react" },
    nextjs: { label: "Next.js", icon: "simple-icons:nextdotjs" },
    redux: { label: "Redux", icon: "simple-icons:redux" },
    nodejs: { label: "Node.js", icon: "simple-icons:nodedotjs" },
    express: { label: "Express", icon: "simple-icons:express" },
    spring: { label: "Spring Cloud", icon: "simple-icons:spring" },
    postgresql: { label: "PostgreSQL", icon: "simple-icons:postgresql" },
    mongodb: { label: "MongoDB", icon: "simple-icons:mongodb" },
    mysql: { label: "MySQL", icon: "simple-icons:mysql" },
    firebase: { label: "Firebase", icon: "simple-icons:firebase" },
    turso: { label: "Turso", icon: "simple-icons:turso" },
    aws: { label: "AWS", icon: "simple-icons:amazonwebservices" },
    linux: { label: "Linux", icon: "simple-icons:linux" },
    windows: { label: "Windows Server", icon: "simple-icons:windows" },
    git: { label: "Git", icon: "simple-icons:git" },
} as const;

export type TechKey = keyof typeof TECH;
