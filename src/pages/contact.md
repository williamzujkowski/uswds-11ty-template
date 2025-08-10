---
layout: layouts/page.njk
title: Contact Us
permalink: /contact/
eleventyNavigation:
  key: Contact
  order: 104
---

# Contact Us

We're here to help and answer any questions you might have. Please choose the method that works best for you.

## General Information

### Main Office
**{{ site.author }}**  
{{ site.address.street }}  
{{ site.address.city }}, {{ site.address.state }} {{ site.address.zip }}

**Phone**: [{{ site.phone }}](tel:{{ site.phone }})  
**Email**: [{{ site.email }}](mailto:{{ site.email }})

### Office Hours
**Monday - Friday**: 8:00 AM - 4:30 PM (ET)  
**Closed**: Federal holidays and weekends

*For emergency situations outside of business hours, please contact [emergency contact information].*

## Contact Form

<form class="usa-form usa-form--large" action="/submit-contact" method="post">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend usa-legend--large">Send us a message</legend>
    
    <label class="usa-label" for="contact-name">
      Full Name <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
    </label>
    <input class="usa-input" id="contact-name" name="name" type="text" required aria-describedby="contact-name-hint">
    <span class="usa-hint" id="contact-name-hint">Provide your full name</span>

    <label class="usa-label" for="contact-email">
      Email Address <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
    </label>
    <input class="usa-input" id="contact-email" name="email" type="email" required aria-describedby="contact-email-hint">
    <span class="usa-hint" id="contact-email-hint">We'll use this to respond to your message</span>

    <label class="usa-label" for="contact-phone">Phone Number</label>
    <input class="usa-input" id="contact-phone" name="phone" type="tel" aria-describedby="contact-phone-hint">
    <span class="usa-hint" id="contact-phone-hint">Optional - include if you'd like a phone call</span>

    <label class="usa-label" for="contact-organization">Organization</label>
    <input class="usa-input" id="contact-organization" name="organization" type="text" aria-describedby="contact-organization-hint">
    <span class="usa-hint" id="contact-organization-hint">If applicable</span>

    <label class="usa-label" for="contact-subject">Subject <abbr title="required" class="usa-hint usa-hint--required">*</abbr></label>
    <select class="usa-select" id="contact-subject" name="subject" required aria-describedby="contact-subject-hint">
      <option value="">- Select a topic -</option>
      <option value="general">General Information</option>
      <option value="services">Services and Programs</option>
      <option value="website">Website Issues</option>
      <option value="foia">FOIA Request</option>
      <option value="accessibility">Accessibility</option>
      <option value="media">Media Inquiry</option>
      <option value="partnership">Partnership Opportunity</option>
      <option value="feedback">Feedback or Complaint</option>
      <option value="other">Other</option>
    </select>
    <span class="usa-hint" id="contact-subject-hint">Choose the topic that best describes your inquiry</span>

    <label class="usa-label" for="contact-message">
      Message <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
    </label>
    <textarea class="usa-textarea" id="contact-message" name="message" rows="6" required aria-describedby="contact-message-hint"></textarea>
    <span class="usa-hint" id="contact-message-hint">Please provide as much detail as possible</span>

    <div class="usa-checkbox">
      <input class="usa-checkbox__input" id="contact-subscribe" name="subscribe" type="checkbox" value="yes">
      <label class="usa-checkbox__label" for="contact-subscribe">
        Subscribe to our newsletter for updates and announcements
      </label>
    </div>
  </fieldset>

  <input class="usa-button" type="submit" value="Send Message">
</form>

## Specific Departments

### Public Affairs
For media inquiries, press releases, and public information:
- **Phone**: [Insert Phone Number]
- **Email**: [publicaffairs@example.gov](mailto:publicaffairs@example.gov)

### Legislative Affairs
For congressional and legislative matters:
- **Phone**: [Insert Phone Number]
- **Email**: [legislative@example.gov](mailto:legislative@example.gov)

### Freedom of Information Act (FOIA)
For FOIA requests and information:
- **Phone**: [Insert Phone Number]
- **Email**: [foia@example.gov](mailto:foia@example.gov)
- **FOIA Portal**: [Insert URL]
- [Learn more about FOIA](/foia/)

### Civil Rights and Equal Employment
For civil rights concerns and EEO matters:
- **Phone**: [Insert Phone Number]
- **Email**: [civilrights@example.gov](mailto:civilrights@example.gov)
- [Learn more about No FEAR Act](/no-fear-act/)

### Website and Accessibility
For website issues and accessibility concerns:
- **Email**: [webmaster@example.gov](mailto:webmaster@example.gov)
- [Report accessibility issues](/accessibility/)

## Visit Us

### Headquarters Location
**{{ site.author }}**  
{{ site.address.street }}  
{{ site.address.city }}, {{ site.address.state }} {{ site.address.zip }}

### Visitor Information
- **Security**: All visitors must check in at the main entrance
- **ID Required**: Government-issued photo identification required
- **Parking**: Limited visitor parking available
- **Accessibility**: Building is fully accessible with elevator access to all floors

### Directions

#### Public Transportation
- **Metro**: [Nearest station and directions]
- **Bus**: [Bus routes and stop locations]

#### Driving Directions
- **From I-495**: [Specific directions]
- **From Downtown**: [Specific directions]
- **Parking**: [Parking information and restrictions]

### Building Hours
**Monday - Friday**: 7:00 AM - 6:00 PM (ET)  
**Weekends and Holidays**: Closed to public

*Note: Some offices may have different hours. Please call ahead to confirm availability.*

## Regional Offices

### Northeast Region
**Address**: [Regional Office Address]  
**Phone**: [Regional Phone Number]  
**Email**: [northeast@example.gov](mailto:northeast@example.gov)

### Southeast Region
**Address**: [Regional Office Address]  
**Phone**: [Regional Phone Number]  
**Email**: [southeast@example.gov](mailto:southeast@example.gov)

### Midwest Region
**Address**: [Regional Office Address]  
**Phone**: [Regional Phone Number]  
**Email**: [midwest@example.gov](mailto:midwest@example.gov)

### Southwest Region
**Address**: [Regional Office Address]  
**Phone**: [Regional Phone Number]  
**Email**: [southwest@example.gov](mailto:southwest@example.gov)

### Western Region
**Address**: [Regional Office Address]  
**Phone**: [Regional Phone Number]  
**Email**: [western@example.gov](mailto:western@example.gov)

## Connect With Us

### Social Media
Stay connected and get updates:

{% if site.social.twitter %}
- **Twitter**: [@youragency]({{ site.social.twitter }})
{% endif %}
{% if site.social.facebook %}
- **Facebook**: [{{ site.author }}]({{ site.social.facebook }})
{% endif %}
{% if site.social.youtube %}
- **YouTube**: [{{ site.author }}]({{ site.social.youtube }})
{% endif %}
{% if site.social.instagram %}
- **Instagram**: [@youragency]({{ site.social.instagram }})
{% endif %}

### Newsletter Signup
Subscribe to our newsletter for:
- Policy updates and announcements
- Program information
- Event notifications
- Important deadlines

[Subscribe to Newsletter](#) *(Form integration required)*

## Response Times

We strive to respond to all inquiries promptly:

- **General Inquiries**: Within 2-3 business days
- **Complex Issues**: Within 5-7 business days
- **FOIA Requests**: According to FOIA timelines
- **Media Inquiries**: Within 24 hours during business days
- **Website Issues**: Within 1-2 business days
- **Accessibility Concerns**: Within 5 business days

*Response times may vary depending on the complexity of your inquiry and current workload.*

## Alternative Contact Methods

### TTY/TDD Services
For hearing-impaired individuals:
- **TTY**: [Insert TTY Number]
- **Federal Relay Service**: 711

### Language Services
We provide language assistance services:
- **Spanish**: [Insert Phone Number]
- **Translation Services**: Available upon request
- **Interpreter Services**: Available for in-person meetings

### Emergency Contact
For urgent matters outside business hours:
- **Emergency Line**: [Insert Emergency Number]
- **After-Hours Contact**: [Insert Contact Information]

*Emergency line is for urgent matters that cannot wait until the next business day.*

## Privacy Notice

Information submitted through this contact form is subject to the Privacy Act and may be disclosed in accordance with applicable laws and regulations. Please see our [Privacy Policy](/privacy/) for more information about how we handle your personal information.

Your contact information will only be used to respond to your inquiry unless you specifically request to be added to our mailing list. We do not share personal information with third parties except as required by law.

---

*For the most current contact information, please check this page regularly or call our main number at [{{ site.phone }}](tel:{{ site.phone }}).*