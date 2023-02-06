
/**
 * 如何用栈实现一个队列？
 * 题目描述：使用栈实现队列的下列操作：
 * push(x) -- 将一个元素放入队列的尾部。
 * pop() -- 从队列首部移除元素。
 * peek() -- 返回队列首部的元素。
 * empty() -- 返回队列是否为空。
 * 示例: MyQueue queue = new MyQueue();
 * queue.push(1);
 * queue.push(2);
 * queue.peek(); // 返回 1
 * queue.pop(); // 返回 1
 * queue.empty(); // 返回 false
 * 说明:
 * 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
 * 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 * 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
 * 解题思路：
 * 借助另一个栈，来实现栈底到栈顶的逆序转换。注意的是，在转换栈所有元素未清空前，不要将后续进入的元素放入转换栈中。
 */

const queue1 = function () {
    this.stack1 = [];
    this.stack2 = [];
}

queue1.prototype.push = function (x) {
    this.stack1.push(x);
}

queue1.prototype.pop = function () {
    while(!this.stack2.length && !!this.stack1.length) {
        const el = this.stack1.pop();
        this.stack2.push(el);
    }
    this.stack2.pop();
}

queue1.prototype.peek = function () {
    while(!this.stack2.length && !!this.stack1.length) {
        const el = this.stack1.pop();
        this.stack2.push(el);
    }
    return this.stack2.length > 0 ? this.stack2[this.stack2.length - 1] : null;
}

queue1.prototype.empty = function () {
    return !this.stack1.length && !this.stack2.length; 
}

/**
 * 滑动窗口问题
 * 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 * 示例: 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
 * 解释: 滑动窗口的位置
 * ---------------
 * [1 3 -1] -3 5 3 6 7
 * 1 [3 -1 -3] 5 3 6 7
 * 1 3 [-1 -3 5] 3 6 7
 * 1 3 -1 [-3 5 3] 6 7
 * 1 3 -1 -3 [5 3 6] 7
 * 1 3 -1 -3 5 [3 6 7]

 * 最大值分别对应：
 * 3 3 5 5 6 7

 * 提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
 */
/**
 * 双指针+遍历法 时间复杂度O(kn)
 * @param {number[]} nums 
 * @param {number} k 
 * @returns 
 */
function maxSlidingWindow1(nums, k) {
  var left = 0;
  var right = left + k -1;
  var res = [];

  while(right <= nums.length - 1) {
    var max = findMax(nums, left, right);
    res.push(max);
    
    left ++;
    right ++;
  }

  return res;
}

function findMax(nums, left, right) {
  if (!nums || !nums.length) {
    return;
  }
  var max = nums[left];
  for (var i = left + 1; i <= right; i ++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

/**
 * 双端队列解法
 * @param {number[]} nums 
 * @param {number} k 
 * @returns 
 */
function maxSlidingWindow2(nums, k) {
  // 递减的双端队列
  var deque = [];
  var res = [];
  
  for (let i = 0; i < nums.length; i ++) {
    
    // 将小于将要入栈元素的队尾元素，依次从队尾出队
    while(deque.length >= 1 && deque[deque.length - 1] < nums[i]) {
      deque.pop();
    }

    // 将当前元素推入队列
    deque.push(nums[i]);

    // 将队头元素推入结果数组
    if (i >= k - 1) {
      res.push(deque[0]);

      // 如果左边界的值为最大值，则意味着还留在双端队列里，此时需要将其出队，因为下一次遍历就不在滑动窗口范围内了
      if (nums[i - k + 1] === deque[0]) {
        deque.shift();
      }
    }
  }

  return res;
}

console.log(maxSlidingWindow2([3,5,4,3,4,1,2,3,6],3));

