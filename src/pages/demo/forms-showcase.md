---
layout: layouts/page.njk
title: Forms Showcase - Government Form Examples
lead: Comprehensive examples of accessible government forms using USWDS components, designed for optimal citizen engagement and regulatory compliance.
permalink: /demo/forms-showcase/
eleventyNavigation:
  key: Forms Showcase Demo
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
      Forms Showcase
    </li>
  </ol>
</nav>

<div class="usa-alert usa-alert--info usa-alert--slim margin-bottom-4">
  <div class="usa-alert__body">
    <p class="usa-alert__text">
      All forms on this page are for demonstration purposes only. No data is collected or processed. 
      These examples show proper accessibility features, validation, and user experience patterns.
    </p>
  </div>
</div>

## Basic Contact Form

<form class="usa-form usa-form--large" action="#" method="post" novalidate>
  <fieldset class="usa-fieldset">
    <legend class="usa-legend usa-legend--large">Contact Information</legend>
    
    <div class="grid-row grid-gap">
      <div class="mobile-lg:grid-col-6">
        <label class="usa-label" for="contact-first-name">
          First name <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
        </label>
        <input class="usa-input" id="contact-first-name" name="contact-first-name" type="text" autocomplete="given-name" required aria-describedby="contact-first-name-info">
        <span class="usa-error-message" id="contact-first-name-error" role="alert"></span>
      </div>
      
      <div class="mobile-lg:grid-col-6">
        <label class="usa-label" for="contact-last-name">
          Last name <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
        </label>
        <input class="usa-input" id="contact-last-name" name="contact-last-name" type="text" autocomplete="family-name" required>
        <span class="usa-error-message" id="contact-last-name-error" role="alert"></span>
      </div>
    </div>
    
    <label class="usa-label" for="contact-email">
      Email address <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
    </label>
    <input class="usa-input" id="contact-email" name="contact-email" type="email" autocomplete="email" required aria-describedby="contact-email-hint">
    <div class="usa-hint" id="contact-email-hint">We'll use this to send you updates about your inquiry.</div>
    <span class="usa-error-message" id="contact-email-error" role="alert"></span>
    
    <label class="usa-label" for="contact-phone">
      Phone number
    </label>
    <input class="usa-input" id="contact-phone" name="contact-phone" type="tel" autocomplete="tel" aria-describedby="contact-phone-hint">
    <div class="usa-hint" id="contact-phone-hint">Include area code (e.g., 555-123-4567)</div>
    
    <label class="usa-label" for="contact-organization">
      Organization (if applicable)
    </label>
    <input class="usa-input" id="contact-organization" name="contact-organization" type="text" autocomplete="organization">
    
    <label class="usa-label" for="contact-subject">
      Subject <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
    </label>
    <select class="usa-select" id="contact-subject" name="contact-subject" required aria-describedby="contact-subject-hint">
      <option value="">- Select a topic -</option>
      <optgroup label="Services & Benefits">
        <option value="benefits">Benefits Enrollment</option>
        <option value="healthcare">Healthcare Services</option>
        <option value="social-security">Social Security</option>
        <option value="veterans">Veterans Affairs</option>
        <option value="housing">Housing Assistance</option>
      </optgroup>
      <optgroup label="Business & Compliance">
        <option value="permits">Permits & Licenses</option>
        <option value="compliance">Regulatory Compliance</option>
        <option value="taxes">Tax Information</option>
        <option value="contracts">Government Contracts</option>
        <option value="grants">Grant Opportunities</option>
      </optgroup>
      <optgroup label="Documents & Records">
        <option value="records">Official Records Request</option>
        <option value="foia">FOIA Request</option>
        <option value="certificates">Certificates & Documents</option>
        <option value="verification">Document Verification</option>
      </optgroup>
      <optgroup label="Support & Feedback">
        <option value="technical">Technical Support</option>
        <option value="accessibility">Accessibility Issue</option>
        <option value="feedback">Website Feedback</option>
        <option value="complaint">File a Complaint</option>
        <option value="other">Other Inquiry</option>
      </optgroup>
    </select>
    <div class="usa-hint" id="contact-subject-hint">Choose the topic that best matches your inquiry</div>
    <span class="usa-error-message" id="contact-subject-error" role="alert"></span>
    
    <label class="usa-label" for="contact-message">
      Message <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
    </label>
    <textarea class="usa-textarea" id="contact-message" name="contact-message" rows="6" required aria-describedby="contact-message-hint"></textarea>
    <div class="usa-hint" id="contact-message-hint">Please provide detailed information about your inquiry or request</div>
    <span class="usa-error-message" id="contact-message-error" role="alert"></span>
    
    <div class="usa-checkbox">
      <input class="usa-checkbox__input" id="contact-updates" name="contact-updates" type="checkbox" value="yes">
      <label class="usa-checkbox__label" for="contact-updates">
        Send me email updates about Department of Example Services news and announcements
      </label>
    </div>
    
    <input class="usa-button" type="submit" value="Submit Inquiry">
    <button class="usa-button usa-button--unstyled margin-left-1" type="button">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="/assets/uswds/img/sprite.svg#save"></use>
      </svg>
      Save as draft
    </button>
  </fieldset>
</form>

## Service Application Form

<form class="usa-form usa-form--large margin-top-5" action="#" method="post" novalidate>
  <fieldset class="usa-fieldset">
    <legend class="usa-legend usa-legend--large">Business Permit Application</legend>
    <p>Apply for permits required for commercial operations within federal jurisdictions. Processing typically takes 5-10 business days.</p>
    
    <h3>Business Information</h3>
    
    <label class="usa-label" for="app-business-name">
      Business name <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
    </label>
    <input class="usa-input" id="app-business-name" name="app-business-name" type="text" required>
    <span class="usa-error-message" id="app-business-name-error" role="alert"></span>
    
    <div class="grid-row grid-gap">
      <div class="mobile-lg:grid-col-6">
        <label class="usa-label" for="app-business-type">
          Business type <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
        </label>
        <select class="usa-select" id="app-business-type" name="app-business-type" required>
          <option value="">- Select business type -</option>
          <optgroup label="Individual Business">
            <option value="sole-proprietorship">Sole Proprietorship</option>
            <option value="independent-contractor">Independent Contractor</option>
            <option value="freelancer">Freelancer</option>
          </optgroup>
          <optgroup label="Partnerships">
            <option value="general-partnership">General Partnership</option>
            <option value="limited-partnership">Limited Partnership (LP)</option>
            <option value="llp">Limited Liability Partnership (LLP)</option>
          </optgroup>
          <optgroup label="Corporations">
            <option value="llc">Limited Liability Company (LLC)</option>
            <option value="s-corp">S Corporation</option>
            <option value="c-corp">C Corporation</option>
            <option value="b-corp">B Corporation (Benefit Corp)</option>
            <option value="professional-corp">Professional Corporation</option>
          </optgroup>
          <optgroup label="Non-Profit & Other">
            <option value="501c3">501(c)(3) Non-Profit</option>
            <option value="501c4">501(c)(4) Social Welfare</option>
            <option value="501c6">501(c)(6) Trade Association</option>
            <option value="cooperative">Cooperative</option>
            <option value="trust">Trust</option>
          </optgroup>
        </select>
        <span class="usa-error-message" id="app-business-type-error" role="alert"></span>
      </div>
      
      <div class="mobile-lg:grid-col-6">
        <label class="usa-label" for="app-ein">
          Employer Identification Number (EIN)
        </label>
        <input class="usa-input" id="app-ein" name="app-ein" type="text" pattern="[0-9]{2}-[0-9]{7}" placeholder="12-3456789" aria-describedby="app-ein-hint">
        <div class="usa-hint" id="app-ein-hint">Format: XX-XXXXXXX</div>
      </div>
    </div>
    
    <h3>Business Address</h3>
    
    <label class="usa-label" for="app-address-1">
      Street address <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
    </label>
    <input class="usa-input" id="app-address-1" name="app-address-1" type="text" autocomplete="address-line1" required>
    <span class="usa-error-message" id="app-address-1-error" role="alert"></span>
    
    <label class="usa-label" for="app-address-2">
      Street address line 2
    </label>
    <input class="usa-input" id="app-address-2" name="app-address-2" type="text" autocomplete="address-line2">
    
    <div class="grid-row grid-gap">
      <div class="mobile-lg:grid-col-8">
        <label class="usa-label" for="app-city">
          City <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
        </label>
        <input class="usa-input" id="app-city" name="app-city" type="text" autocomplete="address-level2" required>
        <span class="usa-error-message" id="app-city-error" role="alert"></span>
      </div>
      
      <div class="mobile-lg:grid-col-4">
        <label class="usa-label" for="app-state">
          State <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
        </label>
        <select class="usa-select" id="app-state" name="app-state" autocomplete="address-level1" required>
          <option value="">- Select State or Territory -</option>
          <optgroup label="States">
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </optgroup>
          <optgroup label="Territories">
            <option value="AS">American Samoa</option>
            <option value="GU">Guam</option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="PR">Puerto Rico</option>
            <option value="VI">U.S. Virgin Islands</option>
          </optgroup>
          <optgroup label="Military">
            <option value="AA">Armed Forces Americas</option>
            <option value="AE">Armed Forces Europe</option>
            <option value="AP">Armed Forces Pacific</option>
          </optgroup>
        </select>
        <span class="usa-error-message" id="app-state-error" role="alert"></span>
      </div>
    </div>
    
    <div class="grid-row grid-gap">
      <div class="mobile-lg:grid-col-6">
        <label class="usa-label" for="app-zip">
          ZIP code <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
        </label>
        <input class="usa-input usa-input--medium" id="app-zip" name="app-zip" type="text" pattern="[0-9]{5}(-[0-9]{4})?" autocomplete="postal-code" required>
        <span class="usa-error-message" id="app-zip-error" role="alert"></span>
      </div>
    </div>
    
    <h3>Permit Details</h3>
    
    <fieldset class="usa-fieldset">
      <legend class="usa-legend">
        What type of permit do you need? <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
      </legend>
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" id="permit-retail" name="permit-types" type="checkbox" value="retail">
        <label class="usa-checkbox__label" for="permit-retail">Retail Operations</label>
      </div>
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" id="permit-food" name="permit-types" type="checkbox" value="food">
        <label class="usa-checkbox__label" for="permit-food">Food Service</label>
      </div>
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" id="permit-construction" name="permit-types" type="checkbox" value="construction">
        <label class="usa-checkbox__label" for="permit-construction">Construction/Renovation</label>
      </div>
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" id="permit-environmental" name="permit-types" type="checkbox" value="environmental">
        <label class="usa-checkbox__label" for="permit-environmental">Environmental Compliance</label>
      </div>
      <span class="usa-error-message" id="permit-types-error" role="alert"></span>
    </fieldset>
    
    <label class="usa-label" for="app-employees">
      Number of employees
    </label>
    <input class="usa-input usa-input--small" id="app-employees" name="app-employees" type="number" min="1" max="10000">
    
    <label class="usa-label" for="app-description">
      Business description <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
    </label>
    <textarea class="usa-textarea" id="app-description" name="app-description" rows="4" required aria-describedby="app-description-hint"></textarea>
    <div class="usa-hint" id="app-description-hint">Describe your business activities and operations (minimum 50 characters)</div>
    <span class="usa-error-message" id="app-description-error" role="alert"></span>
    
    <h3>File Upload</h3>
    
    <label class="usa-label" for="app-documents">
      Supporting documents <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
    </label>
    <span class="usa-hint" id="app-documents-hint">
      Upload required documentation: business registration, insurance certificates, technical specifications. 
      Accepted formats: PDF, DOC, DOCX, JPG, PNG. Maximum file size: 10MB per file.
    </span>
    <input class="usa-file-input" id="app-documents" type="file" name="app-documents" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" aria-describedby="app-documents-hint" required>
    <span class="usa-error-message" id="app-documents-error" role="alert"></span>
    
    <div class="usa-summary-box margin-top-4" role="region" aria-labelledby="app-summary">
      <div class="usa-summary-box__body">
        <h3 class="usa-summary-box__heading" id="app-summary">Application Summary</h3>
        <div class="usa-summary-box__text">
          <ul class="usa-list">
            <li><strong>Processing Time:</strong> 5-10 business days</li>
            <li><strong>Application Fee:</strong> $125 (paid after approval)</li>
            <li><strong>Validity Period:</strong> 1 year from issue date</li>
            <li><strong>Renewal Required:</strong> 30 days before expiration</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="usa-checkbox">
      <input class="usa-checkbox__input" id="app-terms" name="app-terms" type="checkbox" required>
      <label class="usa-checkbox__label" for="app-terms">
        I certify that the information provided is accurate and complete, and I understand that false statements may result in application denial. <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
      </label>
    </div>
    <span class="usa-error-message" id="app-terms-error" role="alert"></span>
    
    <input class="usa-button margin-top-3" type="submit" value="Submit Application">
    <button class="usa-button usa-button--outline margin-left-1" type="button">Save Progress</button>
    <button class="usa-button usa-button--unstyled margin-left-1" type="reset">Clear Form</button>
  </fieldset>
</form>

## Advanced Multi-Step Form

<div class="margin-top-5">
  <h2>Document Request Form</h2>
  <p class="usa-intro">Request certified copies of official government documents through our secure processing system.</p>
  
  <div class="usa-step-indicator" aria-label="progress">
    <ol class="usa-step-indicator__segments">
      <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
        <span class="usa-step-indicator__segment-label">Personal Information</span>
      </li>
      <li class="usa-step-indicator__segment usa-step-indicator__segment--current">
        <span class="usa-step-indicator__segment-label">Document Selection</span>
      </li>
      <li class="usa-step-indicator__segment">
        <span class="usa-step-indicator__segment-label">Delivery Options</span>
      </li>
      <li class="usa-step-indicator__segment">
        <span class="usa-step-indicator__segment-label">Payment & Review</span>
      </li>
    </ol>
  </div>
  
  <form class="usa-form usa-form--large margin-top-4" action="#" method="post">
    <fieldset class="usa-fieldset">
      <legend class="usa-legend usa-legend--large">Step 2: Document Selection</legend>
      
      <p>Select the documents you need and specify the number of certified copies for each.</p>
      
      <div class="usa-alert usa-alert--info usa-alert--slim margin-bottom-3">
        <div class="usa-alert__body">
          <p class="usa-alert__text">
            Processing fees apply per document type. Certified copies include official seals and security features.
          </p>
        </div>
      </div>
      
      <fieldset class="usa-fieldset">
        <legend class="usa-legend">Available Documents</legend>
        
        <div class="usa-table-container--scrollable" tabindex="0">
          <table class="usa-table">
            <caption>Document types, processing fees, and copy selection</caption>
            <thead>
              <tr>
                <th scope="col">Document Type</th>
                <th scope="col">Processing Time</th>
                <th scope="col">Fee per Copy</th>
                <th scope="col">Copies Needed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div class="usa-checkbox">
                    <input class="usa-checkbox__input" id="doc-birth-cert" name="documents" type="checkbox" value="birth-certificate">
                    <label class="usa-checkbox__label" for="doc-birth-cert">Birth Certificate</label>
                  </div>
                </th>
                <td>3-5 business days</td>
                <td>$25</td>
                <td>
                  <select class="usa-select usa-select--small" name="birth-cert-copies" aria-label="Number of birth certificate copies">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="usa-checkbox">
                    <input class="usa-checkbox__input" id="doc-marriage-cert" name="documents" type="checkbox" value="marriage-certificate">
                    <label class="usa-checkbox__label" for="doc-marriage-cert">Marriage Certificate</label>
                  </div>
                </th>
                <td>3-5 business days</td>
                <td>$20</td>
                <td>
                  <select class="usa-select usa-select--small" name="marriage-cert-copies" aria-label="Number of marriage certificate copies">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="usa-checkbox">
                    <input class="usa-checkbox__input" id="doc-verification" name="documents" type="checkbox" value="verification-letter">
                    <label class="usa-checkbox__label" for="doc-verification">Employment Verification</label>
                  </div>
                </th>
                <td>1-2 business days</td>
                <td>$15</td>
                <td>
                  <select class="usa-select usa-select--small" name="verification-copies" aria-label="Number of verification letter copies">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="usa-checkbox">
                    <input class="usa-checkbox__input" id="doc-transcript" name="documents" type="checkbox" value="transcript">
                    <label class="usa-checkbox__label" for="doc-transcript">Official Transcript</label>
                  </div>
                </th>
                <td>5-7 business days</td>
                <td>$30</td>
                <td>
                  <select class="usa-select usa-select--small" name="transcript-copies" aria-label="Number of transcript copies">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </fieldset>
      
      <fieldset class="usa-fieldset">
        <legend class="usa-legend">Delivery Method <abbr title="required" class="usa-hint usa-hint--required">*</abbr></legend>
        <div class="usa-radio">
          <input class="usa-radio__input" id="delivery-standard" type="radio" name="delivery" value="standard" checked>
          <label class="usa-radio__label" for="delivery-standard">
            Standard Mail - $0 (5-7 business days additional)
          </label>
        </div>
        <div class="usa-radio">
          <input class="usa-radio__input" id="delivery-priority" type="radio" name="delivery" value="priority">
          <label class="usa-radio__label" for="delivery-priority">
            Priority Mail - $8.50 (2-3 business days additional)
          </label>
        </div>
        <div class="usa-radio">
          <input class="usa-radio__input" id="delivery-express" type="radio" name="delivery" value="express">
          <label class="usa-radio__label" for="delivery-express">
            Express Delivery - $25.00 (Next business day)
          </label>
        </div>
        <div class="usa-radio">
          <input class="usa-radio__input" id="delivery-digital" type="radio" name="delivery" value="digital">
          <label class="usa-radio__label" for="delivery-digital">
            Digital Delivery - $5.00 (Same day, secure download)
          </label>
        </div>
      </fieldset>
      
      <div class="usa-summary-box margin-top-4" role="region" aria-labelledby="order-summary">
        <div class="usa-summary-box__body">
          <h3 class="usa-summary-box__heading" id="order-summary">Order Summary</h3>
          <div class="usa-summary-box__text">
            <p><strong>Selected Documents:</strong> None selected</p>
            <p><strong>Document Fees:</strong> $0.00</p>
            <p><strong>Delivery Fee:</strong> $0.00</p>
            <p><strong>Total:</strong> $0.00</p>
          </div>
        </div>
      </div>
      
      <button class="usa-button" type="button">Previous Step</button>
      <button class="usa-button margin-left-1" type="submit">Continue to Delivery</button>
      <button class="usa-button usa-button--unstyled margin-left-2" type="button">Save Progress</button>
    </fieldset>
  </form>
</div>

## Advanced Form Components

<div class="margin-top-5">
  <h2>Multiselect and Combo Box Examples</h2>
  <p>Advanced form components for complex data collection scenarios.</p>
  
  <form class="usa-form usa-form--large" action="#" method="post" novalidate>
    <fieldset class="usa-fieldset">
      <legend class="usa-legend usa-legend--large">Advanced Selection Components</legend>
      
      <label class="usa-label" for="multi-services">
        Select Multiple Services <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
      </label>
      <div class="usa-hint" id="multi-services-hint">Hold Ctrl (Windows) or Cmd (Mac) to select multiple options</div>
      <select class="usa-select" id="multi-services" name="multi-services" multiple size="8" required aria-describedby="multi-services-hint">
        <optgroup label="Healthcare Services">
          <option value="primary-care">Primary Care Services</option>
          <option value="specialty-care">Specialty Care Referrals</option>
          <option value="mental-health">Mental Health Services</option>
          <option value="dental">Dental Care</option>
          <option value="vision">Vision Services</option>
          <option value="pharmacy">Prescription Services</option>
        </optgroup>
        <optgroup label="Financial Assistance">
          <option value="food-stamps">SNAP Benefits (Food Stamps)</option>
          <option value="wic">WIC Program</option>
          <option value="tanf">TANF Cash Assistance</option>
          <option value="utility">Utility Bill Assistance</option>
          <option value="childcare">Childcare Subsidies</option>
        </optgroup>
        <optgroup label="Education & Training">
          <option value="adult-ed">Adult Education Programs</option>
          <option value="job-training">Job Training Initiatives</option>
          <option value="computer-literacy">Digital Literacy Classes</option>
          <option value="language">ESL Classes</option>
          <option value="ged">GED Preparation</option>
        </optgroup>
      </select>
      
      <label class="usa-label margin-top-3" for="agency-departments">
        Select Relevant Agency Departments
      </label>
      <div class="usa-hint" id="agency-departments-hint">Choose all departments that apply to your request</div>
      <select class="usa-select" id="agency-departments" name="agency-departments" multiple size="6" aria-describedby="agency-departments-hint">
        <option value="admin">Administrative Services</option>
        <option value="benefits">Benefits Management</option>
        <option value="compliance">Compliance & Regulations</option>
        <option value="customer">Customer Service</option>
        <option value="digital">Digital Services</option>
        <option value="enforcement">Enforcement Division</option>
        <option value="finance">Finance & Accounting</option>
        <option value="grants">Grants Management</option>
        <option value="hr">Human Resources</option>
        <option value="it">Information Technology</option>
        <option value="legal">Legal Affairs</option>
        <option value="operations">Operations</option>
        <option value="outreach">Public Outreach</option>
        <option value="policy">Policy Development</option>
        <option value="procurement">Procurement Services</option>
      </select>
      
      <label class="usa-label margin-top-3" for="priority-combo">
        Priority Level with Custom Option
      </label>
      <div class="usa-combo-box">
        <select class="usa-select" id="priority-combo" name="priority-combo">
          <option value="">- Select or enter priority -</option>
          <option value="emergency">Emergency - Immediate Response Required</option>
          <option value="urgent">Urgent - Within 24 Hours</option>
          <option value="high">High - Within 3 Business Days</option>
          <option value="normal">Normal - Within 7 Business Days</option>
          <option value="low">Low - Within 30 Days</option>
          <option value="scheduled">Scheduled - Specific Date Required</option>
        </select>
      </div>
      
      <label class="usa-label margin-top-3" for="language-preference">
        Language Preference for Communication
      </label>
      <select class="usa-select" id="language-preference" name="language-preference">
        <option value="">- Select preferred language -</option>
        <optgroup label="Most Common">
          <option value="en">English</option>
          <option value="es">Spanish / Español</option>
          <option value="zh-CN">Chinese Simplified / 简体中文</option>
          <option value="zh-TW">Chinese Traditional / 繁體中文</option>
          <option value="vi">Vietnamese / Tiếng Việt</option>
          <option value="ko">Korean / 한국어</option>
        </optgroup>
        <optgroup label="Additional Languages">
          <option value="ar">Arabic / العربية</option>
          <option value="fr">French / Français</option>
          <option value="de">German / Deutsch</option>
          <option value="hi">Hindi / हिन्दी</option>
          <option value="ja">Japanese / 日本語</option>
          <option value="pt">Portuguese / Português</option>
          <option value="ru">Russian / Русский</option>
          <option value="tl">Tagalog</option>
        </optgroup>
      </select>
    </fieldset>
  </form>
</div>

## Form Validation Examples

<div class="margin-top-5">
  <h2>Validation Patterns</h2>
  <p>Examples of common validation patterns and error handling techniques for government forms.</p>
  
  <form class="usa-form usa-form--large" action="#" method="post" novalidate>
    <fieldset class="usa-fieldset">
      <legend class="usa-legend usa-legend--large">Validation Examples</legend>
      
      <div class="grid-row grid-gap">
        <div class="mobile-lg:grid-col-6">
          <label class="usa-label" for="val-email">
            Email with custom validation
          </label>
          <input class="usa-input usa-input--error" id="val-email" name="val-email" type="email" value="invalid-email" aria-describedby="val-email-error" aria-invalid="true">
          <span class="usa-error-message" id="val-email-error" role="alert">
            <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#warning"></use>
            </svg>
            Enter an email address in the correct format, like name@example.gov
          </span>
        </div>
        
        <div class="mobile-lg:grid-col-6">
          <label class="usa-label" for="val-phone">
            Phone number with pattern validation
          </label>
          <input class="usa-input usa-input--success" id="val-phone" name="val-phone" type="tel" value="(555) 123-4567" pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}" aria-describedby="val-phone-success">
          <span class="usa-success-message" id="val-phone-success" role="status">
            <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#check"></use>
            </svg>
            Phone number format is valid
          </span>
        </div>
      </div>
      
      <label class="usa-label" for="val-password">
        Password with strength requirements
      </label>
      <input class="usa-input" id="val-password" name="val-password" type="password" aria-describedby="val-password-hint">
      <div class="usa-hint" id="val-password-hint">
        Password must be at least 12 characters with uppercase, lowercase, numbers, and special characters.
      </div>
      <div class="usa-checklist" id="val-password-checklist">
        <span class="usa-checklist__item usa-checklist__item--checked">At least 12 characters</span>
        <span class="usa-checklist__item">Uppercase letter</span>
        <span class="usa-checklist__item">Lowercase letter</span>
        <span class="usa-checklist__item">Numeric character</span>
        <span class="usa-checklist__item">Special character</span>
      </div>
      
      <fieldset class="usa-fieldset usa-fieldset--error">
        <legend class="usa-legend">
          Preferred contact method <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
        </legend>
        <span class="usa-error-message" id="contact-method-error" role="alert">
          <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
            <use xlink:href="/assets/uswds/img/sprite.svg#warning"></use>
          </svg>
          Select at least one contact method
        </span>
        <div class="usa-radio">
          <input class="usa-radio__input" id="contact-email-radio" type="radio" name="contact-method" value="email">
          <label class="usa-radio__label" for="contact-email-radio">Email</label>
        </div>
        <div class="usa-radio">
          <input class="usa-radio__input" id="contact-phone-radio" type="radio" name="contact-method" value="phone">
          <label class="usa-radio__label" for="contact-phone-radio">Phone</label>
        </div>
        <div class="usa-radio">
          <input class="usa-radio__input" id="contact-mail-radio" type="radio" name="contact-method" value="mail">
          <label class="usa-radio__label" for="contact-mail-radio">Mail</label>
        </div>
      </fieldset>
    </fieldset>
  </form>
</div>

---

## Implementation Code Examples

### Basic Form Structure
```html
<form class="usa-form usa-form--large" action="#" method="post" novalidate>
  <fieldset class="usa-fieldset">
    <legend class="usa-legend usa-legend--large">Form Title</legend>
    
    <!-- Form fields go here -->
    
    <input class="usa-button" type="submit" value="Submit">
  </fieldset>
</form>
```

### Required Field with Error Handling
```html
<label class="usa-label" for="field-id">
  Field Label <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
</label>
<input class="usa-input usa-input--error" id="field-id" name="field-name" 
       type="text" required aria-describedby="field-id-error" aria-invalid="true">
<span class="usa-error-message" id="field-id-error" role="alert">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
    <use xlink:href="/assets/uswds/img/sprite.svg#warning"></use>
  </svg>
  Error message text
</span>
```

### Multi-Step Progress Indicator
```html
<div class="usa-step-indicator" aria-label="progress">
  <ol class="usa-step-indicator__segments">
    <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
      <span class="usa-step-indicator__segment-label">Step 1</span>
    </li>
    <li class="usa-step-indicator__segment usa-step-indicator__segment--current">
      <span class="usa-step-indicator__segment-label">Step 2</span>
    </li>
    <li class="usa-step-indicator__segment">
      <span class="usa-step-indicator__segment-label">Step 3</span>
    </li>
  </ol>
</div>
```

### File Upload Component
```html
<label class="usa-label" for="file-upload">
  Upload documents
</label>
<span class="usa-hint">
  Accepted formats: PDF, DOC, JPG. Max size: 10MB per file.
</span>
<input class="usa-file-input" id="file-upload" type="file" 
       name="file-upload" multiple accept=".pdf,.doc,.jpg">
```

This page demonstrates comprehensive form patterns with:
- **Accessible form structure** with proper fieldsets and legends
- **Validation patterns** with error and success states
- **Multi-step forms** with progress indicators
- **File upload components** with clear instructions
- **Interactive elements** like checkboxes and radio buttons
- **Proper labeling** with required field indicators
- **ARIA attributes** for screen reader compatibility
- **Error handling** with descriptive messages and visual indicators