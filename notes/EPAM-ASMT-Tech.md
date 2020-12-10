React, NodeJS / Express, JS (OOP)



## JS Core at Advanced level

### this

### event loop

### promise

https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e



## Knowing the pros and cons of using TypeScript on the project

https://www.altexsoft.com/blog/typescript-pros-and-cons/

### Pros

TypeScript inherits major pros of JavaScript, but also offers additional benefits coming from static typing and other concepts specific to TS. They prove especially useful when it comes to large-sized codebase and distributed teams working on the same project.

JavaScript is a **dynamically typed** language which means that the types are checked, and datatype errors are spotted only at the runtime. Runtime type checking is not, per se, a disadvantage: It offers more flexibility, enabling program components to adapt and change on the fly. But the larger the project and the team, the more undefined variables are added and the more potential mistakes the code amasses.

TypeScript introduces optional strong **static typing**: Once declared, a variable doesn’t change its type and can take only certain values. The compiler alerts developers to type-related mistakes, so they have no opportunity to hit the production phase. This results in less error-prone code and better performance during execution.

But static typing is not only about catching bugs. It also gives the code more structure, makes it self-documenting and more readable, speeds up debugging and refactoring. All told increases productivity across a large team.

It’s important to note that TS doesn’t force declaring types everywhere. Developers are free to change the level of type strictness in different parts of the project. This approach distinguishes TS from other statically typed languages and allows you to find the right balance between flexibility and correctness.

### Cons

Not true static typing. Developers mastering C#, C++ or Java often argue that TypeScript is not a true statically typing language. Apart from the fact that this feature is optional for TS, eventually it is transpiled into untyped JavaScript, so there is always the risk of weird type conversions at runtime.

One more JavaScript to learn

Verbose

Adding extra step — transpiling. As we wrote before, browsers can’t interpret the TypeScript code, so you need to transpile it to JavaScript before running. However, this process is highly automated and doesn’t require a lot of additional time. In total, the downside of this step is far less significant than its benefits: The compiler spots flaws and flags them before they can cause any damage.

## Computer science fundamentals

Basic operations: sort, map, filter, reduce

Algorithms complexity basics (O(1), O(N), ...)

Data structures: array, stack, queue, linked-list, tree, hash table (map), set

## Programming Paradigms (OOP, FP, FRP)

- Understands main concepts of FP/FRP
- Able to compare OOP/FP/FRP, mention pros/cons
### OOP
- **Encapsulation** is one of the fundamentals of **OOP**. It refers to the bundling of data with the methods that operate on that data. **Encapsulation** is used to hide the values or state of a structured data object inside a class, preventing unauthorized parties' direct access to them.

- **ABSTRACTION** is that "shows" only essential attributes and "hides" unnecessary information. The main purpose of abstraction is hiding the unnecessary details from the users.

- **Inheritance** is when a class derives from another class. The child class will **inherit** all the public and protected properties and methods from the parent class. In addition, it can have its own properties and methods.

- **Polymorphism** describes the concept that different classes can be used with the same interface. Each of these classes can provide its own implementation of the interface.

  https://medium.com/@viktor.kukurba/object-oriented-programming-in-javascript-3-polymorphism-fb564c9f1ce8

- **Dependency injection**, https://tsh.io/blog/dependency-injection-in-node-js/

- **SOLID**, https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa

  - S — Single responsibility principle

    A class should have one job only.

  - O — Open closed principle

    Open for extension means that we should be able to add new features or components to the application **without breaking** existing code.

    Closed for modification means that **we should not introduce breaking changes to existing functionality**, 	because that would force you to refactor a lot of existing code

  - L — Liskov substitution principle

    Every subclass/derived class should be substitutable for their base/parent class.

    A subclass should override the parent class methods in a way that does **not break functionality from a client’s point of view**.

  - I — Interface segregation principle

    A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do  not use.

  - D — Dependency Inversion principle

    *high level modules shouldn’t depend upon low level modules* is, however, relevant. ????

  
### FP
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0

- **Pure functions**

  - With same input, always return same output
  - Doesn't use indirect input
  - Avoid side effects:
    - I/O
    - database storage
    - network calls
    - DOM
    - Timestamps
    - Random numbers
	- Doesn't mutate input
	
- **Immutability**

- **Functions as first-class entities**

  JavaScript has **first class functions**,  which allows us to treat functions as data — assign them to variables,  pass them to other functions, return them from functions, etc…

- Functions composition

  

- High order functions

  A **higher order function** is any function which takes a function as an argument, returns a function, or both. Higher order functions are often used to:

  - Abstract or isolate actions, effects, or async flow control using callback functions, promises, monads, etc…
  - Create utilities which can act on a wide variety of data types
  - Partially apply a function to its arguments or create a curried function for the purpose of reuse or function composition
  - Take a list of functions and return some composition of those input functions

- Recursion

- Memoization

  ```ts
  // Originally inspired by  David Walsh (https://davidwalsh.name/javascript-debounce-function)
  
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // `wait` milliseconds.
  const debounce = (func: Function, wait: number) => {
    let timeout;
  
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  ```

* Currying

  ```js
  // https://javascript.info/currying-partials
  
  function log(date, importance, message) {
    alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
  }
  
  log = _.curry(log);
  
  log(new Date(), "DEBUG", "some debug"); // log(a, b, c)
  
  log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)
  
  // logNow will be the partial of log with fixed first argument
  let logNow = log(new Date());
  
  // use it
  logNow("INFO", "message"); // [HH:mm] INFO message
  ```

  



## Frameworks and Tools

- Advanced level of at least one:
  - React
- At least basic understanding of:
  - pros and cons of one more CMS / JS framework / CSS framework from the primary stack
  - different approaches how to organize modularity, state management and code reuse on the project

## Communication Protocols (HTTP, WS, REST, GraphQL, ...)

- Intermediate knowledge of:

  - HTTP vs HTTPS vs HTTP/2
  - WS vs Polling
  - RESTful API

- Nice to have:
  - RPC (JSON RPC)
  - GraphQL

## Security (XSS, CSP, SQL injections, OWASP Top 10, CORS, CSRF, Auth)

- At least basic knowledge of different security issues and possible protections
  - XSS
  - CORS
  - SQL injections
  - Auth (JWT, OAuth, Basic, etc.) [at least on current/previous project]
- Nice to have:
  - CSP
  - CSRF

## Performance

- Intermediate knowledge and experience of performance optimizations.
- JavaScript Profiling and Debugging
- Network Optimizations
- JavaScript Performance Optimization Techniques
- Memory Leaks (detection tools and prevention)
- JavaScript Obfuscation and Minification
- Framework optimization techniques (Angular, React, or others)
- Critical Rendering Path
- Repaint Reflow Understanding
- RAIL, https://web.dev/rail/
- SVG vs canvas (with prior experience)

## Browser API

- Intermediate understanding of:
  - Browser API (Console, Fetch, Storage, History)
  - BOM, DOM, CSSOM

## Tools (NPM, Webpack, Chrome DevTools, ...)

- Intermediate knowledge of build tools (webpack)
- Advanced knowledge of package managers (NPM, Yarn, package.json configuration, lock files)
- Advanced knowledge of browser tools for project needs (Chrome DevTools).
- Module system (require, JS modules, import)

## CSS Fundamentals

- Advanced knowledge of:
  - CSS fundamentals (colors, fonts, box-model, ...)
  - CSS positioning and layout (Flex/~~Grid/Table/~~...)

## CSS Preprocessors

- Intermediate knowledge of at least one CSS pre-/post-processor (~~LESS~~, SASS/SCSS, ~~Stylus, PostCSS~~)

## SPA vs MPA

- Intermediate understanding what are SPA and MPA applications, their pros/cons
- At least basic understanding of SSR

## Web Accessibility

- Basic understanding of:
  - a11y specifications
  - Semantic tags, their roles

## T-Shape Skills

- Will be a plus (for JS and FE disciplines):
  - Back-End development (NodeJS, C#, Java, ...)
  - Clouds (AWS, GCP, Azure, ...)
  - ~~Automated testing (E2E)~~
  - DevOps
  - ~~Mobile~~
  - Databases and Message queues

## CSS Methodologies

- Intermediate knowledge of at least some CSS methodologies (BEM, OOCSS, SMACSS, ITCSS, Atomic CSS)

## Web Animations

- Able to implement animations via CSS and JS
- Intermediate understanding pros/cons of animation via CSS or JS

## Responsive design

- Intermediate knowledge of CSS media queries

  - Able to build responsive web pages

  - Basic understanding of:

    - Responsive vs Adaptive design, Mobile First approach, Desktop First

- Progressive Enhancement vs Graceful Degradation approaches1
