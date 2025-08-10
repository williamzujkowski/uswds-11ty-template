# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an 11ty (Eleventy) static site generator template integrated with the U.S. Web Design System (USWDS). The project is designed for building government websites that comply with federal standards and accessibility requirements.

## Development Commands

### Initial Setup
```bash
# Install dependencies
npm init -y
npm install @uswds/uswds @11ty/eleventy sass postcss autoprefixer

# Install development dependencies
npm install --save-dev prettier eslint stylelint gh-pages
```

### Core Commands
```bash
# Build the site
npm run build
# or
npx eleventy

# Start development server with hot reload
npm run start
# or
npx eleventy --serve

# Deploy to GitHub Pages
npm run deploy

# Run linters
npm run lint:js      # ESLint for JavaScript
npm run lint:scss    # Stylelint for SCSS
npm run format       # Prettier for code formatting
```

### Testing Commands
```bash
# Run accessibility tests
npm run test:a11y

# Run Lighthouse audit
npm run test:lighthouse

# Check USWDS compliance
npm run test:uswds
```

## Architecture & Structure

### Directory Layout
```
src/                    # Source files (11ty input directory)
├── _data/             # Global data files (.json, .js)
├── _includes/         # Layouts and reusable partials
│   └── layouts/       # Page layouts
├── _styles/           # SCSS files
│   ├── main.scss      # Main stylesheet importing USWDS
│   └── _custom.scss   # Custom overrides
├── assets/            # Static assets (images, fonts)
├── pages/             # Content pages (.md, .html)
└── scripts/           # JavaScript modules

_site/                 # Build output (git-ignored)
```

### Key Configuration Files

**eleventy.config.js** - Main 11ty configuration
- Handles asset passthrough
- Configures input/output directories
- Sets up filters and shortcodes

**package.json** - Defines npm scripts:
- `build`: Production build
- `start`: Development server
- `deploy`: GitHub Pages deployment

### USWDS Integration

The project uses USWDS v3.x for consistent government UI components. Key integration points:

1. **Styles**: Import USWDS in `src/_styles/main.scss`
2. **Components**: Use USWDS classes and patterns in templates
3. **JavaScript**: Initialize USWDS components in `src/scripts/`
4. **Theming**: Override USWDS variables in `_custom.scss`

### Data Flow

1. **Global Data**: Files in `_data/` are available to all templates
2. **Front Matter**: Page-specific data in markdown headers
3. **Collections**: Grouped content defined in eleventy.config.js
4. **Layouts**: Template inheritance through `_includes/layouts/`

## Critical Standards & Requirements

### Accessibility (WCAG 2.1 AA)
- All interactive elements must have proper ARIA labels
- Color contrast ratios must meet WCAG standards
- Keyboard navigation must work for all features
- Screen reader compatibility is mandatory

### Federal Compliance
- Integrate Digital Analytics Program (DAP) tracking
- Implement required privacy notices
- Follow Section 508 standards
- Use semantic HTML5 markup

### Performance Targets
- Lighthouse scores: 90+ for Performance, Accessibility, SEO
- Asset optimization: compress images, minify CSS/JS
- Implement lazy loading for images
- Use responsive images with proper srcset

### Security Requirements
- Enforce HTTPS in production
- Content Security Policy headers
- No inline scripts without nonce
- Regular dependency updates via `npm audit`

## Development Workflow

### Git Branch Strategy
- `main`: Production-ready code
- `develop`: Integration branch
- Feature branches: `feature/description`
- Hotfix branches: `hotfix/issue`

### CI/CD Pipeline (GitHub Actions)
1. On push: Run linters and tests
2. On PR: Build preview deployment
3. On merge to main: Deploy to production

### Pre-commit Checks
- Prettier formatting
- ESLint for JavaScript
- Stylelint for SCSS
- Accessibility validation

## Common Tasks

### Adding a New Page
1. Create `.md` or `.html` file in `src/pages/`
2. Add front matter with layout and metadata
3. Content will be auto-compiled during build

### Customizing USWDS Theme
1. Edit `src/_styles/_custom.scss`
2. Override USWDS variables before import
3. Add custom classes after import

### Adding JavaScript Functionality
1. Create module in `src/scripts/`
2. Import USWDS components as needed
3. Initialize in DOMContentLoaded event

### Updating Dependencies
```bash
npm update           # Update to latest minor/patch
npm audit fix       # Fix security vulnerabilities
```

## Debugging Tips

- Check `_site/` for generated output
- Use `--dryrun` flag to preview build without writing files
- Enable debug mode: `DEBUG=Eleventy* npx eleventy`
- Validate HTML output with W3C validator
- Test with screen readers (NVDA, JAWS, VoiceOver)