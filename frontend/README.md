# Frontend Overview

This frontend is a single-page application built with Create React App and customized through CRACO so we can override Webpack, Babel, and Tailwind settings without ejecting. The project is managed with **Yarn (Classic)** as declared in `package.json`, so all installation and script commands assume Yarn.

## Tech Stack

The key libraries in use are grouped below so it is clear what powers each concern in the UI.

- **Core framework** - React 19 (CRA + CRACO) with React DOM and React Router DOM 7 for client-side routing.
- **Styling & theming** - Tailwind CSS 3, tailwindcss-animate, tailwind-merge, class-variance-authority, clsx, and next-themes for light/dark mode toggles. The Tailwind setup is located in `tailwind.config.js` and `postcss.config.js`.
- **UI primitives & effects** - Radix UI component primitives (accordion, dialog, tooltip, etc.), shadcn-inspired utilities, cmdk for command menus, embla-carousel-react for sliders, lucide-react icons, sonner for toasts, vaul for drawers, and react-resizable-panels for split layouts.
- **Forms & validation** - react-hook-form with @hookform/resolvers and zod for schema-based validation, plus input-otp and react-day-picker for specialized inputs.
- **Data access** - Axios handles HTTP calls to the backend using the base URL defined in `.env` (`REACT_APP_BACKEND_URL`).
- **Utilities** - date-fns for date helpers and various Radix/React helper packages to compose complex interactions.

## Environment

Copy `.env` (already provided) or create one with the variables below before running the app:

```
REACT_APP_BACKEND_URL=<backend base URL>
WDS_SOCKET_PORT=443
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

`REACT_APP_BACKEND_URL` is consumed by Axios calls to reach the FastAPI backend.

## Running Locally

```bash
cd frontend
yarn install    # install dependencies
yarn start      # start the dev server on http://localhost:3000
yarn build      # produce a production build in /build
yarn test       # run the CRA test runner
```

Hot reload is enabled during `yarn start`, and CRACO ensures the Tailwind/Babel overrides under `craco.config.js` and `plugins/` are applied automatically.

## Project Scripts

All scripts are defined in `package.json` and proxied through CRACO:

- `yarn start` - `craco start` (development server with HMR)
- `yarn build` - `craco build` (production bundle with minification and hashing)
- `yarn test` - `craco test` (Jest test runner in watch mode)

Use Yarn to run the scripts so dependency versions remain consistent with `yarn.lock`.
