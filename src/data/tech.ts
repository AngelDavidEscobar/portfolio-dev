export const TECH = {
    astro: { label: "Astro", icon: "simple-icons:astro" },
    tailwind: { label: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
    typescript: { label: "TypeScript", icon: "simple-icons:typescript" },
    react: { label: "React", icon: "simple-icons:react" },
    nextjs: { label: "Next.js", icon: "simple-icons:nextdotjs" },
    nodejs: { label: "Node.js", icon: "simple-icons:nodedotjs" },
    postgresql: { label: "PostgreSQL", icon: "simple-icons:postgresql" },
    mongodb: { label: "MongoDB", icon: "simple-icons:mongodb" },
    mysql: { label: "MySQL", icon: "simple-icons:mysql" },
    turso: { label: "Turso", icon: "simple-icons:turso" },
} as const;

export type TechKey = keyof typeof TECH;