A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

Function scope is within the function. Block scope is within curly brackets.

```js
function foo() {
  if (true) {
    var fruit1 = 'apple'; //exist in function scope
    const fruit2 = 'banana'; //exist in block scope
    let fruit3 = 'strawberry'; //exist in block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

foo();
//result:
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined
```

```js
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i));
}

// 0
// 1
// 2
// 3

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i));
}

// 3
// 3
// 3
// 3
```

Variables declared with var or created by function declarations in non-strict mode do not have block scope. Variables introduced within a block are scoped to the containing function or script, and the effects of setting them persist beyond the block itself. In other words, block statements do not introduce a scope. For example:

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // logs 2
```
