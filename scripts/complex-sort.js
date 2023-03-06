
/**
 * 归并排序
 * 分治思想的典型应用
 * 1.分解子问题：将需要被排序的数组从中间分隔为两半，再将分割出来的每个子数组各分割为两半，直到单个子数组只有一个元素
 * 2.求解每个子问题：从粒度最小的子数组开始，两两合并、确保每次合并出来的数组都是有序的。
 * 3.合并子问题的解，得出大问题的解：当数组被合并至原有规模时，就得到了一个完全排序的数组
 * 具体实现：
 * 重复+有去无回性使用递归
 * 有序数组的合并使用双指针法
 * @param {array} arr 
 * @returns 
 */
function mergeSort(arr, mes) {
  console.log(arr, mes);
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }
  const mid = Math.floor(len / 2);

  const leftArr = mergeSort(arr.slice(0, mid),'left');
  const rightArr = mergeSort(arr.slice(mid, len),'right');
  console.log('left + right', leftArr, rightArr);
  arr = mergeArr(leftArr, rightArr);
  console.log('result', arr);
  return arr;
}

/**
 * 两个有序数组的合并，使用双指针法
 * @param {array} arr1 
 * @param {array} arr2 
 * @returns 
 */
function mergeArr(arr1, arr2) {
  let i = 0;
  let j = 0;
  const res = [];

  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    return res.concat(arr1.slice(i));
  } else {
    return res.concat(arr2.slice(j));
  }
}