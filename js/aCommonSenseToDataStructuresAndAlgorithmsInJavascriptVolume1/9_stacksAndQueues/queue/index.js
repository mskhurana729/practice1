class Queue {
  constructor() {
    this.data = [];
  }
  enqueue(element) {
    this.data.push(element);
  }
  dequeue() {
    if (this.data.length > 0) {
      return this.data.shift();
    } else {
      return null;
    }
  }
  read() {
    if (this.data.length > 0) {
      return this.data[0];
    } else {
      return null;
    }
  }
}
export default Queue;
