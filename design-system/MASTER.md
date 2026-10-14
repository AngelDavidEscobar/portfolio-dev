# Design System — Portafolio Ángel Escobar

Fuente de verdad para decisiones visuales. Los tokens viven en [`src/styles/global.css`](../src/styles/global.css) (`@theme`); usa siempre las clases de Tailwind generadas (`text-fg`, `bg-accent`…), nunca colores hex sueltos.

**Estilo:** Minimalismo + Dark Mode, con resplandor rojo de marca y acento verde menta. Tema oscuro único (sin modo claro).

## Colores

| Token | Valor | Uso | Contraste sobre `bg` |
|---|---|---|---|
| `bg` | `#0a0a0a` | Fondo de página | — |
| `surface` | `#141414` | Tarjetas, paneles | — |
| `border` | `white / 12%` | Bordes, separadores, timeline | — |
| `fg` | `#fafafa` | Títulos, texto destacado | 19:1 |
| `fg-muted` | `#b3b3b3` | Párrafos (color por defecto del body) | 9.4:1 |
| `fg-subtle` | `#8f8f8f` | Fechas, metadatos, footer | 6.1:1 |
| `accent` | `#a3d9a5` | Enlaces, tecnologías, títulos de puesto, foco | 12.3:1 |
| `brand` | `#c23a44` | Glow del fondo, decoración. **No usar para texto** | 3.8:1 ✗ |
| `brand-strong` | `#8c2b32` | Fondo de badges (texto blanco 8.4:1) | — |
| `brand-hover` | `#6d1f26` | Hover de badges | — |

## Tipografía

| Token | Fuente | Uso |
|---|---|---|
| `font-sans` | Onest Variable | Todo el texto (default del body) |
| `font-mono` | JetBrains Mono Variable | Detalles técnicos: fechas, tags de tecnología, código |

- Cuerpo ≥ 16px en móvil, `leading-relaxed` en párrafos, máx. ~65ch por línea.
- Títulos de sección: `text-3xl font-bold text-fg`.

## Interacción

- Foco: global en `a`/`button` → outline 2px `accent` con offset 4px (no quitarlo).
- Transiciones: `transition-colors` 150–300ms; animaciones de entrada ≤ 600ms.
- Hover sin saltos de layout (color/opacidad; el zoom solo dentro de contenedores con `overflow-hidden`).
- Respetar `prefers-reduced-motion` en toda animación.
- Objetivos táctiles ≥ 44×44px.

## Layout

- Contenido: `SectionContainer` (`lg:w-[740px]`). Header: `xl:w-[1120px]`.
- Separación entre secciones: `gap-y-16 md:gap-y-24`.
- Verificar en 375, 768, 1024 y 1440px; sin scroll horizontal.

## Evitar

- Colores hex en componentes (crear un token si hace falta uno nuevo).
- Texto rojo `brand` sobre el fondo (no pasa WCAG AA).
- Emojis como íconos → usar `astro-icon` (`ph:*`, `simple-icons:*`).
- Clases de librerías no instaladas (p. ej. tokens de Flowbite).
