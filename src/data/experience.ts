import type { Experience } from "../types/experience";

export const EXPERIENCE: Experience[] = [
    {
        company: "Bia Energy",
        role: "Desarrollador Full-Stack",
        date: "Sep 2026 — Actualidad",
        description:
            "Desarrollo aplicaciones web con React, Next.js y Node.js. Implemento nuevas funcionalidades, optimizo el rendimiento y mantengo el código existente.",
        tech: ["react", "nextjs", "nodejs", "typescript"],
    },
    {
        company: "Zentria",
        role: "Desarrollador Full-Stack",
        date: "Nov 2024 — Sep 2026",
        description:
            "Construí de extremo a extremo productos digitales para el sector salud, desde la arquitectura hasta el despliegue.",
        highlights: [
            "Diseñé y desarrollé un sistema de consentimientos informados digitales para una IPS, reemplazando un proceso en papel para ~10.000 pacientes al mes.",
            "Integré la plataforma con GLPI para automatizar la gestión de ~3.000 PQRS al mes.",
            "Desarrollé un módulo de autorizaciones en un portal RIPS que redujo la validación de procedimientos médicos de 2 horas a 20 minutos.",
            "Construí la autenticación con un asegurador externo usando cifrado RSA para validar la identidad de pacientes.",
            "Diseñé APIs RESTful entre sistemas internos y de terceros, y desplegué en AWS y servidores Linux y Windows.",
            "Lideré la migración de servicios legacy hacia tecnologías actuales y sostenibles.",
        ],
        tech: ["nextjs", "nodejs", "postgresql", "mysql", "mongodb", "aws"],
    },
];
