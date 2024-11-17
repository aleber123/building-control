/** @type {import('jest').Config} */
module.exports = {
  projects: [
    {
      displayName: 'backend',
      rootDir: './building-control-backend',
      testMatch: ['<rootDir>/src/**/*.test.ts'],
      transform: {
        '^.+\\.tsx?$': ['ts-jest', {
          tsconfig: '<rootDir>/tsconfig.json'
        }]
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
      testEnvironment: 'node',
      setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
      }
    },
    {
      displayName: 'frontend',
      rootDir: './building-control-frontend',
      testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
      transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
          tsconfig: '<rootDir>/tsconfig.json'
        }]
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
      testEnvironment: 'jsdom',
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
      }
    }
  ],
  testTimeout: 10000,
  verbose: true
};
