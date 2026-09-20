```
 _____   ____  _____ _______ ______ ____  _      _____ ____
|  __ \ / __ \|  __ \__   __|  ____/ __ \| |    |_   _/ __ \
| |__) | |  | | |__) | | |  | |__ | |  | | |      | || |  | |
|  ___/| |  | |  _  /  | |  |  __|| |  | | |      | || |  | |
| |    | |__| | | \ \  | |  | |   | |__| | |____ _| || |__| |
|_|     \____/|_|  \_\ |_|  |_|    \____/|______|_____\____/
```

<p align="center">
  <img src="public/images/dev-pfp.webp" alt="Dev Thakur" width="140" height="140" />
</p>

<h1 align="center">Dev Thakur — Portfolio</h1>

<p align="center">
  A personal portfolio site built with Nuxt 4, Vue 3, and Tailwind CSS.
</p>

<p align="center">
  <img alt="Nuxt" src="https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxtdotjs&logoColor=white" />
  <img alt="Vue" src="https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-lightgrey" />
</p>

---

## About

This is my personal developer portfolio — an overview of who I am, the skills and projects
I've built, and how to get in touch. It's a security-focused build in more ways than one: the
site itself is a small demonstration of clean, accessible, dependency-conscious front-end
engineering.

## Features

- **Responsive, accessible UI** — built with [shadcn-vue](https://www.shadcn-vue.com/) components on top of Tailwind CSS, tested across breakpoints
- **Light / dark mode** — persisted theme preference via `@nuxtjs/color-mode`
- **Skills showcase** — technologies grouped by category, with animated proficiency bars that respect `prefers-reduced-motion`
- **Projects showcase** — filterable by status, pulled from a single typed data source
- **Live CV** — view or download an up-to-date PDF résumé directly from the site
- **A small "Experience" easter egg** — a centered overlay with a looping GIF, tucked below the social links on the CV page
- **SEO-ready** — per-page metadata, canonical URLs, and Open Graph / Twitter card images
- **Zero placeholder content** — every link, project, and skill on the site is real

## Pages

| Route       | Description                                             |
| ----------- | -------------------------------------------------------- |
| `/`         | Hero — profile, bio, and primary navigation               |
| `/skills`   | Technologies grouped by category, with proficiency bars   |
| `/projects` | Filterable list of public projects                        |
| `/contact`  | LinkedIn, GitHub, and email                                |
| `/cv`       | View or download the résumé as a PDF                       |

## Tech Stack

| Layer      | Tooling                                             |
| ---------- | ---------------------------------------------------- |
| Framework  | [Nuxt 4](https://nuxt.com/) / [Vue 3](https://vuejs.org/) |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com/), [shadcn-vue](https://www.shadcn-vue.com/) |
| Icons      | [Lucide](https://lucide.dev/), [Iconify](https://iconify.design/) (bundled offline, no runtime API calls) |
| Language   | TypeScript                                          |
| Tooling    | ESLint, Prettier, Husky + lint-staged                |
| Deployment | Vercel / Docker                                     |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+ (project targets 24.x, see `"volta"` in `package.json`)
- [pnpm](https://pnpm.io/) (recommended) — `npm install -g pnpm`, or use `npm install` directly

### Installation

```bash
git clone https://github.com/DEVTHAKUR-90/Minimal-Portfolio.git
cd Minimal-Portfolio
pnpm install
```

### Development

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`.

### Production build

```bash
pnpm build
pnpm preview   # preview the production build locally
```

### Deployment

This project is built with Nuxt's Vercel preset in mind: connect a repository to Vercel and its
Nuxt framework detection handles the build and output configuration automatically, with no
environment variables required.

### Docker

```bash
pnpm docker:start   # build and run in a container on port 3000
pnpm docker:stop    # stop the container
```

## Project Structure

```
app/
├── components/       # Reusable UI components
│   ├── fancy/        # Custom animated buttons, cards, and the loading bar
│   └── ui/           # shadcn-vue primitives (Button, Badge, Card, ...)
├── composables/      # Shared reactive logic (e.g. the shared IntersectionObserver for Skills bars)
├── data/             # Typed content — contact details, projects, skills, bundled icon data
├── pages/            # Route-based pages (index, skills, projects, contact, cv)
├── plugins/          # Nuxt plugins
└── assets/           # Global styles
public/               # Static assets served as-is (images, résumé PDF, the Experience GIF)
```

To update the content on the site:

- **Contact details** — `app/data/contact.ts`
- **Projects** — `app/data/projects.ts`
- **Skills & proficiency** — `app/data/skills.ts`
- **Résumé** — replace `public/cv.pdf`

## Available Scripts

| Command             | Description                          |
| -------------------- | ------------------------------------- |
| `pnpm dev`           | Start the local dev server            |
| `pnpm build`         | Build for production                  |
| `pnpm generate`      | Generate a fully static build         |
| `pnpm preview`       | Preview the production build          |
| `pnpm lint`          | Lint the codebase                     |
| `pnpm lint:fix`      | Lint and auto-fix                     |
| `pnpm format`        | Format with Prettier                  |
| `pnpm format:check`  | Check formatting without writing      |

## License

This project is licensed under the [MIT License](./LICENSE).

## Contact

**Dev Thakur**

- Email: [90dthakur@gmail.com](mailto:90dthakur@gmail.com)
- LinkedIn: [linkedin.com/in/dev-thakur90](https://www.linkedin.com/in/dev-thakur90)
- GitHub: [@DEVTHAKUR-90](https://github.com/DEVTHAKUR-90)
