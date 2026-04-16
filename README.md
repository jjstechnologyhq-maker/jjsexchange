# JJS Exchange

A modern, modular React application for JJS Currency marketing landing page. This application features live rate conversion, waitlist management, and theme toggling functionalities.

## Features

- **Live Rate Conversion:** Real-time currency conversion rates.
- **Waitlist Management:** Easy sign-up for the waitlist.
- **Theme Toggling:** Supports different visual themes (dark/light mode).
- **Modern Stack:** Built with React, TypeScript, and Vite for optimal performance and developer experience.

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install the dependencies:

```bash
npm install
```

### Development

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173/` (or whichever port Vite assigns).

### Build

To build the application for production:

```bash
npm run build
```

This will run TypeScript checks and output the optimized build in the `dist` directory.

### Linting

To run ESLint checking:

```bash
npm run lint
```

## Deployment

The application is deployed to Cloudflare, ensuring a secure, performant, and reliable delivery for the Vite-based project, with domain routing handled via Namecheap.
