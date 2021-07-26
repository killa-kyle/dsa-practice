console.clear();
// Stacks
// implemented w/ arrays or linked lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// // linked list stack
class StackLinkedList {
  constructor(value) {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // see top item in stack
  peek() {
    console.log("peek:", this.top);
    return this.top;
  }
  // add to top of stack
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const oldTop = this.top;
      this.top = newNode;
      this.top.next = oldTop;
    }
    this.length++;
    return this;
  }
  // remove from top of stack
  pop() {
    if (!this.length) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    const newTop = this.top.next;
    this.top = newTop;
    this.length--;
    console.log(this);
  }
  // check if stack is empty
  isEmpty() {
    if (this.length < 1) {
      return true;
    }
    return false;
  }
  printStack() {
    const array = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
}

// stack implement w arrays
class Stack {
  constructor() {
    this.array = [];
  }
  // see top item in stack
  peek() {
    const topItem = this.array[this.array.length - 1];
    console.log("peek:", topItem);
    return topItem;
  }
  // add to top of stack
  push(value) {
    this.array.push(value);
    return this.array[this.array.length - 1];
  }
  // remove from top of stack
  pop() {
    this.array.pop();

    console.log(this);
  }
  // check if stack is empty
  isEmpty() {
    if (this.length < 1) {
      return true;
    }
    return false;
  }
  printStack() {
    console.log(this.array);
    return this.array;
  }
}
const myStack = new Stack();
myStack.push("Google");
myStack.printStack();
myStack.push("Udemy");
myStack.printStack();

myStack.push("Discord");

myStack.printStack();
myStack.peek();
// myStack.pop();
// myStack.pop();
// myStack.pop();
console.log("after pops", myStack.printStack());
console.log(myStack);
// Queues
// linked Lists O(1) - not arrays because O(n) shifting

module.exports = Stack