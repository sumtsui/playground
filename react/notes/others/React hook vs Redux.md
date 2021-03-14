https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672  

## What is Redux?

Redux is a predictable state management library *and architecture* which easily integrates with React.

The primary selling points of Redux are:

- **Deterministic state resolution** (enabling deterministic view renders when combined with pure components).
- **Transactional state.**
- **Isolate state management** from I/O and side-effects.
- **Single source of truth** for application state.
- **Easily share state** *between different components.*
- **Transaction telemetry** (auto-logging action objects).
- **Time travel debugging.**

In other words, Redux gives you code organization and debugging superpowers. It makes it easier to build more maintainable code, and much easier to track down the root cause when something goes wrong.

## What are React Hooks?

React hooks let you use state and React lifecycle features without using `class` and React component lifecycle methods. They were introduced in React 16.8.

The primary selling points of React hooks are:

- **Use state and hook into the component lifecycle** without using a `class`.
- **Colocate related logic** in one place in your component, rather than splitting it between various lifecycle methods.
- **Share reusable behaviors** independent of component implementations (like the [render prop pattern](https://reactjs.org/docs/render-props.html)).

Note that these fantastic benefits don’t really overlap with the benefits of Redux. You can and should use React hooks to get deterministic state updates, but that’s always been a feature of React, and Redux’s deterministic state model plugs nicely into it. That’s how React affords deterministic view rendering, and is literally one of the driving motivations for the creation of React.

With tools like the [react-redux hooks API](https://react-redux.js.org/next/api/hooks), and [React’s useReducer hook](https://reactjs.org/docs/hooks-reference.html#usereducer), there’s no need to choose one over the other. Use both. Mix and match.

## What Do Hooks Replace?

Since the hooks API was introduced, I have stopped using:

- `class` **components.**
- **The** [**render prop**](https://reactjs.org/docs/render-props.html) **pattern.**

<!-- Apollo client's Query component is an example of the render prop pattern -->



## What Do Hooks Not Replace?

I still frequently use:

- **Redux** for all the reasons listed above.

- **Higher Order Components** to compose in cross-cutting concerns that are shared by all or most of my application views, such as the Redux provider, a common layout provider, a configuration provider, authentication/authorization, i18n, and so on.

  <!-- Apollo client also use HOC: https://www.apollographql.com/docs/react/api/react/hoc/ -->

- **Separation between container and display components** for better modularity, testability, and easier separation between effects and pure logic.

