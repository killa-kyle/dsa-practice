class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    console.log(this.length, newNode);
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    // const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
  peek() {
    console.log("Next in Line:", this.first);
    return this.first;
  }
}
const myQueue = new Queue();
myQueue.enqueue("Abby");
myQueue.enqueue("Brian");
myQueue.enqueue("Charles");
myQueue.enqueue("David");
console.log(myQueue);
myQueue.peek();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
console.log(myQueue);

module.exports = Queue