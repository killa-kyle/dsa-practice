const BinarySearchTree = require("./data-structures/bst");

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(17);
tree.insert(3);
tree.insert(6);
tree.insert(22);
tree.insert(5);
tree.insert(7);
tree.insert(20);
// console.log(JSON.stringify(traverse(tree.root), null, 2))
// //     9
// //  4     20
// //1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

console.log(tree.findMinHeight());
console.log(tree.findMaxHeight());
console.log(tree.isBalanced());
tree.insert(10);
console.log(tree.findMinHeight());
console.log(tree.findMaxHeight());
console.log(tree.isBalanced());

console.log("inOrder: " + tree.inOrder()); // left most node to right most node
console.log("preOrder: " + tree.preOrder()); // traverse root nodes before the leaf nodes
console.log("postOrder: " + tree.postOrder()); // explores leaf nodes before the roots, finishing all leaves on a branch before jumping to next branch
console.log("levelOrder: " + tree.levelOrder());
console.log(tree.findMaxHeight());
console.log(tree.isBalanced());
console.log(tree.isValidBST());


console.log(tree.bfs());