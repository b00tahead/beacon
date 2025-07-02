# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Beacon is a React-based design system project focused on creating fully accessible WCAG 2.2 compliant components. The system combines Tailwind CSS for styling with comprehensive documentation and testing through Storybook.

## Development Commands

### Essential Commands
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production (runs TypeScript check first)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

### Storybook Commands
- `npm run storybook` - Start Storybook development server on port 6006
- `npm run build-storybook` - Build Storybook for production

### Testing
The project uses Vitest with Storybook integration and Playwright for browser testing. Tests run in browser mode using Chromium. Test configuration includes Storybook test plugin integration.

## Architecture

### Tech Stack
- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4.1+ with Vite plugin integration
- **Build Tool**: Vite 7
- **Documentation**: Storybook 9 with accessibility addon
- **Testing**: Vitest + Playwright for browser testing
- **Linting**: ESLint 9 with TypeScript support

### Key Configuration
- **Vite Config**: Includes React plugin and Tailwind CSS Vite plugin (`@tailwindcss/vite`)
- **TypeScript**: Project references setup with separate app and node configs
- **Storybook**: Configured with docs, accessibility, and vitest addons
- **Testing**: Browser-based testing with Playwright provider and Chromium instances

### Styling Approach
The project uses Tailwind CSS 4.1+ as the primary styling solution. Components should leverage Tailwind's utility classes while maintaining the design system's accessibility and aesthetic goals. The Tailwind Vite plugin is integrated for optimal development experience.

## Design System Philosophy

### Core Goals
1. **Full WCAG 2.2 Accessibility Compliance** - All components must meet accessibility standards
2. **Aesthetic and Minimal Design** - Clean, purposeful design language
3. **Component-Driven Development** - Building reusable, well-documented components

### Documentation Structure
- **Foundations**: Color, layout, typography, elevation, motion, iconography
- **Components**: Comprehensive checklist covering 25+ core components (Button, Modal, Form fields, etc.)
- **Design Language**: Brand vision, principles, voice, terminology

### Component Development with Tailwind
When creating new components:
- Use Tailwind utility classes for styling while following the component checklist in `components.md`
- Ensure accessibility compliance (use Storybook a11y addon)
- Create comprehensive Storybook stories
- Support multiple variants, sizes, and states using Tailwind's responsive and state modifiers
- Include proper ARIA labels and keyboard navigation
- Leverage Tailwind's built-in accessibility features and color contrast utilities

### Testing Strategy
- Browser-based testing with Playwright through Vitest
- Storybook stories serve as visual regression tests via the Storybook test plugin
- Accessibility testing integrated via Storybook addon
- Component testing through Vitest + Storybook integration running in Chromium

## Development Notes

- Tailwind CSS 4.1+ is integrated via Vite plugin for optimal performance
- The project uses a 4-point spacing system aligning with Tailwind's default spacing scale
- All components should support dark mode using Tailwind's dark mode utilities
- Component styling should prioritize Tailwind utilities over custom CSS
- Typography implementation should use Tailwind's typography scale while aligning with the grid system
- Component naming follows semantic rather than visual conventions