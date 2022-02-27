class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  
  insert(val){
    var newNode = new Node(val);
    if (this.root === null){
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current){
      if (val === current.val) return undefined;
      if (val < current.val){
        if (current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null){
          current.right = newNode;
          return this;
        } 
        current = current.right;
      }
    }
  }
}

const Tree = new BinarySearchTree();

Tree.insert(19);
Tree.insert(30);
Tree.insert(3);
Tree.insert(1);
Tree.insert(5);
Tree.insert(17);
Tree.insert(8);
Tree.insert(24);

exports.BinarySearchTree = BinarySearchTree;
exports.Tree = Tree;