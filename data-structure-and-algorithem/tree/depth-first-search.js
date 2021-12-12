// DFS
/**
 *       10
 *     2     6 
 *   5  12  8
 */
// preorder
// recursive approach
function DFS(node) {
  const data = [];
  function traverse(cur) {
    data.push(cur.value);
    if (cur.left) traverse(cur.left);
    if (cur.right) traverse(cur.right); 
  }
  traverse(node);
  return data;
}