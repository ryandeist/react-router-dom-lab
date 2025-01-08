# React Router DOM Lab

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-router-dom-lab/assets/reactville.png)

## About
Welcome to Reactville’s local post office! In this lab, you’ll develop an application that simulates the management of post office boxes. Features will include creating new mailboxes, viewing a list of all mailboxes, and exploring individual mailbox details.

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-router-dom-lab/assets/solution-ui-1.png)

Throughout the lab, you’ll use client-side routing tools from the React Router library to navigate between different components. This approach allows your single-page application to function more like a traditional multi-page website, improving the user experience by providing distinct navigable pages without full page reloads.

## Setup

Open your Terminal application and navigate to your ~/code/ga/labs directory:

```
cd ~/code/ga/labs
```

Create a new Vite project for your React app:

```
npm create vite@latest
```

You’ll be prompted to choose a project name. Let’s name it `react-router-dom-lab`.

* Select a framework. Use the arrow keys to choose the `React` option and hit `Enter`.
* Select a variant. Again, use the arrow keys to choose `JavaScript` and hit `Enter`.

Navigate to your new project directory and install the necessary dependencies:

```
cd react-router-dom-lab
npm i
```

Open the project’s folder in your code editor:

```
code .
```

### Configuring ESLint
Before we begin, we need to adjust the ESLint configuration. Add the indicated `rules` to the rules object in your `eslint.config.js` file:

```js
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off', // add this line
      'react/no-unescaped-entities': 'off', // add this line
    },
```

The first addition prevents warnings if you don’t declare types for your props (which we’re not), and the second prevents warnings if you use contractions within JSX.

### Clear `App.jsx`
Open the `App.jsx` file in the `src` directory and replace the contents of it with the following:

```jsx
// src/App.jsx

const App = () => {
  return <h1>Hello world!</h1>;
};

export default App;
```

### Running the development server
To start the development server and view our app in the browser, we’ll use the following command:

```
npm run dev
```

You should see that `Vite` is available on port number 5173:

```
localhost:5173
```

### Github setup
To add this project to GitHub, initialize a Git repository:

```
git init
git add .
git commit -m "init commit"
```
