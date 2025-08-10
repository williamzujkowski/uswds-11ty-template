// Main JavaScript file for custom functionality
// USWDS is already initialized via the included uswds.min.js

(function() {
  'use strict';

  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize any custom components
    initCustomComponents();
    
    // Set up event listeners
    setupEventListeners();
    
    // Handle external links
    handleExternalLinks();
    
    // Initialize skip navigation
    initSkipNav();
    
  });

  /**
   * Initialize custom components
   */
  function initCustomComponents() {
    // Add any custom component initialization here
    console.log('Custom components initialized');
  }

  /**
   * Set up event listeners
   */
  function setupEventListeners() {
    // Search form submission
    const searchForm = document.querySelector('.usa-search');
    if (searchForm) {
      searchForm.addEventListener('submit', function(e) {
        const searchInput = this.querySelector('input[type="search"]');
        if (searchInput && !searchInput.value.trim()) {
          e.preventDefault();
          searchInput.focus();
        }
      });
    }

    // Print button functionality
    const printButtons = document.querySelectorAll('[data-print]');
    printButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        window.print();
      });
    });

    // Back to top functionality
    const backToTopButton = document.querySelector('[data-back-to-top]');
    if (backToTopButton) {
      // Show/hide based on scroll position
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.add('is-visible');
        } else {
          backToTopButton.classList.remove('is-visible');
        }
      });

      // Smooth scroll to top
      backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  /**
   * Handle external links - open in new window with security attributes
   */
  function handleExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
    links.forEach(function(link) {
      // Add external link indicator
      if (!link.classList.contains('usa-button') && !link.querySelector('img')) {
        link.classList.add('usa-link--external');
      }
      
      // Set security attributes
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      
      // Add screen reader text
      if (!link.querySelector('.usa-sr-only')) {
        const srText = document.createElement('span');
        srText.className = 'usa-sr-only';
        srText.textContent = ' (opens in new window)';
        link.appendChild(srText);
      }
    });
  }

  /**
   * Initialize skip navigation
   */
  function initSkipNav() {
    const skipNav = document.querySelector('.usa-skipnav');
    if (skipNav) {
      skipNav.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  /**
   * Utility function to debounce function calls
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Handle responsive tables
   */
  function handleResponsiveTables() {
    const tables = document.querySelectorAll('table:not(.usa-table)');
    tables.forEach(function(table) {
      // Wrap table in responsive container
      const wrapper = document.createElement('div');
      wrapper.className = 'usa-table-container--scrollable';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
      
      // Add USWDS table class
      table.classList.add('usa-table');
    });
  }

  // Initialize responsive tables
  handleResponsiveTables();

  /**
   * Analytics event tracking
   */
  window.trackEvent = function(category, action, label, value) {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        'event_category': category,
        'event_label': label,
        'value': value
      });
    }
    
    // Digital Analytics Program tracking
    if (typeof gas !== 'undefined') {
      gas('send', 'event', category, action, label, value);
    }
  };

  /**
   * Form validation enhancement
   */
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('usa-input--error');
          
          // Add error message if not present
          if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('usa-error-message')) {
            const errorMsg = document.createElement('span');
            errorMsg.className = 'usa-error-message';
            errorMsg.textContent = 'This field is required';
            field.parentNode.insertBefore(errorMsg, field.nextSibling);
          }
        } else {
          field.classList.remove('usa-input--error');
          // Remove error message
          if (field.nextElementSibling && field.nextElementSibling.classList.contains('usa-error-message')) {
            field.nextElementSibling.remove();
          }
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        // Focus first error field
        const firstError = form.querySelector('.usa-input--error');
        if (firstError) {
          firstError.focus();
        }
      }
    });
  });

})();