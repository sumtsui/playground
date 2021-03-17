https://attacomsian.com/blog/javascript-iterate-objects#objectkeys-method

`for ... in` will also iterate all the keys along the prototype chain.

**Important**

Only `fuel`, `start`, `drive` will show. Those on `Object` will not!

```js
function ConstructorVehicle(fuel) {
  this.fuel = fuel;
}

ConstructorVehicle.prototype.start = function () {
  console.log('Started!');
};

function ConstructorCar(fuel) {
  ConstructorVehicle.call(this, fuel);
}

ConstructorCar.prototype = Object.create(ConstructorVehicle.prototype);

ConstructorCar.prototype.drive = function () {
  console.log('Vroom!');
};

const car = new ConstructorCar(900);

for (let key in car) {
  console.log(key);
}
```

`Object.keys` will iterate all the keys of the object (without the prototype chain)

`Object.values` will iterate all the values of the object (without the prototype chain)

`Object.entries` will iterate all the keys and values of the object (without the prototype chain) and return them in tuples.
