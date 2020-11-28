// Example 2
const MyReact = (function () {
  let _val; // hold our state in module scope
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
  };
})();

module.exports = MyReact;
