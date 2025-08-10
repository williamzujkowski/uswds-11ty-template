const path = require('path');
const fs = require('fs');

module.exports = function(eleventyConfig) {
  // Pass through copy for static assets
  eleventyConfig.addPassthroughCopy({ 
    'src/assets/img': 'assets/img',
    'src/assets/fonts': 'assets/fonts',
    'src/assets/js': 'assets/js',
    'node_modules/@uswds/uswds/dist/img': 'assets/uswds/img',
    'node_modules/@uswds/uswds/dist/fonts': 'assets/fonts',
    'node_modules/@uswds/uswds/dist/js': 'assets/uswds/js',
    'node_modules/@uswds/uswds/dist/img/usa-icons': 'assets/uswds/img/usa-icons',
    'node_modules/@uswds/uswds/dist/img/usa-icons-bg': 'assets/uswds/img/usa-icons-bg',
    'node_modules/@uswds/uswds/dist/img/hero.jpg': 'assets/img/hero.jpg',
    'node_modules/@uswds/uswds/dist/img/circle-124.png': 'assets/uswds/img/circle-124.png',
    'node_modules/@uswds/uswds/dist/img/usa-icons/expand_more.svg': 'assets/img/usa-icons/expand_more.svg',
    'node_modules/@uswds/uswds/dist/img/usa-icons/add.svg': 'assets/img/usa-icons/add.svg',
    'node_modules/@uswds/uswds/dist/img/usa-icons/info.svg': 'assets/img/usa-icons/info.svg',
    'node_modules/@uswds/uswds/dist/img/usa-icons/launch.svg': 'assets/img/usa-icons/launch.svg'
  });
  
  // Copy favicon files
  eleventyConfig.addPassthroughCopy({ 'src/favicon.ico': 'favicon.ico' });
  eleventyConfig.addPassthroughCopy({ 'src/robots.txt': 'robots.txt' });
  
  // Watch targets
  eleventyConfig.addWatchTarget('./src/_styles/');
  eleventyConfig.addWatchTarget('./src/assets/js/');
  
  // Add filters
  eleventyConfig.addFilter('dateFormat', (date, format) => {
    const options = format === 'long' 
      ? { year: 'numeric', month: 'long', day: 'numeric' }
      : { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  });
  
  eleventyConfig.addFilter('date', (date, format) => {
    const d = new Date(date);
    if (format === 'YYYY-MM-DD') {
      return d.toISOString().split('T')[0];
    }
    return d.toLocaleDateString('en-US');
  });
  
  eleventyConfig.addFilter('limit', (array, limit) => {
    return array.slice(0, limit);
  });
  
  eleventyConfig.addFilter('slugify', (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  });
  
  // Add shortcodes
  eleventyConfig.addShortcode('currentYear', () => `${new Date().getFullYear()}`);
  
  eleventyConfig.addShortcode('uswdsIcon', (name, size = '3') => {
    return `<svg class="usa-icon usa-icon--size-${size}" aria-hidden="true" role="img">
      <use xlink:href="/assets/uswds/img/sprite.svg#${name}"></use>
    </svg>`;
  });
  
  // Add paired shortcode for USA Alert component
  eleventyConfig.addPairedShortcode('usaAlert', (content, type = 'info', heading = '') => {
    const headingHtml = heading ? `<h4 class="usa-alert__heading">${heading}</h4>` : '';
    return `
    <div class="usa-alert usa-alert--${type}">
      <div class="usa-alert__body">
        ${headingHtml}
        <div class="usa-alert__text">${content}</div>
      </div>
    </div>`;
  });
  
  // Collections
  eleventyConfig.addCollection('pages', collection => {
    return collection.getFilteredByGlob('src/pages/**/*.md');
  });
  
  eleventyConfig.addCollection('nav', collection => {
    return collection.getFilteredByGlob('src/pages/**/*.md')
      .filter(item => item.data.includeInNav)
      .sort((a, b) => (a.data.navOrder || 999) - (b.data.navOrder || 999));
  });
  
  // Configure markdown library
  const markdownIt = require('markdown-it');
  const markdownItAnchor = require('markdown-it-anchor');
  const markdownItAttrs = require('markdown-it-attrs');
  
  const mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };
  
  const mdAnchorOptions = {
    permalink: markdownItAnchor.permalink.ariaHidden({
      class: 'anchor-link',
      symbol: '#',
      placement: 'after'
    }),
    level: [1, 2, 3, 4]
  };
  
  const markdownLib = markdownIt(mdOptions)
    .use(markdownItAnchor, mdAnchorOptions)
    .use(markdownItAttrs);
  
  eleventyConfig.setLibrary('md', markdownLib);
  
  // Generate sitemap.xml
  eleventyConfig.addCollection('sitemap', function(collection) {
    return collection.getFilteredByGlob(['src/**/*.md', 'src/**/*.njk', 'src/**/*.html'])
      .filter(item => {
        // Exclude items marked to be excluded from collections
        return !item.data.eleventyExcludeFromCollections;
      })
      .sort((a, b) => {
        // Sort by URL for consistent ordering
        return a.url.localeCompare(b.url);
      });
  });

  // Browser sync config
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');
        
        browserSync.addMiddleware('*', (req, res) => {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.write(content_404);
          res.end();
        });
      }
    },
    ui: false,
    ghostMode: false
  });
  
  // Return configuration
  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    pathPrefix: '/uswds-11ty-template/',
    
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site'
    }
  };
};