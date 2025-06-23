# Frontend Development Guidelines (Next.js 14 + TypeScript + Tailwind CSS)

> **Applies to FreeColorHub.com frontend project. All team members should follow these rules for consistency and quality.**

---

## 1. Project Structure

- Use the following directory structure:
  ```
  frontend/
  ├── public/           # Static assets (images, icons, fonts)
  ├── src/
  │   ├── app/          # Next.js App Router (pages, layouts)
  │   ├── components/   # Reusable UI components
  │   ├── hooks/        # Custom React hooks
  │   ├── store/        # Zustand state management
  │   ├── lib/          # Utilities, API clients, constants
  │   ├── styles/       # Tailwind and custom CSS
  │   └── types/        # TypeScript type definitions
  ├── .env.local        # Environment variables
  ├── next.config.js    # Next.js config
  ├── tailwind.config.js# Tailwind config
  └── tsconfig.json     # TypeScript config
  ```
- Organize components by domain (e.g., `components/coloring/`, `components/generate/`).
- Keep files small and focused. Split large components into smaller ones.

---

## 2. Component Development

- Use functional components and React hooks only.
- All components must be written in TypeScript.
- Use props with explicit types/interfaces.
- Prefer composition over inheritance.
- Place shared UI elements in `components/ui/`.
- Use `components/layout/` for layout-related components (Header, Footer, Navigation).
- Use `components/common/` for generic utilities (Loading, ErrorBoundary, etc).

---

## 3. Styling

- Use Tailwind CSS utility classes for all styling.
- Avoid custom CSS unless absolutely necessary (put in `styles/` if needed).
- Use semantic HTML and Tailwind for responsive design.
- Use Tailwind's `@apply` for repeated style patterns in custom CSS.
- Do not use inline styles except for dynamic values.

---

## 4. State Management

- Use Zustand for global state (e.g., user, AI generation, coloring state).
- Use React context only for cross-cutting concerns (e.g., theme, i18n).
- Keep local state in components where possible.
- Store API data in Zustand if shared across pages/components.

---

## 5. API Calls

- Use Axios or Fetch for API requests (put API logic in `lib/api.ts`).
- Always type API responses using shared TypeScript interfaces (see `docs/types.md`).
- Handle loading, error, and empty states in UI.
- Never hardcode API URLs; use environment variables.

---

## 6. Naming Conventions

- Use PascalCase for components and files: `ColoringPageCard.tsx`
- Use camelCase for variables, functions, and hooks: `useColoringStore`
- Use UPPER_SNAKE_CASE for constants: `DEFAULT_PAGE_SIZE`
- Name hooks with `use` prefix: `useAI`, `useDownload`
- Use clear, descriptive names for all files and functions.

---

## 7. Code Style

- Use Prettier and ESLint for code formatting and linting.
- Always use explicit types for function parameters and return values.
- Prefer `const` and `let` over `var`.
- Avoid magic numbers/strings; use constants.
- Write clear, concise comments where necessary.
- Remove unused code and imports before committing.

---

## 8. Internationalization (i18n)

- All UI text, labels, and messages must be in English for the first release.
- Use a central file or object for static text if possible (for future i18n).
- Avoid hardcoding text in multiple places.

---

## 9. Accessibility (a11y)

- Use semantic HTML elements (e.g., `<button>`, `<nav>`, `<main>`, `<section>`).
- Add `alt` text for all images and icons.
- Ensure sufficient color contrast.
- Make all interactive elements keyboard accessible.
- Use ARIA attributes where appropriate.

---

## 10. Testing

- Use Jest and React Testing Library for unit and integration tests.
- Write tests for core logic, components, and hooks.
- Ensure all critical paths are covered by tests.
- Run tests before submitting pull requests.

---

## 11. Collaboration & Workflow

- Use Git for version control. Commit early, commit often.
- Use feature branches (`feature/xxx`), not `main` for development.
- Write clear, descriptive commit messages (in English).
- Open pull requests for all changes. Request code review from at least one team member.
- Resolve merge conflicts promptly.
- Document any architectural or major design decisions in the repo or docs.

---

## 12. Other Best Practices

- Keep dependencies up to date.
- Avoid large PRs; break work into small, reviewable pieces.
- Refactor and clean up code regularly.
- Prioritize performance and user experience.
- Ask questions and communicate early if unsure about requirements.

---

**Let's build a high-quality, maintainable, and scalable frontend together!**
