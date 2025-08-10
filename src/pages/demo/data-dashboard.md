---
layout: layouts/page.njk
title: Performance Dashboard - Department of Example Services
lead: Transparent reporting of key performance metrics, service delivery statistics, and operational data for the Federal Agency Demonstration Office.
permalink: /demo/data-dashboard/
eleventyNavigation:
  key: Data Dashboard Demo
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
      Data Dashboard
    </li>
  </ol>
</nav>

<div class="usa-alert usa-alert--info usa-alert--slim margin-bottom-4">
  <div class="usa-alert__body">
    <p class="usa-alert__text">
      This dashboard demonstrates our commitment to transparency and accountability. 
      Data is updated monthly and reflects performance across all 47 field offices nationwide.
    </p>
  </div>
</div>

## Key Performance Indicators

<div class="grid-row grid-gap margin-bottom-4">
  <div class="tablet:grid-col-3">
    <div class="usa-summary-box" role="region" aria-labelledby="kpi-citizens">
      <div class="usa-summary-box__body">
        <h3 class="usa-summary-box__heading" id="kpi-citizens">2.5M</h3>
        <div class="usa-summary-box__text">
          Citizens served annually through digital and in-person services
          <div class="margin-top-1">
            <span class="usa-tag usa-tag--big">+12% from 2023</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-3">
    <div class="usa-summary-box" role="region" aria-labelledby="kpi-satisfaction">
      <div class="usa-summary-box__body">
        <h3 class="usa-summary-box__heading" id="kpi-satisfaction">98%</h3>
        <div class="usa-summary-box__text">
          Customer satisfaction rate based on quarterly surveys
          <div class="margin-top-1">
            <span class="usa-tag usa-tag--big">+2% from 2023</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-3">
    <div class="usa-summary-box" role="region" aria-labelledby="kpi-processing">
      <div class="usa-summary-box__body">
        <h3 class="usa-summary-box__heading" id="kpi-processing">5.2 Days</h3>
        <div class="usa-summary-box__text">
          Average processing time for service requests
          <div class="margin-top-1">
            <span class="usa-tag usa-tag--big">-40% from 2023</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-3">
    <div class="usa-summary-box" role="region" aria-labelledby="kpi-uptime">
      <div class="usa-summary-box__body">
        <h3 class="usa-summary-box__heading" id="kpi-uptime">99.9%</h3>
        <div class="usa-summary-box__text">
          Digital services uptime reliability
          <div class="margin-top-1">
            <span class="usa-tag usa-tag--big">+0.2% from 2023</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Service Delivery Metrics

<div class="grid-row grid-gap margin-bottom-4">
  <div class="tablet:grid-col-8">
    <h3>Monthly Service Volume Trends</h3>
    <div class="usa-table-container--scrollable" tabindex="0">
      <table class="usa-table usa-table--striped">
        <caption>Monthly service request volumes by category for fiscal year 2024</caption>
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Individual Services</th>
            <th scope="col">Business Services</th>
            <th scope="col">Document Requests</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">March 2024</th>
            <td>48,250</td>
            <td>12,350</td>
            <td>28,900</td>
            <td><strong>89,500</strong></td>
          </tr>
          <tr>
            <th scope="row">February 2024</th>
            <td>45,100</td>
            <td>11,800</td>
            <td>26,750</td>
            <td><strong>83,650</strong></td>
          </tr>
          <tr>
            <th scope="row">January 2024</th>
            <td>42,800</td>
            <td>10,900</td>
            <td>25,200</td>
            <td><strong>78,900</strong></td>
          </tr>
          <tr>
            <th scope="row">December 2023</th>
            <td>51,200</td>
            <td>13,600</td>
            <td>30,100</td>
            <td><strong>94,900</strong></td>
          </tr>
          <tr>
            <th scope="row">November 2023</th>
            <td>49,500</td>
            <td>12,950</td>
            <td>29,300</td>
            <td><strong>91,750</strong></td>
          </tr>
          <tr>
            <th scope="row">October 2023</th>
            <td>47,800</td>
            <td>12,200</td>
            <td>27,800</td>
            <td><strong>87,800</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="margin-top-3">
      <p class="font-body-2xs text-base-dark">
        <strong>Data Note:</strong> Individual services include permit applications, benefits enrollment, and general inquiries. 
        Business services encompass commercial permits, regulatory compliance, and enterprise support.
      </p>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <h3>Service Distribution</h3>
    <div class="usa-summary-box" role="region" aria-labelledby="service-breakdown">
      <div class="usa-summary-box__body">
        <h4 class="usa-summary-box__heading" id="service-breakdown">March 2024 Breakdown</h4>
        <div class="usa-summary-box__text">
          <div class="margin-bottom-2">
            <div class="display-flex flex-justify">
              <span>Individual Services</span>
              <span><strong>54%</strong></span>
            </div>
            <div class="bg-primary-lighter height-05 margin-top-05 margin-bottom-1">
              <div class="bg-primary height-05" style="width: 54%;"></div>
            </div>
          </div>
          
          <div class="margin-bottom-2">
            <div class="display-flex flex-justify">
              <span>Document Requests</span>
              <span><strong>32%</strong></span>
            </div>
            <div class="bg-primary-lighter height-05 margin-top-05 margin-bottom-1">
              <div class="bg-primary height-05" style="width: 32%;"></div>
            </div>
          </div>
          
          <div class="margin-bottom-2">
            <div class="display-flex flex-justify">
              <span>Business Services</span>
              <span><strong>14%</strong></span>
            </div>
            <div class="bg-primary-lighter height-05 margin-top-05 margin-bottom-1">
              <div class="bg-primary height-05" style="width: 14%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="usa-card margin-top-3">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h4 class="usa-card__heading">Peak Usage Hours</h4>
        </div>
        <div class="usa-card__body">
          <ul class="usa-list usa-list--unstyled">
            <li><strong>9:00 AM - 11:00 AM:</strong> 35% of daily traffic</li>
            <li><strong>1:00 PM - 3:00 PM:</strong> 28% of daily traffic</li>
            <li><strong>7:00 PM - 9:00 PM:</strong> 22% of daily traffic</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

## Customer Satisfaction Data

<div class="grid-row grid-gap margin-bottom-4">
  <div class="tablet:grid-col-6">
    <h3>Quarterly Satisfaction Scores</h3>
    <div class="usa-table-container--scrollable" tabindex="0">
      <table class="usa-table usa-table--borderless">
        <caption>Customer satisfaction ratings by service category and quarter</caption>
        <thead>
          <tr>
            <th scope="col">Service Category</th>
            <th scope="col">Q4 2023</th>
            <th scope="col">Q1 2024</th>
            <th scope="col">Trend</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Digital Services</th>
            <td>97%</td>
            <td>98%</td>
            <td>
              <svg class="usa-icon text-green" aria-hidden="true" focusable="false" role="img">
                <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#trending_up"></use>
              </svg>
              <span class="usa-sr-only">Increasing</span>
            </td>
          </tr>
          <tr>
            <th scope="row">In-Person Services</th>
            <td>95%</td>
            <td>97%</td>
            <td>
              <svg class="usa-icon text-green" aria-hidden="true" focusable="false" role="img">
                <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#trending_up"></use>
              </svg>
              <span class="usa-sr-only">Increasing</span>
            </td>
          </tr>
          <tr>
            <th scope="row">Phone Support</th>
            <td>94%</td>
            <td>96%</td>
            <td>
              <svg class="usa-icon text-green" aria-hidden="true" focusable="false" role="img">
                <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#trending_up"></use>
              </svg>
              <span class="usa-sr-only">Increasing</span>
            </td>
          </tr>
          <tr>
            <th scope="row">Document Processing</th>
            <td>98%</td>
            <td>99%</td>
            <td>
              <svg class="usa-icon text-green" aria-hidden="true" focusable="false" role="img">
                <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#trending_up"></use>
              </svg>
              <span class="usa-sr-only">Increasing</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <div class="tablet:grid-col-6">
    <h3>Customer Feedback Highlights</h3>
    <div class="usa-alert usa-alert--success usa-alert--slim margin-bottom-2">
      <div class="usa-alert__body">
        <p class="usa-alert__text">
          <strong>Most Appreciated:</strong> "Faster processing times and improved website navigation"
        </p>
      </div>
    </div>
    
    <div class="usa-alert usa-alert--warning usa-alert--slim margin-bottom-3">
      <div class="usa-alert__body">
        <p class="usa-alert__text">
          <strong>Areas for Improvement:</strong> "Extended phone wait times during peak hours"
        </p>
      </div>
    </div>
    
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h4 class="usa-card__heading">Top Service Improvements</h4>
        </div>
        <div class="usa-card__body">
          <ol class="usa-list">
            <li><strong>Digital Platform Modernization:</strong> New user interface reduced task completion time by 40%</li>
            <li><strong>Mobile Optimization:</strong> 65% of users now access services via mobile devices</li>
            <li><strong>Multi-language Support:</strong> Services now available in 14 languages</li>
            <li><strong>Automated Status Updates:</strong> Real-time notifications via email and SMS</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</div>

## Operational Excellence Metrics

<div class="usa-accordion usa-accordion--bordered" aria-multiselectable="true">
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="true" aria-controls="ops-processing">
      Processing Time Analysis
    </button>
  </h2>
  <div id="ops-processing" class="usa-accordion__content usa-prose">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-8">
        <h4>Average Processing Times by Service Type</h4>
        <div class="usa-table-container--scrollable" tabindex="0">
          <table class="usa-table">
            <caption>Processing time improvements comparing 2023 to 2024 performance</caption>
            <thead>
              <tr>
                <th scope="col">Service Type</th>
                <th scope="col">2023 Average</th>
                <th scope="col">2024 Average</th>
                <th scope="col">Improvement</th>
                <th scope="col">Target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Permit Applications</th>
                <td>12.5 days</td>
                <td>7.2 days</td>
                <td class="text-green">-42%</td>
                <td>7.0 days</td>
              </tr>
              <tr>
                <th scope="row">Document Requests</th>
                <td>5.8 days</td>
                <td>3.1 days</td>
                <td class="text-green">-47%</td>
                <td>3.0 days</td>
              </tr>
              <tr>
                <th scope="row">Benefits Enrollment</th>
                <td>18.2 days</td>
                <td>12.8 days</td>
                <td class="text-green">-30%</td>
                <td>12.0 days</td>
              </tr>
              <tr>
                <th scope="row">Regulatory Inquiries</th>
                <td>8.5 days</td>
                <td>4.9 days</td>
                <td class="text-green">-42%</td>
                <td>5.0 days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="tablet:grid-col-4">
        <div class="usa-summary-box" role="region" aria-labelledby="process-improvements">
          <div class="usa-summary-box__body">
            <h4 class="usa-summary-box__heading" id="process-improvements">Key Improvements</h4>
            <div class="usa-summary-box__text">
              <ul class="usa-list">
                <li><strong>Automated Review System:</strong> 75% of applications now processed automatically</li>
                <li><strong>Digital Document Verification:</strong> Instant validation of submitted documents</li>
                <li><strong>Streamlined Workflows:</strong> Eliminated 3 manual review steps</li>
                <li><strong>Staff Training Program:</strong> 95% completion rate on efficiency training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="ops-accessibility">
      Accessibility Compliance
    </button>
  </h2>
  <div id="ops-accessibility" class="usa-accordion__content usa-prose">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-6">
        <h4>Section 508 Compliance Metrics</h4>
        <ul class="usa-list">
          <li><strong>WCAG 2.1 AA Compliance:</strong> 100% of public-facing pages</li>
          <li><strong>Screen Reader Compatibility:</strong> Tested with JAWS, NVDA, and VoiceOver</li>
          <li><strong>Keyboard Navigation:</strong> All interactive elements accessible</li>
          <li><strong>Color Contrast:</strong> Meets or exceeds 4.5:1 ratio requirements</li>
          <li><strong>Alternative Text:</strong> 100% of images have descriptive alt text</li>
        </ul>
        
        <div class="usa-alert usa-alert--success usa-alert--slim margin-top-3">
          <div class="usa-alert__body">
            <p class="usa-alert__text">
              <strong>Achievement:</strong> Received Federal Accessibility Excellence Award for 2024
            </p>
          </div>
        </div>
      </div>
      
      <div class="tablet:grid-col-6">
        <h4>Accessibility Support Usage</h4>
        <div class="margin-bottom-2">
          <div class="display-flex flex-justify margin-bottom-05">
            <span>Screen Reader Users</span>
            <span><strong>8.5%</strong></span>
          </div>
          <div class="bg-primary-lighter height-05">
            <div class="bg-primary height-05" style="width: 8.5%;"></div>
          </div>
        </div>
        
        <div class="margin-bottom-2">
          <div class="display-flex flex-justify margin-bottom-05">
            <span>Keyboard-Only Navigation</span>
            <span><strong>12.3%</strong></span>
          </div>
          <div class="bg-primary-lighter height-05">
            <div class="bg-primary height-05" style="width: 12.3%;"></div>
          </div>
        </div>
        
        <div class="margin-bottom-2">
          <div class="display-flex flex-justify margin-bottom-05">
            <span>High Contrast Mode</span>
            <span><strong>6.7%</strong></span>
          </div>
          <div class="bg-primary-lighter height-05">
            <div class="bg-primary height-05" style="width: 6.7%;"></div>
          </div>
        </div>
        
        <div class="margin-bottom-2">
          <div class="display-flex flex-justify margin-bottom-05">
            <span>Voice Commands</span>
            <span><strong>3.2%</strong></span>
          </div>
          <div class="bg-primary-lighter height-05">
            <div class="bg-primary height-05" style="width: 3.2%;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="ops-digital">
      Digital Transformation Progress
    </button>
  </h2>
  <div id="ops-digital" class="usa-accordion__content usa-prose">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-6">
        <h4>Digital Services Adoption</h4>
        <div class="usa-table-container--scrollable" tabindex="0">
          <table class="usa-table usa-table--compact">
            <caption>Percentage of services available through digital channels</caption>
            <thead>
              <tr>
                <th scope="col">Service Category</th>
                <th scope="col">Digital Availability</th>
                <th scope="col">Usage Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Individual Services</th>
                <td>95%</td>
                <td>87%</td>
              </tr>
              <tr>
                <th scope="row">Business Services</th>
                <td>92%</td>
                <td>82%</td>
              </tr>
              <tr>
                <th scope="row">Document Requests</th>
                <td>100%</td>
                <td>94%</td>
              </tr>
              <tr>
                <th scope="row">Information Inquiries</th>
                <td>100%</td>
                <td>96%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="tablet:grid-col-6">
        <h4>Technology Infrastructure</h4>
        <ul class="usa-list">
          <li><strong>Cloud Migration:</strong> 95% of services running on FedRAMP-authorized cloud platforms</li>
          <li><strong>API Integration:</strong> 150+ government APIs providing seamless data exchange</li>
          <li><strong>Mobile Responsiveness:</strong> 100% of pages optimized for mobile devices</li>
          <li><strong>Security Compliance:</strong> FISMA High authorization maintained</li>
          <li><strong>Data Backup:</strong> 99.99% data recovery guarantee</li>
        </ul>
        
        <div class="usa-summary-box margin-top-3" role="region" aria-labelledby="digital-investment">
          <div class="usa-summary-box__body">
            <h4 class="usa-summary-box__heading" id="digital-investment">2024 Investment</h4>
            <div class="usa-summary-box__text">
              <p><strong>$15M</strong> invested in digital transformation</p>
              <p><strong>$8M</strong> in infrastructure modernization</p>
              <p><strong>$7M</strong> in user experience improvements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Regional Performance Comparison

<div class="grid-row grid-gap margin-top-4 margin-bottom-4">
  <div class="tablet:grid-col-12">
    <h3>Field Office Performance Rankings</h3>
    <div class="usa-table-container--scrollable" tabindex="0">
      <table class="usa-table usa-table--striped">
        <caption>Top 10 performing field offices by customer satisfaction and processing efficiency</caption>
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Field Office Location</th>
            <th scope="col">Customer Satisfaction</th>
            <th scope="col">Avg Processing Time</th>
            <th scope="col">Volume Handled</th>
            <th scope="col">Overall Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Denver, CO</td>
            <td>99.2%</td>
            <td>4.1 days</td>
            <td>85,200</td>
            <td class="text-green"><strong>96.8</strong></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Portland, OR</td>
            <td>98.8%</td>
            <td>4.3 days</td>
            <td>72,500</td>
            <td class="text-green"><strong>95.9</strong></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Austin, TX</td>
            <td>98.9%</td>
            <td>4.5 days</td>
            <td>91,800</td>
            <td class="text-green"><strong>95.7</strong></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Raleigh, NC</td>
            <td>98.6%</td>
            <td>4.4 days</td>
            <td>68,900</td>
            <td class="text-green"><strong>95.1</strong></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Minneapolis, MN</td>
            <td>98.4%</td>
            <td>4.6 days</td>
            <td>74,300</td>
            <td class="text-green"><strong>94.8</strong></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Phoenix, AZ</td>
            <td>98.1%</td>
            <td>4.8 days</td>
            <td>88,600</td>
            <td><strong>94.2</strong></td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Seattle, WA</td>
            <td>97.9%</td>
            <td>4.9 days</td>
            <td>95,100</td>
            <td><strong>93.9</strong></td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Atlanta, GA</td>
            <td>97.8%</td>
            <td>5.1 days</td>
            <td>102,400</td>
            <td><strong>93.5</strong></td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Boston, MA</td>
            <td>97.6%</td>
            <td>5.2 days</td>
            <td>78,900</td>
            <td><strong>93.1</strong></td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>San Diego, CA</td>
            <td>97.5%</td>
            <td>5.3 days</td>
            <td>82,700</td>
            <td><strong>92.8</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

## Data Sources & Methodology

<div class="usa-alert usa-alert--info margin-bottom-4">
  <div class="usa-alert__body">
    <h3 class="usa-alert__heading">Data Transparency</h3>
    <p class="usa-alert__text">
      All performance data is collected through automated systems, customer surveys, and operational metrics. 
      Data is validated monthly and audited quarterly by independent third-party assessors.
    </p>
  </div>
</div>

<div class="grid-row grid-gap">
  <div class="tablet:grid-col-6">
    <h3>Data Collection Methods</h3>
    <ul class="usa-list">
      <li><strong>Automated Systems:</strong> Real-time processing metrics from digital platforms</li>
      <li><strong>Customer Surveys:</strong> Quarterly satisfaction surveys with 95% response rate</li>
      <li><strong>Field Office Reports:</strong> Monthly operational data from all 47 locations</li>
      <li><strong>Third-Party Audits:</strong> Annual performance verification by independent assessors</li>
      <li><strong>Continuous Monitoring:</strong> 24/7 system performance and availability tracking</li>
    </ul>
  </div>
  
  <div class="tablet:grid-col-6">
    <h3>Quality Assurance</h3>
    <ul class="usa-list">
      <li><strong>Data Validation:</strong> Multi-layer verification process for all metrics</li>
      <li><strong>Statistical Review:</strong> Professional statisticians review all published data</li>
      <li><strong>Peer Comparison:</strong> Benchmarking against similar federal agencies</li>
      <li><strong>Public Verification:</strong> Dataset available for public download and analysis</li>
      <li><strong>Annual Certification:</strong> Independent audit certification of data accuracy</li>
    </ul>
    
    <div class="margin-top-3">
      <a href="#download-data" class="usa-button usa-button--outline">Download Complete Dataset</a>
      <a href="#methodology" class="usa-button usa-button--unstyled margin-left-2">View Full Methodology</a>
    </div>
  </div>
</div>

---

## Implementation Code Examples

### Summary Statistics Cards
```html
<div class="usa-summary-box" role="region" aria-labelledby="metric-id">
  <div class="usa-summary-box__body">
    <h3 class="usa-summary-box__heading" id="metric-id">2.5M</h3>
    <div class="usa-summary-box__text">
      Description of the metric and its significance
      <div class="margin-top-1">
        <span class="usa-tag usa-tag--big">+12% from 2023</span>
      </div>
    </div>
  </div>
</div>
```

### Data Table with Accessibility Features
```html
<div class="usa-table-container--scrollable" tabindex="0">
  <table class="usa-table usa-table--striped">
    <caption>Descriptive table caption for screen readers</caption>
    <thead>
      <tr>
        <th scope="col">Column Header</th>
        <th scope="col">Data Column</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Row Header</th>
        <td>Data Cell</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Visual Progress Bar
```html
<div class="margin-bottom-2">
  <div class="display-flex flex-justify margin-bottom-05">
    <span>Category Name</span>
    <span><strong>54%</strong></span>
  </div>
  <div class="bg-primary-lighter height-05">
    <div class="bg-primary height-05" style="width: 54%;"></div>
  </div>
</div>
```

### Performance Trend Indicators
```html
<td>
  <svg class="usa-icon text-green" aria-hidden="true" focusable="false" role="img">
    <use xlink:href="/assets/uswds/img/sprite.svg#trending_up"></use>
  </svg>
  <span class="usa-sr-only">Increasing</span>
</td>
```

This page demonstrates comprehensive data dashboard patterns with:
- **Key performance indicators** using summary boxes
- **Data tables** with proper accessibility features
- **Visual data representation** with progress bars
- **Trend indicators** with accessible icons
- **Detailed breakdowns** in accordion sections
- **Regional comparisons** with ranking tables
- **Data transparency** with methodology explanations
- **Download options** for public data access