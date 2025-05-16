import Node from './node_modules/mskhurana-node/node.js';

class LinkedList {
  constructor(firstNode = null) {
    this.firstNode = firstNode;
  }
  read(index) {
    let currentNode = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
      if (!currentNode) {
        return null;
      }
    }
    return currentNode.data;
  }

  search(value) {
    let currentNode = this.firstNode;
    let currentIndex = 0;
    while (true) {
      if (currentNode.data === value) {
        return currentIndex;
      }
      currentNode = currentNode.nextNode;
      if (!currentNode) {
        break;
      }
      currentIndex++;
    }
    return null;
  }
  insert(index, value) {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.nextNode = this.firstNode;
      return;
    }
    let currentNode = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    newNode.nextNode = currentNode.newNode;
    currentNode.nextNode = newNode;
  }
  delete(index) {
    if (index === 0) {
      this.firstNode = this.firstNode.nextNode;
      return;
    }
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    const nodeAfterDeletedNode = currentNode.nextNode.nextNode;
    currentNode.nextNode = nodeAfterDeletedNode;
  }
  printAll() {
    let currentNode = this.firstNode;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.nextNode;
    }
  }
  printLastElement() {
    let currentNode = this.firstNode;
    while (currentNode) {
      if (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      } else {
        console.log(currentNode);
        break;
      }
    }
  }
  // we want to write a function which reverses the list.
  // like if the list is a,b,c it should turn out to be c,b,a
  /*
first we will recurse to go at last node and by using argument option we will pass the previous node
then after we reach the last node we will set nextNode to previous node

*/
  reverseList(currentNode = this.firstNode, previousNode = null) {
    if (currentNode.nextNode) {
      this.reverseList(currentNode.nextNode, currentNode);
    } else {
      this.firstNode = currentNode;
    }
    currentNode.nextNode = previousNode;
  }
}
let node1 = new Node('a');
let node2 = new Node('b');
let node3 = new Node('c');
node1.nextNode = node2;
node2.nextNode = node3;

let list1 = new LinkedList(node1);
list1.printAll();
console.log(list1);
list1.reverseList();
list1.printAll();
console.log(list1);
console.log(list1.read(2));
