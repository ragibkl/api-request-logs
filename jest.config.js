/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  preset: 'ts-jest',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],
};
