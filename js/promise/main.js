// function add(xPromise, yPromise) {
//   return Promise.all([xPromise, yPromise]).then(function (values) {
//     return values[0] + values[1];
//   });
// }

// add(fetchX(), fetchY()).then(
//   function sum() {
//     console.log(sum);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// // Note: The Promise resolution "events" we listen for aren't strictly events (though they certainly behave like events for these purposes), and they're not typically called "completion" or "error". Instead, we use then(..) to register a "then" event. Or perhaps more precisely, then(..) registers "fulfillment" and/or "rejection" event(s), though we don't see those terms used explicitly in the code.

// function foo(x) {
//   //some code

//   return new Promise(function (resolve, reject) {
//     //code
//   });
// }

// var p = foo(42);

// bar(p);
// baz(p);

// // As such, it was decided that the way to recognize a Promise (or something that behaves like a Promise) would be to define something called a "thenable" as any object or function which has a then(..) method on it. It is assumed that any such value is a Promise-conforming thenable.

// // The general term for "type checks" that make assumptions about a value's "type" based on its shape (what properties are present) is called "duck typing" -- "If it looks like a duck, and quacks like a duck, it must be a duck" (see the Types & Grammar title of this book series). So the duck typing check for a thenable would roughly be:

// if (
//   p !== null &&
//   (typeof p === 'object' || typeof p === 'function') &&
//   typeof p.then === 'function'
// ) {
//   // assume it's a thenable!
// } else {
//   // not a thenable
// }

// // But what if the Promise itself never gets resolved either way? Even that is a condition that Promises provide an answer for, using a higher level abstraction called a "race":
// // a utility for timing out a Promise
// function timeoutPromise(delay) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       reject('Timeout!');
//     }, delay);
//   });
// }

// // setup a timeout for `foo()`
// Promise.race([
//   foo(), // attempt `foo()`
//   timeoutPromise(3000), // give it 3 seconds
// ]).then(
//   function () {
//     // `foo(..)` fulfilled in time!
//   },
//   function (err) {
//     // either `foo()` rejected, or it just
//     // didn't finish in time, so inspect
//     // `err` to know which
//   }
// );

// // But there's something much bigger at play here. If at any point in the creation of a Promise, or in the observation of its resolution, a JS exception error occurs, such as a TypeError or ReferenceError, that exception will be caught, and it will force the Promise in question to become rejected.

// // For example:
// var p = new Promise(function (resolve, reject) {
//   foo.bar(); // `foo` is not defined, so error!
//   resolve(42); // never gets here :(
// });

// p.then(
//   function fulfilled() {
//     // never gets here :(
//   },
//   function rejected(err) {
//     // `err` will be a `TypeError` exception object
//     // from the `foo.bar()` line.
//   }
// );

// // So let's say we're calling a foo(..) utility and we're not sure we can trust its return value to be a well-behaving Promise, but we know it's at least a thenable. Promise.resolve(..) will give us a trustable Promise wrapper to chain off of:

// //don't do this
// foo(42).then(function (v) {
//   console.log(v);
// });

// //instead do this

// Promise.resolve(foo(42)).then(function (v) {
//   console.log(v);
// });

// // Every time you call then(..) on a Promise, it creates and returns a new Promise, which we can chain with.
// // Whatever value you return from the then(..) call's fulfillment callback (the first parameter) is automatically set as the fulfillment of the chained Promise (from the first point).
// // Let's first illustrate what that means, and then we'll derive how that helps us create async sequences of flow control. Consider the following:

// var p = Promise.resolve(21);

// var p2 = p.then(function (v) {
//   console.log(v); // 21

//   // fulfill `p2` with value `42`
//   return v * 2;
// });

// // chain off `p2`
// p2.then(function (v) {
//   console.log(v); // 42
// });

// // But it's a little annoying to have to create an intermediate variable p2 (or p3, etc.). Thankfully, we can easily just chain these together:
// var p = Promise.resolve(21);

// p.then(function (v) {
//   console.log(v); // 21

//   // fulfill the chained promise with value `42`
//   return v * 2;
// })
//   // here's the chained promise
//   .then(function (v) {
//     console.log(v); // 42
//   });

// To further the chain illustration, let's generalize a delay-Promise creation (without resolution messages) into a utility we can reuse for multiple steps:
function delay(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

delay(100) // step 1
  .then(function STEP2() {
    console.log('step 2 (after 100ms)');
    return delay(200);
  })
  .then(function STEP3() {
    console.log('step 3 (after another 200ms)');
  })
  .then(function STEP4() {
    console.log('step 4 (next Job)');
    return delay(50);
  })
  .then(function STEP5() {
    console.log('step 5 (after another 50ms)');
  });

//   To be honest, though, sequences of delays with no message passing isn't a terribly useful example of Promise flow control. Let's look at a scenario that's a little more practical.

// Instead of timers, let's consider making Ajax requests:

function request(url) {
  return new Promise(function (resolve, reject) {
    ajax(url, resolve);
  });
}

request('http://some.url.1/')
  .then(function (response1) {
    return request('http://some.url.2/?v=' + response1);
  })
  .then(function (response2) {
    console.log(response2);
  });

//   What if something went wrong in one of the steps of the Promise chain? An error/exception is on a per-Promise basis, which means it's possible to catch such an error at any point in the chain, and that catching acts to sort of "reset" the chain back to normal operation at that point:

// step 1:
request('http://some.url.1/')
  // step 2:
  .then(function (response1) {
    foo.bar(); // undefined, error!

    // never gets here
    return request('http://some.url.2/?v=' + response1);
  })

  // step 3:
  .then(
    function fulfilled(response2) {
      // never gets here
    },
    // rejection handler to catch the error
    function rejected(err) {
      console.log(err); // `TypeError` from `foo.bar()` error
      return 42;
    }
  )

  // step 4:
  .then(function (msg) {
    console.log(msg); // 42
  });

//   Some Promise abstraction libraries provide these, but you could also define them yourself using the mechanics of Promises, race([ .. ]) and all([ .. ]).

// For example, here's how we could define first([ .. ]):
// polyfill-safe guard check
if (!Promise.first) {
  Promise.first = function (prs) {
    return new Promise(function (resolve, reject) {
      // loop through all promises
      prs.forEach(function (pr) {
        // normalize the value
        Promise.resolve(pr)
          // whichever one fulfills first wins, and
          // gets to resolve the main promise
          .then(resolve);
      });
    });
  };
}
5;
