# Stub

https://sinonjs.org/releases/v9.2.1/stubs/

Use a stub when you want to:

1. Control a method’s behavior from a test to force the code down a specific path. Examples include forcing a method to throw an error in order to test error handling.
2. When you want to prevent a specific method from being called directly (possibly because it triggers undesired behavior, such as a `XMLHttpRequest` or similar).

# Mocking with Jest

Nice article explaining Jest mock:

https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c

https://www.pluralsight.com/guides/how-does-jest.fn()-work

### The goal for mocking is to replace something we don’t control with something we do.

The Mock Function provides features to:

- Capture calls
- Set return values
- Change the implementation

Dependency injection (DI) makes testing easier but often real world code is not written in the DI way.

Jest has 3 types of module and function mocking:

- `jest.fn`: Mock a function
- `jest.mock`: Mock a module
- `jest.spyOn`: Spy or mock a function

## How to mock a function within a function:

https://github.com/magicmark/jest-how-do-i-mock-x/tree/master/src/function-in-same-module

https://stackoverflow.com/questions/45111198/how-to-mock-functions-in-the-same-module-using-jest/

```js
// module.js
export function bar() {
  return 'bar';
}

export function foo() {
  return `I am foo. bar is ${bar()}`;
}
```

```js
// module.test.js
import * as module from '../src/module';

describe('module', () => {
  let barSpy;

  beforeEach(() => {
    barSpy = jest.spyOn(module, 'bar').mockImplementation(jest.fn());
  });

  afterEach(() => {
    barSpy.mockRestore();
  });

  it('foo', () => {
    console.log(jest.isMockFunction(module.bar)); // outputs true

    module.bar.mockReturnValue('fake bar');

    console.log(module.bar()); // outputs 'fake bar';

    expect(module.foo()).toEqual('I am foo. bar is fake bar');
    /**
     * does not work! we get the following:
     *
     *  Expected value to equal:
     *    "I am foo. bar is fake bar"
     *  Received:
     *    "I am foo. bar is bar"
     */
  });
});
```

This wouldn't work because, in the test file, `foo` and `bar` are 2 methods on the exported object called `module`. When you mocked `bar`, you are only replacing the `bar` on the exported object, while `foo` still use the `bar` function in module.js.

Instead, you can:

```js
// module.js
export function bar() {
  return 'bar';
}

export function foo() {
  return `I am foo. bar is ${exports.bar()}`;
}
```

This will make `foo` use the `bar` method on the exported object. Thus it will work.
