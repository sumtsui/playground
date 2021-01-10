//thenewstack.io/mastering-javascript-callbacks-bind-apply-call/

function getThis(...args) {
  console.log(this);
  console.log(...args);
}

// always wonder the difference btw:
function higherOrderFunc1(cb) {
  return function (...args) {
    cb(...args);
  };
}
// and
function higherOrderFunc2(cb) {
  return function (...args) {
    cb.apply(this, args);
  };
}

// apply this or not, cb's this will be the global object.
// why bother applying this?

const func1 = higherOrderFunc1(getThis);
const func2 = higherOrderFunc2(getThis);

func1(1, 2);
func2(3, 4);

// but what if the higher order function is a method

class Obj {
  name = 'Bin';
  method1 = higherOrderFunc2(getThis);
}

const obj = new Obj();

obj.method1(5, 6);

// in this case applying "this" makes sense
