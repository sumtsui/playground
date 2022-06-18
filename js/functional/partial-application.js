const multiply = (a, b) => a * b;

function prefillFunction(fn, prefillFunction) {
  const inner = (liveInput) => {
    const output = fn(liveInput, prefillFunction);
    return output;
  };
  return inner;
}

const multiplyBy2 = prefillFunction(multiply, 2);

const result = multiplyBy2(5);