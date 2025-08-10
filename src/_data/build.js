module.exports = {
  // Current build timestamp
  timestamp: new Date(),
  
  // Formatted date for display
  lastUpdated: new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  
  // ISO date for structured data
  lastUpdatedISO: new Date().toISOString().split('T')[0],
  
  // Environment
  env: process.env.NODE_ENV || 'development',
  
  // Version (can be set from package.json or environment)
  version: process.env.BUILD_VERSION || '1.0.0'
};