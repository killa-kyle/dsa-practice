/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function TreeNode(val: number, left: TreeNode | null, right: TreeNode | null) {
  return {
    val: val === undefined ? 0 : val,
    left: left === undefined ? null : left,
    right: right === undefined ? null : right,
  };
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root: TreeNode) {
  // return result array or level based arrays
  let result: number[][] = [];

  if (root === null) return result;

  const traverse = (node: TreeNode, level: number) => {
    if (!node) return;

    if (result[level]) {
      result[level].push(node.val);
    } else {
      result[level] = [node.val];
    }

    if (node.left) {
      traverse(node.left, level + 1);
    }
    if (node.right) {
      traverse(node.right, level + 1);
    }
  };
  traverse(root, 0);

  return result;
};

// Function to create a binary tree from an array
const createBinaryTree = (nums: (number | null)[]) => {
    if (nums.length === 0) return null;

    const nodes = nums.map((val, index) => (val !== null ? TreeNode(val, null, null) : null));
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        if (node === null) continue;
        if (node) {
      node.left = nodes[2 * i + 1] as TreeNode;
      node.right = nodes[2 * i + 2] as TreeNode;
    }
  }
  return nodes[0];
};
// Update the console.log to check for null before calling levelOrder
// const root = createBinaryTree([3, 9, 20, null, null, 15, 7]); 
const root = createBinaryTree([1, null, 2, 3]); // [[1], [2], [3]]
if (root) {
  console.log(levelOrder(root));
} else {
  console.log("The tree is empty.");
}
