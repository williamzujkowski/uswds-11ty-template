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

## Comprehensive Demo Pages

Experience fully-featured government website templates that demonstrate best practices for federal agencies. Each page includes comprehensive examples with government-themed content, accessibility features, and implementation details.

<div class="usa-alert usa-alert--info usa-alert--slim margin-bottom-4">
  <div class="usa-alert__body">
    <p class="usa-alert__text">These demo pages use placeholder content from fictitious agencies to demonstrate layout and functionality. All content is politically neutral and suitable for adaptation to real government websites.</p>
  </div>
</div>

<div class="grid-row grid-gap margin-top-4">
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Agency Homepage</h3>
        </div>
        <div class="usa-card__body">
          <p>Complete agency homepage featuring hero sections, service highlights, news, and citizen engagement tools.</p>
          <p class="font-body-2xs text-base-dark margin-top-1">Features: Hero, Cards, Process List, Recent News</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/agency-homepage/' | url }}" class="usa-button">View Homepage Demo</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Services Portal</h3>
        </div>
        <div class="usa-card__body">
          <p>Comprehensive services directory with categorized listings, search functionality, and detailed service information.</p>
          <p class="font-body-2xs text-base-dark margin-top-1">Features: Service Cards, Categories, Process Steps</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/services-portal/' | url }}" class="usa-button">View Services Demo</a>
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
          <h3 class="usa-card__heading">News & Announcements</h3>
        </div>
        <div class="usa-card__body">
          <p>News and announcements layout with article previews, categories, and press release formats.</p>
          <p class="font-body-2xs text-base-dark margin-top-1">Features: Article Cards, Tags, Date Formatting</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/news-announcements/' | url }}" class="usa-button">View News Demo</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Forms Showcase</h3>
        </div>
        <div class="usa-card__body">
          <p>Comprehensive form examples including contact forms, application forms, and complex multi-step processes.</p>
          <p class="font-body-2xs text-base-dark margin-top-1">Features: Input Types, Validation, Fieldsets, Help Text</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/forms-showcase/' | url }}" class="usa-button">View Forms Demo</a>
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
          <h3 class="usa-card__heading">Data Dashboard</h3>
        </div>
        <div class="usa-card__body">
          <p>Government data visualization and dashboard layouts with statistics, charts, and performance metrics.</p>
          <p class="font-body-2xs text-base-dark margin-top-1">Features: Summary Cards, Tables, Data Visualization</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/data-dashboard/' | url }}" class="usa-button">View Dashboard Demo</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Existing Pages</h3>
        </div>
        <div class="usa-card__body">
          <p>View existing template pages for compliance and basic functionality:</p>
          <ul class="usa-list usa-list--unstyled">
            <li><a href="/services/">Services Overview</a></li>
            <li><a href="/contact/">Contact Form</a></li>
            <li><a href="/privacy/">Privacy Policy</a></li>
            <li><a href="/accessibility/">Accessibility</a></li>
            <li><a href="/foia/">FOIA Requests</a></li>
          </ul>
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