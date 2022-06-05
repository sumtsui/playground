// doubles the input
const double = x => x * 2;

// increments the input
const increment = x => x + 1;

// composes the functions
const compose = (...fns) => x => fns.reduceRight((x, f) => f(x), x);

// input of interest
const arr = [ 2,3,4,5,6 ];

// composed function
const doubleAndIncrement = compose(increment, double);

// only doubled
console.log(arr.map(double));

// only incremented
console.log(arr.map(increment));

// double and increment
console.log(arr.map(doubleAndIncrement));