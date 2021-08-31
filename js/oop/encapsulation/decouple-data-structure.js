// Only works for arrays
const doubleAllImperative = (data) => {
  const doubled = [];
  for (let i = 0, length = data.length; i < length; i++) {
    doubled[i] = data[i] * 2;
  }
  return doubled;
};
// Same as above, but works for anything with the
// map operation.
const doubleAllInterface = (data) => data.map((x) => x * 2);
const box = (value) => ({
  map: (f) => box(f(value)), // what on earth is this??
  toString: () => `box(${value})`,
});
console.log(
  doubleAllInterface([2, 3]), // [4, 6]
  doubleAllInterface(box(2)).toString() // box(4)
);
