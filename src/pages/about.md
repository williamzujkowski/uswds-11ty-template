---
layout: layouts/page.njk
title: About This Template
lead: Learn more about the USWDS 11ty Template and how it can help you build better government websites.
sidenav: true
includeInNav: true
navOrder: 2
eleventyNavigation:
  key: About
  order: 2
---

## Purpose and Goals

The USWDS 11ty Template is designed to provide government agencies and contractors with a solid foundation for building modern, accessible, and performant websites. By combining the static site generation capabilities of 11ty with the design patterns and components of the U.S. Web Design System, this template helps teams:

- **Accelerate Development**: Start with a pre-configured setup that includes all the necessary tools and configurations
- **Ensure Compliance**: Built-in accessibility features and federal standards compliance
- **Maintain Consistency**: Use proven design patterns that users recognize and trust
- **Improve Performance**: Static site generation ensures fast load times and excellent SEO

## Technology Stack

### 11ty (Eleventy)
A simpler static site generator that transforms templates and content into HTML. Key benefits include:
- Zero client-side JavaScript by default
- Fast build times
- Flexible templating options (Nunjucks, Markdown, Liquid, and more)
- Rich plugin ecosystem

### U.S. Web Design System (USWDS)
The design system for the federal government, providing:
- Accessible, mobile-friendly components
- Consistent visual language
- Section 508 compliance
- Tested across browsers and devices

### Supporting Technologies
- **Sass**: For advanced CSS preprocessing and USWDS theming
- **PostCSS**: For autoprefixing and CSS optimization
- **GitHub Actions**: For continuous integration and deployment
- **Node.js**: JavaScript runtime for build processes

## Project Structure

```
project-root/
├── src/                    # Source files
│   ├── _data/             # Global data files
│   ├── _includes/         # Layouts and partials
│   ├── _styles/           # SCSS files
│   ├── assets/            # Images, fonts, and scripts
│   └── pages/             # Content pages
├── _site/                 # Build output (git-ignored)
├── eleventy.config.js     # 11ty configuration
└── package.json           # Dependencies and scripts
```

## Key Features

### Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader optimization

### Performance
- Static HTML generation
- Optimized asset delivery
- Lazy loading for images
- Minimal JavaScript footprint
- CDN-ready output

### Security
- No database or server-side processing
- Content Security Policy ready
- HTTPS enforcement support
- Regular dependency updates

### Developer Experience
- Hot reload during development
- Comprehensive documentation
- Linting and formatting tools
- Automated testing capabilities
- CI/CD pipeline support

## Federal Compliance

This template is designed to meet federal requirements including:

- **Section 508**: Accessibility standards for electronic and information technology
- **21st Century IDEA**: Modern, user-friendly government websites
- **Digital Analytics Program (DAP)**: Federal website analytics
- **Privacy and Security**: FISMA compliance considerations

## Getting Help

For questions, issues, or contributions:

- [GitHub Repository](https://github.com/youragency/uswds-11ty-template)
- [USWDS Community](https://designsystem.digital.gov/about/community/)
- [11ty Discord](https://www.11ty.dev/docs/community/)

## Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/youragency/uswds-11ty-template/blob/main/CONTRIBUTING.md) for details on:

- Code of Conduct
- How to submit issues
- Pull request process
- Development setup

## License

This template is released under the MIT License, making it free to use, modify, and distribute for both government and commercial projects.