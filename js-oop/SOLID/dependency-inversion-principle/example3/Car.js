// https://dev.to/azure/dependency-injection-in-javascript-101-2b1e
const log = (str) => console.log(str);

function Wheels() {
  this.action = () => log("The wheels go 'round and 'round.");
  log('Made some wheels.');
}

function Pistons() {
  this.action = () => log('The pistons fire up and down.');
  log('Made some pistons.');
}

function Engine(pistons) {
  this.pistons = pistons;
  this.action = () => {
    this.pistons.action();
    log('The engine goes vroom vroom.');
  };
  log('Made an engine.');
}

function Car(wheels, engine) {
  this.wheels = wheels;
  this.engine = engine;
  this.action = () => {
    this.wheels.action();
    this.engine.action();
    log('The car drives by.');
  };
  log('Made a car.');
}

var car = new Car();
car.action();
