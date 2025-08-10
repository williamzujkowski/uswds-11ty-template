---
layout: layouts/page.njk
title: Components
lead: Browse all available U.S. Web Design System components with live examples and code snippets.
permalink: /components/
sidenav: true
eleventyNavigation:
  key: Components
  order: 3
---

# USWDS Components

This page demonstrates all major USWDS components available in this template. Each example includes the code you need to implement it in your own pages.

## Typography

### Headings

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<!-- etc. -->
```

### Lead Paragraph

<p class="usa-intro">This is a lead paragraph. It's larger than regular body text and is typically used for introductions or key messages.</p>

```html
<p class="usa-intro">Lead paragraph text...</p>
```

### Body Text

Regular paragraph text appears like this. It uses the Public Sans font family and is optimized for readability.

**Bold text** and *italic text* are styled consistently throughout the system.

## Buttons

### Default Buttons

<div class="margin-bottom-2">
  <button class="usa-button">Default</button>
  <button class="usa-button usa-button--secondary">Secondary</button>
  <button class="usa-button usa-button--accent-cool">Accent Cool</button>
  <button class="usa-button usa-button--accent-warm">Accent Warm</button>
  <button class="usa-button usa-button--base">Base</button>
</div>

```html
<button class="usa-button">Default</button>
<button class="usa-button usa-button--secondary">Secondary</button>
<button class="usa-button usa-button--accent-cool">Accent Cool</button>
```

### Outline Buttons

<div class="margin-bottom-2">
  <button class="usa-button usa-button--outline">Outline</button>
  <button class="usa-button usa-button--outline usa-button--inverse">Inverse Outline</button>
</div>

```html
<button class="usa-button usa-button--outline">Outline</button>
```

### Button Sizes

<div class="margin-bottom-2">
  <button class="usa-button usa-button--big">Big Button</button>
  <button class="usa-button">Regular Button</button>
</div>

```html
<button class="usa-button usa-button--big">Big Button</button>
```

## Alerts

### Information Alert

<div class="usa-alert usa-alert--info margin-bottom-2">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Informational Status</h4>
    <p class="usa-alert__text">This alert provides helpful information or context.</p>
  </div>
</div>

### Success Alert

<div class="usa-alert usa-alert--success margin-bottom-2">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Success Status</h4>
    <p class="usa-alert__text">This alert confirms a successful action or positive outcome.</p>
  </div>
</div>

### Warning Alert

<div class="usa-alert usa-alert--warning margin-bottom-2">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Warning Status</h4>
    <p class="usa-alert__text">This alert warns about a potential issue.</p>
  </div>
</div>

### Error Alert

<div class="usa-alert usa-alert--error margin-bottom-2">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Error Status</h4>
    <p class="usa-alert__text">This alert indicates an error or problem.</p>
  </div>
</div>

```html
<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Alert Heading</h4>
    <p class="usa-alert__text">Alert message text.</p>
  </div>
</div>
```

## Cards

### Basic Card

<div class="usa-card margin-bottom-2">
  <div class="usa-card__container">
    <div class="usa-card__header">
      <h3 class="usa-card__heading">Card Heading</h3>
    </div>
    <div class="usa-card__body">
      <p>Card body content goes here. Cards are great for organizing related information.</p>
    </div>
    <div class="usa-card__footer">
      <button class="usa-button">Action</button>
    </div>
  </div>
</div>

```html
<div class="usa-card">
  <div class="usa-card__container">
    <div class="usa-card__header">
      <h3 class="usa-card__heading">Card Heading</h3>
    </div>
    <div class="usa-card__body">
      <p>Card content...</p>
    </div>
    <div class="usa-card__footer">
      <button class="usa-button">Action</button>
    </div>
  </div>
</div>
```

## Forms

### Text Input

<form class="usa-form margin-bottom-4">
  <label class="usa-label" for="input-text">Text input label</label>
  <input class="usa-input" id="input-text" name="input-text" type="text">
  
  <label class="usa-label" for="input-email">Email input</label>
  <input class="usa-input" id="input-email" name="input-email" type="email">
  
  <label class="usa-label" for="textarea">Text area label</label>
  <textarea class="usa-textarea" id="textarea" name="textarea"></textarea>
</form>

```html
<label class="usa-label" for="input-text">Text input label</label>
<input class="usa-input" id="input-text" name="input-text" type="text">
```

### Select Dropdown

<form class="usa-form margin-bottom-4">
  <label class="usa-label" for="options">Dropdown label</label>
  <select class="usa-select" id="options" name="options">
    <option value="">- Select -</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</form>

<!-- This section has been moved to the comprehensive Form Controls section above -->

## Tables

### Basic Table

<table class="usa-table margin-bottom-4">
  <caption>Sample data table</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Jane Smith</th>
      <td>Administration</td>
      <td>jane.smith@agency.gov</td>
      <td>555-0100</td>
    </tr>
    <tr>
      <th scope="row">John Doe</th>
      <td>Operations</td>
      <td>john.doe@agency.gov</td>
      <td>555-0101</td>
    </tr>
    <tr>
      <th scope="row">Sarah Johnson</th>
      <td>Communications</td>
      <td>sarah.johnson@agency.gov</td>
      <td>555-0102</td>
    </tr>
  </tbody>
</table>

```html
<table class="usa-table">
  <thead>
    <tr>
      <th scope="col">Header 1</th>
      <th scope="col">Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Row header</th>
      <td>Data cell</td>
    </tr>
  </tbody>
</table>
```

## Accordion

<div class="usa-accordion margin-bottom-4">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="accordion-1">
      First Amendment
    </button>
  </h4>
  <div id="accordion-1" class="usa-accordion__content usa-prose">
    <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>
  </div>
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="accordion-2">
      Second Amendment
    </button>
  </h4>
  <div id="accordion-2" class="usa-accordion__content usa-prose">
    <p>A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.</p>
  </div>
</div>

## Lists

### Icon List

<ul class="usa-icon-list margin-bottom-4">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="/assets/uswds/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Completed item</strong>
      <p>This item has been completed successfully.</p>
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="/assets/uswds/img/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Cancelled item</strong>
      <p>This item has been cancelled or rejected.</p>
    </div>
  </li>
</ul>

## Process List

<ol class="usa-process-list margin-bottom-4">
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Start your application</h4>
    <p>Fill out the online form with your basic information.</p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Submit documentation</h4>
    <p>Upload required documents to support your application.</p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Review and approval</h4>
    <p>We'll review your application and notify you of our decision.</p>
  </li>
</ol>

## Summary Box

<div class="usa-summary-box margin-bottom-4">
  <div class="usa-summary-box__body">
    <h3 class="usa-summary-box__heading">Key Information</h3>
    <div class="usa-summary-box__text">
      <p>This summary box highlights important information that users should pay attention to. It's useful for:</p>
      <ul>
        <li>Key takeaways</li>
        <li>Important dates or deadlines</li>
        <li>Quick reference information</li>
      </ul>
    </div>
  </div>
</div>

## Tags

<div class="margin-bottom-4">
  <span class="usa-tag">Default</span>
  <span class="usa-tag usa-tag--big">Big Tag</span>
  <span class="usa-tag bg-accent-warm">Accent Warm</span>
  <span class="usa-tag bg-accent-cool">Accent Cool</span>
  <span class="usa-tag bg-error">Error</span>
  <span class="usa-tag bg-success">Success</span>
</div>

```html
<span class="usa-tag">Default</span>
<span class="usa-tag usa-tag--big">Big Tag</span>
```

## Step Indicator

<div class="usa-step-indicator margin-bottom-4" aria-label="progress">
  <ol class="usa-step-indicator__segments">
    <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
      <span class="usa-step-indicator__segment-label">Personal information</span>
    </li>
    <li class="usa-step-indicator__segment usa-step-indicator__segment--current" aria-current="step">
      <span class="usa-step-indicator__segment-label">Household information</span>
    </li>
    <li class="usa-step-indicator__segment">
      <span class="usa-step-indicator__segment-label">Supporting documents</span>
    </li>
    <li class="usa-step-indicator__segment">
      <span class="usa-step-indicator__segment-label">Review and submit</span>
    </li>
  </ol>
  <div class="usa-step-indicator__header">
    <h4 class="usa-step-indicator__heading">
      <span class="usa-step-indicator__heading-counter">
        <span class="usa-step-indicator__current-step">2</span>
        <span class="usa-step-indicator__total-steps">of 4</span>
      </span>
      <span class="usa-step-indicator__heading-text">Household information</span>
    </h4>
  </div>
</div>

## Grid System

The USWDS uses a 12-column grid system with responsive breakpoints:

<div class="grid-row grid-gap margin-bottom-4">
  <div class="tablet:grid-col-4">
    <div class="padding-2 bg-base-lightest">
      .tablet:grid-col-4
    </div>
  </div>
  <div class="tablet:grid-col-4">
    <div class="padding-2 bg-base-lightest">
      .tablet:grid-col-4
    </div>
  </div>
  <div class="tablet:grid-col-4">
    <div class="padding-2 bg-base-lightest">
      .tablet:grid-col-4
    </div>
  </div>
</div>

```html
<div class="grid-row grid-gap">
  <div class="tablet:grid-col-4">Column 1</div>
  <div class="tablet:grid-col-4">Column 2</div>
  <div class="tablet:grid-col-4">Column 3</div>
</div>
```

## Utility Classes

USWDS includes many utility classes for spacing, colors, and more:

### Spacing
- `margin-top-2` - Adds top margin
- `padding-3` - Adds padding on all sides
- `margin-x-auto` - Centers horizontally

### Colors
- `text-primary` - Primary text color
- `bg-base-lightest` - Light background
- `border-error` - Error border color

### Display
- `display-none` - Hides element
- `display-block` - Block display
- `flex-justify-center` - Centers flex items

## More Resources

- [Full USWDS Documentation](https://designsystem.digital.gov/components/)
- [Component Maturity](https://designsystem.digital.gov/components/component-maturity/)
- [Design Tokens](https://designsystem.digital.gov/design-tokens/)
- [Utilities](https://designsystem.digital.gov/utilities/)

---

*Note: This page shows a subset of available components. Visit the official USWDS documentation for the complete component library.*