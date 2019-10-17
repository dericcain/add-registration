This project was bootstrapped with custom version of [Create React App](https://github.com/facebook/create-react-app).

## Features
- Nice tech stack
    - React
    - TypeScript
    - MobX
    - Reach Router
    - Jest
    - React Testing Library 
    - Cypress
    - Cypress Testing Library
    - ESLint
    - Prettier
    - husky/lint-staged
- Flexible folder structure
- MobX root store pattern with Dependency Injection for easy testing
- Git hooks for pre-commit and pre-push that run the linter and tests, respectively
- CI ready to run unit, integration and end-to-end tests
- Webpack aliases set up for easy path imports
- CSS, or SCSS/Sass, or CSS Modules with SCSS/CSS
- PurgeCSS to remove all unused CSS during build
- Feature switch for hiding features behind feature flags
- Code splitting (JS & CSS)
- Production profiling and bundle analyzing
- Hot reloading
- Cache busting
- PWA ready

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Aliases
There are some helpful aliases set up for use so that paths don't get too long when importing
- src: `Src`
- src/assets: `Assets`
- src/routes: `Routes`
- src/services: `Services`
- src/components: `Components`
- src/stores: `Stores`
- src/utils: `Utils`

You can use them like so...
```js
import UserStore from 'Stores/user'; // You get the point
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
