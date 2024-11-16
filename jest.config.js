// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node', // Use 'jsdom' if you are testing frontend code with DOM
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'], // Match test files
  };
  