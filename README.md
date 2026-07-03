<div align="center">
  <img src="https://img.shields.io/badge/tripleS-Into_The_Dimension-ff00ff?style=for-the-badge&logo=react&logoColor=00ffff" alt="tripleS: Into the Dimension" />
  <h1 style="color: #ff00ff; text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;">✨ tripleS: Into the Dimension ✨</h1>
  <p style="color: #00ffff; font-weight: bold; font-family: monospace;">A Pixel-Holo Journey Through the Cosmos</p>
</div>

---

<p align="center">
  <img src="https://img.shields.io/badge/Next.js%2016-black?style=flat-square&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React%2019-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Tailwind_v4-0B1120?style=flat-square&logo=tailwindcss&logoColor=38B2AC" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
</p>

## 🌌 Visión General

**tripleS: Into the Dimension** es una plataforma web optimizada (SEO-first) dedicada a documentar la historia, discografía y los hitos del grupo k-pop **tripleS** (desde su debut hasta el presente). 

La aplicación cuenta con un diseño único llamado **"Pixel-Holo"** 🎨 que combina marcos de Pixel-Art clásico con rellenos holográficos (gradientes violeta/cian/magenta) y stickers flotantes SVG originales para brindar una experiencia de usuario interactiva y retro-futurista (Y2K / Cyberpunk).

## 🪩 Características Principales

- ⏳ **Línea de Tiempo Interactiva:** Explora la historia de tripleS, videos musicales (con carga diferida / click-to-load) y datos curiosos de la cronología oficial.
- 👩‍🎤 **Perfiles de Integrantes (x24):** Páginas generadas estáticamente (SSG) para cada una de las 24 miembros con metadatos individuales optimizados para SEO.
- 👯‍♀️ **Sub-unidades:** Interfaz de usuario con filtrado dinámico del lado del cliente para todas las formaciones (Dimension).
- ⚡ **Diseño "Pixel-Holo":** Construido de forma nativa utilizando CSS-first de Tailwind v4 para lograr una estética holográfica sin dependencias pesadas.
- ♿ **Accesibilidad & SEO Avanzado:** Soporte para `prefers-reduced-motion` sin librerías externas, `sitemap.ts`, `robots.ts`, y marcado estructurado en JSON-LD (`MusicGroup`, `BreadcrumbList`).

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI:** [React 19](https://react.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Configuración CSS-first, sin archivos de configuración `tailwind.config.js`)
- **Lenguaje:** [TypeScript 6](https://www.typescriptlang.org/)
- **Validación de Datos:** Script local en Node (`scripts/check-content.mjs`) para garantizar la integridad de las relaciones entre entidades.

## 🚀 Instalación y Uso

Asegúrate de tener Node.js instalado. Clona el repositorio y sigue estos pasos:

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor de desarrollo (Turbopack)
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## 🧪 Comandos Disponibles

| Comando | Descripción ⚡ |
|---------|---------------|
| `npm run dev` | Inicia el servidor de desarrollo en Next.js. |
| `npm run build` | Chequeo de tipos, linter y compilación estática para producción. |
| `npm run start` | Inicia el servidor con la versión construida de producción. |
| `npm run lint` | Ejecuta ESLint (Flat Config) para mantener la calidad del código. |
| `npm run check` | Valida la integridad de los datos (`node scripts/check-content.mjs`). Chequea IDs únicos, formato de fechas, referencias cruzadas e IDs válidos de YouTube. |
| `npm run test` | Ejecuta las pruebas unitarias locales mediante Vitest. |

## 🔮 Arquitectura de Contenido (Sin DB)

Para maximizar el rendimiento y mantener la simplicidad arquitectónica, este proyecto no utiliza un CMS externo ni una base de datos relacional. Todo el contenido es local, estático y fuertemente tipado en el directorio `src/data/`:
- `members.ts`: Biografías e identificadores (S1 a S24).
- `subunits.ts`: Conformaciones y fechas de debut oficiales.
- `timeline.ts`: Eventos históricos y referencias a videos musicales de YouTube.

## 🤖 Desarrollado con OpenCode & Agent Skills

Este proyecto destaca por haber sido generado y perfeccionado utilizando el ecosistema de **OpenCode**, integrando múltiples **Agent Skills** de Inteligencia Artificial para acelerar y optimizar el desarrollo:

- 🧠 **Agentes Autónomos:** Arquitectura, scaffolding y refactorización generada y validada mediante IA para asegurar la consistencia y escalabilidad.
- 🎨 **Skill `frontend-design`:** Utilizada para definir y aplicar la directriz visual "Pixel-Holo", tipografía e interacciones sin recurrir a utilidades o plantillas genéricas.
- 💎 **Skill `ui-ux-pro-max`:** Empleada para las directrices de interfaz de la grilla de integrantes, línea de tiempo interactiva, y asegurar consistencia visual mediante el soporte activo para reducción de movimiento (`prefers-reduced-motion`).
- 🚀 **Skill `modern-web-guidance`:** Implementación rigurosa de mejores prácticas web actuales, incluyendo soporte para Next.js 16 (App Router) y la nueva configuración "CSS-first" de Tailwind v4.

## 📝 TO-DO

- [ ] Integrar una **Base de Datos** real para reemplazar el directorio de contenido estático (`src/data/`) y permitir actualizaciones dinámicas sin recompilar el proyecto.
- [ ] Seguir perfeccionando la UI/UX de la página (soporte completo de animaciones avanzadas y mejoras móviles adicionales).
- [ ] Documentar y afinar detalladamente el **SDD (Software Design Document)** de la IA para establecer el plano arquitectónico estándar de futuras iteraciones del proyecto.

---

<div align="center">
  <p style="color: #ff00ff;"><i>Construido cruzando la Dimensión con OpenCode 🪐</i></p>
</div>
