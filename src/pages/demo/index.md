---
layout: layouts/page.njk
title: Demo Sites
lead: Experience fully functional government website examples built with this template
permalink: /demo/
hero:
  alt: Live Demos
  heading: Demo Websites
  content: Explore complete, production-ready government website examples. Each demo showcases real-world use cases with accessibility features, responsive design, and federal compliance built in.
  button:
    text: View Agency Homepage
    href: /demo/agency-homepage/
  secondaryButton:
    text: Browse All Demos
    href: /demo/
eleventyNavigation:
  key: Demo Sites
  order: 3
---

<div class="usa-alert usa-alert--success usa-alert--slim margin-bottom-4">
  <div class="usa-alert__body">
    <p class="usa-alert__text">
      <strong>Try it yourself:</strong> All demo sites are fully interactive. Click buttons, fill forms, and explore navigation to see how everything works together.
    </p>
  </div>
</div>

## Featured Demo Sites

<div class="grid-row grid-gap margin-top-4">
  <div class="tablet:grid-col-12">
    <div class="usa-card usa-card--flag">
      <div class="usa-card__container">
        <div class="usa-card__media usa-card__media--inset">
          <div class="usa-card__img bg-primary-lighter padding-4 text-center">
            <svg class="usa-icon usa-icon--size-7 text-primary" aria-hidden="true" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#account_balance"></use>
            </svg>
          </div>
        </div>
        <div class="usa-card__body">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Federal Agency Homepage</h3>
          </div>
          <p>A complete agency website with all the essential elements: hero sections, service highlights, news updates, and citizen engagement tools. Perfect starting point for any government agency website.</p>
          <div class="margin-top-2">
            <span class="usa-tag">Hero Section</span>
            <span class="usa-tag">Service Cards</span>
            <span class="usa-tag">News Feed</span>
            <span class="usa-tag">Statistics</span>
            <span class="usa-tag">Contact Info</span>
          </div>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/agency-homepage/' | url }}" class="usa-button">View Demo</a>
          <a href="#" class="usa-button usa-button--outline">View Source</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="grid-row grid-gap margin-top-3">
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">
            <svg class="usa-icon text-primary" aria-hidden="true" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#support_agent"></use>
            </svg>
            Services Portal
          </h3>
        </div>
        <div class="usa-card__body">
          <p>Comprehensive citizen services directory with categories, detailed service information, and application processes. Shows how to organize and present multiple services effectively.</p>
          <ul class="usa-list usa-list--unstyled font-body-2xs margin-top-2">
            <li>✓ Service categorization</li>
            <li>✓ Accordion navigation</li>
            <li>✓ Process workflows</li>
            <li>✓ Fee structures</li>
          </ul>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/services-portal/' | url }}" class="usa-button width-full">Explore Services</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">
            <svg class="usa-icon text-primary" aria-hidden="true" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#insights"></use>
            </svg>
            Data Dashboard
          </h3>
        </div>
        <div class="usa-card__body">
          <p>Performance metrics and transparency reporting dashboard with KPIs, data tables, and visualizations. Perfect for agencies needing to display operational data.</p>
          <ul class="usa-list usa-list--unstyled font-body-2xs margin-top-2">
            <li>✓ Key performance indicators</li>
            <li>✓ Data tables & charts</li>
            <li>✓ Regional comparisons</li>
            <li>✓ Accessibility metrics</li>
          </ul>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/data-dashboard/' | url }}" class="usa-button width-full">View Dashboard</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="grid-row grid-gap margin-top-3">
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">
            <svg class="usa-icon text-primary" aria-hidden="true" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#article"></use>
            </svg>
            Forms Showcase
          </h3>
        </div>
        <div class="usa-card__body">
          <p>Comprehensive collection of accessible form patterns including validation, multi-step processes, and complex inputs. Essential reference for any data collection needs.</p>
          <ul class="usa-list usa-list--unstyled font-body-2xs margin-top-2">
            <li>✓ All input types</li>
            <li>✓ Form validation</li>
            <li>✓ Multi-select menus</li>
            <li>✓ Accessibility features</li>
          </ul>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/forms-showcase/' | url }}" class="usa-button width-full">View Forms</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">
            <svg class="usa-icon text-primary" aria-hidden="true" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#announcement"></use>
            </svg>
            News & Updates
          </h3>
        </div>
        <div class="usa-card__body">
          <p>News hub layout with press releases, announcements, and public notices. Shows best practices for content organization and article presentation.</p>
          <ul class="usa-list usa-list--unstyled font-body-2xs margin-top-2">
            <li>✓ Article cards</li>
            <li>✓ Category tags</li>
            <li>✓ Date formatting</li>
            <li>✓ Archive structure</li>
          </ul>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/news-announcements/' | url }}" class="usa-button width-full">Browse News</a>
        </div>
      </div>
    </div>
  </div>
</div>

## What Each Demo Includes

<div class="usa-graphic-list margin-top-5">
  <div class="usa-graphic-list__row grid-row grid-gap">
    <div class="usa-media-block tablet:grid-col">
      <div class="usa-media-block__img">
        <svg class="usa-icon usa-icon--size-3 text-primary" aria-hidden="true" role="img">
          <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#accessibility_new"></use>
        </svg>
      </div>
      <div class="usa-media-block__body">
        <h3>Full Accessibility</h3>
        <p>Every demo meets WCAG 2.1 AA standards with proper ARIA labels, keyboard navigation, and screen reader support.</p>
      </div>
    </div>
    
    <div class="usa-media-block tablet:grid-col">
      <div class="usa-media-block__img">
        <svg class="usa-icon usa-icon--size-3 text-primary" aria-hidden="true" role="img">
          <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#devices"></use>
        </svg>
      </div>
      <div class="usa-media-block__body">
        <h3>Responsive Design</h3>
        <p>All demos work perfectly on mobile, tablet, and desktop devices with touch-friendly interfaces.</p>
      </div>
    </div>
    
    <div class="usa-media-block tablet:grid-col">
      <div class="usa-media-block__img">
        <svg class="usa-icon usa-icon--size-3 text-primary" aria-hidden="true" role="img">
          <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#code"></use>
        </svg>
      </div>
      <div class="usa-media-block__body">
        <h3>Clean Code</h3>
        <p>Well-commented source code available for every demo page. Copy, paste, and customize for your needs.</p>
      </div>
    </div>
  </div>
</div>

## How to Use These Demos

<ol class="usa-process-list margin-top-5">
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Explore the Live Demos</h3>
    <p>Click through each demo to experience the user interface and interactions. Try different screen sizes and test with keyboard navigation.</p>
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">View the Source Code</h3>
    <p>Find the corresponding <code>.md</code> files in <code>src/pages/demo/</code> directory. Each file contains the complete page structure and content.</p>
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Copy and Customize</h3>
    <p>Use any demo as a starting point. Replace the placeholder content with your agency's information while keeping the structure intact.</p>
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Test and Deploy</h3>
    <p>Run accessibility tests, verify responsive behavior, and deploy your customized version to production.</p>
  </li>
</ol>

## Quick Reference

<div class="usa-table-container--scrollable margin-top-4" tabindex="0">
  <table class="usa-table usa-table--striped">
    <caption>Demo sites and their primary use cases</caption>
    <thead>
      <tr>
        <th scope="col">Demo Site</th>
        <th scope="col">Best For</th>
        <th scope="col">Key Components</th>
        <th scope="col">View</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Agency Homepage</th>
        <td>Main agency websites</td>
        <td>Hero, cards, news, stats</td>
        <td><a href="{{ '/demo/agency-homepage/' | url }}">View →</a></td>
      </tr>
      <tr>
        <th scope="row">Services Portal</th>
        <td>Service directories</td>
        <td>Categories, accordions, process lists</td>
        <td><a href="{{ '/demo/services-portal/' | url }}">View →</a></td>
      </tr>
      <tr>
        <th scope="row">Data Dashboard</th>
        <td>Performance reporting</td>
        <td>KPIs, tables, charts, metrics</td>
        <td><a href="{{ '/demo/data-dashboard/' | url }}">View →</a></td>
      </tr>
      <tr>
        <th scope="row">Forms Showcase</th>
        <td>Data collection</td>
        <td>All input types, validation</td>
        <td><a href="{{ '/demo/forms-showcase/' | url }}">View →</a></td>
      </tr>
      <tr>
        <th scope="row">News & Updates</th>
        <td>Communications</td>
        <td>Articles, tags, dates</td>
        <td><a href="{{ '/demo/news-announcements/' | url }}">View →</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Additional Resources

<div class="usa-summary-box margin-top-4" role="region" aria-labelledby="resources-heading">
  <div class="usa-summary-box__body">
    <h3 class="usa-summary-box__heading" id="resources-heading">Need More Help?</h3>
    <div class="usa-summary-box__text">
      <ul class="usa-icon-list">
        <li class="usa-icon-list__item">
          <div class="usa-icon-list__icon text-primary">
            <svg class="usa-icon" aria-hidden="true" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#description"></use>
            </svg>
          </div>
          <div class="usa-icon-list__content">
            View detailed documentation in our <a href="{{ '/getting-started/' | url }}">Getting Started guide</a>
          </div>
        </li>
        <li class="usa-icon-list__item">
          <div class="usa-icon-list__icon text-primary">
            <svg class="usa-icon" aria-hidden="true" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#palette"></use>
            </svg>
          </div>
          <div class="usa-icon-list__content">
            Browse individual <a href="{{ '/components/' | url }}">USWDS components</a> with code examples
          </div>
        </li>
        <li class="usa-icon-list__item">
          <div class="usa-icon-list__icon text-primary">
            <svg class="usa-icon" aria-hidden="true" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#github"></use>
            </svg>
          </div>
          <div class="usa-icon-list__content">
            Get the source code from our <a href="https://github.com/williamzujkowski/uswds-11ty-template">GitHub repository</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

---

<div class="text-center margin-top-5">
  <p class="font-body-lg">Ready to build your own site?</p>
  <a href="{{ '/getting-started/' | url }}" class="usa-button usa-button--big">Get Started →</a>
  <p class="margin-top-2 font-body-2xs">
    Or continue exploring: <a href="{{ '/components/' | url }}">View Components</a> | <a href="{{ '/best-practices/' | url }}">Best Practices</a>
  </p>
</div>