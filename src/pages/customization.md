---
layout: layouts/page.njk
title: Customization Guide
lead: Learn how to customize the template to match your agency's brand and requirements.
permalink: /customization/
sidenav: true
eleventyNavigation:
  key: Customization
  order: 4
---

# Customization Guide

This guide explains how to customize the USWDS 11ty Template for your specific needs while maintaining federal compliance standards.

## Site Configuration

### Basic Settings

The primary configuration file is `src/_data/site.json`. Update it with your agency's information:

```json
{
  "title": "Your Agency Name",
  "description": "Your agency's mission statement",
  "url": "https://your-agency.gov",
  "author": "Your Agency",
  "email": "contact@your-agency.gov",
  "phone": "1-800-YOUR-NUM"
}
```

### Navigation Structure

Customize the navigation menus in the same file:

```json
{
  "navigation": {
    "primary": [
      {
        "text": "Programs",
        "href": "/programs/"
      },
      {
        "text": "Services",
        "href": "/services/",
        "children": [
          {
            "text": "Service A",
            "href": "/services/a/"
          }
        ]
      }
    ]
  }
}
```

## Branding & Styling

### Agency Logo

Replace the default logo:

1. Add your logo to `src/assets/img/`
2. Update the logo reference in `src/_includes/partials/header.njk`
3. Ensure logo meets accessibility standards (proper alt text, sufficient contrast)

### Color Schemes

USWDS provides several color tokens. Override them in `src/_styles/_custom.scss`:

```scss
// Custom color variables (before USWDS import)
$theme-color-primary: 'blue-60v';
$theme-color-secondary: 'red-50';
$theme-color-accent-warm: 'orange-40v';
$theme-color-accent-cool: 'blue-cool-40v';

// Import USWDS
@import 'uswds';

// Custom styles (after USWDS import)
.agency-header {
  background-color: color('primary-darker');
}
```

### Typography

Customize fonts and type scales:

```scss
// Font family
$theme-font-type-sans: 'public-sans';
$theme-font-type-serif: 'merriweather';

// Type scale
$theme-type-scale-md: 8;
$theme-type-scale-lg: 9;

// Line height
$theme-line-height-body: 5;
$theme-line-height-heading: 2;
```

## Content Management

### Global Data Files

Create reusable data in `src/_data/`:

```javascript
// src/_data/agency.js
module.exports = {
  mission: "Serving the American people",
  founded: "1970",
  employees: "50,000",
  offices: [
    { name: "Headquarters", location: "Washington, DC" },
    { name: "Regional Office", location: "New York, NY" }
  ]
};
```

Use in templates:
```html
<p>{{ agency.mission }}</p>
```

### Dynamic Content

Create computed data files:

```javascript
// src/_data/stats.js
module.exports = async function() {
  // Fetch from API or database
  const response = await fetch('https://api.agency.gov/stats');
  return response.json();
};
```

## Page Templates

### Creating Custom Layouts

Add new layouts in `src/_includes/layouts/`:

```html
<!-- src/_includes/layouts/custom.njk -->
---
layout: layouts/base.njk
---
<div class="custom-layout">
  <aside class="sidebar">
    <!-- Sidebar content -->
  </aside>
  <main class="content">
    {{ content | safe }}
  </main>
</div>
```

### Page Front Matter

Customize individual pages with front matter:

```yaml
---
layout: layouts/custom.njk
title: Page Title
description: Meta description
hero: true
sidenav: true
tags:
  - programs
  - featured
---
```

## Components Customization

### Extending USWDS Components

Create custom component variations:

```scss
// Custom card variant
.agency-card {
  @extend .usa-card;
  border-left: 4px solid color('primary');
  
  &__heading {
    @extend .usa-card__heading;
    color: color('primary-darker');
  }
}
```

### Creating New Components

Add custom components in `src/_includes/partials/`:

```html
<!-- src/_includes/partials/agency-alert.njk -->
<div class="agency-alert" role="alert">
  <div class="agency-alert__icon">
    <!-- Icon SVG -->
  </div>
  <div class="agency-alert__content">
    {{ message }}
  </div>
</div>
```

## JavaScript Customization

### Adding Custom Scripts

Create JavaScript modules in `src/assets/js/`:

```javascript
// src/assets/js/custom.js
class AgencyComponent {
  constructor(element) {
    this.element = element;
    this.init();
  }
  
  init() {
    // Component initialization
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const components = document.querySelectorAll('.agency-component');
  components.forEach(el => new AgencyComponent(el));
});
```

### Integrating Third-Party Libraries

Install via npm and import:

```bash
npm install chart.js
```

```javascript
// src/assets/js/charts.js
import Chart from 'chart.js/auto';

export function initCharts() {
  const charts = document.querySelectorAll('.chart-container');
  charts.forEach(container => {
    new Chart(container, {
      // Chart configuration
    });
  });
}
```

## Forms Customization

### Custom Form Validation

```javascript
// Custom validation messages
const validationMessages = {
  email: 'Please enter a valid government email address',
  phone: 'Please use format: 1-800-123-4567'
};

// Apply custom validation
document.querySelectorAll('.usa-input').forEach(input => {
  input.addEventListener('invalid', (e) => {
    e.target.setCustomValidity(validationMessages[e.target.type] || '');
  });
});
```

### Form Processing

Set up form handlers:

```javascript
// Handle form submission
document.querySelector('#contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  // Process or send data
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: formData
  });
  
  // Handle response
});
```

## Multi-language Support

### Setting Up i18n

Create language files:

```javascript
// src/_data/i18n.js
module.exports = {
  en: {
    welcome: "Welcome",
    search: "Search"
  },
  es: {
    welcome: "Bienvenido",
    search: "Buscar"
  }
};
```

Use in templates:
```html
<h1>{{ i18n[lang].welcome }}</h1>
```

## SEO Optimization

### Meta Tags

Customize meta tags in `src/_includes/layouts/base.njk`:

```html
<!-- Open Graph -->
<meta property="og:title" content="{{ title or site.title }}">
<meta property="og:description" content="{{ description or site.description }}">
<meta property="og:image" content="{{ site.url }}/assets/img/og-image.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@youragency">

<!-- Schema.org -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  "name": "{{ site.title }}",
  "url": "{{ site.url }}"
}
</script>
```

### Sitemap Generation

The template automatically generates a sitemap. Customize in `eleventy.config.js`:

```javascript
eleventyConfig.addPlugin(sitemap, {
  sitemap: {
    hostname: "https://your-agency.gov",
    options: {
      frequency: "weekly",
      priority: 0.5
    }
  }
});
```

## Performance Optimization

### Image Optimization

Use responsive images:

```html
<picture>
  <source media="(min-width: 1024px)" srcset="image-large.webp">
  <source media="(min-width: 640px)" srcset="image-medium.webp">
  <img src="image-small.jpg" alt="Description" loading="lazy">
</picture>
```

### Asset Optimization

Configure build optimization:

```javascript
// eleventy.config.js
eleventyConfig.addPlugin(imagePlugin, {
  formats: ["webp", "jpeg"],
  widths: [640, 1024, 1920],
  urlPath: "/assets/img/",
  outputDir: "./_site/assets/img/"
});
```

## Deployment Configuration

### Environment Variables

Use environment-specific settings:

```javascript
// src/_data/env.js
module.exports = {
  isProd: process.env.NODE_ENV === 'production',
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  gaId: process.env.GA_ID
};
```

### Build Commands

Customize build scripts in `package.json`:

```json
{
  "scripts": {
    "build:prod": "NODE_ENV=production eleventy",
    "build:staging": "NODE_ENV=staging eleventy",
    "build:dev": "NODE_ENV=development eleventy --serve"
  }
}
```

## Accessibility Customization

### Skip Links

Customize skip navigation:

```html
<a class="usa-skipnav" href="#main-content">Skip to main content</a>
<a class="usa-skipnav" href="#primary-nav">Skip to navigation</a>
<a class="usa-skipnav" href="#footer">Skip to footer</a>
```

### ARIA Labels

Ensure proper ARIA implementation:

```html
<nav aria-label="Primary navigation">
  <!-- Navigation items -->
</nav>

<aside aria-labelledby="sidebar-heading">
  <h2 id="sidebar-heading">Related Information</h2>
  <!-- Sidebar content -->
</aside>
```

## Testing Your Customizations

### Accessibility Testing

```bash
# Install testing tools
npm install --save-dev pa11y axe-core

# Run accessibility tests
npm run test:a11y
```

### Visual Regression Testing

```bash
# Install BackstopJS
npm install --save-dev backstopjs

# Initialize
npx backstop init

# Test
npx backstop test
```

## Best Practices

1. **Always test accessibility** after customizations
2. **Keep USWDS updates** separate from custom code
3. **Document your changes** for team members
4. **Use semantic HTML** for better accessibility
5. **Optimize images** before adding to the project
6. **Test across browsers** and devices
7. **Monitor performance** metrics regularly

## Getting Help

- [USWDS Design Tokens](https://designsystem.digital.gov/design-tokens/)
- [11ty Documentation](https://www.11ty.dev/docs/)
- [GitHub Issues]({{ site.github }}/issues)

---

*Remember: While customization is encouraged, ensure your changes maintain accessibility standards and federal compliance requirements.*