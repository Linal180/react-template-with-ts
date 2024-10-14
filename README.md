
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and includes some ESLint rules for code quality.

## Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint Configuration

For production-level applications, it’s recommended to enhance the ESLint configuration to enable type-aware linting rules.

### Steps:

1. Configure the top-level `parserOptions` property as follows:

    ```js
    export default tseslint.config({
      languageOptions: {
        // other options...
        parserOptions: {
          project: ['./tsconfig.node.json', './tsconfig.app.json'],
          tsconfigRootDir: import.meta.dirname,
        },
      },
    })
    ```

2. Replace `tseslint.configs.recommended` with either:
    - `tseslint.configs.recommendedTypeChecked`
    - `tseslint.configs.strictTypeChecked`

3. Optionally, add `...tseslint.configs.stylisticTypeChecked` for style-based lint rules.

4. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the ESLint configuration:

    ```js
    // eslint.config.js
    import react from 'eslint-plugin-react';

    export default tseslint.config({
      // Set the React version
      settings: { react: { version: '18.3' } },
      plugins: {
        // Add the react plugin
        react,
      },
      rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
      },
    });
    ```

## Features

- **User-friendly interface** for task management.
- **Global state management** using React Context API.
- **Form handling** with React Hook Form and validation via Yup.
- **Responsive design** with Material UI.
- **Optimized performance** with lazy loading of components.

## Global State Management

The application uses the React Context API for global state management, allowing for centralized state management and easy sharing of state across components.

## Hooks and Custom Hooks

Custom hooks are utilized to encapsulate logic and state management, enhancing code reusability. Key hooks include:

- **useTasks**: A custom hook for managing task-related state and actions.

## Lazy Loading

Lazy loading is implemented to improve performance by loading components only when needed, enhancing the user experience.

## Best Practices

### Code Reusability

- Use custom hooks to encapsulate common logic and avoid duplication.
- Favor component composition over inheritance.

### App Structure

- Organize your project by feature or functionality.
- Maintain consistent naming conventions for better readability.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/AdeelKamalMalik/react-template.git
cd react-template
npm install
```

## Running the Project

After installing the dependencies, you can start the development server with the following command:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` (or the port specified in your Vite configuration) to view the application.

## Running the Test Cases

To ensure code quality and functionality, unit tests have been added using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

### Steps to Run Tests:

1. To run the test cases, execute the following command in the project directory:

    ```bash
    npm run test
    ```

2. This command runs all the test cases and displays the results in the terminal.


### Testing Framework

The application uses Jest for running unit tests, and React Testing Library for testing React components. Ensure that tests are created for all critical components to maintain robust code quality.

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

5. Make sure you have all test dependencies installed before running tests.

---

By following the steps outlined in this `README`, you can easily install, run, and test the project. Happy coding!