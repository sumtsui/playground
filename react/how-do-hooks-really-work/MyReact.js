// We can solve our useState conundrum by… moving our closure inside another closure! (Yo dawg I heard you like closures…)
const MyReact = (function () {
  let hooks = [],
    currentHook = 0;

  return {
    render(Component) {
      const Comp = Component(); // run effects
      Comp.render();
      currentHook = 0; // reset for next render
      return Comp;
    },
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray;
      const deps = hooks[currentHook];
      const hasChangedDeps = deps
        ? !depArray.every((el, i) => el === deps[i]) // check deps change
        : true;
      if (hasNoDeps || hasChangedDeps) {
        callback();
        hooks[currentHook] = depArray;
      }
      currentHook++;
    },
    useState(initialValue) {
      hooks[currentHook] = hooks[currentHook] || initialValue;
      const setStateHookIndex = currentHook;
      const setState = (newState) => (hooks[setStateHookIndex] = newState);

      return [ hooks[currentHook++], setState ];
    },
  };
})(); 

module.exports = MyReact;
