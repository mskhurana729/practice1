// Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set:

// let user = {
//   name: "john",
//   surname: "Smith",
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };

// From the outside, an accessor property looks like a regular one. That’s the idea of accessor properties. We don’t call user.fullName as a function, we read it the getter runs behind the scenes.

// As of now, fullName has only a getter. If we attempt to assign user.fullName=, there will be an error:
// let user = {
//   name: "john",
//   surname: "Smith",
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
// };

// let user = {
//   get name() {
//     return this._name;
//   },
//   set name(value) {
//     if (value.length < 4) {
//       alert("Name is too short,need at least 4 characters");
//       return;
//     }
//     this._name = value;
//   },
// };
// user.name = "";
// alert(user.name);

// So, the name is stored in _name property, and the access is done via getter and setter.

// Technically, external code is able to access the name directly by using user._name. But there is a widely known convention that properties starting with an underscore "_" are internal and should not be touched from outside the object.

// The “class” syntax
// The basic syntax is:

// class MyClass {
//   // class methods
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }
// Then use new MyClass() to create a new object with all the listed methods.

// The constructor() method is called automatically by new, so we can initialize the object there.

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }

// let user = new User("John");
// user.sayHi();

// No comma between class methods

// What is a class?

// In JavaScript, a class is a kind of function.

// Here, take a look:

// class User {
//   constructor(name) { this.name = name; }
//   sayHi() { alert(this.name); }
// }

// proof: User is a function
// alert(typeof User); // function
// What class User {...} construct really does is:

// Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
// Stores class methods, such as sayHi, in User.prototype.
// After new User object is created, when we call its method, it’s taken from the prototype, just as described in the chapter F.prototype. So the object has access to class methods.

// “Class fields” is a syntax that allows to add any properties.

// For instance, let’s add name property to class User:

// class User {
//   name = "John";

//   sayHi() {
//     alert(`Hello, ${this.name}!`);
//   }
// }

// new User().sayHi(); // Hello, John!
// So, we just write “ = ” in the declaration, and that’s it.

// Making bound methods with class fields
// As demonstrated in the chapter Function binding functions in JavaScript have a dynamic this. It depends on the context of the call.

// So if an object method is passed around and called in another context, this won’t be a reference to its object any more.

// For instance, this code will show undefined:

// class Button {
//   constructor(value) {
//     this.value = value;
//   }
//   click() {
//     alert(this.value);
//   }
// }

// let button = new Button("Hello");
// setTimeout(button.click, 1000);

// The problem is called “losing this”.

// There are two approaches to fixing it, as discussed in the chapter Function binding:

// Pass a wrapper-function, such as setTimeout(() => button.click(), 1000).
// Bind the method to object, e.g. in the constructor.
// Class fields provide another, quite elegant syntax:

// class Button {
//   constructor(value) {
//     this.value = value;
//   }
//   click = () => {
//     alert(this.value);
//   };
// }

// let button = new Button("hello");

// setTimeout(button.click, 1000);

// The class field click = () => {...} is created on a per-object basis, there’s a separate function for each Button object, with this inside it referencing that object. We can pass button.click around anywhere, and the value of this will always be correct.

// That’s especially useful in browser environment, for event listeners.

// Summary
// class MyClass{
//     prop=value;
//     constructor(...){
//         //
//     }

//     method() {

//     }
//     get something(...){}
//     set something(...){}

//     [Symbol.iterator](){}
//method with computed name (symbol here)
// }

//MDN docs

// Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

// Defining classes
// Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.

//Declaration
// class Rectangle{
// constructor(height,width){
//     this.height=height;
//     this.width=width;
// }

// }

//Expression; the class is anonymous but assigned to a variable

// const Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

//Expression; the class has its own name

// const Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// Method definitions are not constructable
// Methods cannot be constructors! They will throw a TypeError if you try to instantiate them. On the other hand, a property created as a function can be used as a constructor.

// const obj = {
//   method() {},
// };
// new obj.method();

// Method definitions in classes
// class ClassWithPublicInstanceMethod {
//   publicMethod() {
//     return "hello world";
//   }
//   secondPublicMethod() {
//     return "goodbye world";
//   }
// }

// const instance = new ClassWithPublicInstanceMethod();
// console.log(instance.publicMethod());

// Public instance methods are defined on the prototype property of the class and are thus shared by all instances of the class. They are writable, non-enumerable, and configurable.

// Inside instance methods, this and super work like in normal methods. Usually, this refers to the instance itself. In subclasses, super lets you access the prototype of the object that the method is attached to, allowing you to call methods from the superclass.

// class BaseClass {
//   msg = "hello world";
//   basePublicMethod() {
//     return this.msg;
//   }
// }

// class SubClass extends BaseClass {
//   subPublicMethod() {
//     return super.basePublicMethod();
//   }
// }
// const instance = new SubClass();
// console.log(instance.subPublicMethod());

// Generator methods
// Note that the asterisk (*) in the generator method syntax must be before the generator property name. (That is, * g(){} will work, but g *(){} will not.)

// const obj = {
//   g: function* () {
//     let index = 0;
//     while (true) {
//       yield index++;
//     }
//   },
// };

//the same object using shorthand syntax
// const obj2 = {
//   *g() {
//     let index = 0;
//     while (true) {
//       yield index++;
//     }
//   },
// };

// const it = obj2.g();

// console.log(it.next().value);
// console.log(it.next().value);

//get
// The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.

// const obj = {
//   log: ["a", "b", "c"],
//   get latest() {
//     return this.log[this.log.length - 1];
//   },
// };
// console.log(obj.latest);

// Deleting a getter using the delete operator
// If you want to remove the getter, you can just delete it:

// delete obj.latest;
// console.log(obj.latest);//undefined

// A getter must have exactly zero parameters.

// Defining a getter on existing objects using defineProperty
// To append a getter to an existing object later at any time, use Object.defineProperty().

// const o = { a: 0 };

// Object.defineProperty(o, "b", {
//   get() {
//     return this.a + 1;
//   },
// });

// console.log(o.b);

// o.b = 55;
// console.log(o.b);

// Smart / self-overwriting / lazy getters
// Getters give you a way to define a property of an object, but they do not calculate the property's value until it is accessed. A getter defers the cost of calculating the value until the value is needed. If it is never needed, you never pay the cost.

// An additional optimization technique to lazify or delay the calculation of a property value and cache it for later access are smart (or memoized) getters. The value is calculated the first time the getter is called and is then cached so subsequent accesses return the cached value without recalculating it. This is useful in the following situations:

// If the calculation of a property value is expensive (takes much RAM or CPU time, spawns worker threads, retrieves remote file, etc.).
// If the value isn't needed just now. It will be used later, or in some cases, it's not used at all.
// If it's used, it will be accessed several times, and there is no need to re-calculate that value will never be changed or shouldn't be re-calculated.

// Note: This means that you shouldn't write a lazy getter for a property whose value you expect to change, because if the getter is lazy, then it will not recalculate the value.

// Note that getters are not "lazy" or "memoized" by nature; you must implement this technique if you desire this behavior.

// In the following example, the object has a getter as its own property. On getting the property, the property is removed from the object and re-added, but implicitly as a data property this time. Finally, the value gets returned.

// const obj = {
//   get notifier() {
//     delete this.notifier;
//     this.notifier = document.getElementById(
//       "bookmarked-notification-anchor"
//     ).textContent;
//     return this.notifier;
//   },
// };

// console.log(obj.notifier);

// document.getElementById("bookmarked-notification-anchor").textContent =
//   "Hello New One";

// console.log(obj.notifier);

//set

// The set syntax binds an object property to a function to be called when there is an attempt to set that property. It can also be used in classes.

// const language = {
//   set current(name) {
//     this.log.push(name);
//   },
//   log: [],
// };

// language.current = "EN";
// language.current = "FA";

// console.log(language.log);
// Expected output: Array ["EN", "FA"]

// A setter must have exactly one parameter.

//setter in classes

// class ClassWithGetSet {
//   #msg = "Hello world";
//   get msg() {
//     return this.#msg;
//   }
//   set msg(x) {
//     this.#msg = `hello ${x}`;
//   }
// }

// const instance = new ClassWithGetSet();
// console.log(instance.msg);

// instance.msg = "Pre";
// console.log(instance.msg);

// Setter properties are defined on the prototype property of the class and are thus shared by all instances of the class. Unlike setter properties in object literals, setter properties in classes are not enumerable.

// Defining a setter on existing objects using defineProperty

// const o = {
//   a: 0,
// };

// Object.defineProperty(o, "b", {
//   set(x) {
//     this.a = x / 2;
//   },
// });

// o.b = 10;
// console.log(o.a);

// Private properties

// Private properties are counterparts of the regular class properties which are public, including class fields, class methods, etc. Private properties get created by using a hash # prefix and cannot be legally referenced outside of the class. The privacy encapsulation of these class properties is enforced by JavaScript itself. The only way to access a private property is via dot notation, and you can only do so within the class that defines the private property.

// There are some additional syntax restrictions:

// All private identifiers declared within a class must be unique. The namespace is shared between static and instance properties. The only exception is when the two declarations define a getter-setter pair.
// The private identifier cannot be #constructor.
// class C {
//   [Math.random()] = 1;
// }

// console.log(new C());
// console.log(new C());

// Constructor
// The constructor method is a special method for creating and initializing an object created with a class.

// Methods
// Methods are defined on the prototype of each class instance and are shared by all instances.

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   get area() {
//     return this.calcArea();
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
//   *getSides() {
//     yield this.height;
//     yield this.width;
//     yield this.height;
//     yield this.width;
//   }
// }
// const square = new Rectangle(10, 10);
// console.log(square.area);
// console.log([...square.getSides()]);

// Static methods and fields

// The static keyword defines a static method or field for a class. Static properties (fields and methods) are defined on the class itself instead of each instance. Static methods are often used to create utility functions for an application, whereas static fields are useful for caches, fixed-configuration, or any other data that doesn't need to be replicated across instances.

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static displayName = "Point";
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;
//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);

// console.log(Point.displayName);
// console.log(Point.distance(p1, p2));
//
//
// Inheritance
// The extends keyword is used in class declarations or class expressions to create a class as a child of another constructor (either a class or a function).

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   speak() {
//     console.log(`${this.name} barks`);
//   }
// }

// const d = new Dog("Mitzie");
// d.speak();

// If there is a constructor present in the subclass, it needs to first call super() before using this. The super keyword can also be used to call corresponding methods of super class.

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }
// class Lion extends Cat {
//   speak() {
//     super.speak();
//     console.log(`${this.name} roars`);
//   }
// }

// const l = new Lion("Fuzzy");
// l.speak();

// Binding this with instance and static methods

// When a static or instance method is called without a value for this, such as by assigning the method to a variable and then calling it, the this value will be undefined inside the method. This behavior is the same even if the "use strict" directive isn't present, because code within the class body is always executed in strict mode.

// class Animal {
//   speak() {
//     return this;
//   }
//   static eat() {
//     return this;
//   }
// }

// const obj = new Animal();
// console.log(obj.speak());
// const speak = obj.speak;
// console.log(speak());

// console.log(Animal.eat());
// const eat = Animal.eat;
// console.log(eat());

function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

const obj = new Animal();
const speak = obj.speak;
console.log(speak()); // global object (in non–strict mode)

const eat = Animal.eat;
console.log(eat()); // global
