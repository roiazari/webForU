# AI Development Rules

This document outlines the rules and conventions for AI-driven development on this project. Adhering to these guidelines ensures consistency, maintainability, and high-quality code.

## Tech Stack Overview

This project is a modern web application built with the following technologies:

-   **Framework**: React with Vite for a fast development experience.
-   **Language**: TypeScript for type safety and improved developer experience.
-   **Styling**: Tailwind CSS for a utility-first styling approach.
-   **UI Components**: A custom component library built with shadcn/ui and Radix UI primitives.
-   **Routing**: React Router (`react-router-dom`) for client-side navigation.
-   **Data Fetching**: TanStack React Query for managing server state, caching, and asynchronous data.
-   **Animations**: GSAP for complex, high-performance animations and `tailwindcss-animate` for simple CSS transitions.
-   **Icons**: `lucide-react` is the primary icon library.
-   **Forms**: React Hook Form combined with Zod for robust and type-safe form handling.

## Library Usage and Coding Conventions

### 1. UI Components

-   **Primary Source**: Always use the pre-built `shadcn/ui` components located in `src/components/ui`.
-   **Custom Components**: When a new component is needed, build it from scratch using React, TypeScript, and Tailwind CSS. If it's a composite component, use existing `shadcn/ui` components as building blocks.
-   **File Structure**: Every new component must be in its own file inside `src/components/`. Pages go into `src/pages/`.

### 2. Styling

-   **Utility-First**: All styling must be done with Tailwind CSS classes. Do not write custom CSS in `.css` files unless it's for a global style or a complex animation keyframe defined in `src/index.css`.
-   **Theme Colors**: Use the color palette defined in `tailwind.config.ts` and `src/index.css`. For example, use `bg-primary`, `text-foreground`, etc.
-   **Responsiveness**: All components and layouts must be responsive. Use Tailwind's responsive modifiers (e.g., `md:`, `lg:`) to adapt the UI for different screen sizes.

### 3. Routing

-   **Library**: Use `react-router-dom` for all routing needs.
-   **Route Definitions**: All routes must be defined in `src/App.tsx`.
-   **Navigation**: Use the custom `NavLink` component from `src/components/NavLink.tsx` for creating navigation links that require active styling. For simple links, use the standard `Link` component from `react-router-dom`.

### 4. Icons

-   **Primary Library**: Use `lucide-react` for all icons. It's lightweight and has a consistent design.
-   **Secondary Library**: The project also includes `@phosphor-icons/react`. You may use it if a specific icon is not available in `lucide-react`, but prefer Lucide for consistency.

### 5. State Management

-   **Server State**: Use `@tanstack/react-query` for fetching, caching, and updating data from APIs.
-   **Client State**: For local component state, use React's `useState` and `useReducer` hooks. Avoid introducing global state management libraries like Zustand or Redux unless the application's complexity absolutely requires it.

### 6. Forms

-   **Form Logic**: Use `react-hook-form` to manage form state, validation, and submissions.
-   **Validation**: Use `zod` to define validation schemas for your forms. Connect Zod schemas to `react-hook-form` using `@hookform/resolvers`.

### 7. Animations

-   **Complex Animations**: Use `gsap` for sophisticated, timeline-based, or scroll-triggered animations.
-   **Simple Transitions**: For basic hover effects, transitions, and simple animations, use the utility classes provided by Tailwind CSS and the `tailwindcss-animate` plugin.

### 8. Notifications

-   **Toasts**: Use the `toast` function imported from `src/hooks/use-toast.ts` to display toast notifications. This uses the `shadcn/ui` Toaster system, ensuring a consistent look and feel with the rest of the UI.