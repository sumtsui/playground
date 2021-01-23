# Security

# React

# Webpack

# OOP

### Encapsulation

is one of the fundamentals of **OOP**. It refers to the bundling of data with the methods that operate on that data. **Encapsulation** is used to hide the values or state of a structured data object inside a class, preventing unauthorized parties' direct access to them.

### ABSTRACTION

is that "shows" only essential attributes and "hides" unnecessary information. The main purpose of abstraction is hiding the unnecessary details from the **users**.
https://stackoverflow.com/questions/46041202/how-does-abstraction-helps-in-hiding-the-implementation-details-in-java/46041373#46041373

```java
abstract class Bank
{
    abstract int getRateOfInterest();
}

class SBI extends Bank
{
    int getRateOfInterest()
    {
        return 7;
    }
}

class PNB extends Bank
{
    int getRateOfInterest()
    {
        return 8;
    }
}

class BankComparisonEngine {
    public Integer getRate(Bank bank) {
        int rate = bank.getRateOfInterest();
        return rate;
    }
}

class Main{
    public static void main(String args[])
    {
        final BankComparisonEngine bce = new BankComparisonEngine();
        final Integer rate1 = bce.getRate(new SBI());
        final Integer rate2 = bce.getRate(new PNB());
        System.out.println("rate1: " + rate1);
        System.out.println("rate2: " + rate2);
    }
}
```

here `BankComparisonEngine` is the user.

Abstraction is a way of creating a simple model of a more complex real-world entities, which contains the only important properties from the perspective of the context of an application.

### Inheritance

is when a class derives from another class. The child class will **inherit** all the public and protected properties and methods from the parent class. In addition, it can have its own properties and methods.

### Polymorphism

describes the concept that different classes can be used with the same interface. Each of these classes can provide its own implementation of the interface.

https://medium.com/@viktor.kukurba/object-oriented-programming-in-javascript-3-polymorphism-fb564c9f1ce8

### SOLID

https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa

https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#toc-single-responsibility-principle

#### Single responsibility principle

https://code.tutsplus.com/tutorials/solid-part-1-the-single-responsibility-principle--net-36074

A class should have one job only. To deside a class's responsibility, you should think about the potential consumers of this class. There might be multiple consumers of the class. You should implement your class in a way that all methods and properties are useful for the consumers and nothing more.

For example,

```js
class Book {

    function getTitle() {
        return "A Great Book";
    }

    function getAuthor() {
        return "John Doe";
    }

    function turnPage() {
        // pointer to next page
    }

    function getCurrentPage() {
        return "current page content";
    }

    function getLocation() {
        // returns the position in the library
        // ie. shelf number & room number
    }

}
```

`getLocation` can be useful for a `LibraryManager` consumer, but `eReader` and `onlineStore` class don't need this method, so better let other class take care this responsibility.

#### Open closed principle

Write your code so that your user can use it to do new things without you the author to modifying the code.
The open-closed principle suggests that you should prefer things with extensible behavior so that you don't have to modify their source code when you need them to do new things.

When you do it right, inversion of control is simultaneously the simplest and most powerful way to provide this extensibility.

It's the simplest way, because when you define an injectible interface for IoC, you only capture your requirements. Other methods of configuring extensible behavior require you to think about everything consumers might want.

It's the most powerful way, because code can do anything, and providing an IoC extension point allows consumers to do all kinds of things you haven't imagined, so long as they satisfy the requirements defined by your interface. Again this is because the injected interface only captures your own needs.

So, OCP and IoC are related in a very simple way: OCP is a goal, and IoC is the means to accomplish it.

https://www.baeldung.com/java-open-closed-principle

##### Liskov substitution principle

Every subclass/derived class should be substitutable for their base/parent class.

A subclass should override the parent class methods in a way that does **not break functionality from a client’s point of view**.

#### Interface segregation principle

A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.

##### Dependency Inversion principle

https://tsh.io/blog/dependency-injection-in-node-js/

https://www.freecodecamp.org/news/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f/

**There are basically three types of dependency injection:**

1. **constructor injection:** the dependencies are provided through a class constructor.
2. **setter injection:** the client exposes a setter method that the injector uses to inject the dependency.
3. **interface injection:** the dependency provides an injector method that will inject the dependency into any client passed to it. Clients must implement an interface that exposes a [setter method](https://en.wikipedia.org/wiki/Setter_method) that accepts the dependency.

**So now its the dependency injection’s responsibility to:**

1. Create the objects
2. Know which classes require those objects
3. And provide them all those objects

This states that a class should not configure its dependencies statically but should be configured by some other class from outside.

It is the fifth principle of **S.O.L.I.D** — the five basic principles of object-oriented programming and design by [**Uncle Bob**](https://en.wikipedia.org/wiki/Robert_C._Martin) — which states that a class should depend on abstraction and not upon concretions (in simple terms, hard-coded).

According to the principles, a class should concentrate on fulfilling its responsibilities and not on creating objects that it requires to fulfill those responsibilities. And that’s where **dependency injection** comes into play: it provides the class with the required objects.

#### Benefits of using DI

1. Helps in Unit testing.
2. Boiler plate code is reduced, as initializing of dependencies is done by the injector component.
3. Extending the application becomes easier.
4. Helps to enable loose coupling, which is important in application programming.

#### Disadvantages of DI

1. It’s a bit complex to learn, and if overused can lead to management issues and other problems.
2. Many compile time errors are pushed to run-time.
3. Dependency injection frameworks are implemented with reflection or dynamic programming. This can hinder use of IDE automation, such as “find references”, “show call hierarchy” and safe refactoring.

## Browser render page!!

## Jest!!

## Git flow!!

---

## JS Core at Advanced level

### Map

The **`Map`** object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and [primitive values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)) may be used as either a key or a value.

### WeakMap

The WeakMap object is a collection of key/value pairs in which the keys are objects only and the values can be arbitrary values. The object references in the keys are held weakly, meaning that they are a target of garbage collection (GC) if there is no other reference to the object anymore. The WeakMap API is the same as the Map API.

One difference to Map objects is that WeakMap keys are not enumerable (i.e., there is no method giving you a list of the keys). If they were, the list would depend on the state of garbage collection, introducing non-determinism.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object

### Set

Array and Set compared

Traditionally, a set of elements has been stored in arrays in JavaScript in a lot of situations. The new Set object, however, has some advantages:

Deleting Array elements by value (arr.splice(arr.indexOf(val), 1)) is very slow.
Set objects let you delete elements by their value. With an array, you would have to splice based on an element's index.
The value NaN cannot be found with indexOf in an array.
Set objects store unique values. You don't have to manually keep track of duplicates.

### Symbol

### Proxy

### Reflect

### event loop

### promise

https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e

## Knowing the pros and cons of using TypeScript on the project

https://dev.to/macsikora/no-typescript-is-not-oop-version-of-javascript-3ed4

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

  JavaScript has **first class functions**, which allows us to treat functions as data — assign them to variables, pass them to other functions, return them from functions, etc…

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
    alert(
      `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
    );
  }

  log = _.curry(log);

  log(new Date(), 'DEBUG', 'some debug'); // log(a, b, c)

  log(new Date())('DEBUG')('some debug'); // log(a)(b)(c)

  // logNow will be the partial of log with fixed first argument
  let logNow = log(new Date());

  // use it
  logNow('INFO', 'message'); // [HH:mm] INFO message
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

## Webpack

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

## Git workflow

https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

Gitflow is ideally suited for projects that have a scheduled release cycle and for the [DevOps best practice](https://www.atlassian.com/devops/what-is-devops/devops-best-practices) of [continuous delivery](https://www.atlassian.com/continuous-delivery). This workflow doesn’t add any new concepts or commands beyond what’s required for the [Feature Branch Workflow](http://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Instead, it assigns very specific roles to different branches and defines how and when they should interact. In addition to `feature` branches, it uses individual branches for preparing, maintaining, and recording releases. Of course, you also get to leverage all the benefits of the Feature Branch Workflow: pull requests, isolated experiments, and more efficient collaboration.

### Feature branch workflow

The core idea behind the Feature Branch Workflow is that **all feature development should take place in a dedicated branch** instead of the `master` branch. This encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase. It also means the `master` branch will never contain broken code, which is a huge advantage for continuous integration environments.

Encapsulating feature development also **makes it possible to leverage pull requests**, which are a way to initiate discussions around a branch. They give other developers the opportunity to sign off on a feature before it gets integrated into the official project. Or, if you get stuck in the middle of a feature, you can open a pull request asking for suggestions from your colleagues. The point is, pull requests make it incredibly easy for your team to comment on each other’s work.

- ### Start with the master branch

- ### Create a new-branch

- ### Update, add, commit, and push changes

- ### Push feature branch to remote

- ### Resolve feedback

- ### Merge your pull request

  What is git squash?

  https://www.git-tower.com/learn/git/faq/git-squash/

  **To "squash" in Git means to combine multiple commits into one.** You can do this at any point in time (by using Git's "Interactive Rebase" feature), though it is most often done when merging branches.

  Once Bill is ready to accept the pull request, someone needs to merge the feature into the stable project (this can be done by either Bill or Mary)

  This process often results in a merge commit. Some developers like this because it’s like a symbolic joining of the feature with the rest of the code base. But, if you’re partial to a linear history, it’s possible to rebase the feature onto the tip of `master` before executing the merge, resulting in a fast-forward merge.

The overall flow of Gitflow is:

1. A `develop` branch is created from `master`
2. A `release` branch is created from `develop`
3. `Feature` branches are created from `develop`
4. When a `feature` is complete it is merged into the `develop` branch
5. When the `release` branch is done it is merged into `develop`and `master`
6. If an issue in `master` is detected a `hotfix` branch is created from `master`
7. Once the `hotfix` is complete it is merged to both `develop`and `master`

## React
