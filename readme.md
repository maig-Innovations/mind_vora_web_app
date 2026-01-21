# Mindvora Solutions Website

## Overview

Mindvora Solutions is a professional tech company website built as a full-stack application. The project is a marketing/portfolio website for a software development and consulting company, featuring service pages, portfolio showcases, contact forms, newsletter subscriptions, and career listings. The site emphasizes a modern, professional aesthetic with smooth animations and a responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and scroll animations
- **SEO**: React Helmet for meta tag management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **Database ORM**: Drizzle ORM with PostgreSQL
- **API Design**: REST endpoints with Zod schema validation
- **Build System**: Custom build script using esbuild for server, Vite for client

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schemas
│   └── routes.ts     # API route definitions with Zod schemas
└── migrations/       # Database migrations
```

### Key Design Patterns
- **Shared Schema Pattern**: Database schemas and API route definitions are shared between frontend and backend via the `shared/` directory
- **Type-Safe API**: Zod schemas validate both request inputs and response outputs
- **Component Composition**: shadcn/ui components are customized and composed for consistent design
- **CSS Variables**: Theme colors defined as CSS custom properties for easy dark/light mode support

### Database Schema
Two main tables:
- `contact_submissions`: Stores contact form entries (name, email, company, message)
- `subscribers`: Stores newsletter email subscriptions

### Development vs Production
- Development: Vite dev server with HMR, proxied through Express
- Production: Static files served from `dist/public`, bundled server in `dist/index.cjs`

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connected via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migrations with `npm run db:push`

### Third-Party Services
- **Google Fonts**: Inter and Space Grotesk font families
- **Unsplash**: External images for portfolio and content

### Key NPM Packages
- `@tanstack/react-query`: Data fetching and caching
- `drizzle-orm` / `drizzle-zod`: Database ORM and schema validation
- `framer-motion`: Animation library
- `react-helmet`: SEO meta tag management
- `wouter`: Client-side routing
- `zod`: Runtime type validation
- Full shadcn/ui component suite (Radix UI based)

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `connect-pg-simple`: Session storage for PostgreSQL