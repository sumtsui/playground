exports.getPlanet = function (planet) {
  return planet;
};

exports.getGreeting = function () {
  return `hello ${exports.getPlanet() || 'world'}!`;
};
