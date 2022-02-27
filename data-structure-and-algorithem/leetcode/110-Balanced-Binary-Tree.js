const { Tree } = require('./BinarySearchTree');

function isBalanced(root) {
  let isBalanced = true;
  function dfs(node, depth) {
    if (!node) return 0;

    const dL = dfs(node.left, depth + 1);
    const dR = dfs(node.right, depth + 1);
        
    // console.log(node.val, dL, dR);
    // console.log(Math.abs(dL-dR) <= 1);
    if (Math.abs(dL-dR) > 1) isBalanced = false;
        
    return 1+Math.max(dL, dR);
    // return depth;
  }
    
  dfs(root, 0);
    
  return isBalanced;
}

isBalanced(Tree.root);


