import * as math from './math.js'; // contains super computational intense work our test want to avoid
import getDog from './fetchDog';

export const doAdd = (a, b) => math.add(a, b);
export const doSubtract = (a, b) => math.subtract(a, b);
export const doMultiply = (a, b) => math.multiply(a, b);
export const doDivide = (a, b) => math.divide(a, b);
export const getDogImage = async (howMany) => {
  const result = await getDog(howMany);
  return result.message;
};
