// using recursion

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function sortedArrayToBSTRecur(arr, start = 0, end = arr.length - 1) {
  if (start > end) {
    return null;
  }
  let mid = start + Math.floor((end - start) / 2);

  let root = new Node(arr[mid]);

  root.left = sortedArrayToBSTRecur(arr, start, mid - 1);
  root.right = sortedArrayToBSTRecur(arr, mid + 1, end);

  return root;
}

function preOrder(root) {
  if (root === null) {
    return;
  }
  console.log(root.data);
  preOrder(root.left);
  preOrder(root.right);
}

// using Queue
function sortedArrayToBST(arr) {
  let n = arr.length;
  if (n === 0) {
    return null;
  }

  let mid = Math.floor((n - 1) / 2);
  let root = new Node(arr[mid]);

  let q = [{ node: root, range: [0, n - 1] }];
  let frontIndex = 0;
  while (frontIndex < q.length) {
    let front = q[frontIndex];
    let curr = front.node;
    let [s, e] = front.range;
    let index = s + Math.floor((e - s) / 2);

    if (s < index) {
      let midLeft = s + Math.floor((index - 1 - s) / 2);
      let left = new Node(arr[midLeft]);
      curr.left = left;
      q.push({ node: left, range: [s, index - 1] });
    }

    if (e > index) {
      let midRight = index + 1 + Math.floor((e - index - 1) / 2);
      let right = new Node(arr[midRight]);
      curr.right;
      q.push({ node: right, range: [index + 1, e] });
    }
    frontIndex++;
  }
  return root;
}
function insert(root, key) {
  if (root === null) {
    return new Node(key);
  }
  if (root.key === key) return root;
  if (key < root.key) {
    root.left = insert(root.left, key);
  } else if (key > root.key) {
    root.right = insert(root.right, key);
  }
  return root;
}
// iteratively
function insertIteratively(root, x) {
  const temp = new Node(x);
  if (root === null) {
    return temp;
  }
  let parent = null;
  let curr = root;
  while (curr !== null) {
    parent = curr;
    if (curr.key > x) {
      curr = curr.left;
    } else if (curr.key < x) {
      curr = curr.right;
    } else {
      return root;
    }
  }
  if (parent.key > x) {
    parent.left = temp;
  } else {
    parent.right = temp;
  }
  return root;
}

function getSuccessor(curr) {
  curr = curr.right;
  while (curr !== null && curr.left !== null) {
    curr = curr.left;
  }
  return curr;
}
function deleteNode(root, element) {
  if (root === null) {
    return root;
  }

  if (root.key > element) {
    root.left = deleteNode(root.left, element);
  } else if (root.key < element) {
    root.right = deleteNode(root.right, element);
  } else {
    // cases if root has 0 or 1 child
    if (root.left === null) {
      return root.right;
    }
    if (root.right === null) {
      return root.left;
    }

    // when both children are present
    let successor = getSuccessor(root);
    root.key = successor.key;
    root.right = deleteNode(root.right, successor.key);
  }
  return root;
}
