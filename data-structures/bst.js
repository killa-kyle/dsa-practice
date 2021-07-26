// Binary Tree
// perfect binary tree - nodes double by level each child 2 nodes
// full binary tree - not perfect

// divide & conquer / look through phone book

// Level 0: 2^0 = 1;
// Level 1: 2^1 = 2;
// Level 2: 2^2 = 4;
// Level 3: 2^3 = 8;

// # of nodes = 2^h - 1 ('h = height / levels')
// log nodes = h
// log 100 = 2
// 10^2 = 100

// Binary Search Tree - O(log N)
// 1 - all child nodes in tree to right of root node must be greater than current node
// 2 - Node can only have 2 children
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  findMin() {
    let currentNode = this.root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
      console.log(currentNode.value);
    }
    return currentNode.value;
  }
  findMax() {
    let currentNode = this.root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
  isPresent(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  isBalanced() {
    if (this.findMaxHeight() - this.findMinHeight() <= 1) {
      return true;
    }
    return false;
  }

  // BST traversal methods
  // Depth First Search (DFS)
  
  // begin at the left most node and end at the right most node  (Left, Root, Right)
  // inorder traversal is the most frequent used traversal method of a BST.
  // Algorithm Inorder(tree)
  // 1. Traverse the left subtree, i.e., call Inorder(left-subtree)
  // 2. Visit the root.
  // 3. Traverse the right subtree, i.e., call Inorder(right-subtree)
  inOrder() {
    if (this.root == null) return null;
    let result = [];
    function traverseInOrder(node) {
      node.left && traverseInOrder(node.left);
      result.push(node.value);
      node.right && traverseInOrder(node.right);
    }
    traverseInOrder(this.root);
    return result;
  }
  // explore the root nodes before the leaves (root, left, right)
  preOrder() {
    if (this.root == null) return null;
    let result = [];
    function traversePreOrder(node) {
      result.push(node.value);
      node.left && traversePreOrder(node.left);
      node.right && traversePreOrder(node.right);
    }
    traversePreOrder(this.root);
    return result;
  }
  // explore the leaf nodes before the roots (Left, Right, Root)
  postOrder() {
    if (this.root == null) return null;
    let result = [];
    function traversePostOrder(node) {
      node.left && traversePostOrder(node.left);
      node.right && traversePostOrder(node.right);
      result.push(node.value);
    }
    traversePostOrder(this.root);
    return result;
  }
  // Breadth First Search (BFS)

  // bfs - explore all nodes in a given level before continuing to the next level
  // start by adding root node to a queue
  // begin a loop
  // - dequeue first item in the queue
  // - add it to a new array (result)
  // - inspect both children
  // - if children aren't null they get enqueued and the process
  // continues until there are now more children to add to the queue
  // - then we return our result array with the level order traversal
  levelOrder() {
    if (this.root == null) return null;
    // store our traversal result
    let result = [];
    // this is a temp array that manages our traversal order
    let Q = [];

    Q.push(this.root);

    while (Q.length > 0) {
      console.log(Q);
      let currentNode = Q.shift();
      result.push(currentNode.value);
      currentNode.left && Q.push(currentNode.left);
      currentNode.right && Q.push(currentNode.right);
    }

    return result;
  }
  bfs(){
    let currentNode = this.root
    let queue = []
    let result = [];

    queue.push(currentNode)
    
    while(queue.length > 0){
      currentNode = queue.shift()      
      result.push(currentNode.value)      
      currentNode.left && queue.push(currentNode.left)
      currentNode.right && queue.push(currentNode.right)
    }
    return result
  }

  isValidBST() {
    let currentNode = this.root;

    // helper function that checks the left half of the tree and then right half of the tree for all values left of root node being less than root node value and right of root node being more than root node value
    function validate(currentNode, low, high) {
      // base case:
      //  we reach the last node on the tree with the next node passed in being null i.e. there are no more nodes to the left or right
      if (!currentNode || currentNode == null) return true;

      // if the current node's value is outside of our "valid" parameters
      // the entire tree is invalid
      if (
        (low !== -Infinity && currentNode.value <= low) ||
        (high !== Infinity && currentNode.value >= high)
      ) {
        return false;
      }
      return (
        validate(currentNode.left, low, currentNode.value) &&
        validate(currentNode.right, currentNode.value, high)
      );
    }

    // our initial case kicks off with the root node and the range set to infinity on either end
    // then it calls down the left side and then right side to return the valid status back up
    return validate(currentNode, -Infinity, Infinity);
  }
}

module.exports = BinarySearchTree;
