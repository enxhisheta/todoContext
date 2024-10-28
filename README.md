# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Context API

global state management
reducing prop consumption/prop drilling + state lifting
javascript -> single threaded
react re-renders in 2 scenarios: 1.state changes 2.props change => every component doesn't need to re-render, when props change for another component
use-cases: 1.theme 2. user authentication 3. translate
can use hooks to increase performance
note : ignore consumer

### Task 1

Todo List
