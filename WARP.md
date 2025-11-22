# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Development server runs on http://localhost:8001 (custom port configuration)

### Building for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

### Starting Production Server
```bash
npm run start
```

## Architecture Overview

### Technology Stack
- **Framework**: Next.js 15 (Pages Router)
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS 4.x + SCSS modules
- **Animation**: Framer Motion + Motion library (alpha)
- **3D Graphics**: Three.js with React Three Fiber (@react-three/fiber, @react-three/drei)
- **State Management**: Jotai (atomic state management)
- **Smooth Scrolling**: Lenis (custom ReactLenis wrapper component)
- **UI Components**: Custom components built with lucide-react icons

### Project Structure

```
src/
├── components/       # Shared components
│   ├── ui/          # UI components (parallax, scrolling effects, 3D experiences)
│   ├── dock/        # Dock navigation component
│   └── magicui/     # Magic UI component library
├── header/          # Navigation bar components
├── hooks/           # Custom React hooks
├── lib/             # Utility libraries and helpers
├── magnetic/        # Magnetic interaction components
├── pages/           # Next.js pages (Pages Router)
│   ├── _app.tsx    # App wrapper with ReactLenis smooth scrolling
│   ├── index.tsx   # Homepage with multiple sections
│   └── api/        # API routes
├── state/           # Jotai atoms for global state
│   └── scrollAtom.ts
├── styles/          # Global styles and SCSS modules
│   ├── globals.scss # Custom fonts, CSS variables, animations
│   └── style.module.scss
└── utils/           # Utility functions
```

### Key Architectural Patterns

#### Smooth Scrolling System
- The app uses Lenis for smooth scrolling, wrapped in a custom `ReactLenis` component
- ReactLenis is applied at the app level in `_app.tsx` and wraps all page content
- Configuration: 1.2s duration, custom easing, desktop-only smooth wheel

#### State Management
- Uses Jotai for lightweight atomic state management
- Atoms are defined in `src/state/`
- Example: `postStickyScrollAtom` tracks scroll position

#### 3D Components
- Three.js scenes use React Three Fiber's `<Canvas>` component
- 3D experiences are in `src/components/ui/MainExperience.jsx` and `Experience.jsx`
- Uses `@react-three/drei` for helpers like OrbitControls and Loader

#### Custom Fonts
Custom fonts are loaded via `@font-face` in `globals.scss`:
- **Formula Condensed** (Light 300, Bold 700) - Primary display font
- **BB Manual Mono** (Semi-Regular 600) - Monospace font
- **Helvetica Now Text** (Regular 400, Bold 700, Black 900) - Body text

Configure font usage through Tailwind's `fontFamily` extension or inline `style={{ fontFamily: 'Formula Condensed' }}`

#### Animation Architecture
- Framer Motion for page transitions and component animations
- Page-level animations use `variants` pattern for staggered children
- PreLoader component controls initial page load experience
- VelocityScroll, ParallaxLayers, and HorizontalScroll provide scroll-based effects

#### Styling Approach
- Tailwind CSS 4.x for utility-first styling
- Custom Tailwind extensions for project-specific values (custom screens, spacing, maxWidth, fontSize)
- SCSS modules for component-specific styles
- CSS custom properties defined in globals.scss for theme colors

### Path Aliases
TypeScript is configured with path alias `@/*` → `./src/*`

Example imports:
```typescript
import NavBar from "@/header/NavBar";
import { postStickyScrollAtom } from "@/state/scrollAtom";
```

### Important Development Notes

#### TypeScript Configuration
- Strict mode is enabled
- Three.js types are explicitly included
- Target is ES2017

#### React Version Constraints
- React 18.3.1 is used with Motion library alpha (which expects 18.2.0)
- Override in package.json handles version compatibility

#### Custom Port
Development server runs on port 8001 instead of default 3000

#### Debug Tools
- `src/utils/testImageUrls.ts` provides automatic image URL debugging when imported
- Logs to console on module load to help debug image loading issues
