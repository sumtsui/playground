/**
 * as long as the left is truthy, oldFiber will be assigned with whatever the right is evaluated to.
 */

(() => {
  const wipFiber = {};

  // oldFiber never got assigned
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;

  console.log('oldFiber', oldFiber); // undefined
})();

(() => {
  const wipFiber = {
    alternate: {
      child: 100,
    },
  };

  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;

  console.log('oldFiber', oldFiber); // 100
})();

(() => {
  const wipFiber = {
    alternate: {},
  };

  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;

  console.log('oldFiber', oldFiber); // undefined
})();

(() => {
  const wipFiber = {
    alternate: {
      child: null,
    },
  };

  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;

  console.log('oldFiber', oldFiber); // null
})();
