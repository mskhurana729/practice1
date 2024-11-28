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
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// let hero1 = new Hero("Bjorn", 1);

// console.log(Object.getPrototypeOf(hero1));
// console.log(hero1.greet());

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);
  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);
  this.spell = spell;
}
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.greet = function () {
  return `${this.name} says hello`;
};

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}`;
};
Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
};

const hero1 = new Warrior("Bjorn", 1, "axe");
const hero2 = new Healer("Kanin", 1, "cure");

console.log(hero1.attack());

console.log(hero1.greet());
