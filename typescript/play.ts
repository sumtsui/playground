interface Person {
  name: string
  age: number
}

function printPerson(person: Person) {
  console.log(person.name);
}

const John = { name: 'John', age: 30 };
// 鸭子类型，只要它像鸭子一样会叫，那它就一定是只鸭子
const Mary = { name: 'Mary', age: 25, phoneNumber: '13344400999' };
printPerson(John);
printPerson(Mary);

type Car = {
  maker: string;
  year: string;
  accelarate: () => void
}

function makeCar(car: Partial<Car>) {
  const fallback = {
    maker: 'BMW',
    year: '2010'
  };
  return { ...fallback, ...car };
}

// makeCar({ maker: 'Honda', year: '2013', accelarate: () => null });