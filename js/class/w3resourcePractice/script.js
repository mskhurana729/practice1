// Person Class with Details

// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

//solution

// class Person {
//   constructor(name, age, country) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }
//   displayPersonDetails() {
//     console.log(this.name, this.age, this.country);
//   }
// }

// const p1 = new Person("john", 44, "India");
// const p2 = new Person("Jack", 43, "Canada");
// p1.displayPersonDetails();
// p2.displayPersonDetails();

// Rectangle Class with Area and Perimeter

// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   area() {
//     let area = this.height * this.width;
//     console.log(area);
//   }
//   parameter() {
//     let parameter = 2 * (this.height + this.width);
//     console.log(parameter);
//   }
// }

// const r1 = new Rectangle(10, 20);
// r1.area();
// r1.parameter();

// 3. Vehicle and Car Classes with Inheritance

// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

//solution

// class Vehicle {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   displayDetails() {
//     console.log(this.make, this.year, this.model);
//   }
// }
// class Car extends Vehicle {
//   constructor(make, year, model, noOfDoors) {
//     super(make, year, model);
//     this.noOfDoors = noOfDoors;
//   }
//   displayDetails() {
//     console.log(this.make, this.year, this.model, this.noOfDoors);
//   }
// }

// 4. BankAccount Class with Deposit and Withdrawal

// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

// class BankAccount {
//   constructor(accountNo, balance) {
//     this.accountNo = accountNo;
//     this.balance = balance;
//   }
//   deposit(value) {
//     this.balance += value;
//   }
//   withdraw(value) {
//     this.balance -= value;
//   }
// }

// const b1 = new BankAccount(123, 3333);
// b1.deposit(2);
// console.log(b1.balance);
// b1.withdraw(10);
// console.log(b1.balance);

// 5. Shape, Circle, and Triangle Classes with Area Calculation

// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

// Solution

// class Shape {
//   area() {}
// }
// class Circle extends shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }
//   area() {
//     return 3.14 * this.radius * this.radius;
//   }
// }
// class Triangle extends shape {
//   constructor(base, height) {
//     super();
//     this.base = base;
//     this.height = height;
//   }
//   area() {
//     return 0.5 * this.base * this.height;
//   }
// }

// 6. Employee and Manager Classes with Salary Calculation

// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

//solution

// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
//   annualSalary() {
//     return this.salary * 12;
//   }
// }
// class Manager {
//   constructor(name, salary, department) {
//     super(name, salary);
//     this.department = department;
//   }
//   annualSalary(bonus = 500) {
//     let annualSalary = 12 * salary + bonus;
//     return annualSalary;
//   }
// }
