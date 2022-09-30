

/**
 * 冒泡排序
 * 冒泡排序的过程，就是从第一个元素开始，重复比较相邻的两个项，若第一项比第二项更大，则交换两者的位置；反之不动。
 * 每一轮操作，都会将这一轮中最大的元素放置到数组的末尾。假如数组的长度是 n，那么当我们重复完 n 轮的时候，整个数组就有序了。
 * 时间复杂度：最好时间复杂度-O(n) 最坏时间复杂度-重复次数n(n-1)/2次，O(n^2)
 * @param {array} arr 
 * @returns array
 */
function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j ++) {
    var flag = false;
    for (let i = 0; i < (arr.length - 1 - j); i ++) {
      var curItem = arr[i];
      var nextItem = arr[i + 1];
      if (curItem > nextItem) {
        arr[i] = nextItem;
        arr[i + 1] = curItem;
        flag = true;
      }
    }

    if (flag === false) return arr;

  }
  return arr;
}

console.log(bubbleSort([5,4,2,3,1]));

/**
 * 选择排序
 * 选择排序的关键字是“最小值”：循环遍历数组，每次都找出当前范围内的最小值，把它放在当前范围的头部；
 * 然后缩小排序范围，继续重复以上操作，直至数组完全有序为止。
 * 选择排序的三个时间复杂度都对应两层循环消耗的时间量级： O(n^2)
 * @param {array} arr 
 * @returns 
 */
function selectSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    var minIdx = j;
    var min = arr[minIdx];

    for (let i = j + 1; i < arr.length; i ++) {
      if (arr[i] < min) {
        min = arr[i];
        minIdx = i;
      }
    }

    console.log(min, minIdx);
    arr[minIdx] = arr[j];
    arr[j] = min;
  }
  return arr;
}

console.log(selectSort([5,6,3,1, 4,5]));
/**
 * 插入排序
 * 插入排序的核心思想是“找到元素在它前面那个序列中的正确位置”。
 * 具体来说，插入排序所有的操作都基于一个这样的前提：当前元素前面的序列是有序的。
 * 基于这个前提，从后往前去寻找当前元素在前面那个序列里的正确位置。
 * 最好时间复杂度：O(n) 最坏与平均时间复杂度：O（n^2)
 * @param {array} arr 
 */
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var cur = arr[i];
    var j = i - 1;

    while(cur < arr[j] && j >= 0 ) {
      // 腾出位置 元素往后挪一个位置
      arr[j + 1] = arr[j];
      arr[j] = cur;
      j--;
    }
  }
  return arr;
}

console.log(insertSort([5,6,3,1,4,5]));