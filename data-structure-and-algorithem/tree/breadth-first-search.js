const BinarySearchTree = require('./BinarySearchTree');

const Tree = new BinarySearchTree();

Tree.insert(19);
Tree.insert(30);
Tree.insert(3);
Tree.insert(5);
Tree.insert(17);
Tree.insert(8);
Tree.insert(24);
// BFS
/**
 *       10
 *     2     6 
 *   5  12  8
 */

function BFS(node) {
  const queue = [ node ];

  while (queue.length > 0) {
    // first in first out
    const cur = queue.shift();

    // do something with cur
    console.log(cur.value);

    // pretend it is a binary tree
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
}
console.log('tree', Tree);
BFS(Tree.root);