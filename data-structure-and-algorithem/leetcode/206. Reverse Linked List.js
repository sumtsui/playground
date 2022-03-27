function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let next;
    
  while (head) {
    let oldNext = head.next;
    head.next = next;
    next = head;
    head = oldNext;
  }
    
  return next;
};

reverseList(head);