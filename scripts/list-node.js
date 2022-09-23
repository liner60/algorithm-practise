/**
 * 链表节点的建立
 * @param {*} val 
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node = new ListNode(1);
node.next = new ListNode(2);


/**
 * 链表的合并
 * 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。 
 * 示例： 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 * @returns 
 */
function mergeTwoLists(l1, l2) {
  // 头节点
  var head = new ListNode();
  // 合并链表指针
  var cur = head;

  while(l1 && l2) {
    if (l1.val <= l2.val) {
      // l1小则链接l1的节点
      cur.next = l1;
      // l1向前
      l1 = l1.next;
    } else {
      // l2小则链接l2的节点
      cur.next = l2;
      // l2向前
      l2 = l2.next;
    }

    // 合并链表往前走
    cur = cur.next;
  }

  //链表不等长的情况
  cur.next = l1 !== null ? l1: l2;
  return head.next;
}
/**
 * 链表结点的删除
 * 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 示例 1:
 * 输入: 1->1->2
 * 输出: 1->2
 * 示例 2:
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
 * @param {LinkNode} head 
 * @returns 
 */
function deleteDuplicates(head) {
  var cur = head;

  while(cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
}

/**
 * 删除问题的延伸——dummy 结点使用（人为造出的第一个节点的前驱节点）
 * 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
 * 示例 1:
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 示例 2:
 * 输入: 1->1->1->2->3
 * 输出: 2->3
 * @param {LinkNode} head 
 * @returns 
 */
function deleteDuplicates2(head) {
  var dummy = new ListNode();
  dummy.next = head;
  var cur = dummy;

  while(cur !== null && cur.next !== null && cur.next.next !== null ) {
    if (cur.next.val === cur.next.next.val) {
      cur.next = cur.next.next.next;
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}