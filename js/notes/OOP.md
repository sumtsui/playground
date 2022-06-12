## OOP concept in general (not JS specific)

**Encapsulation** is one of the fundamentals of **OOP**. It refers to the bundling of data with the methods that operate on that data. **Encapsulation** is used to hide the values or state of a structured data object inside a class, preventing unauthorized parties' direct access to them.

**ABSTRACTION** is that "shows" only essential attributes and "hides" unnecessary information. The main purpose of abstraction is hiding the unnecessary details from the users. Abstraction is selecting data from a larger pool to show only relevant details of the object to the user. It helps in reducing programming complexity and efforts. It is one of the most important concepts of OOPs.

**Inheritance** is when a class derives from another class. The child class will **inherit** all the public and protected properties and methods from the parent class. In addition, it can have its own properties and methods.

**Polymorphism** describes the concept that different classes can be used with the same interface. Each of these classes can provide its own implementation of the interface.

**Dependency injection**

https://www.freecodecamp.org/news/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f/

Transferring the task of creating the object to someone else and directly using the dependency is called dependency injection.

- SOLID

  https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#toc-single-responsibility-principle

  **S - Single-responsiblity principle**

  A class should have only one job.

  **O - Open-closed principle**

  This simply means that a class should be easily extendable without modifying the class itself. 

  **L - Liskov substitution principle**

  All this is stating is that every subclass/derived class should be substitutable for their base/parent class.

  **I - Interface segregation principle**

  A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.

  **D - Dependency Inversion Principle**

  Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.

  



## Object oriented JavaScript

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS



This is really useful — teachers and students share many common features such as name, gender, and age, so it is convenient to only have to define those features once. You can also define the same feature separately in different classes, as each definition of that feature will be in a different namespace. For example, a student's greeting might be of the form "Yo, I'm [firstName]" (e.g *Yo, I'm Sam*), whereas a teacher might use something more formal, such as "Hello, my name is [Prefix] [lastName], and I teach [Subject]." (e.g *Hello, My name is Mr Griffiths, and I teach Chemistry*).

### Constructor function

Try 1:

```js
function createNewPerson(name) {
  const obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + obj.name + '.');
  };
  return obj;
}

const salva = createNewPerson('Salva');
salva.name;
salva.greeting();
```

Try 2:

```js
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

let person1 = new Person('Bob');
let person2 = new Person('Sarah');
```

**The constructor function is JavaScript's version of a class.** Notice that it has all the features you'd expect in a function, although it doesn't return anything or explicitly create an object — it basically just defines properties and methods. Notice also the `this` keyword being used here as well — it is basically saying that whenever one of these object instances is created, the object's `name` property will be equal to the name value passed to the constructor call, and the `greeting()` method will use the name value passed to the constructor call too.

Note that when we are calling our constructor function, **we are defining `greeting()` every time, which isn't ideal.** To avoid this, we can define functions on the prototype instead, which we will look at later.

[Declaring methods in contructor vs on prototype](https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/)

Our finished constructor:

```js
function Person(first, last, age, gender, interests) {
  this.name = {
     first : first,
     last : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + 	   this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

person1['age']
person1.interests[1]
person1.bio()
```



### Other ways to create object instances

#### The Object() constructor

First of all, you can use the Object() constructor to create a new object. Yes, even generic objects have a constructor, which generates an empty object.

```js
let person1 = new Object();
```

This stores an empty object in the `person1` variable. You can then add properties and methods to this object using dot or bracket notation as desired; try these examples in your console:

```js
person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
};
```

You can also pass an object literal to the `Object()` constructor as a parameter, to prefill it with properties/methods. Try this in your JS console:

```js
let person1 = new Object({
  name: 'Chris',
  age: 38,
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
});
```

Constructors can help you give your code order—you can create constructors in one place, then create instances as needed, and it is clear where they came from.

#### Using the create() method

However, some people prefer to create object instances without first creating constructors, especially if they are creating only a few instances of an object. JavaScript has a built-in method called `create()` that allows you to do that. With it, you can create a new object, using an existing object as the prototype of the newly created object.

With your finished exercise from the previous sections loaded in the browser, try this in your JavaScript console:

```js
let person2 = Object.create(person1);
```

Now try these:

```js
person2.name;
person2.greeting();
```



## A prototype-based language

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from. 

#### **An object's `prototype`** vs **the `prototype` property on constructor functions**

The former is the property on each instance, and the latter is the property on the constructor.

```js
// constructor function
function Dog(name) {
	this.name = name
}

// an instance of Dog
const doggo = new Dog('doggo')

Object.getPrototypeOf(doggo) === Dog.prototype	// true
```

The **`new`** keyword does the following things:

1. Creates a blank, plain JavaScript object;
2. Links (sets the constructor of) the newly created object to another object by setting the other object as its parent prototype;
3. Passes the newly created object from *Step 1* as the `this` context;
4. Returns `this` if the function doesn't return an object.

#### Prototype chain

An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a **prototype chain**, and explains why different objects have properties and methods defined on other objects available to them. The methods and properties are **not** copied from one object to another in the prototype chain. They are *accessed* by *walking up the chain*.

The prototype chain is traversed only while retrieving properties. If properties are set or `delete`d directly on the object, the prototype chain is not traversed.

Before ECMAScript 2015, there wasn't officially a way to access an object's `prototype` directly.

Most modern browsers, however, do offer property available called `__proto__` (that's 2 underscores either side), which contains the object's constructor's `prototype ` object. For example, try `person1.__proto__` and `person1.__proto__.__proto__` to see what the chain looks like in code!

Since ECMAScript 2015, you can access an object's prototype object indirectly via `Object.getPrototypeOf(obj)`.



#### The prototype property: Where inherited members are defined

So, where are the inherited properties and methods defined? If you look at the `Object` reference page, you'll see listed in the left hand side a large number of properties and methods — many more than the number of inherited members we saw available on the `person1` object. Some are inherited, and some aren't — why is this?

As mentioned above, the inherited ones are the ones defined on the `prototype` property (you could call it a sub-namespace) — that is, the ones that begin with `Object.prototype.`, and not the ones that begin with just `Object.` The `prototype` property's value is an object, which is basically a bucket for storing properties and methods that we want to be inherited by objects further down the prototype chain.

So `Object.prototype.toString()`, `Object.prototype.valueOf()`, etc., are available to any object types that inherit from `Object.prototype`, including new object instances created from the `Person()` constructor.

`Object.is()`, `Object.keys()`, `Object.getPrototypeOf(obj)` and other members not defined inside the `prototype` bucket are not inherited by object instances or object types that inherit from `Object.prototype`. They are methods/properties available just on the `Object()` constructor itself.


**Note**: This seems strange — how can you have a method defined on a constructor, which is itself a function?

Well, a function is also a type of object. See the `Function()` constructor reference if you don't believe us.



```js
Dog.prototype 

/*
{
	constructor: ƒ Dog(name),
	__proto__: Object
}
*/

// define new property and method on Dog.prototype
Dog.prototype.legNumber = 4
Dog.prototype.bark = ()	=> console.log('Woff')

/*
{
  bark: () => console.log('Woff')
  legNumber: 4
  constructor: ƒ Dog(name)
  __proto__: Object
}
*/

// now, they are available to the instance even if the instance was declared first!
doggo.bark()	// 'Woff'
doggo.legNumber	// 4

```



😂

The `prototype` property on a constructor function is **NOT** the actuall prototype of the constructor function. It is just a property. The actuall prototype of the constructor function which it  inherits from is `Dog.prototype.__proto__`, or `Object.getPrototypeOf(Dog.prototype)`

😂



#### Revisiting create()

```js
// What create() actually does is to create a new object from a specified prototype object. Here, person2 is being created using person1 as a prototype object. 

const doggo2 = Object.create(doggo)

doggo2.__proto__ // doggo
```



#### The constructor property

```js
// there is a constructor property on the prototype object
Dog.prototype.constructor

// this can be useful bcoz you can access the constructor directly through the instance
const doggo = new Dog('doggo')

const doggo2 = new doggo.constructor('doggo2')

```



#### The `instanceof` operator

```js
doggo instanceof Dog // true
```



#### Modifying the prototype

A fairly common pattern for more object definitions is to define the properties inside the constructor, and the methods on the prototype. This makes the code easier to read, as the constructor only contains the property definitions, and the methods are split off into separate blocks.



## Inheritance in JavaScript

```js
// parent "class"
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function() {
  
}

// child "class"
function Teacher(first, last, age, gender, interests, subject) {

  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}


// Inheriting from a constructor with no parameters
function Brick() {
  this.width = 10;
  this.height = 20;
}

function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
}
```



The `call()` function basically allows you to call a function defined somewhere else, but in the current context. The first parameter specifies the value of `this` that you want to use when running the function, and the other parameters are those that should be passed to the function when it is invoked.

But we have 2 problems. First, `Teacher`\'s prototype property doesn't have a reference to `Person`. Second, the methods of `Person` is not inherited. 

Adding this line, `create()` will create a new object with the object passed in as the prototype. 

```js
Teacher.prototype = Object.create(Person.prototype);
```

All good except one more problem, now `Teacher.prototype.constructor` is pointing to `Person`, bcoz `Teacher.prototype` inherits its properties from `Person.prototype`. 

```js
Object.defineProperty(Teacher.prototype, 'constructor', { 
    value: Teacher, 
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });
```



## Object member summary

To summarize, you've got four types of property/method to worry about:

😀

1. Those defined inside a constructor function that are given to object instances. These are fairly easy to spot — in your own custom code, they are the members defined inside a constructor using the `this.x = x` type lines; in built in browser code, they are the members only available to object instances (usually created by calling a constructor using the `new` keyword, e.g. `let myInstance = new myConstructor()`).

2. Those defined directly on the constructor themselves, that are available only on the constructor. These are commonly only available on built-in browser objects, and are recognized by being chained directly onto a constructor, *not* an instance. For example, `Object.keys()`. These are also known as **static properties/methods**.

   I finally clearly grasp what **static** really means!

3. Those defined on a constructor's prototype, which are inherited by all instances and inheriting object classes. These include any member defined on a Constructor's `prototype` property, e.g. `myConstructor.prototype.x()`.

4. Those available on an object instance, which can either be an object created when a constructor is instantiated like we saw above (so for example `let teacher1 = new Teacher( 'Chris' );` and then `teacher1.name`), or an object literal (`let teacher1 = { name : 'Chris' }` and then `teacher1.name`).



## ECMAScript 2015 Classes



```js
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}
```

### Inheritance with class syntax

Unlike old-school constructor functions where the [`new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) does the initialization of `this` to a newly-allocated object, this isn't automatically initialized for a class defined by the [extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) keyword, i.e the sub-classes.

For sub-classes, the `this` initialization to a newly allocated object is always dependant on the parent class constructor, i.e the constructor function of the class from which you're extending.

Here we are extending the `Person` class — the `Teacher` sub-class is an extension of the `Person` class. So for `Teacher`, the `this` initialization is done by the `Person` constructor.

To call the parent constructor we have to use the [`super()` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super).

**Since the `super()` operator is actually the parent class constructor**, passing it the necessary arguments of the `Parent` class constructor will also initialize the parent class properties in our sub-class, thereby inheriting it:

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
```



#### Getter and setter

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}
```







