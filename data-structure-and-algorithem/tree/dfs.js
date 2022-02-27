const BinarySearchTree = require('./BinarySearchTree');

// recursive approach
function treeTraverse() {
  const Tree = new BinarySearchTree();
  Tree.insert(1);
  Tree.insert(2);
  Tree.insert(3);

  const res = [];
  function dfs(node) {
    if (!node) return;
    // preorder: res.push(node.val);        
    dfs(node.left);
    // inorder: res.push(node.val);
    dfs(node.right);
    // postorder: res.push(node.val);
  }
    
  dfs(Tree.root);
    
  return res;
}

// pre: [1,2,3]
// in: [1,3,2]
// post: [3,2,1]

// iterative approach:
const Tree = new BinarySearchTree();

Tree.insert(19);
Tree.insert(30);
Tree.insert(3);
Tree.insert(1);
Tree.insert(5);
Tree.insert(17);
Tree.insert(8);
Tree.insert(24);
// console.log('tree', Tree);

// DFS
/**
 *           19
 *     3           30      
 *   1    5      24       
 *         17    
 *        8
*/

function preorderStack(root) {

  const stack = [ root ];
  const res = [];

  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr) {
      res.push(curr.val);
      stack.push(curr.right);
      stack.push(curr.left);   
    }
  }
        
  return res;
}

function inorderStack(root) {
  const stack = [];
  let cur = root;
  const result = [];
    
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
        
    cur = stack.pop();
    result.push(cur.val);
    cur = cur.right;
  }
    
  return result;
}

preorderStack(Tree.root);
inorderStack(Tree.root);