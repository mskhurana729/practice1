// Quicksort

// first part  partitioning
class SortableArray {
  constructor(array) {
    this.array = array;
  }
  partition(leftPointer, rightPointer) {
    const pivotIndex = rightPointer;
    const pivot = this.array[pivotIndex];
    rightPointer--;
    while (true) {
      while (this.array[leftPointer] < pivot) {
        leftPointer++;
      }
      while (this.array[rightPointer] > pivot) {
        rightPointer--;
      }
      if (leftPointer >= rightPointer) {
        break;
      } else {
        [this.array[leftPointer], this.array[rightPointer]] = [
          this.array[rightPointer],
          this.array[leftPointer],
        ];
        leftPointer++;
      }
    }
    [this.array[leftPointer], this.array[pivotIndex]] = [
      this.array[pivotIndex],
      this.array[leftPointer],
    ];
    return leftPointer;
  }
  quickSort(leftIndex, rightIndex) {
    if (rightIndex - leftIndex <= 0) {
      return;
    }
    const pivotIndex = this.partition(leftIndex, rightIndex);
    this.quickSort(leftIndex, pivotIndex - 1);
    this.quickSort(pivotIndex + 1, rightIndex);
  }
  quickSelect(kthLowestValue, leftIndex, rightIndex) {
    if (rightIndex - leftIndex <= 0) {
      return this.array[leftIndex];
    }
    const pivotIndex = this.partition(leftIndex, rightIndex);
    if (kthLowestValue < pivotIndex) {
      return this.quickSelect(kthLowestValue, leftIndex, pivotIndex - 1);
    } else if (kthLowestValue < pivotIndex) {
      return this.quickSelect(kthLowestValue, pivotIndex + 1, rightIndex);
    } else {
      return this.array[pivotIndex];
    }
  }
}
function hasDuplicateValue(arr) {
  arr.sort((a, b) => a - b);
  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] === arr[index + 1]) {
      return true;
    }
  }
  return false;
}

// exercise

// 1.
function getGreatestProductOfThreeNumbers(arr) {
  arr.sort((a, b) => a - b);
  lastIndex = arr.length - 1;
  return arr[lastIndex] * arr[lastIndex - 1] * arr[lastIndex - 2];
}
function getMissingNumber(arr) {
  arr.sort((a, b) => a - b);
  for (let index = 0; index < arr.length; index++) {
    if (index !== arr[index]) {
      return index;
      b;
    }
  }
}
