// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
// 说明:
// 1 ≤ m ≤ n ≤ 链表长度。
// 示例:
// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

function makeList(length) {
  let count = 0;
  const head = new Node(count);
  let node = head;

  while (count < length - 1) {
    count++;

    node.next = new Node(count);

    node = node.next;
  }

  return head;
}

const head = makeList(5);

// O(n) time & O(1) space
function reverse(head) {
  let node = head,
    previous,
    tmp;

  while (node) {
    // save next before we overwrite node.next!
    tmp = node.next;

    // reverse pointer
    node.next = previous;

    // step forward in the list
    previous = node;
    node = tmp;
  }

  // return the new head
  return previous;
}

let node = reverse(head);

while (node) {
  console.log(node.value);
  node = node.next;
}
