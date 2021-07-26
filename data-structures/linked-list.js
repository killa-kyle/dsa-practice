class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}
// singly linked list
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    let oldHead = this.head;
    newNode.next = oldHead;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }
    // console.log(newNode);
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    // console.log("leader", leader);
    const follower = leader.next;
    // console.log("follower", follower);
    leader.next = newNode;
    newNode.next = follower;

    this.length++;
    return this.length;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const nodeToBeRemoved = leader.next;
    const follower = nodeToBeRemoved.next;

    leader.next = follower;
    this.length--;
  }
  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    console.log("first", first);
    this.tail = this.head;

    let second = first.next;
    console.log("second", second);

    while (second) {
      const temp = second.next;
      // console.log("temp", temp);
      second.next = first;
      // console.log("second", second.next);
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.printList();

myLinkedList.append(5);
myLinkedList.printList();

myLinkedList.append(16);
myLinkedList.printList();

myLinkedList.prepend(1);
myLinkedList.printList();

myLinkedList.insert(1, 99);
myLinkedList.printList();

myLinkedList.reverse();
myLinkedList.printList();
// myLinkedList.remove(2);
// myLinkedList.printList();

console.log(myLinkedList);


LinkedList.fromValues = function(...values){
    const newList = new LinkedList()
    for(let i = values.length; i >= 0; i--){
        newList.prepend([values[i]])
    }
    return newList
}

module.exports = LinkedList;