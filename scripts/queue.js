
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