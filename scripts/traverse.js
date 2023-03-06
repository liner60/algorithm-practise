
/**
 * 深度优先(DFS)，也是二叉树的先序遍历，使用递归实现。本质为栈的思想（函数调用栈）
 * @param {object} root 
 * @returns 
 */
function preorder(root) {
  if (!root) {
    return;
  }

  console.log('当前遍历的节点是', root.val);
  // 递归遍历左子树
  preorder(root.left);
  // 递归遍历右子树
  preorder(root.right);
}

/**
 * 广度优先（BFS），使用层次遍历。本质为队列的思想。使用循环加队列进行实现。
 * @param {object} root 
 */
function BFS(root) {
  const queue = [];

  queue.push(root);

  while(queue.length) {
    const top = queue[0];

    if (top.left) {
      queue.push(top.left);
    }

    if (top.right) {
      queue.push(top.right);
    }

    queue.shift();

  }
}

/**
 * 全排列问题 
 * 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 示例：
 * 输入: [1,2,3]
 * 输出: [
 * [1,2,3],
 * [1,3,2],
 * [2,1,3],
 * [2,3,1],
 * [3,1,2],
 * [3,2,1]
 * ]
 * 思路：使用递归回溯思想实现，整个排列组合可以理解成一棵树，
 * 需要穷举所有排列可能，考虑使用深度遍历，即递归实现。
 * @param {array} nums 
 * @returns 
 */
function permute(nums) {
  const length = nums.length;
  const cur = [];
  const res = [];
  const visitMap = {};

  function dfs(nth) {
    // 递归边界 当到第n+1个坑位（不存在）时,代表当前组合已经填满了
    if (nth === length) {
      res.push(cur.slice()); // cur浅拷贝一份 
      return;
    }

    // 遍历+递归填坑
    for (let i = 0; i < length; i++) {
      var curEle = nums[i];

      if (!visitMap[curEle]) {
        // 将当前元素填坑，并标记已经使用过
        cur.push(curEle);
        visitMap[curEle] = 1;
        // 继续填余下的坑
        dfs(nth + 1);
        // 回溯：已经完成则将当前元素的坑位让出来给其它线路，并标记当前元素未使用        
        cur.pop();
        visitMap[curEle] = 0;
      }
    }
  }
  // 从第一个坑位开始填
  dfs(0);
  return res;
}

/**
 * TODO: 没搞懂！！！递归回溯思想的应用
 * 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 * 示例: 输入: nums = [1,2,3]
 * 输出:
 * [
 * [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 * @param {array} nums 
 * @returns 
 */
function subsets(nums) {
  const cur = [];
  const res = [];

  function dfs(index) {

  }
  return res;
}

/**
 * 使用二叉搜索树查找数据域为某一个特定值的节点
 * 根据二叉搜索树的特性，节点值小于指定值时，往右找
 * 节点值大于指定值时，往左找
 * @param {object} root 
 * @param {number} n 
 * @returns 
 */
function search(root, n) {
  if (!root) {
    return;
  }
  if (root.val === n) {
    console.log('目标节点是', root);
  } else if (root.val > n) {
    search(root.left, n);
  } else {
    search(root.right, n);
  }
}

/**
 * 使用二叉搜索树插入新节点
 * @param {object} root 
 * @param {number} n 
 * @returns 
 */
function insertIntoBST(root, n) {
  if (!root) {
    root = new TreeNode(n);
    return root;
  }

  if (root.val > n) {
    root.left = insertIntoBST(root.left, n);
  } else {
    root.right = insertIntoBST(root.right, n);
  }

  return root;
}