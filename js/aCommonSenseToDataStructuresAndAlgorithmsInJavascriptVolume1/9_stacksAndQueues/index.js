import Stack from './node_modules/mskhurana-stack/index.js';
import Queue from './node_modules/mskhurana-queue/index.js';

// stack-based code linter

class Linter {
  constructor() {
    this.stack = new Stack();
  }
  lint(text) {
    while (this.stack.read()) {
      this.stack.pop();
    }
    const matchingBraces = { '(': ')', '[': ']', '{': '}' };

    for (const char of text) {
      if (matchingBraces[char]) {
        this.stack.push(char);
      } else if (Object.values(matchingBraces).includes(char)) {
        if (!this.stack.read()) {
          return `${char} does not have opening brace`;
        } else {
          const poppedOpeningBrace = this.stack.pop();
          if (char !== matchingBraces[poppedOpeningBrace]) {
            return `${char} has mismatched opening brace`;
          }
        }
      }
      if (this.stack.read()) {
        return `${this.stack.read()} does not have a closing brace`;
      }
      return true;
    }
  }
}

// javascript interface for printer that can accept printing jobs from various computers across network.
class PrintManager {
  constructor() {
    this.queue = new Queue();
  }
  queuePrintJob(document) {
    this.queue.enqueue(document);
  }
  run() {
    while (this.queue.read()) {
      this.printDocument(this.queue.dequeue());
    }
  }
  printDocument(document) {
    //code to run the actual printer goes here
    //for demo purposes, we will print to the terminal
    console.log(document);
  }
}

//Write a function that uses a stack to reverse a string

function reverseStr(str) {
  let stack = new Stack();
  let reverseString = [];
  for (const char of str) {
    stack.push(char);
  }
  while (stack.read()) {
    reverseString.push(stack.pop());
  }
  return reverseString.join('');
}

console.log(reverseStr('max'));
