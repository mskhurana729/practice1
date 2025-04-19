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

//sampling

function sample() {
  let bestCandidate,
    bestDistance = 0;
  for (let i = 0; i < numCandidates; ++i) {
    var c = [Math.random() * width, Math.random() * height],
      d = distance(findClosest(samples, c), c);
    if (d > bestDistance) {
      bestDistance = d;
      bestCandidate = c;
    }
  }
  return bestCandidate;
}

// As I explained the algorithm above, I will let the code stand on its own. (And the purpose of this essay is to let you study code through visualization, besides.) But I will clarify a few details:

// The external numCandidates defines the number of candidates to create per sample. This parameter lets you trade-off speed with quality. The lower the number of candidates, the faster it runs. Conversely, the higher the number of candidates, the better the sampling quality.

// The distance function is simple geometry:

// function distance(a, b) {
//   var dx = a[0] - b[0],
//       dy = a[1] - b[1];
//   return Math.sqrt(dx * dx + dy * dy);
// }
// You can omit the sqrt here, if you want, since it’s a monotonic function and doesn’t change the determination of the best candidate.
// The findClosest function returns the closest sample to the current candidate. This can be done by brute force, iterating over every existing sample. Or you can accelerate the search, say by using a quadtree. Brute force is simple to implement but very slow (quadratic time, in O-notation). The accelerated approach is much faster, but more work to implement.

// Speaking of trade-offs: when deciding whether to use an algorithm, we evaluate it not in a vacuum but against other approaches. And as a practical matter it is useful to weigh the complexity of implementation — how long it takes to implement, how difficult it is to maintain — against its performance and quality.

// shuffling

// The Fisher–Yates shuffle is an optimal shuffling algorithm. Not only is it unbiased, but it runs in linear time, uses constant space, and is easy to implement.

function shuffle(array) {
  var n = arr,
    length,
    t,
    i;
  while (n) {
    i = (Math.random() * n--) | 0;
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }
  return array;
}

function quicksort(array, left, right) {
  if (left < right - 1) {
    var pivot = (left + right) >> 1; //>>means dividing by 2
    pivot = partition(array,left,right,pivot);
    quicksort(array,left,pivot);
    quicksort(array,pivot+1,right);
  }
}

function partition(array,left,right,pivot){
  var pivotValue = array[pivot];
  swap(array,pivot,--right);
  for(var i = left;i<right;++1){
    if(array[i]<pivotValue){
      swap(array,i,left);
    }
  }
  swap(array,left,right);
  return left;
}
