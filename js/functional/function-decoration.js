const oncify = (convertMe) => {
  let counter = 0;
  const inner = (input) => {
    if (counter === 0) {
      const output = convertMe(input);
      counter++;
      return output;
    }
    return 'sorry';
  };

  return inner;
};

const multiplyBy2 = num => num*2;

const oncifiedMultiplyBy2 = oncify(multiplyBy2);

console.log(oncifiedMultiplyBy2(3));
console.log(oncifiedMultiplyBy2(8));
