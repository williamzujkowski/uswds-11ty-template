---
layout: layouts/page.njk
title: USWDS 11ty Template - Build Federally Compliant Websites
hero:
  heading: Build accessible government websites faster
  alt: USWDS 11ty Template
  content: A production-ready template combining 11ty and the U.S. Web Design System. Create Section 508 compliant, mobile-friendly government websites in minutes, not months.
  button:
    text: Start Building →
    href: /getting-started/
  secondaryButton:
    text: View Demo Sites
    href: /demo/
eleventyNavigation:
  key: Home
  order: 1
---

## What is this template?

<div class="usa-alert usa-alert--info usa-alert--slim margin-bottom-4">
  <div class="usa-alert__body">
    <p class="usa-alert__text">
      <strong>Perfect for:</strong> Federal agencies, state/local governments, and contractors building government websites that must meet accessibility and compliance requirements.
    </p>
  </div>
</div>

This **open-source template** provides a complete foundation for building modern government websites that automatically meet federal standards. It combines the power of [11ty](https://www.11ty.dev/) static site generator with the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) to deliver fast, secure, and accessible websites.

<div class="grid-row grid-gap margin-top-4 margin-bottom-4">
  <div class="tablet:grid-col-4">
    <div class="text-center">
      <svg class="usa-icon usa-icon--size-5 text-primary" aria-hidden="true" role="img">
        <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#speed"></use>
      </svg>
      <h3 class="margin-top-1">Get Started in 5 Minutes</h3>
      <p>Clone, install, and deploy. Your compliant website foundation is ready immediately.</p>
    </div>
  </div>
  <div class="tablet:grid-col-4">
    <div class="text-center">
      <svg class="usa-icon usa-icon--size-5 text-primary" aria-hidden="true" role="img">
        <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#verified_user"></use>
      </svg>
      <h3 class="margin-top-1">Federal Compliance Built-In</h3>
      <p>Section 508, WCAG 2.1 AA, and 21st Century IDEA requirements are met out of the box.</p>
    </div>
  </div>
  <div class="tablet:grid-col-4">
    <div class="text-center">
      <svg class="usa-icon usa-icon--size-5 text-primary" aria-hidden="true" role="img">
        <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#account_balance"></use>
      </svg>
      <h3 class="margin-top-1">Trusted by Government</h3>
      <p>Built on USWDS, the same design system used by 200+ federal websites.</p>
    </div>
  </div>
</div>

## Quick Start for Developers

<div class="usa-accordion usa-accordion--bordered" aria-multiselectable="false">
  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="true" aria-controls="quickstart-steps">
      I'm ready to build - show me the commands
    </button>
  </h3>
  <div id="quickstart-steps" class="usa-accordion__content usa-prose">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-7">
        
```bash
# 1. Clone the template
git clone https://github.com/your-org/uswds-11ty-template.git my-website
cd my-website

# 2. Install dependencies
npm install

# 3. Start development server
npm start
# Opens at http://localhost:8080

# 4. Build for production
npm run build

# 5. Deploy to GitHub Pages (optional)
npm run deploy
```

      </div>
      <div class="tablet:grid-col-5">
        <div class="usa-alert usa-alert--success usa-alert--slim">
          <div class="usa-alert__body">
            <h4 class="usa-alert__heading">That's it!</h4>
            <p class="usa-alert__text">You now have a fully compliant government website foundation. Start adding your content in the `src/pages` directory.</p>
          </div>
        </div>
        <div class="margin-top-2">
          <a href="{{ '/getting-started/' | url }}" class="usa-button width-full">Full Setup Guide →</a>
        </div>
      </div>
    </div>
  </div>
</div>

## See It In Action

<div class="margin-top-4 margin-bottom-4">
  <div class="usa-card">
    <div class="usa-card__container">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">🎯 Live Demo Sites</h3>
      </div>
      <div class="usa-card__body">
        <p class="usa-intro">Explore fully-functional example websites built with this template:</p>
        <div class="grid-row grid-gap margin-top-3">
          <div class="tablet:grid-col-6">
            <ul class="usa-list">
              <li><a href="{{ '/demo/agency-homepage/' | url }}"><strong>Federal Agency Homepage</strong></a> - Complete agency website with services, news, and resources</li>
              <li><a href="{{ '/demo/services-portal/' | url }}"><strong>Services Portal</strong></a> - Citizen services with forms and applications</li>
              <li><a href="{{ '/demo/data-dashboard/' | url }}"><strong>Data Dashboard</strong></a> - Performance metrics and transparency reporting</li>
            </ul>
          </div>
          <div class="tablet:grid-col-6">
            <ul class="usa-list">
              <li><a href="{{ '/demo/forms-showcase/' | url }}"><strong>Forms Showcase</strong></a> - Accessible form patterns and validation</li>
              <li><a href="{{ '/demo/news-announcements/' | url }}"><strong>News & Updates</strong></a> - Press releases and public notices</li>
              <li><a href="{{ '/components/' | url }}"><strong>Component Library</strong></a> - All USWDS components with examples</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="usa-card__footer">
        <a href="{{ '/demo/' | url }}" class="usa-button">View All Demos →</a>
      </div>
    </div>
  </div>
</div>

## Why Use This Template?

<div class="grid-row grid-gap margin-top-5">
  <div class="tablet:grid-col-6">
    <h3>✅ Everything You Need</h3>
    <ul class="usa-list">
      <li><strong>Section 508 Compliant</strong> - WCAG 2.1 AA accessibility built into every component</li>
      <li><strong>Mobile Responsive</strong> - Works perfectly on all devices and screen sizes</li>
      <li><strong>SEO Optimized</strong> - Static HTML generation for superior search rankings</li>
      <li><strong>Lightning Fast</strong> - No databases, no server processing, just instant loading</li>
      <li><strong>Secure by Default</strong> - No server vulnerabilities, no databases to hack</li>
      <li><strong>Version Controlled</strong> - Full Git history and rollback capabilities</li>
    </ul>
  </div>
  <div class="tablet:grid-col-6">
    <h3>🛠️ Developer Friendly</h3>
    <ul class="usa-list">
      <li><strong>Modern Build Tools</strong> - 11ty, Sass, PostCSS, and npm scripts</li>
      <li><strong>Hot Reload</strong> - See changes instantly during development</li>
      <li><strong>Markdown Support</strong> - Write content in plain text with Markdown</li>
      <li><strong>Component Based</strong> - Reusable templates and partials</li>
      <li><strong>GitHub Actions Ready</strong> - Automated testing and deployment</li>
      <li><strong>Extensive Documentation</strong> - Clear guides for every feature</li>
    </ul>
  </div>
</div>

## Federal Compliance Checklist

<div class="usa-summary-box margin-top-4" role="region" aria-labelledby="compliance-heading">
  <div class="usa-summary-box__body">
    <h3 class="usa-summary-box__heading" id="compliance-heading">This template helps you meet:</h3>
    <div class="usa-summary-box__text">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-6">
          <ul class="usa-icon-list">
            <li class="usa-icon-list__item">
              <div class="usa-icon-list__icon text-green">
                <svg class="usa-icon" aria-hidden="true" role="img">
                  <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#check_circle"></use>
                </svg>
              </div>
              <div class="usa-icon-list__content">
                <strong>Section 508</strong> - Accessibility standards for federal agencies
              </div>
            </li>
            <li class="usa-icon-list__item">
              <div class="usa-icon-list__icon text-green">
                <svg class="usa-icon" aria-hidden="true" role="img">
                  <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#check_circle"></use>
                </svg>
              </div>
              <div class="usa-icon-list__content">
                <strong>WCAG 2.1 AA</strong> - Web Content Accessibility Guidelines
              </div>
            </li>
            <li class="usa-icon-list__item">
              <div class="usa-icon-list__icon text-green">
                <svg class="usa-icon" aria-hidden="true" role="img">
                  <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#check_circle"></use>
                </svg>
              </div>
              <div class="usa-icon-list__content">
                <strong>21st Century IDEA</strong> - Modern, mobile-friendly requirements
              </div>
            </li>
          </ul>
        </div>
        <div class="tablet:grid-col-6">
          <ul class="usa-icon-list">
            <li class="usa-icon-list__item">
              <div class="usa-icon-list__icon text-green">
                <svg class="usa-icon" aria-hidden="true" role="img">
                  <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#check_circle"></use>
                </svg>
              </div>
              <div class="usa-icon-list__content">
                <strong>Plain Writing Act</strong> - Clear, accessible content guidelines
              </div>
            </li>
            <li class="usa-icon-list__item">
              <div class="usa-icon-list__icon text-green">
                <svg class="usa-icon" aria-hidden="true" role="img">
                  <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#check_circle"></use>
                </svg>
              </div>
              <div class="usa-icon-list__content">
                <strong>Privacy Act</strong> - Privacy policy and data protection
              </div>
            </li>
            <li class="usa-icon-list__item">
              <div class="usa-icon-list__icon text-green">
                <svg class="usa-icon" aria-hidden="true" role="img">
                  <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#check_circle"></use>
                </svg>
              </div>
              <div class="usa-icon-list__content">
                <strong>FOIA</strong> - Freedom of Information Act requirements
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

## Next Steps

<div class="grid-row grid-gap margin-top-5 margin-bottom-4">
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Get Started</h3>
        </div>
        <div class="usa-card__body">
          <p>Set up your development environment and create your first page in minutes.</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/getting-started/' | url }}" class="usa-button usa-button--outline width-full">Setup Guide →</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Learn Components</h3>
        </div>
        <div class="usa-card__body">
          <p>Explore all available USWDS components with live examples and code.</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/components/' | url }}" class="usa-button usa-button--outline width-full">Component Library →</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Best Practices</h3>
        </div>
        <div class="usa-card__body">
          <p>Learn federal web standards, accessibility requirements, and compliance tips.</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/best-practices/' | url }}" class="usa-button usa-button--outline width-full">View Guide →</a>
        </div>
      </div>
    </div>
  </div>
</div>

---

<div class="text-center margin-top-4">
  <p class="font-body-lg">Ready to build your compliant government website?</p>
  <a href="{{ '/getting-started/' | url }}" class="usa-button usa-button--big">Get Started Now →</a>
  <p class="margin-top-2">
    <a href="https://github.com/your-org/uswds-11ty-template" class="usa-link">View on GitHub</a> | 
    <a href="{{ '/license/' | url }}" class="usa-link">CC0 License (Public Domain)</a>
  </p>
</div>