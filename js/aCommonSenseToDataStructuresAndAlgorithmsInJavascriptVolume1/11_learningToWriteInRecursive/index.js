// there are different categories of problems in recursion, once you know the category you can use an effective technique to solve that problem.

// 1. this is the easiest category in this the goal of the algorithm is was to repeatedly execute a task
// the effective way to solve this category is that we know "that our last line will be the recursive call".

// write a function which will return a double array

function doubleArray(array, index = 0) {
  if (index >= array.length) {
    return;
  }
  array[index] *= 2;
  doubleArray(array, index + 1);
}

// 2. Recursive category: calculations

// factorial function using loop

function factorial(num) {
  let product = 1;
  for (let n = 1; n <= num; n++) {
    product *= num;
  }
  return product;
}

// using recursion
function factorial2(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// there are two approaches to solve these categories
// 1. we can try to build the solution from bottom-up
// 2. attack the problem going top-down by making calculation on the subproblem

// factorial function using recursion and bottom up

function factorial3(n, i = 1, product = 1) {
  if (i > n) {
    return product;
  }
  return factorial(n, i + 1, product * i);
}

// recursion shine when its top-down
// the top down thought process
// 1. Imagine that the function you are writing has already been written by somebody else.
// 2. Identify the subproblem of the problem.
// 3. See what happens when you call the function on the subproblem and go from there.

// array sum

function sum(array) {
  if (array.length === 0) {
    return 0;
  }
  //   if (array.length === 1) { //we don't need this base case ass arr.slice(1) will eventually return an empty arr
  //     return array[0];
  //   }
  return array[0] + sum(array.slice(1));
}

// string reversal

function reverse(str) {
  if (str.length === 0) {
    return '';
  }
  return reverse(str.slice(1)) + str[0];
}

// counting x
function countX(str) {
  if (str.length === 0) {
    return 0;
  }
  if (str[0] === 'x') {
    return 1 + countX(str.slice(1));
  } else {
    return countX(str.slice(1));
  }
}

// staircase problem

function noOfPaths(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0 || n === 1) {
    return 1;
  }
  return noOfPaths(n - 1) + noOfPaths(n - 2) + noOfPaths(n - 3);
}

// anagram generation
function anagramsOf(str) {
  if (str.length === 1) {
    return [str[0]];
  }
  const collection = [];
  const substringAnagrams = anagramsOf(str.slice(1));
  for (const substringAnagram of substringAnagrams) {
    for (let index = 0; index <= substringAnagram.length; index++) {
      const newString =
        substringAnagram.slice(0, index) +
        str[0] +
        substringAnagram.slice(index);
      collection.push(newString);
    }
  }
  return collection;
}
// exercise

// write a function which returns number of characters across all the strings in an array
function noOfChar(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0].length + noOfChar(arr.slice(1));
}
console.log(noOfChar(['abc', 'de', 'gfhi']));

// write a function that accepts an array of numbers and return an array containing only even no

function getEvenNumbers(arr, evenNumberArray = []) {
  if (arr.length === 0) {
    return evenNumberArray;
  }
  if (arr[0] % 2 === 0) {
    evenNumberArray.push(arr[0]);
  }
  return getEvenNumbers(arr.slice(1), evenNumberArray);
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 7]));

// write a function which accepts a number of n and returns the correct number from the triangle series

function getTriangleSeriesNumber(index, n = 1, number = 1) {
  if (n === index) {
    return number;
  }
  return getTriangleSeriesNumber(index, n + 1, (number += n + 1));
}
console.log(getTriangleSeriesNumber(9));

// or

function triangle(n) {
  if (n === 1) {
    return 1;
  }
  return n + triangle(n - 1);
}

// return the first index of char x in a str

function getIndexOfFirstX(str, index = 0) {
  if (str.length === 0) {
    return;
  }
  if (str[0] === 'x') {
    return index;
  }
  return getIndexOfFirstX(str.slice(1), ++index);
}
console.log(getIndexOfFirstX('abvcdx'));

// can also write it as

function indexOfX(str) {
  if (str[0] === 'x') {
    return 0;
  }
  return indexOfX(str.slice(1) + 1);
}

//write a function which solves unique paths problem. write a function that accepts a number of rows and a number of columns and calculate the number of possible 'shortest' paths from the upper left most square to the lower rightmost square

function getNumberOfShortestPaths(rows, columns) {
  if (rows === 1 || columns === 1) {
    return 1;
  }
  return (
    getNumberOfShortestPaths(rows - 1, columns) +
    getNumberOfShortestPaths(rows, columns - 1)
  );
}

console.log(getNumberOfShortestPaths(3, 2));
