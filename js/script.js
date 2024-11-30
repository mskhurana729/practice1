// //declaring an object

// const myObject = {
//   property: "Value",
//   otherProperty: 77,
//   "obnoxious property": function () {},
// };

// //2 ways to get info out of an object

// //dot.notation
// myObject.property;
// myObject["obnoxious property"];

// const variable = "property";

// myObject.variable; //'undefined'

// myObject[variable]; //'Value'

// //Objects as a design pattern

// // example
// const playerOneName = "tim";
// const playerTwoName = "jenn";
// const playerOneMarker = "X";
// const playerTwoMarker = "O";

// //example2

// const playerOne = {
//   name: "tim",
//   marker: "X",
// };

// const playerTwo = {
//   name: "jenn",
//   marker: "O",
// };

// function printName(player) {
//   console.log(player.name);
// }

// function gameOver(winningPlayer) {
//   console.log("Congratulation!");
//   console.log(winningPlayer.name + "is the winner!");
// }

// //Object constructors

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function () {
//     console.log(this.name);
//   };
// }
// const player1 = new Player("steve", "X");
// const player2 = new Player("also steve", "O");
// player1.sayName();
// player2.sayName();

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function () {
//     return (
//       "The " +
//       this.title +
//       " by " +
//       this.author +
//       ", " +
//       this.pages +
//       " pages, " +
//       this.read +
//       " yet"
//     );
//   };
// }
// let book1 = new Book("Anything", "whom", 988, "not read");
// console.log(book1.info());
// console.log(Object.getPrototypeOf(player1));
// console.log(Object.getPrototypeOf(player1) === Player.prototype);
// console.log(Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2));
// console.log(Object.getPrototypeOf(player2));

// //any properties or method defined on Player.prototype will be available to the created Player objects

// Player.prototype.sayHello = function () {
//   console.log("Hello, I'm a player!");
// };
// player1.sayHello();

// console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype);
// console.log(player1.valueOf());
// console.log(player1.hasOwnProperty("valueOf"));
// console.log(Object.prototype.hasOwnProperty("valueOf"));
// console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));

// //prototypal inheritance
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayName = function () {
//   console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }
// Player.prototype.getMarker = function () {
//   console.log(`My marker is '${this.marker}'`);
// };

// console.log(Object.getPrototypeOf(Player.prototype));
// Object.setPrototypeOf(Player.prototype, Person.prototype);
// console.log(Object.getPrototypeOf(Player.prototype));

// const player1 = new Player("steve", "X");
// const player2 = new Player("also steve", "O");

// player1.sayName();
// player1.getMarker();
// player2.sayName();
// player2.getMarker();

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayName = function () {
//   console.log(`Hello, I'm ${this.name}!`);
// };
// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }

// //don't do this
// // Player.prototype = Person.prototype;
// Object.setPrototypeOf(Player.prototype, Person.prototype);

// function Enemy(name) {
//   this.name = name;
//   this.marker = "^";
// }

// //not again don't do this
// // Enemy.prototype = Person.prototype;
// Object.setPrototypeOf(Enemy.prototype, Person.prototype);

// Enemy.prototype.sayName = function () {
//   console.log("Hahahhahahha");
// };
// const carl = new Player("carl", "X");
// carl.sayName();

// const carry = new Enemy("Carry");
// carry.sayName();

// digital ocean Js prototypes

// let x = {};
// console.log(Object.getPrototypeOf(x));
// console.log(x.__proto__); //x->object
// console.log(x.toString());
// console.log(x.__proto__.__proto__);
// //array
//
// let y = [];
// console.log(y.__proto__);
// console.log(y.__proto__.__proto__); //y->array->object
//
// console.log(x.__proto__ === y.__proto__.__proto__);
//
// console.log(x instanceof Array);
// console.log(y instanceof Array);
// console.log(y instanceof Object);
// console.log(x instanceof Object);

//text-based role playing game
// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }

// let hero1 = new Hero("Bjorn", 1);

// console.log(Object.getPrototypeOf(hero1));
// console.log(hero1.greet());

// function Warrior(name, level, weapon) {
//   Hero.call(this, name, level);
//   this.weapon = weapon;
// }

// function Healer(name, level, spell) {
//   Hero.call(this, name, level);
//   this.spell = spell;
// }
// Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
// Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Hero.prototype.greet = function () {
//   return `${this.name} says hello`;
// };

// Warrior.prototype.attack = function () {
//   return `${this.name} attacks with the ${this.weapon}`;
// };
// Healer.prototype.heal = function () {
//   return `${this.name} casts ${this.spell}.`;
// };

// const hero1 = new Warrior("Bjorn", 1, "axe");
// const hero2 = new Healer("Kanin", 1, "cure");

// console.log(hero1.attack());

// console.log(hero1.greet());

//JAVASCRIPT.INFO
// PROTOTYPAL INHERITANCE

// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   },
// };
// let rabbit = {
//   jumps: true,
// };
// // let longEar = {
// //   earLength: 10,
// //   __proto__: rabbit,
// // };
// // rabbit.__proto__ = animal;
// // console.log(rabbit.eats);
// // console.log(rabbit.jumps);
// //
// rabbit.walk = function () {
//   console.log("Rabbit! Bounce-bounce");
// };
// rabbit.walk();
// //

// let user = {
//   name: "John",
//   surname: "Smith",
//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };
// let admin = {
//   __proto__: user,
//   isAdmin: true,
// };
// console.log(admin.fullName);
// admin.fullName = "Alice cooper";
// console.log(user.fullName);
// console.log(admin.fullName);

// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       console.log("I walk");
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   },
// };
// let rabbit = {
//   name: "white rabbit",
//   __proto__: animal,
// };
// rabbit.sleep();
// console.log(rabbit.isSleeping);
// console.log(animal.isSleeping);

// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// console.log(Object.keys(rabbit));
// for (let prop in rabbit) console.log(prop);

// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };
// for (let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);
//   if (isOwn) {
//     console.log(`Our: ${prop}`);
//   } else {
//     console.log(`Inherited: ${prop}`);
//   }
// }

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// console.log(pockets.pen);
// console.log(bed.glasses);

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach = [food];
//   },
// };

// let speedy = {
//   __proto__: hamster,
// };

// let lazy = {
//   __proto__: hamster,
// };

// // This one found the food
// speedy.eat("apple");
// console.log(speedy.stomach); // apple

// // This one also has it, why? fix please.
// console.log(lazy.stomach); // apple

// let counter = {
//   count: 0,
//   next: function () {
//     return ++this.count;
//   },
// };
// counter.next();

// console.log(this === window);

// this.color = "Red";
// console.log(window.color);

// function show() {
// console.log(this === window);
// }
// show();

// function show() {
// "use strict";
// console.log(this === window);
// function display() {
// console.log(this === window);
// }
// display();
// }
// show();

// let car = {
// brand: "Honda",
// getBrand: function () {
// return this.brand;
// },
// };
// console.log(car.getBrand());

// let brand = car.getBrand;
// let brand = car.getBrand.bind(car);
// console.log(brand());

// let car = {
//   brand: "honda",
//   getBrand: function () {
//     return this.brand;
//   },
// };
// let bike = {
//   brand: "Harley davidson",
//   __proto__: car,
// };
// let brand = car.getBrand.bind(bike);
// console.log(brand());
// console.log(bike.getBrand());

// function Car(brand) {
//   // if (this instanceof Car) {
//   // } same as
//   if (!new.target) {
//     throw Error("Must use the new operator to call the function");
//   }
//   this.brand = brand;
// }
// Car.prototype.getBrand = function () {
//   return this.brand;
// };
// let car = new Car("Honda");
// console.log(car.getBrand());

// let bmw = Car("bmw");
// console.log(bmw.brand);

// function getBrand(prefix) {
//   console.log(prefix + this.brand);
// }
// let honda = {
//   brand: "Honda",
// };
// let Audi = {
//   brand: "Audi",
// };
// getBrand.call(honda, `It's a `);
// getBrand.call(Audi, `It's an `);

// getBrand.apply(honda, [`It's a `]);

// let getThis = () => this;
// console.log(getThis() === window);

// function Car() {
//   this.speed = 120;
// }
// Car.prototype.getSpeed = () => {
//   return this.speed;
// };
// var car = new Car();

// console.log(car.getSpeed());

// let father = { dfasd: 444 };
// let son = {};

// Object.setPrototypeOf(son, father);
// console.log(Object.getPrototypeOf(son));

// function ObjectFactory() {
//   this.property = `hi, I'm a property`;
// }
// let obj = new ObjectFactory();
// // console.log(typeof ObjectFactory.prototype);
// // console.log(ObjectFactory.prototype.isPrototypeOf(obj));
// // console.log(Object.getPrototypeOf(ObjectFactory));
// // console.log(Object.getPrototypeOf(obj));

// ObjectFactory.prototype.prop = `I'm a property of ObjectFactory.prototype`;

// console.log(obj);
// console.log(obj.prop);

// const myObject = Object.create(Object.prototype);
// console.log(myObject);
// const literal = {};
// console.log(literal);
// const noProto = Object.create(null);
// console.log(noProto);

// const Car = function (color) {
//   this.color = color;
// };

// Car.prototype = {
//   getColor() {
//     return this.color;
//   },
// };
// const ToyCar = function () {};
// ToyCar.prototype = Object.create(Car.prototype);
// const legoCar = new ToyCar();
// console.log(legoCar);
// console.log(legoCar instanceof Car);
// console.log(legoCar instanceof ToyCar);
// console.log(legoCar instanceof Object);
// console.log(Car.prototype.isPrototypeOf(legoCar));

// function test() {
//   console.log(this);
// }
// test();

// const user = {
//   firstName: "Patrick",
//   lastName: "Scott",
//   hobbies: ["programming", "piano"],
//   listHobbies: function () {
//     this.hobbies.forEach(function (hobby) {
//       console.log(this.firstName);
//       console.log(hobby);
//     }, this);
//   },
// };

// user.listHobbies();

// function User(name) {
//   this.name = name;
//   console.log(this);
// }
// const newUser = new User("john");
