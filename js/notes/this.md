https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

## This

A **function's `this` keyword** behaves a little differently in JavaScript compared to other languages. It also has some differences between [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) and non-strict mode.

In most cases, the value of `this` is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the [`bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method to [set the value of a function's `this` regardless of how it's called](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#The_bind_method), and ES2015 introduced [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) which don't provide their own `this`binding (it retains the `this` value of the enclosing lexical context).

## Arrow function

- Does not have its own bindings to `this` or `super`, and should not be used as `methods`.
- Does not have `arguments`, or `new.target` keywords.
- Not suitable for `call`, `apply` and [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) methods, which generally rely on establishing a [`scope`.](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- Can not be used as `constructors`.
- Can not use `yield`, within its body.

## Scope

The current context of execution. The context in which [values](https://developer.mozilla.org/en-US/docs/Glossary/value) and **expressions** are "visible" or can be referenced. If a **[variable](https://developer.mozilla.org/en-US/docs/Glossary/variable)** or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

A **[function](https://developer.mozilla.org/en-US/docs/Glossary/function)** serves as a **closure** in [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript), and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions.