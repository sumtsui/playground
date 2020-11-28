exports.getPlanet = function () {
  return 'world';
};

exports.getGreeting = function () {
  return `hello ${exports.getPlanet()}!`;
};
