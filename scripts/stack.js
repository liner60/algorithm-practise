
/**
 * “有效括号”问题
 * 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足： 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 * 解题思路：所有对称性问题，可以考虑使用栈进行解决。栈的入栈和出栈是刚好相反的，即呈现对称关系
 * @param {string} str 
 * @returns {boolean}
 */
function validBrackets(str) {
  var map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  var stack = [];

  for (let i = 0; i < str.length; i++) {
    var cur = str[i];
    if (!!map[cur]) {
      stack.push(map[cur]);
    } else if (stack[stack.length - 1] === cur) {
      stack.pop();
    } else {
      return false;
    }
  }

  if (!stack.length) {
    return true;
  }
  return false;
}

console.log(validBrackets('([0])'));


/**
 * 栈问题进阶-每日温度问题
 * 题目描述: 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
 * 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
 * 思路
 * 通过维护一个递减栈，记录已经遍历过元素的下标与值，将当前元素与递减栈的元素进行对比，如果当前元素大于栈的元素值，
 * 则将两者下标之差存入结果数组。同时将处理过的元素出栈。
 * @param {array} tempArray 
 * @returns {array}
 */
function diffTemperature(tempArray) {
  const stack = [];
  const result = new Array(tempArray.length).fill(0);

  for (let i = 0; i < tempArray.length; i ++ ) {

    if ( i > 0 ) {

      let j = stack.length - 1;
      
      while(j >= 0 && stack[j].element < tempArray[i]) {
        result[stack[j].index] = i - stack[j].index;
        stack.pop();
        j --;
      }
    }

    stack.push({
      index: i,
      element: tempArray[i]
    });
  }
  
  console.log(result);
  return result;
}

diffTemperature([73, 74, 75, 71, 69, 72, 76, 73]);

/**
 * 栈的设计——“最小栈”问题
 * 题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) —— 将元素 x 推入栈中。
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 * 示例:
 * MinStack minStack = new MinStack();
 * minStack.push(-3);
 * minStack.getMin(); --> 返回 -3.
 * minStack.pop();
 * minStack.top(); --> 返回 0.
 * minStack.getMin(); --> 返回 -2.
 */
/**
 * 常规写法 getMin函数时间复杂度为O(n) 需要优化
 */
const MinStack = function() {
  this.stack = [];
}

MinStack.prototype.push = function(x) {
  this.stack.push(x);
}

MinStack.prototype.pop = function() {
  this.stack.pop();
}

MinStack.prototype.top = function() {
  if (!this.stack || !this.stack.length) {
    return;
  }
  return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin = function() {
  let minValue = Infinity;
  const {stack} = this;
  for (let i = 0; i < stack.length; i ++) {
    if (stack[i] < minValue) {
      minValue = stack[i];
    }  
  }
  return minValue;
}

/**
 * 优化写法 
 */
const MinStack2 = function() {
  this.stack = [];

  // 辅助栈 从栈底到栈顶递减栈 
  this.stack2 = [];
}

MinStack2.prototype.push = function(x) {
  this.stack.push(x);

  // 如果当前值小于stack2的栈顶元素 则需要入栈
  if (this.stack2.length === 0 || x < this.stack2[this.stack2.length - 1]) {
    this.stack2.push(x);
  }
}

MinStack2.prototype.pop = function() {
  const popEle = this.stack.pop();
  if (popEle === this.stack2[this.stack2.length - 1]) {
    this.stack2.pop();
  }
}

MinStack2.prototype.top = function() {
  return this.stack[this.stack.length - 1];  
}

MinStack2.prototype.getMin = function() {
  // 辅助栈的栈顶，存的就是目标中的最小值
  return this.stack2[this.stack2.length - 1];
}