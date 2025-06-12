class Heap {
  constructor() {
    this.data = [];
  }
  rootNode() {
    return this.data[0];
  }
  lastNode() {
    return this.data[this.data.length - 1];
  }
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  rightChildIndex(index) {
    return index * 2 + 2;
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  insert(value) {
    this.data.push(value);
    let newNodeIndex = this.data.length - 1;
    while (
      newNodeIndex > 0 &&
      this.data[newNodeIndex] > this.data[this.parentIndex(newNodeIndex)]
    ) {
      const parentIndex = this.parentIndex(newNodeIndex);
      [this.data[parentIndex], this.data[newNodeIndex]] = [
        this.data[newNodeIndex],
        this.data[parentIndex],
      ];
      newNodeIndex = parentIndex;
    }
  }
  pop() {
    if (this.data.length === 1) {
      const valueToDelete = this.rootNode();
      this.data = [];
      return valueToDelete;
    }
    const valueToDelete = this.rootNode();
    this.data[0] = this.data.pop();
    let trickleNodeIndex = 0;
    while (this.hasGreaterChild(trickleNodeIndex)) {
      const largerChildIndex = this.findLargerChildIndex(trickleNodeIndex);
      [this.data[trickleNodeIndex], this.data[largerChildIndex]] = [
        this.data[largerChildIndex],
        this.data[trickleNodeIndex],
      ];
      trickleNodeIndex = largerChildIndex;
    }
    return valueToDelete;
  }
  hasGreaterChild(index) {
    return (
      (this.leftChildIndex(index) < this.data.length &&
        this.data[this.leftChildIndex(index)] > this.data[index]) ||
      (this.rightChildIndex(index) < this.data.length &&
        this.data[this.rightChildIndex(index)] > this.data[index])
    );
  }
  findLargerChildIndex(index) {
    if (!this.data[this.rightChildIndex(index)]) {
      return this.leftChildIndex(index);
    }
    if (
      this.data[this.rightChildIndex(index)] >
      this.data[this.leftChildIndex(index)]
    ) {
      return this.rightChildIndex(index);
    } else {
      return this.leftChildIndex(index);
    }
  }
}
