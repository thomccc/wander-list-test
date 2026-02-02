# wander-list-test

A Vite + React + TypeScript project for experimenting with table UX patterns, using shadcn/ui components.

## Setup

This project includes:
- **Vite** - Fast build tool and dev server
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v3** - Utility-first CSS
- **shadcn/ui** - Component library (configured and ready to use)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (usually `http://localhost:5173`)

## Adding shadcn/ui Components

To add shadcn/ui components, use the CLI:

```bash
npx shadcn@latest add [component-name]
```

For example, to add a table component:
```bash
npx shadcn@latest add table
```

## Project Structure

```
src/
  ├── components/     # React components (shadcn/ui components go in components/ui/)
  ├── lib/           # Utility functions (includes utils.ts for cn() helper)
  └── App.tsx        # Main app component with basic table example
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
