// recursive functions that finds the greatest number from an array.
function max(arr) {
  if (arr.length === 0) {
    return null;
  }
  if ((arr, length === 1)) {
    return arr[0];
  }
  if (arr[0] > max(arr.slice(1))) {
    return arr[0];
  } else {
    return max(arr.slice(1));
  }
}
// this functions runs in exponential big O

// to fix it

function max2(arr) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.length === 1) {
    return arr[0];
  }

  maxOfRemainder = max2.slice(1);

  if (arr[0] > maxOfRemainder) {
    return arr[0];
  } else {
    return maxOfRemainder;
  }
}

//simple recursive fib function

function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}

//Dynamic programming through memoization

// Memoization reduces recursive calls by remembering previously computed functions.

// implementing memoization in fib function

function fib(n, memo = {}) {
  if (n === 0 || n === 1) {
    return n;
  }
  if (!memo[n]) {
    memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
  }
  return memo[n];
}

// Dynamic programming through going bottom up
// it basically means using loops instead of recursion

// bottom-up fibonacci
function fib(n) {
  if (n === 0) {
    return 0;
  }
  let a = 0;
  let b = 1;
  for (let i = 1; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

// exercise

function addUntil100(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumOfRemainderArr = addUntil100(arr.slice(1));
  if (arr[0] + sumOfRemainderArr > 100) {
    return sumOfRemainderArr;
  } else {
    return arr[0] + sumOfRemainderArr;
  }
}

// 2.
function golomb(n, memo = {}) {
  if (n === 1) {
    return 1;
  }
  if (!memo[n]) {
    memo[n] = 1 + golomb(n - golomb(golomb(n - 1), memo));
  }
  return memo[n];
}

// 3.

function uniquePaths(rows, columns, memo = {}) {
  if (rows === 1 || columns === 1) {
    return 1;
  }
  if (!memo[n]) {
    memo[n] =
      uniquePaths(rows - 1, columns, memo) +
      uniquePaths(rows, columns - 1, memo);
  }
  return memo[n];
}
