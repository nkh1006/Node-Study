/*
 *  Create and export configuration variables 
 */

// Container for all the environments
const environments = {

};

// Staging (default) environments
environments.staging = {
  'port': 3000,
  'envName': 'staging'
};

// Production environments
environments.production = {
  'port': 5000,
  'envName': 'production'
};

// Export
const currentEnvironment = typeof(process.env.NODE_ENV) === 'staging' ? process.env.NODE_ENV.toLowerCase() : '';