import DoublyLinkedList from './node_modules/mskhurana-doublylinkedlist/doublyLinkedList.js';
import Node from 'mskhurana-doublylinkedlistnode';

class Queue {
  constructor() {
    this.data = new DoublyLinkedList();
  }
  enqueue(element) {
    this.data.append(element);
  }
  dequeue() {
    const dequeueNode = this.data.popHead();
    return dequeueNode.data;
  }
  read() {
    if (!this.data.firstNode) {
      return null;
    }
    return this.data.firstNode.data;
  }
}
// let node1 = new Node('hello');
// let node2 = new Node('hell1');
let queue1 = new Queue();
queue1.enqueue('hell1');
queue1.enqueue('hello');
console.log(queue1.read());
console.log(queue1.dequeue());
console.log(queue1.read());
