const BinarySearchTree = require('../tree/BinarySearchTree');

const Tree = new BinarySearchTree();

Tree.insert(19);
Tree.insert(30);
Tree.insert(3);
Tree.insert(1);
Tree.insert(5);
Tree.insert(17);
Tree.insert(8);
Tree.insert(24);

function maxDepth(root) {
  let longest = 0;
    
  if (!root) return longest;
    
  function traverse(node, depth) {
    if (!node.left && !node.right) {
      longest = longest > depth ? longest : depth;
      return;
    } else {
      if (node.left) traverse(node.left, depth+1);
      if (node.right) traverse(node.right, depth+1);
    }
  }
    
  traverse(root, 1);
    
  return longest;
}

maxDepth(Tree.root);