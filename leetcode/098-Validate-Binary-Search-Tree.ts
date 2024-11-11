/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    let currentNode = root

  // helper function that checks the left half of the tree and then right half of the tree for all values left of root node being less than root node value and right of root node being more than root node value
  function validate(currentNode, low, high){
    
    // base case:
    //  we reach the last node on the tree with the next node passed in being null i.e. there are no more nodes to the left or right
    if( currentNode == null) return true
    
    // if the current node's value is outside of our "valid" parameters 
    // the entire tree is invalid
    if(
      (low !== -Infinity && currentNode.val <= low) ||
      (high !== Infinity && currentNode.val >= high)
    ){
      return false
    }
    return validate(currentNode.left, low, currentNode.val) &&
           validate(currentNode.right, currentNode.val, high)
    
    
  }

  // our initial case kicks off with the root node and the range set to infinity on either end
  // then it calls down the left side and then right side to return the valid status back up
  return validate(currentNode, -Infinity, Infinity) 
};