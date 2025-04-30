class Stack {
  constructor() {
    this.data = [];
  }
  push(element) {
    this.data.push(element);
  }
  pop() {
    if (this.data.length > 0) {
      return this.data.pop();
    } else {
      return null;
    }
  }
  read() {
    if (this.data.length > 0) {
      return this.data[this.data.length - 1];
    } else {
      return null;
    }
  }
}
export default Stack;
