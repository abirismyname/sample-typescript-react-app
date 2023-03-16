export default {
    clearMocks: true,
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: './',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/tests/**/*.test.ts'],
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
  };
