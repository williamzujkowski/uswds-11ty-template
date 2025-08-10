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

This comprehensive guide covers essential best practices for building and maintaining federally compliant websites using this template. Following these practices ensures your website serves all users effectively while meeting federal requirements and standards.

<div class="usa-summary-box margin-bottom-4">
  <div class="usa-summary-box__body">
    <h3 class="usa-summary-box__heading">Quick Compliance Checklist</h3>
    <div class="usa-summary-box__text">
      <ul class="usa-list">
        <li><strong>Section 508</strong>: Meet WCAG 2.1 AA accessibility standards</li>
        <li><strong>21st Century IDEA</strong>: Modern, mobile-responsive design</li>
        <li><strong>Privacy Act</strong>: Protect user information and data</li>
        <li><strong>Plain Language</strong>: Clear, simple communication</li>
        <li><strong>Digital Analytics</strong>: DAP implementation for federal sites</li>
      </ul>
    </div>
  </div>
</div>

## Table of Contents

1. [Accessibility Compliance](#accessibility-compliance)
2. [Federal Legal Requirements](#federal-legal-requirements)
3. [Performance & User Experience](#performance-user-experience)
4. [Content Strategy & Plain Language](#content-strategy-plain-language)
5. [Security & Privacy](#security-privacy)
6. [Mobile Responsiveness](#mobile-responsiveness)
7. [SEO & Discoverability](#seo-discoverability)
8. [Testing & Quality Assurance](#testing-quality-assurance)
9. [Maintenance & Updates](#maintenance-updates)

## Accessibility Compliance

### WCAG 2.1 AA Compliance

All federal websites must meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards under Section 508 of the Rehabilitation Act. This ensures your website is accessible to people with disabilities, including those who use screen readers, keyboard navigation, or other assistive technologies.

**The Four Principles of Accessibility (POUR):**

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

**Command Line Testing:**
```bash
# Using Pa11y (comprehensive testing)
npm install -g pa11y
pa11y https://your-site.gov --standard WCAG2AA

# Test multiple pages
pa11y-ci --sitemap https://your-site.gov/sitemap.xml

# Using Axe CLI
npm install -g @axe-core/cli
axe https://your-site.gov --rules wcag2a,wcag2aa,wcag21aa

# Integration testing with this template
npm run test:a11y  # Built-in accessibility testing
```

**Browser Extensions:**
- **axe DevTools** (Chrome, Firefox): Real-time accessibility scanning
- **WAVE** (Web Accessibility Evaluation Tool): Visual accessibility testing
- **Lighthouse** (Built into Chrome): Comprehensive audits including accessibility

#### Manual Testing Checklist

**Keyboard Navigation (Required for all interactive elements):**
- Navigate using only keyboard (Tab, Enter, Arrow keys, Space)
- Verify logical tab order follows visual layout
- Check all interactive elements are focusable
- Test dropdown menus and modal dialogs
- Ensure skip links work properly
- Test form navigation and submission

**Screen Reader Testing (Test with at least one):**
- **NVDA** (free, Windows): Download from nvaccess.org
- **JAWS** (Windows): Most used by federal employees
- **VoiceOver** (macOS, iOS): Built-in to Apple devices
- **TalkBack** (Android): Built-in Android screen reader

**Visual & Content Testing:**
- Check color contrast with browser tools (4.5:1 normal text, 3:1 large text)
- Zoom to 200% and verify no horizontal scroll
- Test with Windows High Contrast mode
- Disable CSS and verify content structure makes sense
- Test with browser's reader mode
- Verify all images have meaningful alt text

**Testing Script Example:**
```bash
#!/bin/bash
# accessibility-test.sh - Comprehensive accessibility testing

echo "Starting accessibility tests..."

# Start local server if needed
npm run start &
SERVER_PID=$!
sleep 5

# Run automated tests
echo "Running Pa11y tests..."
pa11y http://localhost:8080 --standard WCAG2AA --reporter cli

echo "Running Lighthouse accessibility audit..."
lighthouse http://localhost:8080 --only-categories=accessibility --output=html --output-path=./reports/accessibility-report.html

# Stop server
kill $SERVER_PID

echo "Tests complete. Check ./reports/ for detailed results."
```

## Federal Legal Requirements

### Section 508 Rehabilitation Act

**Key Requirements:**
- Electronic content must be accessible to people with disabilities
- Applies to all federal agencies and contractors
- Based on WCAG 2.0 Level AA (updated to WCAG 2.1)

**Implementation Checklist:**
- Semantic HTML structure
- Proper heading hierarchy (h1-h6)
- Alternative text for images
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Form labels and error messages

### 21st Century Integrated Digital Experience Act (IDEA)

**Requirements:**
- Websites must be mobile-friendly
- Must have a consistent appearance
- Must be accessible
- Must use a secure connection (HTTPS)
- Must have a search function
- Must provide contact information

**Template Compliance:**
```html
<!-- This template includes all IDEA requirements: -->

<!-- Mobile-friendly responsive design -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Consistent USWDS appearance -->
<link rel="stylesheet" href="/assets/css/main.css">

<!-- Search functionality -->
<form class="usa-search usa-search--small">
  <div role="search">
    <label class="usa-sr-only" for="search-field-small">Search</label>
    <input class="usa-input" id="search-field-small" type="search" name="search">
    <button class="usa-button" type="submit">
      <span class="usa-sr-only">Search</span>
    </button>
  </div>
</form>

<!-- Contact information in footer -->
<div class="usa-footer__contact-info">
  <a href="/contact/">Contact Us</a>
</div>
```

### Plain Writing Act of 2010

**Requirements:**
- Use plain language in government documents
- Write for your audience
- Organize information logically
- Use active voice
- Use short sentences

**Writing Guidelines:**
```markdown
<!-- Bad -->
# Utilization of Electronic Communication Systems
Pursuant to agency regulations, the utilization of electronic
communication systems for the transmission of information...

<!-- Good -->
# How to Use Email
You can use email to send information to other employees.
```

### Privacy Act of 1974

**Key Requirements:**
- Protect personal information
- Provide privacy notices
- Limit data collection to necessary information
- Provide users control over their data

**Implementation:**
```html
<!-- Privacy notice example -->
<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Privacy Notice</h4>
    <p class="usa-alert__text">
      This form collects personal information under the authority of [Legal Authority].
      The information will be used to [Purpose]. Providing this information is
      [voluntary/required]. See our <a href="/privacy/">Privacy Policy</a> for details.
    </p>
  </div>
</div>
```

### Paperwork Reduction Act

**Requirements:**
- OMB approval for information collection from the public
- Display OMB control numbers
- Estimate burden time

**Form Requirements:**
```html
<!-- OMB approval notice -->
<div class="usa-form-note">
  <p><strong>OMB Control Number:</strong> 1234-5678</p>
  <p><strong>Expiration Date:</strong> 12/31/2025</p>
  <p><strong>Estimated Burden:</strong> 15 minutes</p>
  <p>
    <small>
      The Paperwork Reduction Act requires us to tell you why we are collecting
      this information, how we will use it, and whether you have to give it to us.
    </small>
  </p>
</div>
```

## Performance & User Experience

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

### Additional Performance Monitoring

**Real User Monitoring (RUM):**
```javascript
// Monitor Core Web Vitals
function observeWebVitals() {
  // Largest Contentful Paint
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  }).observe({entryTypes: ['largest-contentful-paint']});
  
  // First Input Delay
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      console.log('FID:', entry.processingStart - entry.startTime);
    });
  }).observe({entryTypes: ['first-input']});
  
  // Cumulative Layout Shift
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (!entry.hadRecentInput) {
        console.log('CLS:', entry.value);
      }
    });
  }).observe({entryTypes: ['layout-shift']});
}

// Initialize monitoring
if ('PerformanceObserver' in window) {
  observeWebVitals();
}
```

**Performance Budget Example:**
```json
{
  "performanceBudget": {
    "firstContentfulPaint": "2s",
    "firstMeaningfulPaint": "2s",
    "largestContentfulPaint": "2.5s",
    "interactive": "3.8s",
    "firstInputDelay": "100ms",
    "cumulativeLayoutShift": "0.1",
    "totalBlockingTime": "300ms",
    "bundle": "170kb",
    "requests": "20"
  }
}
```

## Content Strategy & Plain Language

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

### Content Auditing Process

**Quarterly Content Review Checklist:**
- Review all page content for accuracy
- Check for outdated information
- Verify all links work correctly
- Update contact information
- Review forms and processes
- Check compliance with current regulations
- Validate accessibility of new content

**Content Governance:**
```markdown
# Content Approval Process
1. **Draft**: Content creator writes initial draft
2. **SME Review**: Subject matter expert reviews for accuracy
3. **Editorial Review**: Editor checks for plain language compliance
4. **Legal Review**: Legal team reviews for compliance (if needed)
5. **Accessibility Review**: Check for accessibility issues
6. **Final Approval**: Department head approves for publication
7. **Publishing**: Web team publishes content
8. **Review Schedule**: Set next review date
```

### Translation and Multilingual Support

**Executive Order 13166 Requirements:**
- Provide meaningful access for Limited English Proficiency (LEP) individuals
- Identify frequently encountered languages in your service area
- Translate vital documents

**Implementation Example:**
```html
<!-- Language selector -->
<div class="usa-language-selector">
  <ul class="usa-language-selector__list">
    <li class="usa-language-selector__list-item">
      <a href="/" class="usa-language-selector__link" hreflang="en" lang="en">
        English
      </a>
    </li>
    <li class="usa-language-selector__list-item">
      <a href="/es/" class="usa-language-selector__link" hreflang="es" lang="es">
        Español
      </a>
    </li>
  </ul>
</div>

<!-- Page language declaration -->
<html lang="en">

<!-- Alternative language versions -->
<link rel="alternate" hreflang="es" href="https://agency.gov/es/page/">
<link rel="alternate" hreflang="x-default" href="https://agency.gov/page/">
```

## Security & Privacy

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

### Advanced Security Headers

**Security Headers Implementation:**
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://dap.digitalgov.gov https://www.googletagmanager.com; 
               style-src 'self' 'unsafe-inline';
               img-src 'self' data: https: *.gov;
               font-src 'self' data:;
               connect-src 'self' https://analytics.usa.gov;
               frame-ancestors 'none';
               base-uri 'self';
               object-src 'none';">

<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
<meta http-equiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()">
```

**Server Security Configuration (.htaccess example):**
```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Security Headers
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "DENY"
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Remove server signature
ServerTokens Prod
ServerSignature Off
```

### Privacy Implementation

**Cookie Consent (if cookies are used):**
```html
<div id="cookie-notice" class="usa-alert usa-alert--info" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Cookie Notice</h4>
    <p class="usa-alert__text">
      This website uses cookies to enhance user experience and analyze website traffic.
      By continuing to use this site, you consent to our use of cookies.
      <a href="/privacy/">Learn more about our privacy practices</a>.
    </p>
    <button class="usa-button usa-button--outline" onclick="acceptCookies()">
      Accept
    </button>
  </div>
</div>

<script>
function acceptCookies() {
  localStorage.setItem('cookieConsent', 'true');
  document.getElementById('cookie-notice').style.display = 'none';
}

// Check if consent already given
if (localStorage.getItem('cookieConsent')) {
  document.getElementById('cookie-notice').style.display = 'none';
}
</script>
```

**Data Minimization Example:**
```html
<!-- Only collect necessary information -->
<form class="usa-form">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Contact Information (Required fields only)</legend>
    
    <label class="usa-label" for="name">
      Full Name <abbr title="required" class="usa-hint--required">*</abbr>
    </label>
    <input class="usa-input" id="name" name="name" type="text" required>
    
    <label class="usa-label" for="email">
      Email Address <abbr title="required" class="usa-hint--required">*</abbr>
    </label>
    <span class="usa-hint">We'll only use this to respond to your inquiry</span>
    <input class="usa-input" id="email" name="email" type="email" required>
    
    <!-- Don't ask for unnecessary personal information -->
    <!-- Remove: SSN, birth date, phone (unless truly needed) -->
  </fieldset>
</form>
```

## SEO & Discoverability

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

### Advanced SEO Implementation

**Schema.org Structured Data for Government:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  "name": "Your Agency Name",
  "alternateName": "AGENCY",
  "url": "https://agency.gov",
  "logo": "https://agency.gov/assets/img/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "1-800-AGENCY",
    "contactType": "customer service",
    "availableLanguage": ["English", "Spanish"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Government Way",
    "addressLocality": "Washington",
    "addressRegion": "DC",
    "postalCode": "20500",
    "addressCountry": "US"
  },
  "parentOrganization": {
    "@type": "GovernmentOrganization",
    "name": "United States Government"
  }
}
</script>
```

**Government Service Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "GovernmentService",
  "name": "Service Name",
  "description": "Service description",
  "provider": {
    "@type": "GovernmentOrganization",
    "name": "Your Agency Name"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Citizens"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Online",
    "serviceUrl": "https://agency.gov/service"
  }
}
</script>
```

**XML Sitemap Enhancement:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <url>
    <loc>https://agency.gov/page-url/</loc>
    <lastmod>2023-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
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

### Progressive Web App (PWA) Features

**Web App Manifest:**
```json
{
  "name": "Your Agency Name",
  "short_name": "AGENCY",
  "description": "Agency description",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#005ea2",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/assets/img/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/assets/img/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

**Service Worker for Offline Support:**
```javascript
// sw.js - Basic service worker for government sites
const CACHE_NAME = 'gov-site-v1';
const urlsToCache = [
  '/',
  '/assets/css/main.css',
  '/assets/js/main.js',
  '/offline.html'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // Show offline page for navigation requests
        if (event.request.destination === 'document') {
          return caches.match('/offline.html');
        }
      })
  );
});
```

### Mobile Testing Checklist

**Device Testing:**
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Android tablet (Chrome)
- Test landscape and portrait orientations
- Test with different screen sizes

**Accessibility on Mobile:**
- Test with VoiceOver (iOS)
- Test with TalkBack (Android)
- Verify touch targets are at least 44px
- Check swipe gestures work properly
- Test with device zoom enabled

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

### Advanced Form Validation

**Client-Side Validation with Accessibility:**
```javascript
class AccessibleFormValidator {
  constructor(form) {
    this.form = form;
    this.errorSummary = null;
    this.init();
  }

  init() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    this.createErrorSummary();
  }

  createErrorSummary() {
    this.errorSummary = document.createElement('div');
    this.errorSummary.className = 'usa-alert usa-alert--error';
    this.errorSummary.setAttribute('role', 'alert');
    this.errorSummary.setAttribute('aria-live', 'polite');
    this.errorSummary.style.display = 'none';
    this.form.insertBefore(this.errorSummary, this.form.firstChild);
  }

  handleSubmit(event) {
    const errors = this.validateForm();
    if (errors.length > 0) {
      event.preventDefault();
      this.displayErrors(errors);
      this.focusFirstError();
    }
  }

  validateForm() {
    const errors = [];
    const inputs = this.form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      const error = this.validateField(input);
      if (error) {
        errors.push(error);
      }
    });
    
    return errors;
  }

  validateField(field) {
    // Remove existing error styling
    field.classList.remove('usa-input--error');
    field.setAttribute('aria-invalid', 'false');
    
    let error = null;
    
    if (field.hasAttribute('required') && !field.value.trim()) {
      error = {
        field: field,
        message: `${this.getFieldLabel(field)} is required.`
      };
    } else if (field.type === 'email' && field.value && !this.isValidEmail(field.value)) {
      error = {
        field: field,
        message: `Please enter a valid email address.`
      };
    }
    
    if (error) {
      field.classList.add('usa-input--error');
      field.setAttribute('aria-invalid', 'true');
    }
    
    return error;
  }

  displayErrors(errors) {
    const errorList = errors.map(error => 
      `<li><a href="#${error.field.id}">${error.message}</a></li>`
    ).join('');
    
    this.errorSummary.innerHTML = `
      <div class="usa-alert__body">
        <h4 class="usa-alert__heading">Please correct the following errors:</h4>
        <ul class="usa-list">${errorList}</ul>
      </div>
    `;
    
    this.errorSummary.style.display = 'block';
  }

  focusFirstError() {
    const firstError = this.form.querySelector('.usa-input--error');
    if (firstError) {
      firstError.focus();
    }
  }

  getFieldLabel(field) {
    const label = this.form.querySelector(`label[for="${field.id}"]`);
    return label ? label.textContent.trim().replace('*', '') : field.name;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// Initialize validator on all forms
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.usa-form').forEach(form => {
    new AccessibleFormValidator(form);
  });
});
```

### Multi-Step Forms

**Step Indicator Implementation:**
```html
<div class="usa-step-indicator usa-step-indicator--counters-sm" aria-label="Application progress">
  <ol class="usa-step-indicator__segments">
    <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
      <span class="usa-step-indicator__segment-label">Personal information</span>
    </li>
    <li class="usa-step-indicator__segment usa-step-indicator__segment--current" aria-current="step">
      <span class="usa-step-indicator__segment-label">Employment history</span>
    </li>
    <li class="usa-step-indicator__segment">
      <span class="usa-step-indicator__segment-label">Review and submit</span>
    </li>
  </ol>
  <div class="usa-step-indicator__header">
    <h4 class="usa-step-indicator__heading">
      <span class="usa-step-indicator__heading-counter">
        <span class="usa-step-indicator__current-step">2</span>
        <span class="usa-step-indicator__total-steps">of 3</span>
      </span>
      <span class="usa-step-indicator__heading-text">Employment history</span>
    </h4>
  </div>
</div>
```

## Testing & Quality Assurance

### Comprehensive Testing Strategy

**Testing Pyramid for Government Sites:**
```bash
#!/bin/bash
# comprehensive-test.sh - Full testing suite

echo "🧪 Starting comprehensive testing suite..."

# 1. Lint and code quality
echo "📋 Running linters..."
npm run lint:js
npm run lint:scss
npm run format -- --check

# 2. Build the site
echo "🏗️ Building site..."
npm run build

# 3. Start test server
echo "🚀 Starting test server..."
npx http-server _site -p 8080 &
SERVER_PID=$!
sleep 3

# 4. Accessibility testing
echo "♿ Testing accessibility..."
pa11y http://localhost:8080 --standard WCAG2AA --reporter cli
pa11y http://localhost:8080/best-practices/ --standard WCAG2AA --reporter cli
pa11y http://localhost:8080/components/ --standard WCAG2AA --reporter cli

# 5. Performance testing
echo "⚡ Testing performance..."
lighthouse http://localhost:8080 \
  --output=html \
  --output-path=./reports/lighthouse-$(date +%Y%m%d).html \
  --chrome-flags="--headless --no-sandbox"

# 6. Security testing
echo "🔒 Testing security headers..."
curl -I http://localhost:8080 | grep -E '(X-|Strict-|Content-Security)'

# 7. Link checking
echo "🔗 Checking links..."
if command -v linkchecker &> /dev/null; then
  linkchecker http://localhost:8080
else
  echo "Install linkchecker for link validation: pip install linkchecker"
fi

# 8. HTML validation
echo "📝 Validating HTML..."
if command -v tidy &> /dev/null; then
  curl -s http://localhost:8080 | tidy -e -q
else
  echo "Install tidy for HTML validation: sudo apt-get install tidy"
fi

# Cleanup
kill $SERVER_PID

echo "✅ Testing complete! Check ./reports/ for detailed results."
```

**Cross-Browser Testing:**
```javascript
// browser-test-config.js
module.exports = {
  browsers: [
    'Chrome >= 90',
    'Firefox >= 88',
    'Safari >= 14',
    'Edge >= 90',
    'iOS >= 14',
    'Android >= 10'
  ],
  testUrls: [
    '/',
    '/best-practices/',
    '/components/',
    '/customization/',
    '/contact/'
  ],
  tests: [
    'accessibility',
    'performance',
    'visual-regression',
    'functionality'
  ]
};
```

### Automated Quality Checks

**GitHub Actions Workflow:**
```yaml
# .github/workflows/quality-assurance.yml
name: Quality Assurance

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Lint code
      run: |
        npm run lint:js
        npm run lint:scss
    
    - name: Build site
      run: npm run build
    
    - name: Test accessibility
      run: |
        npx http-server _site -p 8080 &
        sleep 3
        npm run test:a11y
        pkill http-server
    
    - name: Lighthouse audit
      uses: treosh/lighthouse-ci-action@v9
      with:
        configPath: '.lighthouserc.json'
        uploadArtifacts: true
        temporaryPublicStorage: true
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

### Privacy-Compliant Analytics

**Digital Analytics Program (DAP) Implementation:**
```html
<!-- Required for all federal websites -->
<script>
  // Check for Do Not Track
  if (navigator.doNotTrack !== "1") {
    // Load DAP analytics
    (function() {
      var dapScript = document.createElement('script');
      dapScript.async = true;
      dapScript.src = 'https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=AGENCY';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(dapScript, s);
    })();
  }
</script>
```

**Custom Analytics (Privacy-First):**
```javascript
// privacy-analytics.js
class PrivacyAnalytics {
  constructor(options = {}) {
    this.respectDNT = options.respectDNT !== false;
    this.sessionOnly = options.sessionOnly !== false;
    this.endpoint = options.endpoint || '/analytics';
    
    if (this.shouldTrack()) {
      this.init();
    }
  }
  
  shouldTrack() {
    // Respect Do Not Track
    if (this.respectDNT && navigator.doNotTrack === "1") {
      return false;
    }
    
    // Check for consent (if required)
    if (this.requiresConsent && !this.hasConsent()) {
      return false;
    }
    
    return true;
  }
  
  init() {
    this.trackPageView();
    this.trackUserInteractions();
  }
  
  trackPageView() {
    const data = {
      type: 'pageview',
      path: window.location.pathname,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      // No personal identifiers
      userAgent: this.getGeneralUserAgent()
    };
    
    this.sendEvent(data);
  }
  
  trackUserInteractions() {
    // Track important interactions without PII
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="tel:"], a[href^="mailto:"], .usa-button')) {
        this.sendEvent({
          type: 'interaction',
          element: e.target.tagName,
          action: 'click',
          path: window.location.pathname
        });
      }
    });
  }
  
  getGeneralUserAgent() {
    // Return only general browser/OS info
    const ua = navigator.userAgent;
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Edge')) return 'Edge';
    return 'Other';
  }
  
  sendEvent(data) {
    // Send to privacy-compliant endpoint
    fetch(this.endpoint, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).catch(() => {
      // Fail silently
    });
  }
}

// Initialize privacy-compliant analytics
new PrivacyAnalytics({
  respectDNT: true,
  sessionOnly: true
});
```

## Maintenance & Updates

### Regular Maintenance Schedule

**Monthly Tasks:**
- Review and update content
- Check all forms and functionality
- Monitor website performance
- Review analytics for user behavior
- Check for broken links
- Update contact information if needed

**Quarterly Tasks:**
- Comprehensive accessibility audit
- Security vulnerability scan
- Performance optimization review
- Content strategy review
- User feedback analysis
- Mobile experience testing

**Annual Tasks:**
- Complete security assessment
- USWDS version update
- Comprehensive user testing
- Privacy policy review
- Disaster recovery testing
- Staff training updates

**Dependency Updates:**
```bash
#!/bin/bash
# update-dependencies.sh

echo "🔄 Checking for updates..."

# Check for outdated packages
npm outdated

# Update USWDS (test thoroughly)
echo "📦 Updating USWDS..."
npm update @uswds/uswds

# Update Eleventy
echo "📦 Updating Eleventy..."
npm update @11ty/eleventy

# Security audit
echo "🔒 Running security audit..."
npm audit
npm audit fix

# Test after updates
echo "🧪 Running tests..."
npm run build
npm run test:a11y

echo "✅ Updates complete. Review changes before deploying."
```

### Backup and Recovery

**Backup Strategy:**
```bash
#!/bin/bash
# backup.sh - Backup website content and configuration

BACKUP_DIR="/backups/$(date +%Y-%m-%d)"
mkdir -p $BACKUP_DIR

# Backup source code
echo "💾 Backing up source code..."
tar -czf $BACKUP_DIR/source-code.tar.gz src/ eleventy.config.js package*.json

# Backup generated site
echo "💾 Backing up generated site..."
tar -czf $BACKUP_DIR/generated-site.tar.gz _site/

# Backup configuration
echo "💾 Backing up configuration..."
cp -r .github/ $BACKUP_DIR/

echo "✅ Backup complete: $BACKUP_DIR"
```

## Testing Checklist

### Pre-Launch
- Accessibility audit (automated and manual)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile device testing (iOS, Android)
- Performance testing (Lighthouse, WebPageTest)
- Security scan
- Broken link check
- Form testing (validation, submission)
- Search functionality
- Print styles

### Post-Launch
- Monitor analytics
- Check error logs
- Review user feedback
- Test critical user paths
- Verify backups
- Check SSL certificate

## Compliance Requirements

### Required Pages
Every federal website should include:

- Privacy Policy
- Accessibility Statement
- FOIA (Freedom of Information Act)
- No FEAR Act Notice
- Contact Information
- Site Map

### Legal Requirements
- **Section 508**: Accessibility compliance
- **21st Century IDEA**: Modern, mobile-friendly design
- **Privacy Act**: Protect user information
- **Paperwork Reduction Act**: OMB approval for information collection
- **Plain Writing Act**: Clear, simple language

### Continuous Monitoring

**Uptime Monitoring:**
```javascript
// uptime-monitor.js
const https = require('https');
const fs = require('fs');

class UptimeMonitor {
  constructor(url, interval = 300000) { // 5 minutes default
    this.url = url;
    this.interval = interval;
    this.logFile = 'uptime.log';
  }
  
  start() {
    console.log(`🔍 Starting uptime monitoring for ${this.url}`);
    this.check();
    setInterval(() => this.check(), this.interval);
  }
  
  check() {
    const startTime = Date.now();
    
    https.get(this.url, (res) => {
      const responseTime = Date.now() - startTime;
      const status = res.statusCode;
      const timestamp = new Date().toISOString();
      
      const logEntry = `${timestamp} - Status: ${status}, Response Time: ${responseTime}ms\n`;
      
      if (status >= 200 && status < 400) {
        console.log(`✅ ${this.url} is up (${responseTime}ms)`);
      } else {
        console.log(`❌ ${this.url} returned ${status}`);
        this.sendAlert(status, responseTime);
      }
      
      fs.appendFileSync(this.logFile, logEntry);
    }).on('error', (err) => {
      const timestamp = new Date().toISOString();
      const logEntry = `${timestamp} - Error: ${err.message}\n`;
      
      console.log(`❌ ${this.url} is down: ${err.message}`);
      fs.appendFileSync(this.logFile, logEntry);
      this.sendAlert('ERROR', 0);
    });
  }
  
  sendAlert(status, responseTime) {
    // Implement your alerting mechanism
    // Email, Slack, PagerDuty, etc.
    console.log(`🚨 ALERT: Website issue detected - Status: ${status}`);
  }
}

// Start monitoring
if (process.env.MONITOR_URL) {
  new UptimeMonitor(process.env.MONITOR_URL).start();
}
```

## Resources & Further Reading

### Testing Tools

**Accessibility Testing:**
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool
- [axe DevTools](https://www.deque.com/axe/devtools/) - Browser extension for accessibility testing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance and accessibility auditing
- [Pa11y](https://pa11y.org/) - Automated command-line accessibility testing
- [Colour Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) - Color contrast checking
- [NVDA](https://www.nvaccess.org/) - Free screen reader for Windows
- [Accessibility Insights](https://accessibilityinsights.io/) - Microsoft's accessibility testing tools

**Performance Testing:**
- [WebPageTest](https://www.webpagetest.org/) - Website performance testing
- [GTmetrix](https://gtmetrix.com/) - Performance analysis
- [Pingdom](https://tools.pingdom.com/) - Website speed test
- [Core Web Vitals](https://web.dev/vitals/) - Google's performance metrics

**Security Testing:**
- [Security Headers](https://securityheaders.com/) - Analyze HTTP security headers
- [SSL Labs](https://www.ssllabs.com/ssltest/) - SSL configuration testing
- [OWASP ZAP](https://owasp.org/www-project-zap/) - Security vulnerability scanner

**Code Quality:**
- [HTML Validator](https://validator.w3.org/) - W3C markup validation
- [CSS Validator](https://jigsaw.w3.org/css-validator/) - W3C CSS validation
- [ESLint](https://eslint.org/) - JavaScript code analysis
- [Stylelint](https://stylelint.io/) - CSS/SCSS linting

### Guidelines & Standards

**Federal Requirements:**
- [Section 508 Standards](https://www.section508.gov/) - Federal accessibility requirements
- [21st Century IDEA](https://digital.gov/resources/21st-century-integrated-digital-experience-act/) - Modern government website requirements
- [Plain Language Guidelines](https://www.plainlanguage.gov/) - Clear communication standards
- [OMB Memoranda](https://www.whitehouse.gov/omb/memoranda/) - Federal policy directives

**Design & Development:**
- [USWDS Documentation](https://designsystem.digital.gov/) - Complete design system guide
- [USWDS Components](https://designsystem.digital.gov/components/) - Component library
- [USWDS Design Tokens](https://designsystem.digital.gov/design-tokens/) - Design system variables
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility standards

**Content Strategy:**
- [Digital.gov Content Guide](https://digital.gov/resources/content-guide/) - Government content best practices
- [18F Content Guide](https://content-guide.18f.gov/) - Writing and content strategy
- [usability.gov](https://www.usability.gov/) - User experience best practices

### Communities & Support

**Government Communities:**
- [USWDS Community](https://designsystem.digital.gov/about/community/) - Design system community
- [Digital.gov Communities](https://digital.gov/communities/) - Government digital communities
- [Section 508 Community](https://www.section508.gov/manage/join-the-508-community/) - Federal accessibility community
- [Government UX Community](https://digital.gov/communities/user-experience/) - User experience practitioners

**Technical Support:**
- [USWDS GitHub](https://github.com/uswds/uswds) - Report issues and contribute
- [11ty Community](https://www.11ty.dev/community/) - Static site generator support
- [Federal Front End Guild](https://github.com/18F/frontend-guild) - Federal developers community

**Training & Education:**
- [Digital.gov Training](https://digital.gov/events/) - Government digital training events
- [Section 508 Training](https://www.section508.gov/training/) - Accessibility training resources
- [DigitalGov University](https://digital.gov/digitalgov-university/) - Online training platform
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/courses/list/) - Accessibility courses

### Emergency Contacts & Support

**Technical Issues:**
- **USWDS Support**: [GitHub Issues](https://github.com/uswds/uswds/issues)
- **11ty Support**: [Community Discord](https://discord.gg/eleventy)
- **Accessibility Help**: [WebAIM Contact](https://webaim.org/contact/)

**Compliance Questions:**
- **Section 508**: [section.508@gsa.gov](mailto:section.508@gsa.gov)
- **Plain Language**: [plainlanguage@gsa.gov](mailto:plainlanguage@gsa.gov)
- **Digital Analytics Program**: [dap@support.digitalgov.gov](mailto:dap@support.digitalgov.gov)

---

## Quick Reference Card

Print or bookmark this quick reference for daily use:

**Before Publishing Content:**
- Accessibility: Alt text, headings, color contrast
- Plain language: Short sentences, common words
- Mobile friendly: Test on phone/tablet
- Links work: Check all internal and external links
- Forms tested: Validation and error messages
- Performance: Images optimized, page loads quickly

**Monthly Maintenance:**
- Content review and updates
- Accessibility scan
- Performance check
- Security updates
- Analytics review
- User feedback assessment

**Emergency Response:**
1. **Site Down**: Check hosting, DNS, SSL certificate
2. **Accessibility Issue**: Fix immediately, document for future
3. **Security Alert**: Apply patches, notify IT security team
4. **Broken Feature**: Disable if necessary, fix quickly

*Following these best practices ensures your website serves all users effectively while meeting federal requirements and standards.*