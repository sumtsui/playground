const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
  console.log(key);
}

class Person {
  constructor(name) {
    this.name = name;
    this.age = 25;
  }
  
  sayName() {
    console.log(this.name);
  }
}

const person = new Person('John');
person.boo = 'boo';

for (const key in person) {
  console.log(key);
}
