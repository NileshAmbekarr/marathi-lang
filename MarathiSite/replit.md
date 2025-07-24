# Replit Architecture Overview

## Overview

This is a full-stack web application for मराठी-लँग (Marathi-Lang), a programming language that uses Devanagari script. The application serves as a documentation and showcase website for this unique programming language that allows coding in Marathi. The project follows a modern monorepo structure with a React frontend and Express.js backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application uses a monorepo architecture with clear separation between client and server code:

- **Frontend**: React SPA built with Vite, TypeScript, and Tailwind CSS
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (currently using in-memory storage as fallback)
- **Build System**: Vite for frontend, esbuild for backend
- **UI Framework**: Shadcn/ui components with custom styling

## Key Components

### Frontend Architecture
- **React Router**: Using wouter for client-side routing
- **State Management**: TanStack Query for server state, React hooks for local state
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Component Library**: Shadcn/ui components with extensive customization
- **Typography**: Custom font setup with Inter, Poppins, and JetBrains Mono

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Storage Interface**: Abstract storage interface with in-memory implementation
- **Development**: Vite integration for SSR and HMR in development
- **Session Management**: PostgreSQL session store (connect-pg-simple)

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **Migration System**: Drizzle-kit for database migrations
- **Type Safety**: Full TypeScript integration with Drizzle

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle API requests via the storage interface
3. **Database Operations**: Storage implementation performs CRUD operations
4. **Response**: JSON responses sent back to client components
5. **State Updates**: TanStack Query manages cache invalidation and updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **@replit/vite-plugin-***: Replit-specific development plugins

## Deployment Strategy

### Development Mode
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with nodemon-like behavior
- **Database**: Environment-based connection string
- **Assets**: Served through Vite middleware

### Production Build
1. **Frontend**: Vite builds static assets to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built frontend assets
4. **Database**: PostgreSQL connection via environment variables

### Manual Deployment Guide
After downloading the project as a ZIP file:

1. **Prerequisites**:
   - Node.js 18+ installed
   - npm or yarn package manager

2. **Setup Steps**:
   ```bash
   # Extract and navigate to project
   unzip marathi-lang-website.zip
   cd marathi-lang-website
   
   # Install dependencies
   npm install
   
   # Run development server
   npm run dev
   ```

3. **Production Deployment**:
   ```bash
   # Build for production
   npm run build
   
   # Start production server
   npm start
   ```

4. **Environment Variables** (if needed):
   - Create `.env` file for database connections
   - Add `DATABASE_URL` if using PostgreSQL
   - The app works with in-memory storage by default

### Key Features
- **Hot Module Replacement**: Full HMR support in development
- **Type Safety**: End-to-end TypeScript with strict configuration
- **Mobile Responsive**: Mobile-first design with responsive breakpoints
- **Dark Theme**: Custom dark theme implementation with CSS variables
- **SEO Optimized**: Proper meta tags and semantic HTML structure

The application is designed to be easily deployable on Replit with automatic environment detection and development-specific tooling that's disabled in production.