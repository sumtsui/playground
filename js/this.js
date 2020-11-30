(function () {
  var name = 'blob';
  function bike() {
    console.log(this.name);
  }

  var obj1 = { name: 'Pulsar', bike: bike };
  var obj2 = { name: 'Gixxer', bike: bike };

  bike(); // undefined
  obj1.bike(); // "Pulsar"
  obj2.bike(); // "Gixxer"
})();

(function () {
  class Dragon {
    constructor() {
      this.power = 'fire';
    }

    breathe() {
      console.log('Breathing', this.power);
    }
  }

  const kugenhok = new Dragon();
  kugenhok.breathe();
})();

(function () {
  const fn = () => {
    return this;
  };

  const fn2 = function () {
    return this;
  };

  const obj = {
    key: 'wasup',
  };

  console.log('arrow func', fn.call(obj)); // some global object
  console.log('normal func', fn2.call(obj)); // { key: 'wasup' }
})();
