class FruitShop {
  apple = 10

  sellApple() {
    this.apple--;
    return 'here is your apple';
  }
}

class MyShop {
  fruitShop

  constructor(shop) {
    this.fruitShop = shop;
  }

  sellStuff() {
    // return this.doSomeInternalProcess().then(() => this.fruitShop.sellApple()); // 'here is your apple'
    // return this.doSomeInternalProcess().then(this.fruitShop.sellApple.bind(this.fruitShop)); // 'here is your apple'
    // return this.doSomeInternalProcess().then(this.fruitShop.sellApple); // TypeError: Cannot read properties of undefined (reading 'apple')
  }

  doSomeInternalProcess() {
    return Promise.resolve();
  }
}
const fruitShop = new FruitShop;
const myShop = new MyShop(fruitShop);

myShop.sellStuff().then(console.log);