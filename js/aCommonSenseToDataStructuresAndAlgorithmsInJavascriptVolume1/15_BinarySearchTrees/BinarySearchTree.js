import TreeNode from './treeNode.js';
function search(searchValue, node) {
  if (!node || node.value === searchValue) {
    return node;
  }
  if (searchValue < node.value) {
    return search(searchValue, node.leftChild);
  } else {
    return search(searchValue, node.rightChild);
  }
}

function insert(value, node) {
  if (value < node.value) {
    if (!node.leftChild) {
      node.leftChild = new TreeNode(value);
    } else {
      insert(value, node.leftChild);
    }
  } else if (value > node.value) {
    if (!node.rightChild) {
      node.rightChild = new TreeNode(value);
    } else {
      insert(value, node.rightChild);
    }
  }
}

function deleteNode(valueToDelete, node) {
  let currentNode = node;
  let parentOfCurrentNode;
  let childOfDeletedNode;
  let nodeToDelete;
  while (currentNode) {
    if (currentNode.value === valueToDelete) {
      nodeToDelete = currentNode;
      break;
    }
    parentOfCurrentNode = currentNode;
    if (valueToDelete < currentNode.value) {
      currentNode = currentNode.leftChild;
    } else if (valueToDelete > currentNode.value) {
      currentNode = currentNode.rightChild;
    }
  }
  if (!nodeToDelete) {
    return null;
  }
  if (nodeToDelete.leftChild && nodeToDelete.rightChild) {
    replaceWithSuccessorNode(nodeToDelete);
  } else {
    childOfDeletedNode = nodeToDelete.leftChild || nodeToDelete.rightChild;
    if (!parentOfCurrentNode) {
      nodeToDelete.value = childOfDeletedNode.value;
      nodeToDelete.leftChild = childOfDeletedNode.leftChild;
      nodeToDelete.rightChild = childOfDeletedNode.rightChild;
    } else if (nodeToDelete === parentOfCurrentNode.leftChild) {
      parentOfCurrentNode.leftChild = childOfDeletedNode;
    } else if (nodeToDelete === parentOfCurrentNode.rightChild) {
      parentOfCurrentNode.rightChild = childOfDeletedNode;
    }
  }
  return nodeToDelete;
}

function replaceWithSuccessorNode(node) {
  let successorNode = node.rightChild;
  let parentOfSuccessorNode;
  if (!successorNode.left) {
    node.value = successorNode.value;
    node.rightChild = successorNode.rightChild;
    return;
  }
  while (successorNode.leftChild) {
    parentOfSuccessorNode = successorNode;
    successorNode = successorNode.leftChild;
  }
  if (successorNode.rightChild) {
    parentOfSuccessorNode.leftChild = successorNode.rightChild;
  } else {
    parentOfSuccessorNode.leftChild = null;
  }
  node.value = successorNode.value;
  return successorNode;
}

function traverseAndPrint(node) {
  if (!node) {
    return;
  }
  traverseAndPrint(node.leftChild);
  console.log(node.value);
  traverseAndPrint(node.rightChild);
}
