---
layout: layouts/page.njk
title: Best Practices
lead: Follow these guidelines to ensure your website meets federal standards for accessibility, performance, and user experience.
permalink: /best-practices/
sidenav: true
eleventyNavigation:
  key: Best Practices
  order: 5
---

# Best Practices for Federal Websites

This guide covers essential best practices for building and maintaining federally compliant websites using this template.

## Accessibility

### WCAG 2.1 AA Compliance

Federal websites must meet WCAG 2.1 Level AA standards. Key requirements:

#### Perceivable
- **Text Alternatives**: Provide alt text for all images
- **Captions**: Include captions for videos
- **Color Contrast**: Maintain 4.5:1 ratio for normal text, 3:1 for large text
- **Resize Text**: Support 200% zoom without horizontal scrolling

```html
<!-- Good: Descriptive alt text -->
<img src="chart.png" alt="Bar chart showing 30% increase in applications from 2020 to 2023">

<!-- Bad: Generic alt text -->
<img src="chart.png" alt="Chart">
```

#### Operable
- **Keyboard Navigation**: All functionality available via keyboard
- **Skip Links**: Provide skip navigation links
- **Focus Indicators**: Visible focus indicators for all interactive elements
- **Time Limits**: Provide warnings and extensions for time limits

```html
<!-- Skip navigation -->
<a class="usa-skipnav" href="#main-content">Skip to main content</a>

<!-- Keyboard accessible button -->
<button type="button" 
        onclick="handleClick()" 
        onkeypress="handleKeyPress(event)">
  Click me
</button>
```

#### Understandable
- **Language**: Declare page language
- **Labels**: Clear labels for form inputs
- **Error Messages**: Helpful error identification and suggestions
- **Consistent Navigation**: Same navigation structure across pages

```html
<!-- Declare language -->
<html lang="en">

<!-- Clear form labels -->
<label for="email">
  Email Address
  <span class="usa-hint">We'll only use this to respond to your inquiry</span>
</label>
<input type="email" id="email" name="email" required>
```

### Testing Accessibility

#### Automated Testing
```bash
# Using Pa11y
npm install -g pa11y
pa11y https://your-site.gov

# Using Axe DevTools
npm install -g @axe-core/cli
axe https://your-site.gov
```

#### Manual Testing Checklist
- [ ] Navigate using only keyboard (Tab, Enter, Arrow keys)
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Check color contrast with browser tools
- [ ] Zoom to 200% and verify no horizontal scroll
- [ ] Disable CSS and verify content structure
- [ ] Test with browser's reader mode

## Performance

### Core Web Vitals

Target these metrics for optimal user experience:

- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100 milliseconds  
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Techniques

#### Images
```html
<!-- Use responsive images -->
<picture>
  <source 
    media="(min-width: 1024px)" 
    srcset="hero-large.webp 1920w, hero-large-2x.webp 3840w"
    sizes="100vw">
  <source 
    media="(min-width: 640px)" 
    srcset="hero-medium.webp 1024w, hero-medium-2x.webp 2048w"
    sizes="100vw">
  <img 
    src="hero-small.jpg" 
    srcset="hero-small.webp 640w, hero-small-2x.webp 1280w"
    sizes="100vw"
    alt="Hero image description"
    loading="lazy"
    decoding="async">
</picture>
```

#### Critical CSS
```html
<!-- Inline critical CSS -->
<style>
  /* Critical above-the-fold styles */
  .hero { /* ... */ }
</style>

<!-- Load non-critical CSS asynchronously -->
<link rel="preload" href="/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

#### JavaScript Loading
```html
<!-- Defer non-critical scripts -->
<script src="/js/analytics.js" defer></script>

<!-- Async for independent scripts -->
<script src="/js/chat-widget.js" async></script>

<!-- Module scripts are deferred by default -->
<script type="module" src="/js/app.js"></script>
```

## Content Strategy

### Plain Language

Follow federal plain language guidelines:

#### Before
> "Pursuant to the requirements set forth in Section 508 of the Rehabilitation Act, electronic and information technology developed, procured, maintained, or used by federal agencies must be accessible."

#### After  
> "Federal agencies must make their electronic content accessible to people with disabilities, as required by Section 508."

### Content Structure

```markdown
# Clear, Descriptive Heading

Lead paragraph that summarizes the key points.

## Organized Sections

- Use bullet points for lists
- Keep paragraphs short (2-3 sentences)
- One idea per paragraph

### Subsections for Details

Break complex information into digestible chunks.
```

### Writing for the Web

- **Front-load content**: Put most important information first
- **Use headings**: Break up content with descriptive headings
- **Active voice**: "We will process your application" not "Your application will be processed"
- **Short sentences**: Aim for 20 words or less
- **Common words**: Use "help" instead of "facilitate"

## Security

### Content Security Policy

```html
<!-- Implement CSP headers -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://dap.digitalgov.gov; 
               style-src 'self' 'unsafe-inline';
               img-src 'self' data: https:;
               font-src 'self' data:;">
```

### HTTPS Requirements

- Always use HTTPS in production
- Implement HSTS headers
- Update all resource URLs to HTTPS

```javascript
// Redirect HTTP to HTTPS
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
  location.protocol = 'https:';
}
```

### Data Protection

```javascript
// Sanitize user input
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

// Validate email addresses
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
```

## SEO & Metadata

### Essential Meta Tags

```html
<head>
  <!-- Basic metadata -->
  <title>Page Title - Agency Name</title>
  <meta name="description" content="Clear description under 160 characters">
  
  <!-- Open Graph for social sharing -->
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Page description">
  <meta property="og:image" content="https://agency.gov/image.jpg">
  <meta property="og:url" content="https://agency.gov/page">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@agencyhandle">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://agency.gov/page">
</head>
```

### Structured Data

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "GovernmentService",
  "name": "Service Name",
  "description": "Service description",
  "provider": {
    "@type": "GovernmentOrganization",
    "name": "Agency Name"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Citizens"
  }
}
</script>
```

## Mobile Responsiveness

### Mobile-First Design

```scss
// Start with mobile styles
.component {
  padding: 1rem;
  font-size: 1rem;
}

// Add tablet styles
@media (min-width: 640px) {
  .component {
    padding: 1.5rem;
    font-size: 1.125rem;
  }
}

// Add desktop styles
@media (min-width: 1024px) {
  .component {
    padding: 2rem;
    font-size: 1.25rem;
  }
}
```

### Touch Targets

Ensure touch targets are at least 44×44 pixels:

```css
.usa-button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}

.link-list a {
  display: inline-block;
  padding: 8px 0;
  margin: 4px 0;
}
```

## Forms Best Practices

### Accessible Forms

```html
<form class="usa-form">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Contact Information</legend>
    
    <!-- Required field -->
    <label class="usa-label" for="name">
      Full Name <abbr title="required" class="usa-hint--required">*</abbr>
    </label>
    <span class="usa-hint" id="name-hint">Enter your first and last name</span>
    <input 
      class="usa-input" 
      id="name" 
      name="name" 
      type="text"
      aria-describedby="name-hint"
      required>
    
    <!-- Error message -->
    <div class="usa-form-group usa-form-group--error">
      <label class="usa-label usa-label--error" for="email">
        Email Address
      </label>
      <span class="usa-error-message" role="alert">
        Please enter a valid email address
      </span>
      <input 
        class="usa-input usa-input--error" 
        id="email" 
        name="email" 
        type="email"
        aria-invalid="true"
        aria-describedby="email-error">
    </div>
  </fieldset>
  
  <button type="submit" class="usa-button">Submit</button>
</form>
```

### Progressive Enhancement

```javascript
// Check if JavaScript is available
document.documentElement.className = 
  document.documentElement.className.replace('no-js', 'js');

// Enhance form if JS is enabled
if (document.documentElement.classList.contains('js')) {
  // Add client-side validation
  // Add dynamic form fields
  // Enable autosave
}
```

## Analytics & Privacy

### Digital Analytics Program (DAP)

```html
<!-- Include DAP for federal analytics -->
<script async src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=AGENCY"></script>
```

### Privacy Considerations

- Don't track personally identifiable information (PII)
- Provide clear privacy policy
- Allow users to opt-out of tracking
- Follow federal privacy requirements

```javascript
// Check for Do Not Track
if (navigator.doNotTrack === "1") {
  // Disable analytics
  window['ga-disable-GA_MEASUREMENT_ID'] = true;
}
```

## Testing Checklist

### Pre-Launch
- [ ] Accessibility audit (automated and manual)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Performance testing (Lighthouse, WebPageTest)
- [ ] Security scan
- [ ] Broken link check
- [ ] Form testing (validation, submission)
- [ ] Search functionality
- [ ] Print styles

### Post-Launch
- [ ] Monitor analytics
- [ ] Check error logs
- [ ] Review user feedback
- [ ] Test critical user paths
- [ ] Verify backups
- [ ] Check SSL certificate

## Compliance Requirements

### Required Pages
Every federal website should include:

- [ ] Privacy Policy
- [ ] Accessibility Statement
- [ ] FOIA (Freedom of Information Act)
- [ ] No FEAR Act Notice
- [ ] Contact Information
- [ ] Site Map

### Legal Requirements
- **Section 508**: Accessibility compliance
- **21st Century IDEA**: Modern, mobile-friendly design
- **Privacy Act**: Protect user information
- **Paperwork Reduction Act**: OMB approval for information collection
- **Plain Writing Act**: Clear, simple language

## Resources

### Testing Tools
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance and accessibility
- [Pa11y](https://pa11y.org/) - Automated accessibility testing
- [NVDA](https://www.nvaccess.org/) - Screen reader for testing

### Guidelines & Standards
- [USWDS Documentation](https://designsystem.digital.gov/)
- [Section 508 Standards](https://www.section508.gov/)
- [Plain Language Guidelines](https://www.plainlanguage.gov/)
- [Digital.gov Resources](https://digital.gov/)

### Communities
- [USWDS Slack](https://chat.18f.gov/)
- [Government UX Community](https://digital.gov/communities/user-experience/)
- [Section 508 Community](https://www.section508.gov/manage/join-the-508-community/)

---

*Following these best practices ensures your website serves all users effectively while meeting federal requirements and standards.*