# Vite + React + TypeScript + Jest + React Testing Library Setup

This repository provides a step-by-step guide to setting up Jest and React Testing Library with MSW in a Vite project with TypeScript.

## 🚩 Table of Contents

- [Prerequisites](#-prerequisites)
- [Setup Guide](#-setup-guide)
- [Getting Started](#-getting-started)
- [Examples](#-examples)
- [Browser Support](#-browser-support)
- [Pull Request Steps](#-pull-request-steps)
- [Contributing](#-contributing)
- [TOAST UI Family](#-toast-ui-family)
- [Used By](#-used-by)
- [License](#-license)

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Setup Guide

Follow these steps to set up Jest and React Testing Library in your Vite project.

### 1. Install Jest and TypeScript Types

First, install Jest and its TypeScript types:

```bash
npm install --save-dev jest @types/jest
```

### 2. Add Test Script

Add the following "test" script to your package.json file:

```
"scripts": {
  "test": "jest",
  "test:cov": "jest --coverage --watchAll"
}
```

### 3. Install React Testing Library, Jest-Dom and MSW

Install React Testing Library Jest-Dom and MSW; and its dependencies:

```
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/user-event
npm install msw@1.3.5
```

### 4. Install Babel and Other Dependencies

Install Babel and other necessary dependencies:

```
npm install --save-dev @babel/core
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/preset-react
npm install --save-dev @babel/preset-typescript
npm install --save-dev babel-jest
npm install --save-dev identity-obj-proxy
npm install --save-dev jest-environment-jsdom
```

### 5. Configure Jest

Add the following Jest configuration to your package.json file:

```
  "jest": {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-test.ts"
    ],
    "moduleNameMapper": {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/**/*.{spec,test}.{js,jsx,ts,tsx}",
      "!**/node_modules/**",
      "!**/vendor/**",
      "!**/dist/**",
      "!**/build/**",
      "!vite.config.ts",
      "!**/coverage/**"
    ],
    "coveragePathIgnorePatterns": [
      "/node_modules/",
      "setup-tests.ts",
      "vite-env.d.ts"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    }
  }
```

### 6. Create Setup File

Create a file named setup-test.ts in the root of your project and add the following code:

```
import '@testing-library/jest-dom';
```

### 7. Create Babel Configuration

Create a file named babel.config.cjs in the root of your project and add the following code:

```
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ]
};
```

### 8. Create Mocks for Static Assets

Create a folder named __mocks__ inside the src directory and add a file named fileMock.js with the following content:

```
module.exports = 'test-file-stub';
```

### 9. Update .gitignore

Add the following line to your .gitignore file to ignore coverage reports:

```
coverage
```

### 10. Install ts-jest and ts-node

Install ts-jest and ts-node to enable TypeScript support in Jest:

```
npm install --save-dev ts-jest ts-node
```

### Running Tests

To run the tests, use the following command:

```
npm run test:cov
```

## Getting Started
Explaining the functions every libraries and dependencies.

### 1. testing-library/react 
- API

### 2. testing-library/jest-dom  
- Custom Jest matchers 

### 3. testing-library/user-event 
- Simulate Events 

### 4. msw@1.3.5
- Mock HTTP Request/API Calls

## API

### 1. Render 
```
render(<SampleForm />);
```

### 2. Rerender 
```
render(<SampleForm />);
```

### 3. Queries
- Ex: getBy..., queryBy..., findBy... 
```
screen.[query]([text match]) 
```

### 4. User Actions
- Ex: fireEvent
```
fireEvent[eventName](node: HTMLElement, eventProperties: Object) 
```


You have now set up Jest and React Testing Library in your Vite project with TypeScript. Happy testing!
