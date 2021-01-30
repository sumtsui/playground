# what is fp

simple data structures

higher-order functions

generalize and reuse

immutability

recursion

more functions, less statements (if, else, etc)

referential transparent (a function only replies on its params)

# when is fp

data processing

concurrent systems (??)

high-criticality systems (??)

serverless (??)

# why is fp

concise

readable

extremely testable

enables concurrency (??)

robust

fun

# pure function

depends on state outside of function scope

NO I/O

# favor declarative over imperative

```js
// bad - imperative
function printArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    print(arr[i]);
  }
}

// good- functional
forEach(['some', 'array'], print);
```

# immutable

create state, don't mutate it

`Object.freeze` from es5

immutable.js

# pros

predictable

safety

transparent, explict flow of data

modular

# cons

verbose, not hidden state inside object like OOP

more object creation

more GC

more memory usage

# function as first class citizen

function can be passed into / return from another function

# closure

```js
const request = options => fetch(options.url, options)
                              .then(resp => resp.json())

const createRequester = options => otherOptions
    => request(Object.assign({}, options, otherOptions))

const customRequest = createRequester({
  headers: {'X-Custom': 'myKey'}
})

const userPromise = customRequest({url: '/users'})
const taskPromise = customRequest({url: '/tasks'})
```

# first class and closure are foundation for higher order patterns

## partial application

```js
const customRequest = partial(request, {
  headers: { 'X-Custom': 'mykey' },
});

const partialFromBind = (fn, ...args) => {
  return fn.bind(null, ...args);
}

const partial = (fn, default) => (extra) {
  return fn(default, extra)
}
```

## currying
