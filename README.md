# ⚡ Vite + React + Jest + Testing Library Starter (JavaScript)

A modern React boilerplate powered by [Vite](https://vitejs.dev), [Jest](https://jestjs.io), and [React Testing Library](https://testing-library.com/). Zero-config, fast development experience, and test-ready out of the box.

This template includes built-in support for unit testing with Jest, Testing Library, and Babel.
Perfect for kickstarting JavaScript-based React projects with lightning-fast builds and robust test coverage.

---

## 🚀 Features

- ⚛️ React 19
- ⚡ Vite for ultra-fast development
- 🧪 Jest for testing
- ✅ Testing Library for accessible, user-focused tests
- 💡 Babel for JSX and modern JS support
- 📦 Easy static asset mocking (SVG, CSS, etc.)
- 📏 ESLint with Jest globals
  ⚡️ Vite for lightning-fast builds and hot module replacement
- ⚛️ React with modern hooks setup
- 🧪 Jest for testing
- 🧬 React Testing Library for user-centric tests
- 🔄 Babel for JSX and modern JavaScript support
- ✅ ESLint for code quality

---

## 📦 Getting Started

```bash
# 1. Create the app
npm create vite@latest vite-react-js-testing-template -- --template react
cd vite-react-js-testing-template
npm install

# 2. Install testing tools
npm install --save-dev \
  jest \
  babel-jest \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  @babel/preset-env \
  @babel/preset-react \
  jest-environment-jsdom
```

## ⚙️ Project Setup

### 🔧 jest.config.js

```js
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
```

### 🔧 babel.config.js

```js
export default {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
```

### 🔧 jest.setup.js

```js
import '@testing-library/jest-dom';
```

## 🧪 Example Test

### src/**tests**/App.test.jsx

```js
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders vite + react', () => {
  render(<App />);
  expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
});
```

## 🧼 Mock Static Assets

### Create mock files to avoid Jest errors on non-JS imports.

### **mocks**/fileMock.js

```js
export default 'test-file-stub';
```

### **mocks**/styleMock.js

```js
export default {};
```

## 🔍 ESLint Config for Tests

### Extend your eslint.config.js with:

```js
{
  files: [
    '**/*.test.{js,jsx}',
    '**/*.spec.{js,jsx}',
    '**/__tests__/**/*.{js,jsx}',
  ],
  languageOptions: {
    globals: {
      ...globals.jest,
    },
  },
}
```

## 📜 Scripts

### Update your package.json:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "jest"
}
```

## ✅ Run Tests

```bash
npm run test

// You can also run in watch mode:
npx jest --watch
```

Use vite-react-testing-template as a starter for future projects.

## ❤️ Credits

- [Vite](https://vitejs.dev)
- [React](https://react.dev/)
- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com/)
- [Babel](https://babeljs.io/)
