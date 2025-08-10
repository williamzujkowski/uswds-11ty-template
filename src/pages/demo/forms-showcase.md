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
      <option value="general">General Information</option>
      <option value="services">Government Services</option>
      <option value="compliance">Regulatory Compliance</option>
      <option value="technical">Technical Support</option>
      <option value="accessibility">Accessibility Issue</option>
      <option value="feedback">Website Feedback</option>
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
          <option value="sole-proprietorship">Sole Proprietorship</option>
          <option value="partnership">Partnership</option>
          <option value="llc">Limited Liability Company</option>
          <option value="corporation">Corporation</option>
          <option value="non-profit">Non-Profit Organization</option>
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
          <option value="">- Select -</option>
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