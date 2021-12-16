Binary tree is tree with nodes with two children

Binary search tree (BST) has rules where the children will go

```js
/*

        10
      /    \
    0       12
   /  \    /   \
  -1   5  11    20
              /    \
             17     99
*/
```

## Why binary search tree

https://www.nickang.com/2017-12-10-why-use-binary-search-tree/

### Strength

Insertion and deletion at logarithmic time, or O(log n).

Better than array, which is O(n) in time complexity.

I describe this in my head as the ”always insert in the right place” approach. This approach ensures that we can conduct binary search on the entire binary search tree at any time without having to re-order anything.

Because of this structure, insertion and deletion of nodes can be achieved very quickly. Instead of traversing every element sequentially until the right one is found, which is how we work with arrays, we only need to traverse half the tree, then half of half the tree, then half of half of half the tree…

### Weakness

Not as efficient as an array for look up, which takes constant time.

If goes imbalanced, will lose its strength and behave like an array.

## How to make sure the tree is balanced
https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/
AVL tree
