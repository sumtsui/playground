function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.add = function (value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinaryTreeNode(value);
    } else {
      this.left.add(value);
    }
  }
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinaryTreeNode(value);
    } else {
      this.right.add(value);
    }
  }
};

const result = new BinaryTreeNode(99);

function makeTree(array) {}

console.info('result', result);
