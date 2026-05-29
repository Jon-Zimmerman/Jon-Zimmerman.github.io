# AI Coding Agent Instructions for Jon-Zimmerman.github.io

## Project Overview
This is a React-based personal portfolio website showcasing projects, experience, and hobbies. Built with React 18, MUI (Material-UI), Three.js for 3D models, and Framer Motion for animations. Deployed to GitHub Pages via CI/CD.

## Architecture & Structure
- **Routing**: Uses `HashRouter` from `react-router-dom` for client-side routing (e.g., `/software`, `/hopperbot`)
- **Layout**: App.js wraps content in MUI `ThemeProvider` with dark/light theme stored in `localStorage.getItem("theme")`
- **Components**: Modular structure in `src/components/` with separate `-style.js` files using `@emotion/css`
- **Data-Driven Content**: Project pages import `title`, `intro`, `sections` from `src/data/*.tsx` files
- **Styling**: Custom `useClasses` hook converts style objects to emotion classes with theme support

## Key Patterns
- **Page Structure**: Project pages (e.g., `Software.js`) render `PageCard` components for each section, using `MediaCarousel` for images
- **Content Format**: Sections have `id`, `imageFloat` ("left"/"right"), `maxWidth`, `cardHeader`, `description`, `slides` array with `src` (require() images)
- **Navigation**: Defined in `src/data/PathStructure.js` with nested submenus
- **Lazy Loading**: Projects component is lazy-loaded in `Home.tsx` for performance
- **Responsive**: Uses MUI `useMediaQuery` for mobile/desktop layout adjustments

## Development Workflow
- **Start Dev Server**: `npm start` (react-scripts)
- **Build**: `npm run build` (uses `cross-env GENERATE_SOURCEMAP=false` for production)
- **Deploy**: Automatic via `.github/workflows/webpack.yml` on push/PR to main branch
- **Theme**: Toggle persists via localStorage; check `initialTheme` logic in App.js

## Conventions
- **File Naming**: Components in PascalCase (e.g., `PageCard.js`), styles as `Component-style.js`
- **Imports**: Use relative paths (e.g., `../../../data/SoftwareContent.tsx`)
- **Images**: Stored in `src/assets/`, required via `require("../assets/image.jpg")`
- **TypeScript**: Mix of `.js` and `.tsx` files; data files use `.tsx` for JSX content
- **Animations**: Framer Motion for transitions; Three.js/Lamina for 3D header model

## Adding New Content
1. Create content in `src/data/NewProjectContent.tsx` with exported `title`, `intro`, `sections`
2. Add route in `App.js` imports and `Routes`
3. Update `PathStructure.js` for navigation
4. Create `src/components/pages/projectPages/NewProject.js` following `Software.js` pattern

## Dependencies
- **UI**: `@mui/material`, `@emotion/react`, `framer-motion`
- **3D**: `three`, `@react-three/fiber`, `@react-three/drei`, `lamina`
- **Media**: `react-player`, `yet-another-react-lightbox`, `react-responsive-carousel`