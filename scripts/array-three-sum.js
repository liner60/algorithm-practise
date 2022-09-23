/**
 * 三数求和问题
 * 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
 * */

/**
 * 解法：
 * 先排序，然后利用双指针中的对撞指针
 * @param {*} nums 
 * @returns 
 */
function threeSum(nums) {
  console.log(nums);
  // 升序排列
  var orderNums = nums.sort((a, b) => a - b);
  var sum = 0;
  var result = [];
  for (var i = 0; i < orderNums.length - 2; i++) {
    var curNum = orderNums[i];
    var rIdx = orderNums.length - 1;
    var lIdx = i + 1;
    var leftSum = sum - curNum;

    if (i > 0 && curNum === orderNums[i-1]) {
      continue;
    }

    while(lIdx < rIdx) {
      
      var twoSum = orderNums[rIdx] + orderNums[lIdx];
    
      if (twoSum < leftSum) {
        // 指针指向的两数之和小于剩下两数应达到的总和值，则左指针向右移
        lIdx ++;

        // 左指针重复元素跳过
        while(lIdx < rIdx && orderNums[lIdx] === orderNums[lIdx - 1]) {
          lIdx++;
        }
      } else if (twoSum > leftSum) {
        // 指针指向的两数之和大于剩下两数应达到的总和值，则右指针向左移
        rIdx --;

        // 右指针重复元素跳过
        while(lIdx < rIdx && orderNums[rIdx] === orderNums[rIdx + 1]) {
          rIdx--;
        }
      } else {
         // 指针指向的两数之和等于剩下两数应达到的总和值，则为需要查找的结果，推入结果数组
         result.push([curNum, orderNums[rIdx], orderNums[lIdx]]);

         // 继续查找剩余元素
         lIdx ++;
         rIdx --;

        // 右指针重复元素跳过
        while(lIdx < rIdx && orderNums[rIdx] === orderNums[rIdx + 1]) {
          rIdx--;
        }

        // 左指针重复元素跳过
        while(lIdx < rIdx && orderNums[lIdx] === orderNums[lIdx - 1]) {
          lIdx++;
        }
      }

    }
    

  }
  return result;
}

const result1 = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result1);