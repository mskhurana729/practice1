const server = {
  people: [
    {
      name: 'Odin',
      age: 20,
    },
    {
      name: 'Thor',
      age: 35,
    },
    {
      name: 'Freyja',
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};

// function getPersonInfo(name) {
//   return server.getPeople().then((people) => {
//     return people.find((person) => {
//       return [person.name === name];
//     });
//   });
// }

// function getPersonsInfo(name) {
//   return server.getPeople().then((people) => {
//     return people.find((person) => {
//       return person.name === name;
//     });
//   });
// }

// The async keyword
// The async keyword is what lets the JavaScript engine know that you are declaring an asynchronous function. This is required to use await inside any function. When a function is declared with async, it automatically returns a promise; returning in an async function is the same as resolving a promise. Likewise, throwing an error will reject the promise.

// An important thing to understand is async functions are just syntactical sugar for promises.

// But there is another way: the mighty try/catch block! If you want to handle the error directly inside the async function, you can use try/catch with async/await syntax. If JavaScript throws an error in the try block, the catch block code will run instead (this can also be used for synchronous code).

async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find((person) => {
      return person.name === name;
    });
    return person;
  } catch (e) {
    console.log(e);
  }
}
