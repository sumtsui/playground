https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

# Reference-counting garbage collection

This is an old implemention of GC algorithem

```js
var x = {
  a: {
    b: 2,
  },
};
// 2 objects are created. One is referenced by the other as one of its properties.
// The other is referenced by virtue of being assigned to the 'x' variable.
// Obviously, none can be garbage-collected.

var y = x; // The 'y' variable is the second thing that has a reference to the object.

x = 1; // Now, the object that was originally in 'x' has a unique reference
//   embodied by the 'y' variable.

var z = y.a; // Reference to 'a' property of the object.
//   This object now has 2 references: one as a property,
//   the other as the 'z' variable.

y = 'mozilla'; // The object that was originally in 'x' has now zero
//   references to it. It can be garbage-collected.
//   However its 'a' property is still referenced by
//   the 'z' variable, so it cannot be freed.

z = null; // The 'a' property of the object originally in x
//   has zero references to it. It can be garbage collected.
```

**Circular references used to be a common cause of memory leaks with this algorithem.**

In the below example two objects are created with properties that reference one another, thus creating a cycle. They will go out of scope after the function call has completed. At that point they become unneeded and their allocated memory should be reclaimed. However, the reference-counting algorithm will not consider them reclaimable since each of the two objects has at least one reference pointing to them, resulting in neither of them being marked for garbage collection. Circular references are a common cause of memory leaks.

```js
function f() {
  var x = {};
  var y = {};
  x.a = y; // x references y
  y.a = x; // y references x

  return 'azerty';
}

f();

// real life example
var div;
window.onload = function () {
  div = document.getElementById('myDivElement');
  div.circularReference = div;
  div.lotsOfData = new Array(10000).join('*');
};
```

# Mark-and-sweep algorithm

This algorithm reduces the definition of "an object is no longer needed" to "an object is unreachable".

This algorithm assumes the knowledge of a set of objects called roots. In JavaScript, the root is the global object. Periodically, the garbage collector will start from these roots, find all objects that are referenced from these roots, then all objects referenced from these, etc. Starting from the roots, the garbage collector will thus find all reachable objects and collect all non-reachable objects.

This algorithm is an improvement over the previous one since an object having zero references is effectively unreachable. The opposite does not hold true as we have seen with circular references.

As of 2012, all modern browsers ship a mark-and-sweep garbage-collector. All improvements made in the field of JavaScript garbage collection (generational/incremental/concurrent/parallel garbage collection) over the last few years are implementation improvements of this algorithm, but not improvements over the garbage collection algorithm itself nor its reduction of the definition of when "an object is no longer needed".

**Cycles are no longer a problem.**

In the first example above, after the function call returns, the two objects are no longer referenced by any resource that is reachable from the global object. Consequently, they will be found unreachable by the garbage collector and have their allocated memory reclaimed.

https://medium.com/javascript-in-plain-english/memory-leaks-and-garbage-collection-%EF%B8%8F-in-javascript-you-need-to-know-this-3fa8173e8b3c

In simple terms, the algorithm “mark-and-sweep” consists of the following steps:

1️⃣ The garbage collector builds a list of “roots”.

Roots usually are global variables to which a reference is kept in code. The window object is always present, so the garbage collector can consider it and all of its children to be always present (i.e. not garbage).

2️⃣ All roots are inspected and marked as active.

All children are inspected recursively as well. Everything that can be reached from a root is not considered garbage.

3️⃣ All pieces of memory not marked as active can now be considered garbage.

# The Three Types of Common JavaScript Leaks

👉 Accidental global variables

```js
function someFu() {
  bar = 'this will be hoisted to window';
}
```

👉 Forgotten callbacks or timers

The callback in a `setInterval` if the interval is not cleared

If the interval handler cannot be collected, its dependencies cannot be collected either.

The same applies to event listeners too.

👉 Out of DOM references (confusing, refer back to article)
