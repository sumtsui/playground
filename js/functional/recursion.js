// 8*7*6..*1

const factorial = (n) => {
  if (n < 2) {
    return 1;
  }

  return n * factorial(n - 1);
};

// const result = factorial(1000000);
// console.log(result);

// tail call optimization
const factorialTCO = (n, accu = 1) => {
  if (n < 2) {
    return 1;
  }

  return factorialTCO(n - 1, n * accu);
};

const result = factorialTCO(10000);

// but TCO is not supported in node, chrome, or firefox

function computeMaxCallStackSize() {
  try {
    return 1 + computeMaxCallStackSize();
  } catch (e) {
    // Call stack overflow
    return 1;
  }
}

// const result = computeMaxCallStackSize();
console.log(result);
