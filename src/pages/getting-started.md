---
layout: layouts/page.njk
title: Getting Started
lead: Get your federally compliant website up and running in 5 minutes
permalink: /getting-started/
hero:
  alt: Quick Start
  heading: Getting Started
  content: From zero to a live government website in just a few commands. Follow our streamlined setup process to build your Section 508 compliant, USWDS-powered website.
  button:
    text: Start Setup →
    href: /getting-started/
eleventyNavigation:
  key: Getting Started
  order: 2
---

<div class="usa-alert usa-alert--success usa-alert--slim margin-bottom-4">
  <div class="usa-alert__body">
    <p class="usa-alert__text">
      <strong>Quick Setup:</strong> If you're already familiar with Node.js and npm, jump directly to the Quick Start section below.
    </p>
  </div>
</div>

## Prerequisites

Before you begin, ensure you have:

<div class="grid-row grid-gap margin-bottom-4">
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Node.js 18+</h3>
        </div>
        <div class="usa-card__body">
          <p>JavaScript runtime for building</p>
          <code>node --version</code>
        </div>
        <div class="usa-card__footer">
          <a href="https://nodejs.org/" class="usa-button usa-button--outline width-full">Download</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Git</h3>
        </div>
        <div class="usa-card__body">
          <p>Version control system</p>
          <code>git --version</code>
        </div>
        <div class="usa-card__footer">
          <a href="https://git-scm.com/" class="usa-button usa-button--outline width-full">Download</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Code Editor</h3>
        </div>
        <div class="usa-card__body">
          <p>VS Code recommended</p>
          <code>code --version</code>
        </div>
        <div class="usa-card__footer">
          <a href="https://code.visualstudio.com/" class="usa-button usa-button--outline width-full">Download</a>
        </div>
      </div>
    </div>
  </div>
</div>

## Quick Start

<div class="usa-accordion usa-accordion--bordered" aria-multiselectable="false">
  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="true" aria-controls="method-1">
      Method 1: Use as GitHub Template (Recommended)
    </button>
  </h3>
  <div id="method-1" class="usa-accordion__content usa-prose">
    <ol class="usa-process-list">
      <li class="usa-process-list__item">
        <h4 class="usa-process-list__heading">Create from Template</h4>
        <p>Visit <a href="https://github.com/williamzujkowski/uswds-11ty-template">our GitHub repository</a> and click the green "Use this template" button to create your own copy.</p>
      </li>
      <li class="usa-process-list__item">
        <h4 class="usa-process-list__heading">Clone Your Repository</h4>
        <pre><code>git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO</code></pre>
      </li>
      <li class="usa-process-list__item">
        <h4 class="usa-process-list__heading">Install Dependencies</h4>
        <pre><code>npm install</code></pre>
      </li>
      <li class="usa-process-list__item">
        <h4 class="usa-process-list__heading">Start Development Server</h4>
        <pre><code>npm start</code></pre>
        <p>Your site is now running at <strong>http://localhost:8080</strong></p>
      </li>
    </ol>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="method-2">
      Method 2: Direct Clone
    </button>
  </h3>
  <div id="method-2" class="usa-accordion__content usa-prose">
    <pre><code>git clone https://github.com/williamzujkowski/uswds-11ty-template.git my-website
cd my-website
rm -rf .git
git init
npm install
npm start</code></pre>
    <p>Visit <strong>http://localhost:8080</strong> to see your site!</p>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="method-3">
      Method 3: Download ZIP
    </button>
  </h3>
  <div id="method-3" class="usa-accordion__content usa-prose">
    <ol>
      <li>Download the <a href="https://github.com/williamzujkowski/uswds-11ty-template/archive/refs/heads/main.zip">template ZIP file</a></li>
      <li>Extract to your desired location</li>
      <li>Open terminal in the extracted folder</li>
      <li>Run: <code>npm install</code></li>
      <li>Start: <code>npm start</code></li>
    </ol>
  </div>
</div>

## Your First Changes

<div class="margin-top-4 margin-bottom-4">
  <div class="usa-card">
    <div class="usa-card__container">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">🎯 Try It Now</h3>
      </div>
      <div class="usa-card__body">
        <ol>
          <li><strong>Edit the homepage:</strong> Open <code>src/index.md</code> in your editor</li>
          <li><strong>Change the title:</strong> Update the hero heading to your agency name</li>
          <li><strong>Save the file:</strong> Your browser will auto-refresh with changes</li>
          <li><strong>Success!</strong> You've just edited your first page</li>
        </ol>
        <div class="usa-alert usa-alert--info usa-alert--slim margin-top-3">
          <div class="usa-alert__body">
            <p class="usa-alert__text">
              <strong>Pro tip:</strong> Keep your browser and editor side-by-side to see changes instantly!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Essential Configuration

### 1. Update Site Information

Edit `src/_data/site.json`:

```json
{
  "title": "Your Agency Name",
  "description": "Brief description of your agency",
  "url": "https://your-domain.gov",
  "author": "Your Agency",
  "email": "contact@your-agency.gov"
}
```

### 2. Customize Navigation

Also in `src/_data/site.json`:

```json
{
  "navigation": {
    "primary": [
      { "text": "Home", "href": "/" },
      { "text": "About", "href": "/about/" },
      { "text": "Services", "href": "/services/" },
      { "text": "Contact", "href": "/contact/" }
    ]
  }
}
```

### 3. Create Your First Page

Create `src/pages/about.md`:

```markdown
---
layout: layouts/page.njk
title: About Us
permalink: /about/
---

# About Our Agency

Your content here...
```

## Available Commands

<div class="usa-table-container--scrollable" tabindex="0">
  <table class="usa-table usa-table--striped">
    <caption>Development commands for building and testing your site</caption>
    <thead>
      <tr>
        <th scope="col">Command</th>
        <th scope="col">Description</th>
        <th scope="col">When to Use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><code>npm start</code></th>
        <td>Start development server with live reload</td>
        <td>Daily development work</td>
      </tr>
      <tr>
        <th scope="row"><code>npm run build</code></th>
        <td>Create production-ready build</td>
        <td>Before deployment</td>
      </tr>
      <tr>
        <th scope="row"><code>npm run deploy</code></th>
        <td>Deploy to GitHub Pages</td>
        <td>Publishing updates</td>
      </tr>
      <tr>
        <th scope="row"><code>npm run test:a11y</code></th>
        <td>Run accessibility tests</td>
        <td>Before commits</td>
      </tr>
      <tr>
        <th scope="row"><code>npm run lint:js</code></th>
        <td>Check JavaScript code quality</td>
        <td>During development</td>
      </tr>
      <tr>
        <th scope="row"><code>npm run format</code></th>
        <td>Auto-format code with Prettier</td>
        <td>Before commits</td>
      </tr>
    </tbody>
  </table>
</div>

## Project Structure

```
your-website/
├── src/                    # All source files
│   ├── _data/             # Global data (site.json)
│   ├── _includes/         # Templates and layouts
│   ├── _styles/           # SCSS stylesheets
│   ├── assets/            # Images, fonts, JS
│   └── pages/             # Your content pages
├── _site/                 # Built site (git-ignored)
├── eleventy.config.js     # 11ty configuration
└── package.json           # Dependencies & scripts
```

## Deployment Options

<div class="grid-row grid-gap margin-top-4">
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">GitHub Pages (Free)</h3>
        </div>
        <div class="usa-card__body">
          <p>Perfect for public agency sites. Automatic deployment with included GitHub Actions.</p>
          <ol>
            <li>Push to GitHub</li>
            <li>Enable Pages in Settings</li>
            <li>Site deploys automatically</li>
          </ol>
        </div>
        <div class="usa-card__footer">
          <pre><code>npm run deploy</code></pre>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-6">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Cloud.gov / Federalist</h3>
        </div>
        <div class="usa-card__body">
          <p>Official government hosting platform with FedRAMP authorization and compliance.</p>
          <ol>
            <li>Apply for account</li>
            <li>Connect repository</li>
            <li>Configure build settings</li>
          </ol>
        </div>
        <div class="usa-card__footer">
          <a href="https://federalist.18f.gov/" class="usa-button usa-button--outline width-full">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</div>

## Common Tasks

<div class="usa-accordion usa-accordion--bordered margin-top-4" aria-multiselectable="true">
  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="task-page">
      Adding a New Page
    </button>
  </h3>
  <div id="task-page" class="usa-accordion__content usa-prose">
    <pre><code>touch src/pages/services.md</code></pre>
    <p>Then add front matter to the file:</p>
    <pre><code>---
layout: layouts/page.njk
title: Our Services
permalink: /services/
---

Your content goes here...</code></pre>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="task-style">
      Customizing Styles
    </button>
  </h3>
  <div id="task-style" class="usa-accordion__content usa-prose">
    <p>Edit <code>src/_styles/_custom.scss</code>:</p>
    <pre><code>$theme-color-primary: #0f4c81;

.my-component {
  background: color('primary-lighter');
  padding: units(2);
}</code></pre>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="task-component">
      Using USWDS Components
    </button>
  </h3>
  <div id="task-component" class="usa-accordion__content usa-prose">
    <p>All USWDS components are available. Example alert:</p>
    <pre><code>&lt;div class="usa-alert usa-alert--info"&gt;
  &lt;div class="usa-alert__body"&gt;
    &lt;h4 class="usa-alert__heading"&gt;Information&lt;/h4&gt;
    &lt;p class="usa-alert__text"&gt;Your message here.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    <p><a href="{{ '/components/' | url }}">View all components →</a></p>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="task-image">
      Adding Images
    </button>
  </h3>
  <div id="task-image" class="usa-accordion__content usa-prose">
    <ol>
      <li>Place image in <code>src/assets/img/</code></li>
      <li>Reference in markdown: <code>![Alt text](&#123;&#123; '/assets/img/image.jpg' | url &#125;&#125;)</code></li>
      <li>Or in HTML: <code>&lt;img src="&#123;&#123; '/assets/img/image.jpg' | url &#125;&#125;" alt="Description"&gt;</code></li>
    </ol>
  </div>
</div>

## Troubleshooting

<div class="usa-alert usa-alert--warning margin-top-4 margin-bottom-2">
  <div class="usa-alert__body">
    <h3 class="usa-alert__heading">Common Issues & Quick Fixes</h3>
  </div>
</div>

<div class="grid-row grid-gap">
  <div class="tablet:grid-col-6">
    <h4>Installation Fails</h4>
    <pre><code>npm cache clean --force
rm -rf node_modules package-lock.json
npm install</code></pre>
  </div>
  
  <div class="tablet:grid-col-6">
    <h4>Port Already in Use</h4>
    <pre><code>lsof -ti:8080
npx @11ty/eleventy --serve --port=3000</code></pre>
  </div>
</div>

<div class="grid-row grid-gap margin-top-3">
  <div class="tablet:grid-col-6">
    <h4>Changes Not Showing</h4>
    <ul>
      <li>Hard refresh browser (Ctrl+Shift+R)</li>
      <li>Restart dev server</li>
      <li>Check terminal for errors</li>
    </ul>
  </div>
  
  <div class="tablet:grid-col-6">
    <h4>Build Errors</h4>
    <ul>
      <li>Check Node version: <code>node --version</code></li>
      <li>Update dependencies: <code>npm update</code></li>
      <li>Enable debug: <code>DEBUG=Eleventy* npm start</code></li>
    </ul>
  </div>
</div>

## Next Steps

<div class="grid-row grid-gap margin-top-5 margin-bottom-4">
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Explore Components</h3>
        </div>
        <div class="usa-card__body">
          <p>Browse all available USWDS components with live examples.</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/components/' | url }}" class="usa-button usa-button--outline width-full">View Components</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">View Demo Sites</h3>
        </div>
        <div class="usa-card__body">
          <p>See complete example websites built with this template.</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/demo/' | url }}" class="usa-button usa-button--outline width-full">Browse Demos</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tablet:grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Best Practices</h3>
        </div>
        <div class="usa-card__body">
          <p>Learn accessibility, security, and performance guidelines.</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{ '/best-practices/' | url }}" class="usa-button usa-button--outline width-full">Read Guide</a>
        </div>
      </div>
    </div>
  </div>
</div>

## Get Help

<div class="usa-summary-box margin-top-4" role="region" aria-labelledby="help-heading">
  <div class="usa-summary-box__body">
    <h3 class="usa-summary-box__heading" id="help-heading">Support Resources</h3>
    <div class="usa-summary-box__text">
      <ul class="usa-icon-list">
        <li class="usa-icon-list__item">
          <div class="usa-icon-list__icon text-primary">
            <svg class="usa-icon" aria-hidden="true" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#github"></use>
            </svg>
          </div>
          <div class="usa-icon-list__content">
            <strong>GitHub Issues:</strong> <a href="https://github.com/williamzujkowski/uswds-11ty-template/issues">Report bugs or request features</a>
          </div>
        </li>
        <li class="usa-icon-list__item">
          <div class="usa-icon-list__icon text-primary">
            <svg class="usa-icon" aria-hidden="true" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#forum"></use>
            </svg>
          </div>
          <div class="usa-icon-list__content">
            <strong>USWDS Community:</strong> <a href="https://designsystem.digital.gov/about/community/">Join discussions</a>
          </div>
        </li>
        <li class="usa-icon-list__item">
          <div class="usa-icon-list__icon text-primary">
            <svg class="usa-icon" aria-hidden="true" role="img">
              <use xlink:href="{{ '/assets/uswds/img/sprite.svg' | url }}#book"></use>
            </svg>
          </div>
          <div class="usa-icon-list__content">
            <strong>Documentation:</strong> <a href="https://designsystem.digital.gov/">Official USWDS docs</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

---

<div class="text-center margin-top-4">
  <p class="font-body-lg">Ready to build something amazing?</p>
  <a href="{{ '/demo/' | url }}" class="usa-button usa-button--big">View Demo Sites →</a>
  <p class="margin-top-2">
    <a href="https://github.com/williamzujkowski/uswds-11ty-template" class="usa-link">View on GitHub</a> | 
    <a href="{{ '/license/' | url }}" class="usa-link">CC0 License (Public Domain)</a>
  </p>
</div>