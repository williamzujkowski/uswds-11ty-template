---
layout: layouts/page.njk
title: Getting Started
lead: Get your federally compliant website up and running in minutes with this comprehensive step-by-step guide.
permalink: /getting-started/
sidenav: true
eleventyNavigation:
  key: Getting Started
  order: 2
---

# Getting Started

Welcome to the USWDS 11ty Template! This comprehensive guide will help you quickly set up a federally compliant website that meets accessibility standards and government requirements.

## Prerequisites and System Requirements

### Required Software

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** for version control - [Download here](https://git-scm.com/)
- A modern code editor (we recommend [VS Code](https://code.visualstudio.com/))

### System Compatibility

- **Operating Systems**: Windows 10+, macOS 10.15+, Linux (Ubuntu 18.04+)
- **Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB free space for project and dependencies

### Verify Prerequisites

Check your installed versions:

```bash
# Check Node.js version (should be 18.0.0 or higher)
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

If any of these commands fail, install the missing software before proceeding.

## Quick Start (5 Minutes)

### Installation Methods

#### Method 1: Use as GitHub Template (Recommended for New Projects)

1. **Create from Template**:
   - Visit [{{ site.github }}]({{ site.github }})
   - Click the green "Use this template" button
   - Choose "Create a new repository"
   - Name your repository (e.g., "my-agency-website")
   - Choose public or private
   - Click "Create repository from template"

2. **Clone Your New Repository**:
   ```bash
   # Replace 'your-username' and 'your-repo-name'
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

#### Method 2: Direct Clone (For Testing)

```bash
# Clone the template directly
git clone https://github.com/williamzujkowski/uswds-11ty-template.git my-website
cd my-website

# Remove original git history (optional)
rm -rf .git
git init
```

#### Method 3: Fork (For Contributing Back)

1. Visit [{{ site.github }}]({{ site.github }})
2. Click "Fork" in the top-right corner
3. Clone your fork:
   ```bash
   git clone https://github.com/your-username/uswds-11ty-template.git
   cd uswds-11ty-template
   ```

#### Method 4: Download ZIP

1. Visit [{{ site.github }}]({{ site.github }})
2. Click "Code" > "Download ZIP"
3. Extract the ZIP file
4. Open terminal in the extracted folder

### Install Dependencies

```bash
# Install all required packages (takes 1-2 minutes)
npm install
```

This installs:
- **Eleventy** (11ty) - Static site generator v3.1.2+
- **USWDS** - U.S. Web Design System v3.8.0+
- **Sass** - CSS preprocessor for styling
- **PostCSS & Autoprefixer** - CSS processing tools
- **ESLint & Prettier** - Code quality tools
- **Accessibility testing tools** - pa11y, Lighthouse

### Start Development Server

```bash
# Start development server with hot reload
npm start
```

**Success!** Your site is now running at:
- **Local**: http://localhost:8080
- **Network**: Your local IP (shown in terminal)

The development server includes:
- **Hot reload** - Changes appear instantly
- **Sass compilation** - Automatic CSS processing
- **Live browser sync** - No manual refresh needed

### Test Your Setup

1. **Open your browser** to http://localhost:8080
2. **Verify the site loads** with USWDS styling
3. **Edit a file** (try `src/index.md`) and watch it update
4. **Check the terminal** for any error messages

### Build for Production

```bash
# Create optimized production build
npm run build
```

The production-ready site will be in the `_site/` directory with:
- Minified CSS and JavaScript
- Optimized images
- Clean URLs
- Proper caching headers

## Project Structure

```
uswds-11ty-template/
├── src/                      # Source files
│   ├── _data/               # Global data files
│   │   ├── site.json       # Site configuration
│   │   ├── contacts.json   # Contact information
│   │   └── build.js        # Build-time data
│   ├── _includes/           # Templates and partials
│   │   ├── layouts/        # Page layouts
│   │   └── partials/       # Reusable components
│   ├── _styles/            # SCSS files
│   │   ├── main.scss       # Main stylesheet
│   │   └── _custom.scss    # Custom overrides
│   ├── assets/             # Static assets
│   │   ├── img/           # Images
│   │   ├── js/            # JavaScript
│   │   └── uswds/         # USWDS assets
│   └── pages/              # Content pages
├── _site/                   # Build output (gitignored)
├── .github/                 # GitHub Actions workflows
├── eleventy.config.js       # 11ty configuration
├── package.json            # Dependencies and scripts
└── README.md               # Documentation
```

## Initial Configuration Steps

### Step 1: Site Information

Edit `src/_data/site.json` to customize your site:

```json
{
  "title": "Your Agency Name",
  "description": "Brief description of your agency or website purpose",
  "url": "https://your-domain.gov",
  "author": "Your Agency Name",
  "email": "contact@your-agency.gov",
  "phone": "1-800-YOUR-NUMBER",
  "address": {
    "street": "123 Government Street",
    "city": "Washington",
    "state": "DC",
    "zip": "20001"
  }
}
```

### Step 2: Navigation Setup

Update the primary navigation in the same file:

```json
{
  "navigation": {
    "primary": [
      {
        "text": "Home",
        "href": "/"
      },
      {
        "text": "About Us",
        "href": "/about/"
      },
      {
        "text": "Services",
        "href": "/services/"
      },
      {
        "text": "Contact",
        "href": "/contact/"
      }
    ],
    "footer": [
      {
        "text": "Privacy Policy",
        "href": "/privacy/"
      },
      {
        "text": "Accessibility",
        "href": "/accessibility/"
      }
    ]
  }
}
```

### Step 3: Contact Information

Create or edit `src/_data/contacts.json`:

```json
{
  "main": {
    "phone": "1-800-123-4567",
    "email": "contact@agency.gov",
    "tty": "1-800-123-4568",
    "hours": "Monday - Friday, 8:00 AM - 5:00 PM EST"
  },
  "emergency": {
    "phone": "1-800-EMERGENCY",
    "available": "24/7"
  }
}
```

### Step 4: Analytics Setup (Optional)

For government sites, configure Digital Analytics Program (DAP):

```json
{
  "analytics": {
    "dap": true,
    "ga": "YOUR-GA-ID"
  }
}
```

### Step 5: Social Media Links

Add your agency's social media presence:

```json
{
  "social": {
    "twitter": "https://twitter.com/youragency",
    "facebook": "https://facebook.com/youragency",
    "youtube": "https://youtube.com/youragency",
    "instagram": "https://instagram.com/youragency"
  }
}
```

## Creating Pages

### Markdown Pages

Create a new page in `src/pages/`:

```markdown
---
layout: layouts/page.njk
title: Page Title
permalink: /page-url/
eleventyNavigation:
  key: Page Name
  order: 3
---

# Page Content

Your content here...
```

### HTML Pages

For more complex layouts, use HTML:

```html
---
layout: layouts/page.njk
title: Complex Page
---

<div class="grid-row grid-gap">
  <div class="tablet:grid-col-8">
    <h1>Main Content</h1>
  </div>
  <div class="tablet:grid-col-4">
    <aside>Sidebar</aside>
  </div>
</div>
```

## Using USWDS Components

All USWDS components are available. Here are common examples:

### Alerts

```html
<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Information</h4>
    <p class="usa-alert__text">Alert message here.</p>
  </div>
</div>
```

### Buttons

```html
<a href="#" class="usa-button">Default</a>
<button class="usa-button usa-button--secondary">Secondary</button>
<button class="usa-button usa-button--outline">Outline</button>
```

### Cards

```html
<div class="usa-card">
  <div class="usa-card__container">
    <div class="usa-card__header">
      <h3 class="usa-card__heading">Card Title</h3>
    </div>
    <div class="usa-card__body">
      <p>Card content</p>
    </div>
  </div>
</div>
```

## Deployment Options

### GitHub Pages (Recommended for Open Source)

**Automatic Deployment:**

1. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: "GitHub Actions"
   - The included workflow will deploy automatically

2. **Manual Deployment**:
   ```bash
   # Build and deploy to gh-pages branch
   npm run deploy
   ```

3. **Custom Domain** (optional):
   - Add CNAME file: `echo "your-domain.gov" > src/CNAME`
   - Configure DNS to point to GitHub Pages

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `_site`
- Node.js version: 18.x or higher

### Netlify

1. **Connect Repository**:
   - Sign up at [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure Build**:
   - Build command: `npm run build`
   - Publish directory: `_site`
   - Node.js version: 18

3. **Environment Variables** (if needed):
   - Add in Netlify dashboard > Site settings > Environment variables

### Cloud.gov/Federalist (For Government Sites)

1. **Apply for Federalist Account**:
   - Visit [federalist.18f.gov](https://federalist.18f.gov)
   - Follow application process

2. **Configuration**:
   ```yaml
   # federalist.yml (create in root)
   headers:
     - source: /
       headers:
         - key: X-Frame-Options
           value: DENY
         - key: X-Content-Type-Options
           value: nosniff
   ```

### Traditional Web Hosting

1. **Build the Site**:
   ```bash
   npm run build
   ```

2. **Upload `_site/` Directory**:
   - Use FTP, SFTP, or hosting provider's upload tool
   - Upload contents of `_site/` to web root

3. **Configure Web Server**:
   - Set up redirects for clean URLs
   - Enable HTTPS
   - Configure caching headers

### Docker Deployment

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   
   FROM nginx:alpine
   COPY --from=0 /app/_site /usr/share/nginx/html
   ```

2. **Build and Run**:
   ```bash
   docker build -t my-site .
   docker run -p 80:80 my-site
   ```

## Development Workflow

### Available Commands

```bash
# Development Commands
npm start              # Start dev server with hot reload
npm run serve          # Alternative dev server command
npm run build          # Create production build
npm run clean          # Remove build files

# Styling Commands
npm run sass:build     # Compile Sass to CSS
npm run sass:watch     # Watch Sass files for changes

# Quality Assurance
npm run lint:js        # Check JavaScript with ESLint
npm run lint:scss      # Check SCSS with Stylelint
npm run format         # Format code with Prettier

# Testing Commands
npm run test:a11y      # Run accessibility tests
npm run test:lighthouse # Run Lighthouse performance audit
npm run test:uswds     # Run USWDS compliance tests

# Deployment
npm run deploy         # Deploy to GitHub Pages
```

### Recommended Workflow

1. **Start Development**:
   ```bash
   npm start
   ```

2. **Make Changes**:
   - Edit files in `src/` directory
   - Changes auto-reload in browser
   - Check terminal for any errors

3. **Test Your Changes**:
   ```bash
   # Run all tests
   npm run test:uswds
   
   # Check code quality
   npm run lint:js
   npm run lint:scss
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Deploy** (see deployment section below)

### Git Workflow (Advanced)

1. **Create Feature Branch**:
   ```bash
   git checkout -b feature/new-page
   ```

2. **Make Changes and Commit**:
   ```bash
   git add .
   git commit -m "Add new contact page"
   ```

3. **Push and Create Pull Request**:
   ```bash
   git push origin feature/new-page
   # Then create PR on GitHub
   ```

4. **Merge After Review**:
   ```bash
   git checkout main
   git pull origin main
   git branch -d feature/new-page
   ```

## Common Customization Tasks

### Adding a New Page

1. **Create the Page File**:
   ```bash
   # Create new page
   touch src/pages/new-page.md
   ```

2. **Add Front Matter**:
   ```markdown
   ---
   layout: layouts/page.njk
   title: New Page Title
   lead: Optional subtitle or description
   permalink: /new-page/
   eleventyNavigation:
     key: New Page
     order: 5
   ---
   
   # New Page Content
   
   Your content here...
   ```

3. **Update Navigation** (in `src/_data/site.json`):
   ```json
   {
     "navigation": {
       "primary": [
         {
           "text": "New Page",
           "href": "/new-page/"
         }
       ]
     }
   }
   ```

### Adding a New Section

1. **Create Section Directory**:
   ```bash
   mkdir src/pages/section-name
   ```

2. **Create Section Homepage**:
   ```bash
   touch src/pages/section-name/index.md
   ```

3. **Add Sub-pages**:
   ```bash
   touch src/pages/section-name/page1.md
   touch src/pages/section-name/page2.md
   ```

### Customizing Styles

1. **Override USWDS Variables** (before import in `src/_styles/main.scss`):
   ```scss
   // Custom USWDS settings
   @use "uswds-core" with (
     $theme-color-primary-lightest: #e7f6f8,
     $theme-color-primary: #0f4c81,
     $theme-font-sans: "Source Sans Pro"
   );
   ```

2. **Add Custom Styles** (after USWDS import):
   ```scss
   // Custom component styles
   .my-custom-component {
     background-color: color('primary-lighter');
     padding: units(2);
     
     @include at-media('tablet') {
       padding: units(4);
     }
   }
   ```

3. **Create New Style Files**:
   ```bash
   touch src/_styles/_custom-components.scss
   ```
   
   Then import in `main.scss`:
   ```scss
   @import "custom-components";
   ```

### Adding JavaScript Functionality

1. **Create JavaScript Module**:
   ```bash
   touch src/assets/js/custom-features.js
   ```

2. **Add Functionality**:
   ```javascript
   // Initialize USWDS components
   import { accordion } from '@uswds/uswds/js';
   
   document.addEventListener('DOMContentLoaded', function() {
     // Initialize accordions
     accordion.on();
     
     // Your custom code here
     console.log('Site initialized!');
   });
   ```

3. **Include in Main JavaScript**:
   ```javascript
   // In src/assets/js/main.js
   import './custom-features.js';
   ```

### Working with Data Files

1. **Create Global Data**:
   ```bash
   touch src/_data/team.json
   ```
   
   ```json
   {
     "members": [
       {
         "name": "Jane Doe",
         "title": "Director",
         "email": "jane.doe@agency.gov"
       }
     ]
   }
   ```

2. **Use Data in Templates**:
   ```html
   <ul>
     {%- for member in team.members -%}
     <li>{{ member.name }} - {{ member.title }}</li>
     {%- endfor -%}
   </ul>
   ```

### Adding Images and Assets

1. **Add Images**:
   ```bash
   # Place images in assets directory
   cp my-image.jpg src/assets/img/
   ```

2. **Use in Content**:
   ```markdown
   ![Alt text for accessibility]({{ '/assets/img/my-image.jpg' | url }})
   ```

3. **Add to Passthrough Copy** (if needed in eleventy.config.js):
   ```javascript
   eleventyConfig.addPassthroughCopy("src/assets/pdf");
   ```

## Best Practices

### Accessibility
- Always include alt text for images
- Use semantic HTML elements
- Test with keyboard navigation
- Check color contrast ratios

### Performance
- Optimize images before adding
- Minimize custom JavaScript
- Use USWDS components when possible
- Enable caching headers

### Security
- Keep dependencies updated
- Don't commit sensitive data
- Use environment variables for secrets
- Enable HTTPS in production

## Troubleshooting Common Issues

### Installation Issues

**Problem**: `npm install` fails
```bash
# Solution 1: Clear npm cache
npm cache clean --force
npm install

# Solution 2: Delete lock file and reinstall
rm package-lock.json
rm -rf node_modules
npm install

# Solution 3: Use different Node.js version
# Install nvm (Node Version Manager) and switch versions
nvm install 18
nvm use 18
```

**Problem**: Node.js version too old
```bash
# Check current version
node --version

# If less than 18.0.0, update Node.js
# Visit https://nodejs.org or use nvm
nvm install --lts
nvm use --lts
```

### Build Errors

**Problem**: Build fails with Sass errors
```bash
# Check Sass syntax
npm run lint:scss

# Clear build cache
npm run clean
npm run build

# Reinstall Sass
npm uninstall sass
npm install sass@latest
```

**Problem**: JavaScript errors
```bash
# Check JavaScript syntax
npm run lint:js

# Fix automatically if possible
npm run format
```

**Problem**: Template errors
```bash
# Check Nunjucks template syntax
# Look for unclosed tags, missing variables
# Enable debug mode for detailed errors
DEBUG=Eleventy* npm start
```

### Development Server Issues

**Problem**: Server won't start
```bash
# Check if port 8080 is in use
lsof -ti:8080
# Kill process if needed
kill -9 $(lsof -ti:8080)

# Start server on different port
npx @11ty/eleventy --serve --port=3000
```

**Problem**: Changes not reflecting
```bash
# Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
# Clear browser cache
# Restart development server
```

**Problem**: CSS not updating
```bash
# Restart Sass watcher
npm run sass:watch

# Or restart entire dev server
npm start
```

### Content Issues

**Problem**: Pages not generating
```bash
# Check front matter syntax (YAML formatting)
# Ensure permalink doesn't conflict
# Check file extension (.md, .html, .njk)
```

**Problem**: Images not displaying
```bash
# Check image paths (use {{ '/assets/img/image.jpg' | url }})
# Verify images exist in src/assets/img/
# Check passthrough copy configuration
```

**Problem**: Navigation not updating
```bash
# Clear Eleventy cache
rm -rf .cache

# Restart server
npm start

# Check site.json syntax
```

### Performance Issues

**Problem**: Slow build times
```bash
# Use incremental builds
npx @11ty/eleventy --serve --incremental

# Reduce image sizes
# Minimize custom JavaScript
# Check for infinite loops in templates
```

**Problem**: Large bundle size
```bash
# Analyze what's included
npx @11ty/eleventy --dryrun

# Optimize images
# Remove unused USWDS components
# Minimize custom CSS
```

### Accessibility Issues

**Problem**: Accessibility tests failing
```bash
# Run specific tests
npm run test:a11y

# Check common issues:
# - Missing alt text on images
# - Missing form labels
# - Poor color contrast
# - Missing heading structure
```

### Getting Help

If you're still having issues:

1. **Check the Error Message**: Most errors provide specific information
2. **Search Issues**: Look at [GitHub Issues]({{ site.github }}/issues)
3. **Ask for Help**: Create a new issue with:
   - Your operating system
   - Node.js version (`node --version`)
   - npm version (`npm --version`)
   - Complete error message
   - Steps to reproduce

**Emergency Reset**:
```bash
# Nuclear option - start completely fresh
rm -rf node_modules package-lock.json _site .cache
npm install
npm start
```

## Next Steps and Resources

### Immediate Next Steps

Now that your site is running, here's what to do next:

1. **Customize Your Content**:
   - Update `src/index.md` with your agency's information
   - Edit `src/pages/about.md` with your mission and team
   - Customize `src/pages/contact.md` with your contact information

2. **Explore Available Components**:
   - [Browse USWDS components](/components/) - Buttons, forms, navigation, etc.
   - [Check out demo pages](/demo/) - See components in action
   - [Review implementation examples](https://designsystem.digital.gov/components/)

3. **Learn Advanced Customization**:
   - [Customization guide](/customization/) - Theming, styling, layout
   - [Best practices](/best-practices/) - Accessibility, performance, security
   - [USWDS documentation](https://designsystem.digital.gov/) - Official design system docs

4. **Set Up Your Workflow**:
   - Configure your code editor with extensions
   - Set up automated testing
   - Plan your content structure
   - Consider setting up staging environment

### Learning Resources

**Official Documentation**:
- [U.S. Web Design System](https://designsystem.digital.gov/) - Design system documentation
- [Eleventy Documentation](https://www.11ty.dev/docs/) - Static site generator guides
- [Sass Documentation](https://sass-lang.com/documentation) - CSS preprocessing
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/) - Template language

**Government Resources**:
- [Digital.gov](https://digital.gov/) - Digital government best practices
- [18F Accessibility Guide](https://accessibility.18f.gov/) - Federal accessibility requirements
- [Section 508](https://www.section508.gov/) - Accessibility compliance
- [Federalist](https://federalist.18f.gov/) - Government hosting platform

**Community Support**:
- **GitHub Issues**: [Report bugs or request features]({{ site.github }}/issues)
- **USWDS Community**: [Join discussions](https://designsystem.digital.gov/about/community/)
- **11ty Discord**: [Get technical support](https://www.11ty.dev/docs/community/)
- **Digital.gov Community**: [Connect with other government developers](https://digital.gov/communities/)

### Recommended Tools

**Code Editors**:
- [VS Code](https://code.visualstudio.com/) with extensions:
  - Eleventy Syntax Highlighting
  - Sass/SCSS IntelliSense
  - Prettier - Code formatter
  - ESLint

**Design Tools**:
- [USWDS Design Tokens](https://designsystem.digital.gov/design-tokens/) - Official design values
- [Sketch Cloud USWDS Library](https://www.sketch.com/s/0f3fd7ad-72b7-40d3-b696-b0ee90a1e076) - Design components
- [Figma USWDS Components](https://www.figma.com/community/file/836611771720754351) - Design system in Figma

**Testing Tools**:
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation
- [axe DevTools](https://www.deque.com/axe/devtools/) - Accessibility testing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audits

### Project Templates and Examples

**Starter Projects**:
- Government agency website
- Documentation site
- News/blog site
- Service portal

**Example Sites Built with USWDS**:
- [Vote.gov](https://vote.gov/)
- [USA.gov](https://usa.gov/)
- [Login.gov](https://login.gov/)
- [USAJOBS](https://usajobs.gov/)

### Getting Help

When you need assistance:

1. **Check this documentation first** - Most common questions are covered
2. **Search existing issues** - Your question might already be answered
3. **Create a detailed issue** including:
   - What you're trying to accomplish
   - What you expected to happen
   - What actually happened
   - Your environment (OS, Node version, etc.)
   - Steps to reproduce the problem

### Contributing Back

Consider contributing to the community:

- **Report bugs** you encounter
- **Suggest improvements** to this template
- **Share your customizations** that others might find useful
- **Write documentation** or tutorials
- **Answer questions** from other developers

---

**License**: This template is released under the CC0 license (public domain). You're free to use, modify, and distribute it however you need - no attribution required!

**Disclaimer**: This is an open source community project and is not an official project of the United States Government. For official government web development guidance, consult [Digital.gov](https://digital.gov/) and your agency's web team.