# Contributing to USWDS 11ty Template

Thank you for your interest in contributing to the USWDS 11ty Template! We welcome contributions from the community and are grateful for any help you can provide.

## How to Contribute

### Reporting Issues

- Check if the issue already exists in the [issue tracker](https://github.com/yourusername/uswds-11ty-template/issues)
- Include steps to reproduce the issue
- Provide system information (OS, Node version, browser)
- Include relevant error messages or screenshots

### Suggesting Features

- Open an issue with the "enhancement" label
- Clearly describe the feature and its benefits
- Provide use cases and examples

### Submitting Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run tests and linting:
   ```bash
   npm run lint:js
   npm run lint:scss
   npm run test:a11y
   ```
5. Commit with descriptive messages
6. Push to your fork
7. Open a pull request

## Development Setup

1. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/uswds-11ty-template.git
   cd uswds-11ty-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development:
   ```bash
   npm start
   ```

## Coding Standards

### JavaScript
- Use ES6+ features
- Follow ESLint configuration
- Write clear, commented code
- Maintain accessibility standards

### SCSS
- Follow USWDS theming patterns
- Use USWDS utilities when possible
- Maintain mobile-first approach
- Follow Stylelint configuration

### Templates
- Use semantic HTML5
- Include proper ARIA attributes
- Follow USWDS component patterns
- Maintain accessibility standards

### Commits
- Use clear, descriptive commit messages
- Reference issues when applicable
- Keep commits focused and atomic

## Testing

Before submitting:

1. **Accessibility**: Run `npm run test:a11y`
2. **Linting**: Run `npm run lint:js` and `npm run lint:scss`
3. **Build**: Ensure `npm run build` completes without errors
4. **Browser Testing**: Test in multiple browsers
5. **Responsive**: Test on mobile devices

## Documentation

- Update README.md for new features
- Add JSDoc comments for JavaScript functions
- Include examples for new components
- Update CLAUDE.md if changing development commands

## Review Process

1. All pull requests require review
2. Reviewers will check:
   - Code quality and standards
   - Accessibility compliance
   - USWDS pattern adherence
   - Test coverage
   - Documentation updates

## Release Process

Maintainers will:
1. Review and merge approved PRs
2. Update version in package.json
3. Update CHANGELOG.md
4. Create GitHub release
5. Publish to npm (if applicable)

## Questions?

- Open an issue for questions
- Tag with "question" label
- Check documentation first

Thank you for contributing!
