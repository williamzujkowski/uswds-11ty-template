---
layout: layouts/page.njk
title: Getting Started
lead: Get your federally compliant website up and running in minutes with this step-by-step guide.
permalink: /getting-started/
sidenav: true
eleventyNavigation:
  key: Getting Started
  order: 2
---

# Getting Started

This guide will walk you through setting up your first website using the USWDS 11ty Template.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- A code editor (VS Code recommended)

## Quick Start

### 1. Clone the Repository

You have several options to get started:

#### Option A: Use as Template (Recommended)
```bash
# Go to GitHub and click "Use this template"
# Or clone directly:
git clone https://github.com/williamzujkowski/uswds-11ty-template.git my-website
cd my-website
```

#### Option B: Fork the Repository
1. Visit [{{ site.github }}]({{ site.github }})
2. Click the "Fork" button
3. Clone your fork locally

### 2. Install Dependencies

```bash
npm install
```

This will install:
- 11ty static site generator
- U.S. Web Design System (USWDS)
- Sass compiler
- PostCSS and Autoprefixer
- Development tools

### 3. Start Development Server

```bash
npm start
```

Your site will be available at `http://localhost:8080` with hot reload enabled.

### 4. Build for Production

```bash
npm run build
```

The production-ready site will be in the `_site` directory.

## Project Structure

```
uswds-11ty-template/
├── src/                      # Source files
│   ├── _data/               # Global data files
│   │   ├── site.json       # Site configuration
│   │   ├── contacts.json   # Contact information
│   │   └── build.js        # Build-time data
│   ├── _includes/           # Templates and partials
│   │   ├── layouts/        # Page layouts
│   │   └── partials/       # Reusable components
│   ├── _styles/            # SCSS files
│   │   ├── main.scss       # Main stylesheet
│   │   └── _custom.scss    # Custom overrides
│   ├── assets/             # Static assets
│   │   ├── img/           # Images
│   │   ├── js/            # JavaScript
│   │   └── uswds/         # USWDS assets
│   └── pages/              # Content pages
├── _site/                   # Build output (gitignored)
├── .github/                 # GitHub Actions workflows
├── eleventy.config.js       # 11ty configuration
├── package.json            # Dependencies and scripts
└── README.md               # Documentation
```

## Configuration

### Site Configuration

Edit `src/_data/site.json` to configure your site:

```json
{
  "title": "Your Agency Name",
  "description": "Your site description",
  "url": "https://your-domain.gov",
  "author": "Your Agency",
  "email": "contact@your-agency.gov",
  "phone": "1-800-YOUR-NUMBER"
}
```

### Navigation

Update navigation in `src/_data/site.json`:

```json
{
  "navigation": {
    "primary": [
      {
        "text": "Home",
        "href": "/"
      },
      {
        "text": "About",
        "href": "/about/"
      }
    ]
  }
}
```

### Contact Information

Centralize contact data in `src/_data/contacts.json`:

```json
{
  "main": {
    "phone": "1-800-123-4567",
    "email": "contact@agency.gov",
    "tty": "1-800-123-4568"
  }
}
```

## Creating Pages

### Markdown Pages

Create a new page in `src/pages/`:

```markdown
---
layout: layouts/page.njk
title: Page Title
permalink: /page-url/
eleventyNavigation:
  key: Page Name
  order: 3
---

# Page Content

Your content here...
```

### HTML Pages

For more complex layouts, use HTML:

```html
---
layout: layouts/page.njk
title: Complex Page
---

<div class="grid-row grid-gap">
  <div class="tablet:grid-col-8">
    <h1>Main Content</h1>
  </div>
  <div class="tablet:grid-col-4">
    <aside>Sidebar</aside>
  </div>
</div>
```

## Using USWDS Components

All USWDS components are available. Here are common examples:

### Alerts

```html
<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Information</h4>
    <p class="usa-alert__text">Alert message here.</p>
  </div>
</div>
```

### Buttons

```html
<a href="#" class="usa-button">Default</a>
<button class="usa-button usa-button--secondary">Secondary</button>
<button class="usa-button usa-button--outline">Outline</button>
```

### Cards

```html
<div class="usa-card">
  <div class="usa-card__container">
    <div class="usa-card__header">
      <h3 class="usa-card__heading">Card Title</h3>
    </div>
    <div class="usa-card__body">
      <p>Card content</p>
    </div>
  </div>
</div>
```

## Deployment

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. The included GitHub Action will deploy automatically on push to main

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `_site`

### Federalist/Cloud.gov

1. Follow the Federalist documentation
2. Use the included `federalist.yml` configuration

## Development Workflow

### Available Scripts

```bash
# Development server with hot reload
npm start

# Production build
npm run build

# Deploy to GitHub Pages
npm run deploy

# Run linters
npm run lint

# Format code
npm run format
```

### Git Workflow

1. Create a feature branch
2. Make your changes
3. Test locally
4. Commit and push
5. Create a pull request
6. Merge after review

## Common Tasks

### Adding a New Section

1. Create folder in `src/pages/section-name/`
2. Add index.md for section homepage
3. Add sub-pages as needed
4. Update navigation in site.json

### Customizing Styles

1. Edit `src/_styles/_custom.scss`
2. Override USWDS variables before the import
3. Add custom styles after the import

### Adding JavaScript

1. Create file in `src/assets/js/`
2. Import in main.js or include directly

### Updating Content

1. Edit markdown files in `src/pages/`
2. Use data files for repeated content
3. Changes appear immediately with hot reload

## Best Practices

### Accessibility
- Always include alt text for images
- Use semantic HTML elements
- Test with keyboard navigation
- Check color contrast ratios

### Performance
- Optimize images before adding
- Minimize custom JavaScript
- Use USWDS components when possible
- Enable caching headers

### Security
- Keep dependencies updated
- Don't commit sensitive data
- Use environment variables for secrets
- Enable HTTPS in production

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf _site
npm run build
```

### Missing Dependencies

```bash
# Reinstall all dependencies
rm -rf node_modules
npm install
```

### SCSS Compilation Issues

```bash
# Check for syntax errors
npm run lint:scss
```

## Getting Help

- **Documentation**: [This site](/)
- **GitHub Issues**: [Report bugs]({{ site.github }}/issues)
- **USWDS Community**: [Join discussions](https://designsystem.digital.gov/about/community/)
- **11ty Discord**: [Get support](https://www.11ty.dev/docs/community/)

## Next Steps

Now that your site is running:

1. [Browse available components](/components/)
2. [Learn customization options](/customization/)
3. [Review best practices](/best-practices/)
4. [See demo pages](/demo/)

---

*Remember: This template is released under CC0 license. Feel free to use, modify, and distribute it however you need!*