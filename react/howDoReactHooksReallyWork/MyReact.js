// We can solve our useState conundrum by… moving our closure inside another closure! (Yo dawg I heard you like closures…)
const MyReact = (function () {
  let _val, _deps; // hold our state in module scope
  return {
    render(Component) {
      const Comp = Component();
      Comp.render();
      return Comp;
    },
    useState(initialValue) {
      _val = _val || initialValue; // assign anew every run
      function setState(newVal) {
        _val = newVal;
      }
      return [_val, setState];
    },
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray;
      const hasChangedDeps = _deps
        ? !depArray.every((el, i) => el === _deps[i])
        : true;
      if (hasNoDeps || hasChangedDeps) {
        callback();
        _deps = depArray;
      }
    },
  };
})();

module.exports = MyReact;
