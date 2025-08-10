---
layout: layouts/page.njk
title: Welcome to USWDS 11ty Template
hero:
  heading: A modern government website
  alt: Built with 11ty and USWDS
  content: This template provides a solid foundation for building accessible, responsive government websites using the U.S. Web Design System.
  button:
    text: Get Started
    href: /about/
eleventyNavigation:
  key: Home
  order: 1
---

## Build Better Government Websites

This template combines the power of 11ty static site generation with the U.S. Web Design System (USWDS) to help you create fast, accessible, and compliant government websites.

### Key Features

{% usaAlert "info", "Accessibility First" %}
Built with WCAG 2.1 AA compliance in mind, ensuring your content is accessible to all users.
{% endusaAlert %}

<div class="grid-row grid-gap margin-top-4">
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Fast Performance</h3>
        </div>
        <div class="usa-card__body">
          <p>Static site generation ensures lightning-fast page loads and excellent SEO.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">USWDS Components</h3>
        </div>
        <div class="usa-card__body">
          <p>Access to all USWDS components and patterns for consistent government UI.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Easy Deployment</h3>
        </div>
        <div class="usa-card__body">
          <p>Deploy to GitHub Pages, Netlify, or Cloud.gov with built-in CI/CD support.</p>
        </div>
      </div>
    </div>
  </div>
</div>

## Getting Started

1. **Install dependencies**: Run `npm install` to install all required packages
2. **Start development server**: Run `npm start` to launch the development server
3. **Build for production**: Run `npm run build` to generate the static site
4. **Deploy**: Run `npm run deploy` to deploy to your hosting platform

## Available Components

This template includes examples of common USWDS components:

- **Typography**: Headers, body text, and lists styled according to USWDS standards
- **Navigation**: Responsive header navigation with mobile menu support
- **Forms**: Accessible form components with proper labeling and validation
- **Cards**: Flexible card layouts for organizing content
- **Alerts**: Contextual alert messages for important information
- **Tables**: Responsive, accessible data tables
- **Buttons**: Primary, secondary, and outline button styles

## Resources

- [USWDS Documentation](https://designsystem.digital.gov/)
- [11ty Documentation](https://www.11ty.dev/)
- [Digital.gov](https://digital.gov/)
- [Section 508 Compliance](https://www.section508.gov/)