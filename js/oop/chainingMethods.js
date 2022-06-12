function MyPet(type, name) {
  this.type = type;
  this.name = name;
}

MyPet.prototype.move = function() {
  console.log(this.name, 'moved');
  return this;
};

MyPet.prototype.jump = function() {
  console.log(this.name, 'jumped');
  return this;
};

const myDog = new MyPet('dog', 'James');

// console.log('myDog', myDog);
myDog.move().jump();