function useState(initialValue) {
  var _val = initialValue;
  // no state() function
  function setState(newVal) {
    _val = newVal;
  }
  return [_val, setState]; // directly exposing _val
}
var [foo, setFoo] = useState(0);
console.log(foo); // logs 0 without needing function call
setFoo(1); // sets _val inside useState's scope
console.log(foo); // logs 0 - oops!!

// when change state from a function to a variable, we encounter the stale closure problem
// When we destructured foo from the output of useState, it refers to the _val as of the initial useState call…
// and never changes again! This is not what we want; we generally need our component state to reflect the current state, while being just a variable instead of a function call!

// https://dmitripavlutin.com/react-hooks-stale-closures/
