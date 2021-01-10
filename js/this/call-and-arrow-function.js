(function () {
  function bike() {
    console.log(this.name);
  }

  var obj1 = { name: 'Pulsar' };
  var obj2 = { name: 'Gixxer' };

  bike(); // undefined
  bike.call(obj1); // "Pulsar"
  bike.call(obj2); // "Gixxer"
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
