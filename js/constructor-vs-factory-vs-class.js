// https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e

(() => {
  // class
  class ClassCar {
    drive() {
      console.log('Vroom!');
    }
  }

  const car1 = new ClassCar();
  console.log(car1.drive());

  // constructor
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function ConstructorCar() {}

  ConstructorCar.prototype.drive = function () {
    console.log('Vroom!');
  };

  const car2 = new ConstructorCar();
  console.log(car2.drive());

  // factory
  const proto = {
    drive() {
      console.log('Vroom!');
    },
  };

  /**
   * The Object.create() method creates a new object,
   * using an existing object as the prototype of the newly created object.
   */
  const factoryCar = () => Object.create(proto);

  const car3 = factoryCar();
  console.log(car3.drive());
})();

// https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up

/**
 * Factory!!!!
 */
function secretFactory() {
  const secret =
    'Favor composition over inheritance, `new` is considered harmful, and the end is near!';
  const spillTheBeans = () => console.log(secret);

  return {
    spillTheBeans,
  };
}

const leaker = secretFactory();
// leaker.spillTheBeans();

/**
 * That’s pretty nice. Besides avoiding new and this tomfoolery, it allows us to use our objects interchangeably
 * with CommonJS and ES6 modules. It also makes composition a little easier:
 */

function spyFactory(infiltrationTarget) {
  return {
    exfiltrate: infiltrationTarget.spillTheBeans,
  };
}

const blackHat = spyFactory(leaker);

blackHat.exfiltrate(); // Favor composition over inheritance, (...)

console.log(blackHat.infiltrationTarget); // undefined (looks like we got away with it)

// https://stackoverflow.com/questions/61068112/javascript-the-good-parts-way-to-implement-prototype-methods
