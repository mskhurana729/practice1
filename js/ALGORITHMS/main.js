function binarySearch(arr, target) {
  let min = 0,
    max = arr.length - 1;
  console.log(max);

  while (max >= min) {
    let guess = Math.floor((min + max) / 2);
    if (arr[guess] === target) {
      return guess;
    }
    if (arr[guess] < target) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
}
let arr = [1, 3, 5, 6, 7, 81, 11];

function linearSearchForOrderedArray(arr, searchValue) {
  for (const [index, element] of arr.entries()) {
    if (element === searchValue) {
      return index;
    } else if (element > searchValue) {
      break;
    }
  }
  return null;
}
console.log(linearSearchForOrderedArray(arr, 4));

//BUBBLE SORT

function bubbleSort(arr) {
  let unsortedTillIndex = arr.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < unsortedTillIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
    --unsortedTillIndex;
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowestNumberIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        lowestNumberIndex = j;
      }
    }
    if (lowestNumberIndex !== i) {
      [arr[i], arr[lowestNumberIndex]] = [arr[lowestNumberIndex], arr[i]];
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let tempValue = arr[i];
    let position = i - 1;
    while (position >= 0) {
      if (arr[position] > tempValue) {
        arr[position + 1] = arr[position];
        position--;
      } else {
        break;
      }
    }
    arr[position + 1] = tempValue;
  }
  return arr;
}
console.log(bubbleSort([4, 2, 3, 1, 7]));
