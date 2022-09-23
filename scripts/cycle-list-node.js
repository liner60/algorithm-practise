

/**
 * 环形链表基本问题——如何判断链表是否成环？
 * 真题描述：给定一个链表，判断链表中是否有环。
 * 示例 1：
 * 输入：[3,2,0,4]（链表结构如下图） 输出：true
 * 解释：链表中存在一个环
 * @param {ListNode} head 
 * @returns {boolean}
 */
function hasCycle(head) {
  while(head) {
    if (head.flag) {
      return true;
    } else {
      head.flag = true;
      head = head.next;
    }
  }
  return false;
}

/**
 * 环形链表衍生问题——定位环的起点
 * 真题描述：给定一个链表，返回链表开始入环的第一个结点的下标。 如果链表无环，则返回 no cycle
 * 示例 1：
 * 输入：head = [3,2,0,-4]（如下图） 输出：tail connects to node index 1 解释：链表中有一个环，其尾部连接到第二个结点。
 * @param {ListNode} head 
 * @returns {string}
 */
function getCycleStartIndex(head) {
  var index = 0;
  while(head) {
    if (head.index !== null || head.index !== undefined) {
      return `tail connects to node index ${head.index}`;
    } else {
      head.index = index;
      index ++;
      head = head.next;
    }
  }
  return 'no cycle';
}

/**
 * 环形链表衍生问题——定位环的起点
 * 真题描述：给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null
 * @param {ListNode} head 
 * @returns {ListNode}
 */
function getCycleStartNode(head) {
  while(head) {
    if (head.flag) {
      return head;
    } else {
      head.flag = true;
      head = head.next;
    }
  }
  return null;
}

// TODO: 快慢指针
