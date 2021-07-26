// hashtables.js
// {} JS Objects

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let hashIndex = this._hash(key);
    if (!this.data[hashIndex]) {
      // console.log("set:", [key, value] + " at " + hashIndex);
      this.data[hashIndex] = [];
    }
    this.data[hashIndex].push([key, value]);
    // console.log(this.data);
  }
  get(key) {
    let hashIndex = this._hash(key);
    let currentBucket = this.data[hashIndex];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          console.log("get: " + "'" + key + "' - " + currentBucket[i][1]);
          return currentBucket[i][1];
        }
      }
    } else {
    //   console.log("couldn't find " + key);
      return undefined;
    }
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}
// console.clear();
// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// myHashTable.set("apples", 500);
// myHashTable.set("oranges", 456);

// myHashTable.get("grapes");
// myHashTable.get("apples");
// myHashTable.get("bananas");
// console.log(myHashTable.keys());



module.exports = HashTable