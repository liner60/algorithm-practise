/**
 * 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

 * 示例 1: 输入: "aba"
 * 输出: True
 * 示例 2:
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 * 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 * @param {*} str 
 * @returns 
 */
/**
 * 解法：利用回文字符串的对称性，使用对撞双指针进行解答
 */
function isValidPalindrom(str) {
  // 初始化首尾指针
  var i = 0;
  var j = str.length - 1;
  // 是否已经进行过指针跳过操作（即对应于是否已经删除过字符）
  var flag = false;

  while(i <= j) {
    var isEqual = str[i] === str[j];
    
    if (!isEqual) {
      // 两个指针所指的数值不相等 则通过是否可以下一个所指数值相等来进行相应的跳过操作 通过flag来控制只能执行这种跳过一次
      if (!flag) {
        flag = true;
        if (str[i + 1] === str[j]) {
          i++;
        }
        if (str[i] === str[j-1]) {
          j--;
        }
      } else {
        return false;
      }
    } else {
      // 两个指针所指的数值相等 则两者继续前进
      i++;
      j--;
    }
  }

  return true;
}

const result = isValidPalindrom('abdcba');
console.log(result);