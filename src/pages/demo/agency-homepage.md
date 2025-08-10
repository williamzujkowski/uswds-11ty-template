---
layout: layouts/page.njk
title: Department of Example Services
lead: Serving the public interest through transparency, accountability, and efficient government services for all citizens.
permalink: /demo/agency-homepage/
hero:
  alt: Department of
  heading: Example Services
  content: The Federal Agency Demonstration Office is committed to serving the public interest through innovative programs, regulatory compliance, and citizen engagement initiatives that promote transparency and accountability in government.
  button:
    text: Explore Our Services
    href: /demo/services-portal/
eleventyNavigation:
  key: Agency Homepage Demo
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
      Agency Homepage
    </li>
  </ol>
</nav>

## Key Services & Programs

<div class="grid-row grid-gap margin-top-4 margin-bottom-4">
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__media">
          <div class="usa-card__img">
            <img src="/assets/uswds/img/hero.jpg" alt="Citizen services illustration" />
          </div>
        </div>
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Citizen Services</h3>
        </div>
        <div class="usa-card__body">
          <p>Access essential government services online, from permit applications to benefit enrollment. Our streamlined processes serve over 2.5 million citizens annually with a 98% satisfaction rate.</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/services-portal/' | url }}" class="usa-button usa-button--outline">View Services</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__media">
          <div class="usa-card__img">
            <img src="/assets/uswds/img/hero.jpg" alt="Regulatory compliance illustration" />
          </div>
        </div>
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Regulatory Guidance</h3>
        </div>
        <div class="usa-card__body">
          <p>Stay informed about federal regulations, compliance requirements, and administrative procedures. Our guidance documents help businesses and individuals navigate complex regulatory frameworks.</p>
        </div>
        <div class="usa-card__footer">
          <a href="#regulations" class="usa-button usa-button--outline">Learn More</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__media">
          <div class="usa-card__img">
            <img src="/assets/uswds/img/hero.jpg" alt="Public sector innovation illustration" />
          </div>
        </div>
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Innovation Programs</h3>
        </div>
        <div class="usa-card__body">
          <p>Discover cutting-edge public sector innovation initiatives that modernize government operations and improve service delivery through technology and process improvements.</p>
        </div>
        <div class="usa-card__footer">
          <a href="#innovation" class="usa-button usa-button--outline">Explore Programs</a>
        </div>
      </div>
    </div>
  </div>
</div>

## How to Access Our Services

<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Create Your Account</h4>
    <p>Register with our secure portal using your verified identity. Account creation takes less than 5 minutes and provides access to all digital services across 47 field offices nationwide.</p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Select Your Service</h4>
    <p>Browse our comprehensive catalog of services organized by category. Each service includes clear eligibility requirements, processing times, and required documentation.</p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Submit Your Request</h4>
    <p>Complete applications online with our user-friendly forms. Upload documents securely and track your request status in real-time through your personal dashboard.</p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Receive Confirmation</h4>
    <p>Get immediate confirmation of your submission with estimated processing times. Receive updates via email and SMS as your request moves through our streamlined review process.</p>
  </li>
</ol>

## Latest News & Announcements

<div class="grid-row grid-gap margin-top-4 margin-bottom-4">
  <div class="tablet:grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">New Digital Services Portal Launch</h3>
        </div>
        <div class="usa-card__body">
          <p>The National Institute of Template Development announces the launch of our enhanced digital services portal, featuring improved accessibility and streamlined application processes.</p>
          <p class="font-body-2xs text-base-dark">March 15, 2024 • Press Release</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/news-announcements/' | url }}" class="usa-button usa-button--outline">Read More</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Public Comment Period Extended</h3>
        </div>
        <div class="usa-card__body">
          <p>Citizens now have additional time to provide input on proposed regulatory updates affecting administrative procedures and compliance requirements for federal programs.</p>
          <p class="font-body-2xs text-base-dark">March 10, 2024 • Public Notice</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/news-announcements/' | url }}" class="usa-button usa-button--outline">View Details</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Annual Transparency Report Published</h3>
        </div>
        <div class="usa-card__body">
          <p>Our 2023 annual report demonstrates our commitment to transparency and accountability, highlighting key performance metrics and citizen engagement initiatives.</p>
          <p class="font-body-2xs text-base-dark">February 28, 2024 • Report</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/data-dashboard/' | url }}" class="usa-button usa-button--outline">View Report</a>
        </div>
      </div>
    </div>
  </div>
</div>

## Key Statistics

<div class="grid-row grid-gap margin-top-4 margin-bottom-4">
  <div class="tablet:grid-col-3">
    <div class="usa-summary-box" role="region" aria-labelledby="summary-box-key-information">
      <div class="usa-summary-box__body">
        <h3 class="usa-summary-box__heading" id="summary-box-key-information">2.5M</h3>
        <div class="usa-summary-box__text">
          Citizens served annually through our comprehensive service programs and regulatory guidance initiatives.
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-3">
    <div class="usa-summary-box" role="region" aria-labelledby="summary-box-satisfaction">
      <div class="usa-summary-box__body">
        <h3 class="usa-summary-box__heading" id="summary-box-satisfaction">98%</h3>
        <div class="usa-summary-box__text">
          Customer satisfaction rate based on feedback from service users and stakeholders.
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-3">
    <div class="usa-summary-box" role="region" aria-labelledby="summary-box-offices">
      <div class="usa-summary-box__body">
        <h3 class="usa-summary-box__heading" id="summary-box-offices">47</h3>
        <div class="usa-summary-box__text">
          Field offices nationwide providing in-person support and community engagement services.
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-3">
    <div class="usa-summary-box" role="region" aria-labelledby="summary-box-processing">
      <div class="usa-summary-box__body">
        <h3 class="usa-summary-box__heading" id="summary-box-processing">5 Days</h3>
        <div class="usa-summary-box__text">
          Average processing time for standard service requests through our digital platform.
        </div>
      </div>
    </div>
  </div>
</div>

## Popular Online Tools

<div class="grid-row grid-gap margin-bottom-4">
  <div class="tablet:grid-col-3">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Benefits Calculator</h3>
        </div>
        <div class="usa-card__body">
          <p>Estimate your eligibility for federal benefits programs in under 5 minutes.</p>
        </div>
        <div class="usa-card__footer">
          <a href="#calculator" class="usa-button usa-button--outline width-full">Calculate Benefits</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-3">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Application Tracker</h3>
        </div>
        <div class="usa-card__body">
          <p>Check the status of your permits, licenses, and benefit applications.</p>
        </div>
        <div class="usa-card__footer">
          <a href="#tracker" class="usa-button usa-button--outline width-full">Track Application</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-3">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Document Library</h3>
        </div>
        <div class="usa-card__body">
          <p>Download forms, guides, and official templates for all services.</p>
        </div>
        <div class="usa-card__footer">
          <a href="#library" class="usa-button usa-button--outline width-full">Browse Documents</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-3">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Live Chat Support</h3>
        </div>
        <div class="usa-card__body">
          <p>Get instant help from our support team. Available weekdays 8 AM - 6 PM ET.</p>
        </div>
        <div class="usa-card__footer">
          <a href="#chat" class="usa-button usa-button--outline width-full">Start Chat</a>
        </div>
      </div>
    </div>
  </div>
</div>

## Upcoming Events & Deadlines

<div class="usa-table-container--scrollable margin-bottom-4" tabindex="0">
  <table class="usa-table usa-table--borderless">
    <caption>Important dates and upcoming events for citizens and businesses</caption>
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Event / Deadline</th>
        <th scope="col">Category</th>
        <th scope="col">Action Required</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">April 15, 2024</th>
        <td>Tax Filing Deadline</td>
        <td><span class="usa-tag">Tax</span></td>
        <td><a href="#tax-filing">File Now</a></td>
      </tr>
      <tr>
        <th scope="row">April 22, 2024</th>
        <td>Public Comment Period Closes - Digital Accessibility Standards</td>
        <td><span class="usa-tag">Regulatory</span></td>
        <td><a href="#comment">Submit Comment</a></td>
      </tr>
      <tr>
        <th scope="row">May 1, 2024</th>
        <td>Small Business Grant Applications Due</td>
        <td><span class="usa-tag">Grants</span></td>
        <td><a href="#grants">Apply</a></td>
      </tr>
      <tr>
        <th scope="row">May 15, 2024</th>
        <td>Medicare Open Enrollment Begins</td>
        <td><span class="usa-tag">Healthcare</span></td>
        <td><a href="#medicare">Learn More</a></td>
      </tr>
      <tr>
        <th scope="row">June 1, 2024</th>
        <td>Hurricane Season Preparedness Workshop</td>
        <td><span class="usa-tag">Emergency</span></td>
        <td><a href="#workshop">Register</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Stay Connected

<div class="usa-alert usa-alert--info" role="region" aria-labelledby="stay-connected-heading">
  <div class="usa-alert__body">
    <h3 class="usa-alert__heading" id="stay-connected-heading">Get Updates</h3>
    <p class="usa-alert__text">
      Subscribe to our newsletter for the latest updates on services, regulations, and public sector innovations. 
      <a href="{{ '/contact/' | url }}">Sign up today</a> to stay informed about changes that affect you.
    </p>
  </div>
</div>

<div class="grid-row grid-gap margin-top-4">
  <div class="tablet:grid-col-6">
    <h3>Contact Information</h3>
    <address>
      <strong>Department of Example Services</strong><br>
      Federal Agency Demonstration Office<br>
      1234 Government Way<br>
      Washington, DC 20001
    </address>
    
    <p class="margin-top-2">
      <strong>Phone:</strong> <a href="tel:+15551234567">(555) 123-4567</a><br>
      <strong>Email:</strong> <a href="mailto:info@example.gov">info@example.gov</a><br>
      <strong>Hours:</strong> Monday-Friday, 8:00 AM - 6:00 PM ET
    </p>
  </div>
  
  <div class="tablet:grid-col-6">
    <h3>Quick Links</h3>
    <ul class="usa-list">
      <li><a href="{{ '/demo/services-portal/' | url }}">All Services</a></li>
      <li><a href="{{ '/demo/forms-showcase/' | url }}">Forms & Applications</a></li>
      <li><a href="{{ '/demo/data-dashboard/' | url }}">Performance Data</a></li>
      <li><a href="{{ '/contact/' | url }}">Contact Us</a></li>
      <li><a href="{{ '/accessibility/' | url }}">Accessibility</a></li>
      <li><a href="{{ '/privacy/' | url }}">Privacy Policy</a></li>
    </ul>
  </div>
</div>

---

## Implementation Code Examples

### Hero Section with Call-to-Action
```yaml
hero:
  alt: Department of
  heading: Example Services
  content: Brief description of agency mission and services
  button:
    text: Explore Our Services
    href: /services/
```

### Service Cards Grid
```html
<div class="grid-row grid-gap">
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Service Name</h3>
        </div>
        <div class="usa-card__body">
          <p>Service description with key benefits and statistics.</p>
        </div>
        <div class="usa-card__footer">
          <a href="/service-url/" class="usa-button usa-button--outline">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Process List Implementation
```html
<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Step Title</h4>
    <p>Step description with clear instructions.</p>
  </li>
</ol>
```

### Statistics Summary Boxes
```html
<div class="usa-summary-box" role="region" aria-labelledby="summary-heading">
  <div class="usa-summary-box__body">
    <h3 class="usa-summary-box__heading" id="summary-heading">2.5M</h3>
    <div class="usa-summary-box__text">
      Description of the statistic and its context.
    </div>
  </div>
</div>
```

This page demonstrates a complete agency homepage with:
- **Hero section** with compelling call-to-action
- **Service highlights** using card components
- **Process workflow** with numbered steps
- **Latest news** with article previews
- **Key statistics** in summary boxes
- **Contact information** and quick links
- **Accessibility features** including ARIA labels, proper headings, and semantic HTML
- **Responsive design** that works on all device sizes