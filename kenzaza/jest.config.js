module.exports = {
  preset: 'ts-jest',  // Use ts-jest to handle TypeScript files
  testEnvironment: 'jsdom',  // Simulates browser environment for tests
  transform: {
    '^.+\\.tsx?$': 'ts-jest',  // Transform TypeScript files
    '^.+\\.jsx?$': 'babel-jest',  // Add Babel transform for JS/JSX files
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-syntax-highlighter)',  // Allow Jest to transform ES modules
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],  // Jest setup for additional configuration
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',  // Mock CSS/SCSS imports for Jest
  },
};
