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

