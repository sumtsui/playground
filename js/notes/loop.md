##Iterate array like structure

The **`for...of` statement** creates a loop iterating over [iterable objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol), including: built-in [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), array-like objects (e.g., [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) or [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)), [`TypedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

Use this whenever possible instead of the old long form syntax. Because it is cooler, and has simpler syntax.



## Iterate object keys

The **`Object.keys()`** method returns an array of a given object's **own** enumerable property **names**, iterated in the same order that a normal loop would.

The `Object.entries()` method returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs, in the same order as that provided by a [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop. (The only important difference is that a `for...in` loop enumerates properties in the prototype chain as well). 

The order of the array returned by `Object.entries()` does not depend on how an object is defined. If there is a need for certain ordering, then the array should be sorted first, like `Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));`.

