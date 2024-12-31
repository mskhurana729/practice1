// function Perosn(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.hasJob = false;

//   let secret = "tacosarelove";

//   this.fullName = function () {
//     return this.firstName + " " + this.lastName;
//   };

//   this.setFirstName = function (firstName) {
//     this.firstName = firstName;
//   };

//   this.setLastName = function (lastName) {
//     this.lastName = lastName;
//   };
//   this.getSecret = function () {
//     return secret;
//   };
// }

// converting upper code into class
//using static methods : These methods belong to the class itself not class's instances so to call this we have to call Person.staticFunctionName
//and inside Static function this refers to the class and all the functions which are declared without static keyword are instances method and inside them this refers to the instance.
//get : you can invoke get methods without using () at the end ,you can call them as the properties same for set
//set : get and set can have same name when there are no arguments while calling the function it will invoke get and when there are arguments it will invoke set
// class Person {
//   static species = "Homo Sapiens";

//   static speciesSentence() {
//     return `Humans are ${this.species()}`;
//   }

//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.hasJob = false;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(name) {
//     name = name.split(" ");
//     this.firstName = name[0];
//     this.lastName = name[1];
//   }

//   setFirstName(firstName) {
//     this.firstName = this.firstName;
//   }
//   setLastName(lastName) {
//     this.lastName = this.lastName;
//   }
// }

//extends and super
//extends use is for inheritance and super is used to invoke parent method in which ever method you use super it will find the same method in parent class and will invoke it

// class Worker extends Person {
//   constructor(firstName, lastName, job) {
//     super(firstName, lastName);
//     this.job = job;
//     this.hasJob = true;
//   }
//   setJob(job) {
//     this.job = job;
//   }
//   getBiography() {
//     const bio = `${this.fullName} is a ${this.job}`.toUpperCase();

//     return bio;
//   }
// }
