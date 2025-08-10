---
layout: layouts/page.njk
title: USWDS 11ty Template - Build Federally Compliant Websites
hero:
  heading: Build accessible government websites faster
  alt: USWDS 11ty Template
  content: An open source template that combines 11ty and the U.S. Web Design System to help you create Section 508 compliant, mobile-friendly government websites.
  button:
    text: Get Started
    href: /getting-started/
eleventyNavigation:
  key: Home
  order: 1
---

## Start with a Solid Foundation

This template provides everything you need to build a modern, accessible government website that meets federal standards and requirements.

<div class="grid-row grid-gap margin-top-4">
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Section 508 Compliant</h3>
        </div>
        <div class="usa-card__body">
          <p>Built with WCAG 2.1 AA standards from the ground up. Includes semantic HTML, ARIA labels, and keyboard navigation support.</p>
        </div>
        <div class="usa-card__footer">
          <a href="/best-practices/" class="usa-button usa-button--outline">Learn about accessibility</a>
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
          <p>All U.S. Web Design System components are available and ready to use. Consistent, tested, and trusted by federal agencies.</p>
        </div>
        <div class="usa-card__footer">
          <a href="/components/" class="usa-button usa-button--outline">Browse components</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Fast & Secure</h3>
        </div>
        <div class="usa-card__body">
          <p>Static site generation means lightning-fast load times, excellent SEO, and no server vulnerabilities to worry about.</p>
        </div>
        <div class="usa-card__footer">
          <a href="/customization/" class="usa-button usa-button--outline">Customize your site</a>
        </div>
      </div>
    </div>
  </div>
</div>

## Quick Start

Get your site up and running in minutes:

```bash
# Clone the template
git clone {{ site.github }}

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Federal Standards Built In

This template helps you meet critical federal requirements:

<div class="grid-row grid-gap margin-top-4">
  <div class="tablet:grid-col-6">
    <ul class="usa-icon-list">
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use xlink:href="/assets/uswds/img/sprite.svg#check_circle"></use>
          </svg>
        </div>
        <div class="usa-icon-list__content">
          <strong>Section 508 Compliance</strong>
          <p>Meets accessibility standards for federal websites</p>
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use xlink:href="/assets/uswds/img/sprite.svg#check_circle"></use>
          </svg>
        </div>
        <div class="usa-icon-list__content">
          <strong>21st Century IDEA Act</strong>
          <p>Modern, user-friendly government websites</p>
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use xlink:href="/assets/uswds/img/sprite.svg#check_circle"></use>
          </svg>
        </div>
        <div class="usa-icon-list__content">
          <strong>Mobile Responsive</strong>
          <p>Works perfectly on all devices and screen sizes</p>
        </div>
      </li>
    </ul>
  </div>
  <div class="tablet:grid-col-6">
    <ul class="usa-icon-list">
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use xlink:href="/assets/uswds/img/sprite.svg#check_circle"></use>
          </svg>
        </div>
        <div class="usa-icon-list__content">
          <strong>Privacy & Security Ready</strong>
          <p>Templates for privacy policies, FOIA, and compliance pages</p>
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use xlink:href="/assets/uswds/img/sprite.svg#check_circle"></use>
          </svg>
        </div>
        <div class="usa-icon-list__content">
          <strong>Performance Optimized</strong>
          <p>Fast loading, minimal JavaScript, CDN-ready</p>
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon text-green">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use xlink:href="/assets/uswds/img/sprite.svg#check_circle"></use>
          </svg>
        </div>
        <div class="usa-icon-list__content">
          <strong>CI/CD Ready</strong>
          <p>GitHub Actions workflow for automated deployment</p>
        </div>
      </li>
    </ul>
  </div>
</div>

## Who Should Use This Template?

This template is perfect for:

- **Federal Agencies** building new public-facing websites
- **Contractors** working on government projects
- **State & Local Governments** adopting federal standards
- **Educational Institutions** creating accessible sites
- **Non-profits** wanting professional, accessible websites
- **Developers** learning USWDS and 11ty

## Features at a Glance

### 📋 Pre-built Pages
- Homepage with hero section
- Services and programs pages
- Contact forms with validation
- Privacy policy template
- FOIA request page
- No FEAR Act compliance page
- Accessibility statement

### 🎨 Design System
- All USWDS components
- Consistent typography
- Color schemes
- Icons and graphics
- Responsive grid system
- Print styles

### 🛠 Developer Tools
- Hot reload development
- SCSS compilation
- PostCSS autoprefixing
- Asset optimization
- Linting and formatting
- Automated testing

### 🚀 Deployment Options
- GitHub Pages
- Netlify
- Federalist/Cloud.gov
- Any static host

## Open Source & Free

This template is released under the **CC0 license** - completely free to use, modify, and distribute. No attribution required.

<div class="usa-alert usa-alert--info margin-top-4">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Weekend Project Disclaimer</h4>
    <p class="usa-alert__text">
      {{ site.disclaimer }}
    </p>
  </div>
</div>

## Get Involved

This is an open source project and we welcome contributions!

<div class="grid-row grid-gap margin-top-4">
  <div class="tablet:grid-col-4">
    <a href="{{ site.github }}" class="usa-button usa-button--big width-full">
      View on GitHub
    </a>
  </div>
  <div class="tablet:grid-col-4">
    <a href="{{ site.github }}/issues" class="usa-button usa-button--outline usa-button--big width-full">
      Report Issues
    </a>
  </div>
  <div class="tablet:grid-col-4">
    <a href="{{ site.github }}/fork" class="usa-button usa-button--outline usa-button--big width-full">
      Fork Template
    </a>
  </div>
</div>

## Resources

- [U.S. Web Design System Documentation](https://designsystem.digital.gov/)
- [11ty Documentation](https://www.11ty.dev/)
- [Section 508 Standards](https://www.section508.gov/)
- [Digital.gov Resources](https://digital.gov/)
- [Accessibility Testing Tools](https://www.section508.gov/test/)