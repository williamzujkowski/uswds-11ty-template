---
layout: layouts/page.njk
title: Demo Pages
lead: Explore example pages that demonstrate how to use this template for common government website needs.
permalink: /demo/
sidenav: true
eleventyNavigation:
  key: Demo Pages
  order: 6
---

# Demo Pages

This section contains fully functional example pages that you can use as starting points for your own website. Each demo page shows best practices for layout, content structure, and USWDS component usage.

## Available Demo Pages

<div class="grid-row grid-gap margin-top-4">
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Services Page</h3>
        </div>
        <div class="usa-card__body">
          <p>Example of a services listing page with cards, icons, and clear calls-to-action.</p>
        </div>
        <div class="usa-card__footer">
          <a href="/services/" class="usa-button usa-button--outline">View Services Demo</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Contact Form</h3>
        </div>
        <div class="usa-card__body">
          <p>Fully accessible contact form with validation, field hints, and error handling.</p>
        </div>
        <div class="usa-card__footer">
          <a href="/contact/" class="usa-button usa-button--outline">View Contact Demo</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="grid-row grid-gap margin-top-2">
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Privacy Policy</h3>
        </div>
        <div class="usa-card__body">
          <p>Template privacy policy with all required sections for federal websites.</p>
        </div>
        <div class="usa-card__footer">
          <a href="/privacy/" class="usa-button usa-button--outline">View Privacy Demo</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">FOIA Request</h3>
        </div>
        <div class="usa-card__body">
          <p>Freedom of Information Act request page with process steps and requirements.</p>
        </div>
        <div class="usa-card__footer">
          <a href="/foia/" class="usa-button usa-button--outline">View FOIA Demo</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="grid-row grid-gap margin-top-2">
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Accessibility Statement</h3>
        </div>
        <div class="usa-card__body">
          <p>Comprehensive accessibility statement demonstrating commitment to Section 508.</p>
        </div>
        <div class="usa-card__footer">
          <a href="/accessibility/" class="usa-button usa-button--outline">View Accessibility Demo</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">No FEAR Act</h3>
        </div>
        <div class="usa-card__body">
          <p>No FEAR Act notification page with required disclosures and EEO information.</p>
        </div>
        <div class="usa-card__footer">
          <a href="/no-fear-act/" class="usa-button usa-button--outline">View No FEAR Demo</a>
        </div>
      </div>
    </div>
  </div>
</div>

## Page Types Demonstrated

### Informational Pages
These demos show how to present information clearly:
- **About Page**: Organization overview with mission and values
- **Services Page**: Service offerings with clear descriptions
- **Resources Page**: Downloadable resources and links (Note: Currently being updated)

### Interactive Pages
Examples of user interaction patterns:
- **Contact Form**: Multi-field form with validation
- **FOIA Request**: Step-by-step process with forms
- **Search Results**: Search interface with filters (coming soon)

### Compliance Pages
Required pages for federal websites:
- **Privacy Policy**: Comprehensive privacy information
- **Accessibility Statement**: Section 508 compliance details
- **No FEAR Act**: Equal employment opportunity data
- **FOIA**: Freedom of Information Act process

## Key Features Demonstrated

### Accessibility
Every demo page includes:
- Proper heading hierarchy
- Skip navigation links
- ARIA labels and roles
- Keyboard navigation support
- Screen reader optimization

### Responsive Design
All pages are fully responsive:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interfaces
- Optimized images

### USWDS Components
See real-world usage of:
- Forms and validation
- Cards and layouts
- Alerts and notifications
- Navigation patterns
- Typography styles

## How to Use These Demos

### 1. Browse the Examples
Click through each demo page to see how they're structured and styled.

### 2. View the Source
Each page's source code is available in the GitHub repository:
- Navigate to `src/pages/` in the repo
- Find the corresponding `.md` or `.njk` file
- Copy and adapt for your needs

### 3. Customize for Your Agency
- Replace placeholder content with your agency's information
- Update contact details in `src/_data/contacts.json`
- Modify styles in `src/_styles/_custom.scss`
- Add your logo and branding

### 4. Test Accessibility
Use these pages to test your accessibility tools:
- Screen readers (NVDA, JAWS, VoiceOver)
- Keyboard navigation
- Color contrast analyzers
- Automated testing tools

## Common Patterns

### Hero Sections
```html
<section class="usa-hero">
  <div class="grid-container">
    <h1>Hero Heading</h1>
    <p>Supporting text</p>
    <a href="#" class="usa-button">Call to Action</a>
  </div>
</section>
```

### Card Grids
```html
<div class="grid-row grid-gap">
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <!-- Card content -->
    </div>
  </div>
  <!-- More cards -->
</div>
```

### Process Lists
```html
<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h4>Step 1</h4>
    <p>Description</p>
  </li>
  <!-- More steps -->
</ol>
```

## Creating Your Own Pages

Based on these demos, you can create new pages:

1. **Copy a demo page** that's similar to what you need
2. **Update the front matter** with your page details
3. **Replace the content** with your information
4. **Add to navigation** in `site.json`
5. **Test thoroughly** for accessibility and responsiveness

## Need More Examples?

- View the [USWDS Examples](https://designsystem.digital.gov/templates/)
- Check our [GitHub repository]({{ site.github }}) for more code samples
- Browse other [federal websites](https://analytics.usa.gov/) using USWDS
- Join the [USWDS community](https://designsystem.digital.gov/about/community/) for support

---

*These demo pages are starting points. Customize them to meet your agency's specific needs while maintaining accessibility and compliance standards.*