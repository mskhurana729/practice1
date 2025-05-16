import Node from './node_modules/mskhurana-doublylinkedlistnode/doublyLinkedListNode.js';

class DoublyLinkedList {
  constructor(firstNode = null, lastNode = null) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.firstNode) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      newNode.previousNode = this.lastNode;
      this.lastNode.nextNode = newNode;
      this.lastNode = newNode;
    }
  }
  popHead() {
    const poppedNode = this.firstNode;
    this.firstNode = this.firstNode.nextNode;
    this.firstNode.previousNode = null;
    return poppedNode;
  }
  printInReverse() {
    let currentNode = this.lastNode;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.previousNode;
    }
  }
}

export default DoublyLinkedList;
