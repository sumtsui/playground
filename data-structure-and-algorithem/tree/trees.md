# Terminology

Level: root is level 1, child is level 2 ...
Leaf: Nodes at the end that don't have any children
Height: Start from the furthest leaf (height 0) on the tree, to the root
Depth: Start from the root (depth 0), to the furthest leaf 

https://www.tutorialspoint.com/data_structures_algorithms/tree_traversal.htm

# Traversal

## DFS (depth first search)

use Stack

### Pre-order Traversal
Check off a node as soon as you see it **before** moving on to another node in the tree

In this traversal method, the root node is visited first, then the left subtree and finally the right subtree.

```
      a
    /   \
   b     c
  / \    /
 d   e   f

a - b - d - e - c - f
```

## In-order Traversal
From left to right, thus "in order".

We don't check off a node until we see its **left** children.

In this traversal method, the left subtree is visited first, then the root and later the right sub-tree. We should always remember that every node may represent a subtree itself. 

```
      a
    /   \
   b     c
  / \    /
 d   e   f

d - b - e - a - c - f
```

### Post-order Traversal
We visit all of a node's children before moving on to the next node.

In this traversal method, the root node is visited last, hence the name. First we traverse the left subtree, then the right subtree and finally the root node.

```
      a
    /   \
   b     c
  / \    /
 d   e   f

d - e - b - c - f - a
```

## BFS (breadth first search)

use Queue

```
      a
    /   \
   b     c
  / \    /
 d   e   f

a - b - c - d - e - f
```