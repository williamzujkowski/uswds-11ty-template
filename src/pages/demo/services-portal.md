---
layout: layouts/page.njk
title: Services Portal - Department of Example Services
lead: Access comprehensive government services designed for efficient citizen engagement and regulatory compliance.
permalink: /demo/services-portal/
eleventyNavigation:
  key: Services Portal Demo
  parent: Demo Pages
---

<nav class="usa-breadcrumb" aria-label="Breadcrumbs">
  <ol class="usa-breadcrumb__list">
    <li class="usa-breadcrumb__list-item">
      <a href="{{ '/' | url }}" class="usa-breadcrumb__link">Home</a>
    </li>
    <li class="usa-breadcrumb__list-item">
      <a href="{{ '/demo/' | url }}" class="usa-breadcrumb__link">Demo Pages</a>
    </li>
    <li class="usa-breadcrumb__list-item usa-current" aria-current="page">
      Services Portal
    </li>
  </ol>
</nav>

<div class="usa-alert usa-alert--info usa-alert--slim margin-bottom-4">
  <div class="usa-alert__body">
    <p class="usa-alert__text">
      Our digital services platform serves over 2.5 million citizens annually with a 98% satisfaction rate. 
      All services are available online 24/7 with multilingual support.
    </p>
  </div>
</div>

## Service Categories

<div class="grid-row grid-gap margin-top-4 margin-bottom-4">
  <div class="tablet:grid-col-6 desktop:grid-col-4">
    <div class="usa-card usa-card--flag">
      <div class="usa-card__container">
        <div class="usa-card__media">
          <div class="usa-card__img">
            <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#account_circle"></use>
            </svg>
          </div>
        </div>
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Individual Services</h3>
        </div>
        <div class="usa-card__body">
          <p>Personal applications, benefits enrollment, document requests, and individual compliance services.</p>
          <p class="font-body-2xs text-base-dark margin-top-1">15 services available</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6 desktop:grid-col-4">
    <div class="usa-card usa-card--flag">
      <div class="usa-card__container">
        <div class="usa-card__media">
          <div class="usa-card__img">
            <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#business"></use>
            </svg>
          </div>
        </div>
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Business Services</h3>
        </div>
        <div class="usa-card__body">
          <p>Commercial permits, regulatory compliance, business registration, and enterprise support programs.</p>
          <p class="font-body-2xs text-base-dark margin-top-1">23 services available</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6 desktop:grid-col-4">
    <div class="usa-card usa-card--flag">
      <div class="usa-card__container">
        <div class="usa-card__media">
          <div class="usa-card__img">
            <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#school"></use>
            </svg>
          </div>
        </div>
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Educational Resources</h3>
        </div>
        <div class="usa-card__body">
          <p>Training programs, certification courses, educational grants, and professional development opportunities.</p>
          <p class="font-body-2xs text-base-dark margin-top-1">12 programs available</p>
        </div>
      </div>
    </div>
  </div>
</div>

## Most Popular Services

<div class="usa-accordion usa-accordion--bordered" aria-multiselectable="true">
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="true" aria-controls="permit-application">
      Permit & License Applications
    </button>
  </h2>
  <div id="permit-application" class="usa-accordion__content usa-prose">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-8">
        <p>Apply for various permits and licenses required for business operations, construction projects, and professional activities. Our streamlined digital process reduces processing time by 60% compared to traditional paper applications.</p>
        
        <h4>Available Permits</h4>
        <ul>
          <li><strong>Business Operation Permits</strong> - Required for commercial activities (Processing: 5-7 business days)</li>
          <li><strong>Construction Permits</strong> - Building and renovation approvals (Processing: 10-15 business days)</li>
          <li><strong>Professional Licenses</strong> - Industry-specific certifications (Processing: 15-30 business days)</li>
          <li><strong>Environmental Permits</strong> - Compliance with environmental regulations (Processing: 30-45 business days)</li>
        </ul>
        
        <h4>Required Documentation</h4>
        <ul>
          <li>Valid government-issued photo ID</li>
          <li>Proof of business registration (if applicable)</li>
          <li>Technical specifications or blueprints (construction permits)</li>
          <li>Professional qualification certificates (professional licenses)</li>
          <li>Environmental impact assessment (environmental permits)</li>
        </ul>
      </div>
      <div class="tablet:grid-col-4">
        <div class="usa-summary-box" role="region" aria-labelledby="permit-stats">
          <div class="usa-summary-box__body">
            <h3 class="usa-summary-box__heading" id="permit-stats">Key Facts</h3>
            <div class="usa-summary-box__text">
              <p><strong>85,000+</strong> permits processed annually</p>
              <p><strong>7 days</strong> average processing time</p>
              <p><strong>96%</strong> customer satisfaction</p>
              <p><strong>24/7</strong> online availability</p>
            </div>
          </div>
        </div>
        <a href="{{ '/demo/forms-showcase/' | url }}" class="usa-button width-full margin-top-2">Start Application</a>
      </div>
    </div>
  </div>

  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="benefits-enrollment">
      Benefits Enrollment Services
    </button>
  </h2>
  <div id="benefits-enrollment" class="usa-accordion__content usa-prose">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-8">
        <p>Enroll in federal benefit programs designed to support citizens and families. Our eligibility screening tool helps determine which programs you qualify for before beginning the application process.</p>
        
        <h4>Available Programs</h4>
        <ul>
          <li><strong>Healthcare Benefits</strong> - Medical coverage and wellness programs
            <ul>
              <li>Primary care coverage with $0 copays</li>
              <li>Prescription drug assistance programs</li>
              <li>Mental health and counseling services</li>
              <li>Preventive care and wellness screenings</li>
            </ul>
          </li>
          <li><strong>Educational Assistance</strong> - Tuition support and training grants
            <ul>
              <li>Federal student aid up to $50,000 annually</li>
              <li>Vocational training certifications</li>
              <li>Adult literacy programs</li>
              <li>STEM education initiatives</li>
            </ul>
          </li>
          <li><strong>Housing Support</strong> - Rental assistance and homebuyer programs
            <ul>
              <li>Section 8 housing vouchers</li>
              <li>First-time homebuyer assistance</li>
              <li>Emergency housing relief</li>
              <li>Home weatherization grants</li>
            </ul>
          </li>
          <li><strong>Employment Services</strong> - Job placement and career development
            <ul>
              <li>Skills assessment and career counseling</li>
              <li>Job training partnerships</li>
              <li>Resume writing assistance</li>
              <li>Interview preparation workshops</li>
            </ul>
          </li>
        </ul>
        
        <h4>Eligibility Requirements</h4>
        <p>Requirements vary by program but typically include income verification, residency status, and specific qualifying conditions. Use our eligibility checker to see which programs you may qualify for.</p>
        
        <h4>Application Process Timeline</h4>
        <ol>
          <li><strong>Initial Screening</strong> (5-10 minutes) - Online eligibility questionnaire</li>
          <li><strong>Document Collection</strong> (1-2 days) - Gather required documentation</li>
          <li><strong>Application Submission</strong> (30-45 minutes) - Complete online forms</li>
          <li><strong>Review Period</strong> (7-14 business days) - Agency reviews application</li>
          <li><strong>Decision Notification</strong> (Within 24 hours) - Email and mail notification</li>
          <li><strong>Benefit Activation</strong> (3-5 business days) - Benefits become available</li>
        </ol>
      </div>
      <div class="tablet:grid-col-4">
        <div class="usa-summary-box" role="region" aria-labelledby="benefits-stats">
          <div class="usa-summary-box__body">
            <h3 class="usa-summary-box__heading" id="benefits-stats">Program Impact</h3>
            <div class="usa-summary-box__text">
              <p><strong>1.2M</strong> citizens enrolled</p>
              <p><strong>14 days</strong> average enrollment time</p>
              <p><strong>99%</strong> approval accuracy</p>
              <p><strong>12</strong> benefit programs</p>
            </div>
          </div>
        </div>
        <a href="{{ '/demo/forms-showcase/' | url }}" class="usa-button width-full margin-top-2">Check Eligibility</a>
      </div>
    </div>
  </div>

  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="document-services">
      Document Services
    </button>
  </h2>
  <div id="document-services" class="usa-accordion__content usa-prose">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-8">
        <p>Request certified copies, document verification, and official records through our secure digital platform. All documents are authenticated and delivered with tamper-evident security features.</p>
        
        <h4>Available Documents</h4>
        <ul>
          <li><strong>Certified Records</strong> - Official copies of government records
            <ul>
              <li>Birth certificates (all 50 states)</li>
              <li>Death certificates</li>
              <li>Marriage licenses</li>
              <li>Divorce decrees</li>
              <li>Adoption records</li>
              <li>Military service records (DD-214)</li>
            </ul>
          </li>
          <li><strong>Verification Letters</strong> - Status confirmations and authenticity letters
            <ul>
              <li>Employment verification for federal workers</li>
              <li>Social Security benefit verification</li>
              <li>Veterans status confirmation</li>
              <li>Citizenship verification letters</li>
              <li>Tax compliance certificates</li>
            </ul>
          </li>
          <li><strong>Historical Documents</strong> - Archive access and research services
            <ul>
              <li>Immigration records (1820-present)</li>
              <li>Census records (1790-1950)</li>
              <li>Land ownership records</li>
              <li>Military pension files</li>
              <li>Federal court records</li>
            </ul>
          </li>
          <li><strong>Translation Services</strong> - Official translations for legal documents
            <ul>
              <li>Certified translations in 14 languages</li>
              <li>Apostille services for international use</li>
              <li>Notarization available</li>
              <li>Rush service (24-hour turnaround)</li>
            </ul>
          </li>
        </ul>
        
        <h4>Security Features</h4>
        <p>All documents include digital signatures, security watermarks, and QR codes for instant verification. Documents can be delivered electronically or by certified mail.</p>
        
        <h4>Document Fees</h4>
        <div class="usa-table-container--scrollable" tabindex="0">
          <table class="usa-table usa-table--compact">
            <caption>Standard document service fees</caption>
            <thead>
              <tr>
                <th scope="col">Document Type</th>
                <th scope="col">Standard Fee</th>
                <th scope="col">Express Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Birth Certificate</th>
                <td>$25</td>
                <td>$45</td>
              </tr>
              <tr>
                <th scope="row">Marriage License</th>
                <td>$20</td>
                <td>$40</td>
              </tr>
              <tr>
                <th scope="row">Military Records</th>
                <td>$0 (Veterans)</td>
                <td>$25</td>
              </tr>
              <tr>
                <th scope="row">Translation Services</th>
                <td>$50/page</td>
                <td>$100/page</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="tablet:grid-col-4">
        <div class="usa-summary-box" role="region" aria-labelledby="document-stats">
          <div class="usa-summary-box__body">
            <h3 class="usa-summary-box__heading" id="document-stats">Service Stats</h3>
            <div class="usa-summary-box__text">
              <p><strong>450,000</strong> documents issued yearly</p>
              <p><strong>3 days</strong> processing time</p>
              <p><strong>100%</strong> authenticity guarantee</p>
              <p><strong>50+</strong> document types</p>
            </div>
          </div>
        </div>
        <a href="{{ '/demo/forms-showcase/' | url }}" class="usa-button width-full margin-top-2">Request Document</a>
      </div>
    </div>
  </div>
</div>

## Service Process Overview

<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Account Registration</h4>
    <p class="margin-bottom-1">Create a secure account using identity verification through our trusted partner network. Registration requires a valid government-issued ID and takes approximately 5 minutes to complete.</p>
    <p class="font-body-2xs text-base-dark">Required: Photo ID, email address, phone number</p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Service Selection</h4>
    <p class="margin-bottom-1">Browse our comprehensive service catalog organized by category and type. Use filters to find services relevant to your needs, or use our guided service finder tool.</p>
    <p class="font-body-2xs text-base-dark">Features: Category filters, search functionality, service recommendations</p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Application Submission</h4>
    <p class="margin-bottom-1">Complete your application using our accessible online forms. Upload required documents securely, review your information, and submit for processing with real-time validation.</p>
    <p class="font-body-2xs text-base-dark">Support: Form validation, document upload, progress saving</p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Review & Approval</h4>
    <p class="margin-bottom-1">Track your application status through your personal dashboard. Receive notifications for status updates, additional requirements, or approval confirmations via email and SMS.</p>
    <p class="font-body-2xs text-base-dark">Notifications: Email alerts, SMS updates, dashboard tracking</p>
  </li>
</ol>

## Digital Service Features

<div class="grid-row grid-gap margin-top-4 margin-bottom-4">
  <div class="tablet:grid-col-6 desktop:grid-col-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">24/7 Availability</h3>
        </div>
        <div class="usa-card__body">
          <p>Access services anytime from anywhere with our cloud-based platform. Mobile-optimized design ensures full functionality on all devices.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6 desktop:grid-col-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Secure Processing</h3>
        </div>
        <div class="usa-card__body">
          <p>All data is encrypted in transit and at rest. Multi-factor authentication and audit logging ensure maximum security for sensitive information.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6 desktop:grid-col-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Real-time Tracking</h3>
        </div>
        <div class="usa-card__body">
          <p>Monitor application progress with detailed status updates. Receive estimated completion times and proactive communication about any delays.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6 desktop:grid-col-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Multi-language Support</h3>
        </div>
        <div class="usa-card__body">
          <p>Services available in English, Spanish, and 12 other languages. Professional translation services available for complex documents.</p>
        </div>
      </div>
    </div>
  </div>
</div>

## Support & Assistance

<div class="usa-alert usa-alert--warning" role="region" aria-labelledby="support-heading">
  <div class="usa-alert__body">
    <h3 class="usa-alert__heading" id="support-heading">Need Help?</h3>
    <p class="usa-alert__text">
      Our customer service team is available Monday-Friday, 8:00 AM - 8:00 PM ET. 
      For urgent matters, emergency support is available 24/7.
    </p>
  </div>
</div>

<div class="grid-row grid-gap margin-top-4">
  <div class="tablet:grid-col-4">
    <h3>Contact Methods</h3>
    <ul class="usa-list">
      <li><strong>Phone:</strong> <a href="tel:+15551234567">(555) 123-4567</a></li>
      <li><strong>Email:</strong> <a href="mailto:services@example.gov">services@example.gov</a></li>
      <li><strong>Live Chat:</strong> Available 8 AM - 6 PM ET</li>
      <li><strong>Video Call:</strong> Schedule appointment online</li>
    </ul>
  </div>
  
  <div class="tablet:grid-col-4">
    <h3>Self-Service Resources</h3>
    <ul class="usa-list">
      <li><a href="#faq">Frequently Asked Questions</a></li>
      <li><a href="#tutorials">Video Tutorials</a></li>
      <li><a href="#guides">Step-by-Step Guides</a></li>
      <li><a href="#troubleshooting">Troubleshooting Tips</a></li>
    </ul>
  </div>
  
  <div class="tablet:grid-col-4">
    <h3>In-Person Assistance</h3>
    <p>Visit any of our 47 field offices nationwide for personalized support. Appointments recommended but walk-ins welcome during business hours.</p>
    <a href="#locations" class="usa-button usa-button--outline">Find Locations</a>
  </div>
</div>

---

## Implementation Code Examples

### Service Category Cards
```html
<div class="usa-card usa-card--flag">
  <div class="usa-card__container">
    <div class="usa-card__media">
      <div class="usa-card__img">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
          <use xlink:href="/assets/uswds/img/sprite.svg#account_circle"></use>
        </svg>
      </div>
    </div>
    <div class="usa-card__header">
      <h3 class="usa-card__heading">Service Category</h3>
    </div>
    <div class="usa-card__body">
      <p>Description of services in this category.</p>
    </div>
  </div>
</div>
```

### Accordion Service Details
```html
<div class="usa-accordion usa-accordion--bordered" aria-multiselectable="true">
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="true" aria-controls="service-id">
      Service Name
    </button>
  </h2>
  <div id="service-id" class="usa-accordion__content usa-prose">
    <p>Detailed service information and requirements.</p>
  </div>
</div>
```

### Summary Statistics Box
```html
<div class="usa-summary-box" role="region" aria-labelledby="stats-heading">
  <div class="usa-summary-box__body">
    <h3 class="usa-summary-box__heading" id="stats-heading">Key Facts</h3>
    <div class="usa-summary-box__text">
      <p><strong>85,000+</strong> services delivered</p>
      <p><strong>96%</strong> satisfaction rate</p>
    </div>
  </div>
</div>
```

This page demonstrates a comprehensive services portal with:
- **Category organization** using flag-style cards
- **Detailed service descriptions** in accessible accordions
- **Process workflow** with clear steps
- **Service statistics** and performance metrics
- **Multiple support channels** for citizen assistance
- **Implementation examples** for developers
- **Full accessibility compliance** with ARIA labels and semantic structure