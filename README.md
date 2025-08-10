# USWDS 11ty Template

A modern, accessible static site generator template combining [11ty (Eleventy)](https://www.11ty.dev/) with the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) for building compliant government websites.

[![USWDS Version](https://img.shields.io/badge/USWDS-v3.8.0-blue)](https://designsystem.digital.gov/)
[![11ty Version](https://img.shields.io/badge/11ty-v3.1.2-brightgreen)](https://www.11ty.dev/)
[![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-green)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## Features

- **Full USWDS Integration**: Pre-configured with USWDS v3.8.0 components and patterns
- **Accessibility First**: WCAG 2.1 AA compliant with built-in accessibility features
- **Modern Build Pipeline**: Fast builds with 11ty v3 and Sass compilation
- **SEO Optimized**: Schema.org markup, Open Graph tags, and semantic HTML
- **Federal Compliance**: Section 508 compliant with DAP integration support
- **Responsive Design**: Mobile-first approach with USWDS responsive utilities
- **Performance Focused**: Static generation for lightning-fast page loads

## Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/uswds-11ty-template.git
cd uswds-11ty-template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Your site will be available at `http://localhost:8080`

## Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server with hot reload |
| `npm run build` | Build production-ready site |
| `npm run clean` | Clean the build directory |
| `npm run sass:build` | Compile SCSS to CSS (production) |
| `npm run sass:watch` | Watch SCSS files for changes |
| `npm run lint:js` | Lint JavaScript files |
| `npm run lint:scss` | Lint SCSS files |
| `npm run format` | Format code with Prettier |
| `npm run test:a11y` | Run accessibility tests |
| `npm run test:lighthouse` | Run Lighthouse audit |
| `npm run deploy` | Deploy to GitHub Pages |

## Project Structure

```
uswds-11ty-template/
├── src/                    # Source files (11ty input)
│   ├── _data/             # Global data files (.json, .js)
│   │   └── site.json      # Site-wide configuration
│   ├── _includes/         # Templates and partials
│   │   ├── layouts/       # Page layouts
│   │   │   ├── base.njk   # Base HTML template
│   │   │   └── page.njk   # Standard page layout
│   │   └── partials/      # Reusable components
│   │       ├── banner.njk # Gov banner
│   │       ├── header.njk # Site header
│   │       └── footer.njk # Site footer
│   ├── _styles/           # SCSS files
│   │   └── main.scss      # Main stylesheet
│   ├── assets/            # Static assets
│   │   ├── img/          # Images
│   │   ├── js/           # JavaScript
│   │   └── fonts/        # Custom fonts
│   ├── pages/            # Content pages
│   │   ├── about.md      # About page
│   │   └── services.md   # Services page
│   ├── scripts/          # JavaScript modules
│   ├── 404.md           # 404 error page
│   ├── index.md         # Homepage
│   └── robots.txt       # Robots file
├── _site/               # Build output (git-ignored)
├── .eleventy.js         # 11ty configuration
├── package.json         # Node dependencies
└── README.md           # This file
```

## Configuration

### Site Configuration

Edit `src/_data/site.json` to update site-wide settings:

```json
{
  "title": "Your Agency Name",
  "description": "Your site description",
  "url": "https://youragency.gov",
  "author": "Your Agency"
}
```

### Navigation

Navigation items are configured in `src/_data/navigation.json`. Pages can also be added to navigation by setting `includeInNav: true` in their front matter.

### USWDS Theme Customization

Customize USWDS theme variables in `src/_styles/main.scss`:

```scss
// Override USWDS settings before import
@forward 'uswds' with (
  $theme-show-notifications: false,
  $theme-color-primary: 'blue-60v',
  $theme-font-type-sans: 'public-sans'
);
```

## Adding Content

### Creating Pages

1. Add a new `.md` or `.njk` file in `src/pages/`
2. Include front matter:

```yaml
---
layout: layouts/page.njk
title: Page Title
description: Page description for SEO
includeInNav: true
navOrder: 3
---
```

### Using USWDS Components

Components are available through Nunjucks includes and shortcodes:

```njk
{% usaAlert "info", "Alert Title" %}
This is an informational alert message.
{% endusaAlert %}

{{ uswdsIcon("check_circle", "3") }}
```

## Accessibility

This template prioritizes accessibility:

- **Skip Navigation**: Skip to main content link
- **ARIA Labels**: Proper ARIA attributes on all components
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Tested with NVDA, JAWS, and VoiceOver
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Management**: Visible focus indicators

Run accessibility tests:
```bash
npm run test:a11y
```

## Federal Compliance

### Digital Analytics Program (DAP)

DAP is pre-integrated. Update your agency code in `src/_includes/layouts/base.njk`:

```html
<script async src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=YOUR_AGENCY"></script>
```

### Required Policies

The template includes links to required federal policies in the footer:
- Privacy Policy
- Accessibility Statement
- FOIA
- No FEAR Act

## Performance

The template is optimized for performance:

- **Static Generation**: Pre-built HTML for instant loading
- **Asset Optimization**: Compressed CSS and images
- **Lazy Loading**: Images load on scroll
- **Minimal JavaScript**: Only essential USWDS scripts

Run performance audit:
```bash
npm run test:lighthouse
```

## Deployment

### GitHub Pages

1. Update `package.json` with your repository URL
2. Build and deploy:
```bash
npm run build
npm run deploy
```

### Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `_site`

### Cloud.gov

1. Create `manifest.yml`:
```yaml
applications:
- name: your-app-name
  memory: 64M
  buildpack: staticfile_buildpack
  path: _site
```

2. Deploy:
```bash
npm run build
cf push
```

## Browser Support

Tested and supported in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- [USWDS Documentation](https://designsystem.digital.gov/)
- [11ty Documentation](https://www.11ty.dev/docs/)
- [Issue Tracker](https://github.com/yourusername/uswds-11ty-template/issues)
- [Digital.gov Resources](https://digital.gov/)

## Acknowledgments

- U.S. Web Design System team for the comprehensive component library
- 11ty community for the powerful static site generator
- Digital.gov for federal web standards guidance

---

Built with the U.S. Web Design System v3.8.0 and 11ty v3.1.2