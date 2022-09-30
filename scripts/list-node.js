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
 * 创建链表
 * @param {ListNode} m 
 * @param {Listnode} n 
 * @returns 
 */
function initList(m, n) {
  var head = new ListNode(m);
  var linkNode = head;
  
  for (let i = m + 1; i <= n; i++) {
    var cur = new ListNode(i);
    linkNode.next = cur;
    linkNode = linkNode.next;
  }

  return head;
}


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

/**
 * 快慢指针——删除链表的倒数第 N 个结点
 * 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个结点后，链表变为 1->2->3->5.
 * 说明： 给定的 n 保证是有效的。
 * 解法：使用快慢指针，将倒数n位转变为两指针的差值
 * @param {ListNode} head 
 * @param {number} n 
 * @returns {ListNode}
 */
function deleteNode(head, n) {
  var dummy = new ListNode();
  dummy.next = head;
  var fast = dummy;
  var slow = dummy;

  // 快指针先走n步
  while(n !== 0) {
    fast = fast.next;
    n--;
  }

  // 快慢指针同时走
  while(!!fast && !fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // 执行删除操作
  slow.next = slow.next.next;

  return dummy.next;
}

/**
 * 多指针法——链表的反转
 * 完全反转一个链表
 * 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
 * 示例:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * @param {ListNode} head 
 * @returns {ListNode}
 */
function revertList(head) {
  var pre = null;
  var cur = head;

  while(!!cur) {
    // 记录后继指针
    var next = cur.next;
    // 反转指针
    cur.next = pre;

    // 前进
    pre = cur;
    cur = next;
  }

  return cur;
}

/**
 * 局部反转一个链表
 * 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 说明: 1 ≤ m ≤ n ≤ 链表长度。
 * 示例:
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 * 解题思路 确定边界 -> 处理边界内节点反转 -> 处理边界节点指向 
 * @param {ListNode} head 
 * @param {number} m 
 * @param {number} n 
 * @returns 
 */
function partRevertList(head, m, n) {
  var dummy = new ListNode();
  dummy.next = head;
  var fast = dummy;
  var slow = dummy;
  var diff = m - (n - 1);

  while(diff > 0) {
    fast = fast.next;
    diff--;
  }

  while(n - 1 > 0) {
    fast = fast.next;
    slow = slow.next;
    n--
  }

  var leftEnd = slow.next;
  var rightEnd = fast.next;
  var pre = leftEnd;
  var cur = pre.next;

  while(cur !== rightEnd) {
    var next = cur.next;

    cur.next = pre;
    pre = cur;
    cur = next;
  }

  // 处理首尾情况
  leftEnd.next = rightEnd;
  slow.next = fast;

  console.log(leftEnd, rightEnd,  slow, fast);
  return dummy.next;
}

/**
 * 测试函数-局部反转链表
 */
function testPartRevertList() {
  const list = initList(1,6);
  const result = partRevertList(list, 4,2);
  console.log(result);
}

testPartRevertList();


