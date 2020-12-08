function doStuff() {
  console.log(0);
  console.log(1);
  console.log(2);
  throw new Error('oh no');
  console.log(3);
}

doStuff();
