// function with loop

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
// same function recursively
function countDownRecursively(number) {
  console.log(number);
  if (number <= 0) {
    return;
  } else {
    countDownRecursively(number - 1);
  }
}

//factorial function

function factorial(number) {
  if (number <= 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

//filesystem traversal
// lets create a simple script that prints the names of all subdirectories within a given directory

// import { readdirSync, lstatSync } from 'js';
// import path, { join } from 'path';
// function printSubDirectories(directoryName) {
//   for (const filename of readdirSync(directoryName)) {
//     const pathName = join(directoryName, filename);
//     if (lstatSync(pathName).isDirectory()) {
//       console.log(pathName);
//       printSubDirectories(pathName);
//     }
//   }
// }

// write a function which prints all the numbers in array containing both numbers and array of numbers

function printNumbers(arr) {
  arr.forEach((value) => {
    if (Array.isArray(value)) {
      printNumbers(value);
    } else {
      console.log(value);
    }
  });
}
printNumbers([1, [2, 3], 4, 5, [99, 200], 5, 4]);
