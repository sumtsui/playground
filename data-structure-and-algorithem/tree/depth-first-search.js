const BinarySearchTree = require('./BinarySearchTree');

const Tree = new BinarySearchTree();
Tree.insert(19);
Tree.insert(30);
Tree.insert(3);
Tree.insert(5);
Tree.insert(17);
Tree.insert(8);
Tree.insert(24);

// console.log('tree', Tree);

// DFS
/**
 *           19
 *     3          30      
 *       5      24       
 *         17    
 *        8
*/

// preorder
// recursive approach
function preorder(node) {
  if (node) {
    console.log(node.value);
    preorder(node.left);
    preorder(node.right);
  }
}
function inorder(node) {       
  node.left && inorder(node.left); //step 1
  console.log(node.value);
  node.right && inorder(node.right); //step 3
}
// function inorder(node) {
//   if (node) {
//     if (node.left) preorder(node.left);
//     console.log(node.value);
//     if (node.right) preorder(node.right);
//   } 
// }

// preorder(Tree.root);
inorder(Tree.root);