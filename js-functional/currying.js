const fetchMock = (url, config) =>
  Promise.resolve([
    { amount: 10, price: 80 },
    { amount: 4, price: 120 },
    { amount: 7, price: 90 },
  ]);

const request = (defaults) => (options) => {
  options = Object.assign({}, defaults, options);

  return fetchMock(options.url, options).then((resp) => resp);
};

const map = (fn) => (array) => array.map(fn);
const multiply = (x) => (y) => x * y;
const pluck = (key) => (object) => object[key];

const discount = multiply(0.98);
const tax = multiply(1.0925);

const customRequest = request({
  headers: { 'X-Custom': 'mykey' },
});

customRequest({ url: '/so/custom/url' })
  .then(map(pluck('price')))
  .then(map(discount))
  .then(map(tax))
  .then((result) => console.log(result));

/**
 * what happens in "map(pluck('price'))"
 * 1. map is called with pluck
 * 2. inside map's EC, pluck is called with 'price'
 * 3. inside pluck's EC, return a function (object) => object["price"], exit pluck's EC.
 * 4. inside map's EC, return a function (array) => array.map((object) => object["price"]), exit map's EC.
 * 5. in then's EC, the array returned by customRequest is passed to (array) => array.map((object) => object["price"])
 * 6. [
    { amount: 10, price: 80 },
    { amount: 4, price: 120 },
    { amount: 7, price: 90 },
  ]
  becomes
  [80, 120, 90]
 */
