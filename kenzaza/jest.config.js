module.exports = {
    preset: 'ts-jest',  // Use ts-jest to handle TypeScript files
    testEnvironment: 'jsdom',  // Simulates browser environment for tests
    transform: {
      '^.+\\.tsx?$': 'ts-jest',  // Transform TypeScript files
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],  // Ignore node_modules
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],  // Jest setup for additional configuration
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',  // Mock CSS/SCSS imports for Jest
    },
  };
  