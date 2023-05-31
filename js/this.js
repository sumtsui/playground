class FruitShop {
  apple = 10

  sellApple() {
    this.apple--;
    return 'here is your apple';
  }
}
const fruitShop = new FruitShop;

class MyShop {
  sellApple
  constructor(sellAppleFn) {
    this.sellApple = sellAppleFn;
  }

  sellStuff() {
    try {
      this.sellApple();
    } catch (error) {
      console.log(error); 
    }
    // return this.doSomeInternalProcess().then(() => this.fruitShop.sellApple()); // 'here is your apple'
    // return this.doSomeInternalProcess().then(this.fruitShop.sellApple.bind(this.fruitShop)); // 'here is your apple'
    // return this.doSomeInternalProcess().then(this.fruitShop.sellApple); // TypeError: Cannot read properties of undefined (reading 'apple')
  }

  doSomeInternalProcess() {
    return Promise.resolve();
  }
}
const myShop = new MyShop(fruitShop.sellApple);

myShop.sellStuff();