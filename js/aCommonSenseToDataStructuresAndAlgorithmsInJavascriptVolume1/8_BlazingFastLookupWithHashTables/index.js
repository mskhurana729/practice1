// 1.
let menu = [
  ['french fries', 0.75],
  ['hamburger', 2.5],
  ['hot dog', 1.5],
  ['soda', 0.6],
];

let menu2 = { 'french fries': 0.75, hamburger: 2.5, 'hot dog': 1.5, soda: 0.6 };
let menu3 = {};
menu3['bad'] = 4;
menu3['dab'] = 5;
menu3['ss'] = 4;
console.log(menu3);

function statusCodeMeaning(number) {
  if (number === 200) {
    return 'OK';
  } else if (number === 301) {
    return 'Moved Permanently';
  } else if (number === 401) {
    return 'Unauthorized';
  } else if (number === 404) {
    return 'Not Found';
  } else if (number === 500) {
    return 'Internal Server Error';
  }
}

const statusCodes = {
  200: 'Ok',
  301: 'Moved Permanently',
  401: 'Unauthorized',
  404: 'Not Found',
  500: 'Internal Server Error',
};

function statusCodeMeaning2(number) {
  return statusCodes[number];
}

//to make an array lookup constant O(1) convert the array into hash table and assign each element of the array a value.
const array = [1, 4, 5, 2, 3];
const hashTable = { 1: true, 2: true, 3: true, 4: true, 5: true };
console.log(hashTable[5]);

//Array subset

function subset(array1, array2) {
  let foundMatch;
  let largerArray;
  let smallerArray;
  if (array1.length > array2.length) {
    largerArray = array1;
    smallerArray = array2;
  } else {
    largerArray = array2;
    smallerArray = array1;
  }
  for (const i of smallerArray) {
    foundMatch = false;
    for (const j of largerArray) {
      if (i === j) {
        foundMatch = true;
        break;
      }
    }
    if (!foundMatch) {
      return false;
    }
  }
  return true;
}

//efficiency of this function is O(n*m) where n and m are no of elements in the arrays

// lets make it efficient using hash tables

function isSubset(array1, array2) {
  const hashTable = {};
  let largerArray;
  let smallerArray;
  if (array1.length > array2.length) {
    largerArray = array1;
    smallerArray = array2;
  }
  for (const value of largerArray) {
    hashTable[value] = true;
  }
  for (const value of smallerArray) {
    if (!hashTable[value]) {
      return false;
    }
  }
  return true;
}

//Write a function which returns the intersection of two arrays

//so we want to write a function which will return intersection of two arrays which means it will return a new array with the elements which are present in both the given arrays.
// first we will initialize a new array named intersection
// we will create a hash table and will but array1 elements inside it using for of loop
// then we will run a for of loop on array 2 and will check which elements are of it are present in the hash table
// and if the element is present in the hash table we will push the element in the new array3 using push function
// in last we will return the array

function intersectionOfArrays(array1, array2) {
  let intersectionArray = [];
  let hashTable = {};
  for (const value of array1) {
    hashTable[value] = true;
  }
  for (const value of array2) {
    if (hashTable[value]) {
      intersectionArray.push(value);
    }
  }
  return intersectionArray;
}
console.log(intersectionOfArrays([1, 3, 4, 5, 56], [3, 4, 33, 56, 4444]));

//write a function which will return the first duplicate value

// to create this function we will convert the array into a hash table and then while converting into hash table we will check if the element is already present or not

function findDuplicate(array) {
  let hashTable = {};
  for (const value of array) {
    if (hashTable[value]) {
      return value;
    }
    hashTable[value] = true;
  }
  return 'no duplicate';
}
console.log(findDuplicate([1, 2, 3, 3, 4, 4, 5, 5]));

//Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing letter.
// first we will remove the spaces from the string and will convert the string into array using split function
// then we will create an array containing all the alphabets
// then we will create an hash table containing all the elements of the string array
// then we will check which element of the alphabet array is not present in the hash table and will return that element;

function missingAlphabet(str) {
  let strArray = str.replace(/\s/g, '').toUpperCase().split('');
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let hashTable = {};
  for (const value of strArray) {
    hashTable[value] = true;
  }
  for (const value of alphabet) {
    if (!hashTable[value]) {
      return value;
    }
  }
}
console.log(missingAlphabet('the quick brown box jumps over a lazy dog'));
// console.log('the quick brown box'.split(''));

// Write a function that returns the first non-duplicated character in a string.
// so we want to write a function which returns first letter which is only once in the string like n in minimum and the running time should be O(n) for this function, we know that we have to use hash table to do this.
//first thing is we want to know which letter only came once in the string
// ok to get non repeated letters we will start by assigning all letters a value and will create a condition which will check if that letter is already present in the hash table or not if it is present we will push that letter to repeated array.
// once we know all the repeated letters, we will search in that array which letters are missing and we will return the first one.

// then we want to know from those elements which one came first.

function nonDuplicatedCharacter(str) {
  let strArr = str.split('');
  let hashTable = {};

  for (const value of strArr) {
    if (hashTable[value]) {
      hashTable[value]++;
    } else {
      hashTable[value] = 1;
    }
  }

  for (const value of strArr) {
    if (hashTable[value] === 1) {
      return value;
    }
  }
}
console.log(nonDuplicatedCharacter('minimum'));
