// let globalAge = 23;
// function printAge(age) {
//   var varAge = 34;

//   if (age > 0) {
//     const constAge = age * 2;
//     console.log(constAge);
//   }
// //   console.log(constAge); //Error it is a block-scoped variable
// }
// printAge(globalAge);

// function makeAdding(firstNumber) {
//   const first = firstNumber;
//   return function resulting(secondNumber) {
//     const second = secondNumber;
//     return first + second;
//   };
// }

// const add5 = makeAdding(5);
// console.log(add5);
// console.log(add5(2));

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }
// const myFunc = makeFunc();
// myFunc();

// function makeSizer(size) {
//   return function () {
//     document.body.style.fontSize = `${size}px`;
//   };
// }
// const size12 = makeSizer(12);
// const size14 = makeSizer(14);
// const size16 = makeSizer(16);

// document.getElementById("size-12").onclick = size12;
// document.getElementById("size-14").onclick = size14;
// document.getElementById("size-16").onclick = size16;

// const User = function (name) {
//   this.name = name;
//   this.discord = "@" + name;
// };
//
// function createUser(name) {
//   const discordName = "@" + name;
//   return { name, discordName };
// }

// const name = "Bob";
// const age = 28;
// const color = "red";
// const thatObject = { name: name, age: age, color: color };
// //these both are same if we have a variable with the same name as that of the property to which we are assigning it, then we can write it once.
// const nowFancyObject = { name, age, color };

// console.log({ name, age, color });

// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(a, b);

// const array = [1, 2, 3, 4, 5];
// const [zerothEle, firstEle] = array;

// console.log(zerothEle, firstEle);

// const obj = { a: 1, b: { c: 2 } };
// const {
//   a,
//   b: { c: d },
// } = obj;
// console.log(a, d);

// const numbers = [];
// const obj = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[2] } = obj);
// console.log(numbers);

// const [a = 1] = [];
// const { b = 2 } = { b: undefined };
// const { c = 2 } = { c: null };
// console.log(a, b, c);

// const { b = console.log("hey") } = { b: undefined };

// const { a, ...others } = { a: 1, b: 2, c: 3 };

// console.log(others);

// const [first, ...others2] = [1, 2, 3];
// console.log(others2);

// let a = 1;
// let b = 3;
// [a, b] = [b, a];
// console.log(a, b);

// const arr = [1, 2, 3];
// [arr[2], [arr[1]]] = [arr[1], [arr[2]]];
// console.log(arr);

// function f() {
//   return [1, 2, 3];
// }
// const [a, , b] = f();
// console.log(a, b);

// const [a, b, ...{ length }] = [1, 2, 3];
// console.log(a, b, length);

// const [a, b, ...[c, d]] = [1, 2, 3, 4];
// console.log(a, b, c, d);

// const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 5, 6, 7, 8];
// console.log(a, b, c, d, e, f);
//

// function parseProtocol(url) {
//   const parsedUrl = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
//   if (!parsedUrl) {
//     return false;
//   }
//   console.log(parsedUrl);

//   const [, protocol, fullHost, fullPath] = parsedUrl;
//   return protocol;
// }
// console.log(
//   parseProtocol("https://developer.mozilla.org/en-US/docs/Web/JavaScript")
// );

// const [a, b] = new Map([
//   [1, 2],
//   [3, 4],
// ]);

// console.log(a, b);

// const obj = {
//   *[Symbol.iterator]() {
// for (const v of [0, 1, 2, 3]) {
//   console.log(v);
//   yield v;
// }
//   },
// };
// const [a, b] = obj;
//

// const obj = {
//   *[Symbol.iterator]() {
//     for (const v of [0, 1, 2, 3]) {
//       console.log(v);
//       yield v;
//     }
//   },
// };

// const [a, b, ...rest] = obj;
// console.log(rest);
//
// const user = {
// id: 42,
// isVerified: true,
// };
// const { id, isVerified } = user;
// console.log(id);
// console.log(isVerified);
//
//

// const o = {
//   p: 42,
//   q: true,
// };
// const { p: foo, q: bar } = o;
// console.log(foo);
// console.log(bar);

// const { a: aa = 10, b: bb = 5 } = { a: 3 };
// console.log(aa);
// console.log(bb);

// const user = {
//   id: 42,
//   displayName: "jdoe",
//   fullName: {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
// };

// function userId({ id }) {
//   return id;
// }
// console.log(userId(user));

// function userDisplayName({ displayName: dname }) {
//   return dname;
// }
// console.log(userDisplayName(user));

// function whois({ displayName, fullName: { firstName: name } }) {
//   return `${displayName} is ${name}`;
// }

// console.log(whois(user));

// function drawChart({
//   size = "big",
//   coords = { x: 0, y: 0 },
//   radius = 25,
// } = {}) {
//   console.log(size, coords, radius);
// }
// drawChart({
//   coords: { x: 18, y: 30 },
//   radius: 30,
// });

// const metadata = {
//   title: "Scratchpad",
//   translations: [
//     {
//       locale: "de",
//       localizationTags: [],
//       lastEdit: "2014-04-14T08:43:37",
//       url: "/de/docs/Tools/Scratchpad",
//       title: "JavaScript-Umgebung",
//     },
//   ],
//   url: "/en-US/docs/Tools/Scratchpad",
// };
// const {
//   title: englishTitle,
//   translations: [{ title: localeTitle }],
// } = metadata;
// console.log(englishTitle);
// console.log(localeTitle);

// const people = [
//   {
//     name: "Mike Smith",
//     family: {
//       mother: "Jane",
//       father: "Harry",
//       sister: "Samantha",
//     },
//     age: 35,
//   },
//   {
//     name: "Tom Jones",
//     family: {
//       mother: "Norah Jones",
//       father: "Richard Jones",
//       brother: "Howard Jones",
//     },
//     age: 25,
//   },
// ];
// for (const {
//   name: n,
//   family: { father: f },
// } of people) {
//   console.log(`Name: ${n}, Father: ${f}`);
// }

// const key = "z";
// const { [key]: foo } = { z: "bar" };
// console.log(foo);

// const { a, toFixed } = 1;
// console.log(a, toFixed);

// const props = [
//   { id: 1, name: "Fizz" },
//   { id: 2, name: "Buzz" },
//   { id: 3, name: "FizzBuzz" },
// ];

// const [, , { name }] = props;

// console.log(name);

// const obj = {
//   self: "123",
//   __proto__: {
//     prot: "456",
//   },
// };
// const { self, prot } = obj;
// console.log(self);
// console.log(prot);

// const obj = { a: 1 };
// const copy = Object.assign({}, obj);
// console.log(copy);

// const obj1 = { a: 0, b: { c: 0 } };
// const obj2 = Object.assign({}, obj1);
// console.log(obj2);

// obj1.a = 1;
// console.log(obj1);
// console.log(obj2);

// obj2.a = 2;
// console.log(obj1);
// console.log(obj2);

// obj2.b.c = 3;
// console.log(obj1);
// console.log(obj2);

// const obj3 = { a: 0, b: { c: 0 } };
// const obj4 = structuredClone(obj3);
// obj3.a = 4;
// obj3.b.c = 4;

// console.log(obj4);

// const v1 = "abcdefghjkl";
// const v2 = "defgh";
// const v3 = 10;
// const v4 = Symbol("foo");

// const obj = Object.assign({}, v1, v2, v3, v4);
// console.log(obj);

// function createUser(name) {
//   const discordName = "@" + name;
//   let reputation = 0;
//   const getReputation = () => reputation;
//   const giveReputation = () => {
//     reputation++;
//   };

//   return { name, discordName, getReputation, giveReputation };
// }
// const josh = createUser("joshh");
// josh.giveReputation();
// josh.giveReputation();
// console.log({
//   discordName: josh.discordName,
//   reputation: josh.getReputation(),
// });

// function createPlayer(name, level) {
//   const { getReputation, giveReputation } = createUser(name);

//   const increaseLevel = () => level++;
//   return { name, getReputation, giveReputation, increaseLevel };
// }

// function createPlayer(name, level) {
//   const user = createUser(name);
//   const increaseLevel = () => level++;
//   return Object.assign({}, user, { increaseLevel });
// }

// let player = createPlayer("john", 444);
// console.log(player);
// console.log(player.getReputation());

// const calculator = (function () {
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;
//   return { add, sub, mul, div };
// })();

// console.log(calculator.add(3, 5));
// console.log(calculator.sub(3, 5));
// console.log(calculator.mul(3, 5));

// const first = "wes";
// let second = "bos";
// var age = 100;

// function sayHi() {
//   console.log("hi");
// }

// const age = 100;

// function go() {
//   const age = 200;
//   const hair = "blonde";
//   console.log(age);
//   console.log(hair);
// }
// go();

//block scoping

// if (1 === 1) {
//   var cool = true;
// }
// console.log(cool);

// function isCool(name) {
//   let cool;
//   if (name === "wes") {
//     const cool = true;
//   }
//   console.log(cool);
//   return cool;
// }
// isCool("wes");
// isCool("we");

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// function isCool(name) {
//   if (name === "wes") {
//     var cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// Var is not a block scoped its a function scope

// const dog = "snickers";
// function logDog() {
//   console.log(dog);
// }
// function go() {
//   const dog = "sunny";
//   logDog();
// }
// go();

// const dog = "snickers";
// function logDog(dog) {
//   console.log(dog);
// }
// function go() {
//   const dog = "sunny";
//   logDog("Rufus");
// }
// go();

// function logDog(dog) {
//   const dog = whateveryoupassedinthearrgument;
//   console.log(dog);
// }

//A closure is the ability to access a parent level scope from a child scope, even after the parent function has been terminated.

// function outer() {
//   const outerVar = "Hey i am the outer var";
//   return function inner() {
//     const innerVar = "Hey I am inner Var";
//     console.log(innerVar);
//     console.log(outerVar);
//   };
// }
// const innerFnc = outer();
// innerFnc();

// function createGreeting(greeting = "") {
//   const myGreet = greeting.toUpperCase();
//   return function (name) {
//     return `${myGreet}, ${name}`;
//   };
// }

// const sayHello = createGreeting("hello");
// const sayHey = createGreeting("hey");

// console.log(sayHello("wes"));
// console.log(sayHello("kait"));
// console.log(sayHey("kait"));

// function createGame(gameName) {
//   let score = 0;
//   return function win() {
//     score++;
//     return `Your name ${gameName} score is ${score}`;
//   };
// }

// const hockeyGame = createGame("Hockey");
// const SoccerGame = createGame("Soccer");

//Closures are the ability of a child function, or an inner function , to access the variables from a higher level scope even after the functions have been called or closed or closed over

//Module is created as an IIFE(immediately invoked function expression) with a function inside:
// const SomeModule=(function(){})();

// const Formatter = (function () {
//   let timesRun = 0;

//   console.log("Start");
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

//   const setTimesRun = () => {
//     log("Setting times run");
//     ++timesRun;
//   };

//   const makeUppercase = (text) => {
//     log("Making Uppercase");
//     setTimesRun();
//     return text.toUpperCase();
//   };
//   return {
//     makeUppercase,
//     timesRun,
//   };
// })();

// console.log(Formatter.makeUppercase("tomek"));
// console.log(Formatter.timesRun);

// Formatter.timesRun = 10;
// console.log(Formatter.timesRun); // This shows that everything publicly exposed from the outside. This is one of the biggest pattern drawbacks.

// Formatter.log("Hello"); //it wont work if our module doesn't return anything.
// const documentMock = () =>
//   ({
//     querySelector: (selector) => ({
//       innerHTML: null,
//     }),
//   }());

// const Formatter = (function (doc) {
//   const log = (message) => {
//     console.log(`[${Date.now()}] Logger: ${message}`);
//   };

//   const makeUppercase = (text) => {
//     log("Making uppercase");
//     return text.toUpperCase();
//   };
//   const writeToDom = (selector, message) => {
// if (doc && "querySelector" in doc) { //not needed the check as we created a mock document object which will always make it true
//   doc.querySelector(selector).innerHTML = message;
//   console.log("hi");
//   // }
// };

//   return {
//     makeUppercase,
//     writeToDom,
//   };
// })(document || documentMock);

// Formatter.writeToDom("#target", "Hi there");

//Closure = A function with preserved data
// Gives you access to an outer function's scope, from an inner function

// State of variable in outer scope are 'saved'.
// Variable in outer scope are considered 'private'

// let score = (function () {
//   let points = 0;
//   return function () {
//     points += 1;
//     return points;
//   };
// })();
// console.log(score());
// console.log(score());
// console.log(score());

//COMPOSITION OVER INHERITANCE

//YOU SHOULD AVOID INHERITANCE AND PREFER COMPOSITION FROM START AS IT PROVIDES MORE FREEDOM

const barker = (state) => ({
  bark: () => {
    console.log("Woof, I am " + state.name);
  },
});
const driver = (state) => ({
  drive: () => (state.position = state.position + state.speed),
});
const killer = (state) => ({
  kill: () => console.log(state.name + "killed"),
});

barker({ name: "karo" }).bark();

const murderrobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0,
  };
  return Object.assign({}, barker(state), driver(state), killer(state));
};

murderrobotDog("sniffles").bark();
let sniffles = murderrobotDog("sniffles");
sniffles.kill();
