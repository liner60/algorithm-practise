
/**
 * 题目描述：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 * 解法一：
 * 使用递归
 * 递归思路：倒着分析问题+树形结构
 * 1.定位到问题的终点
 * 2.站在终点这个视角，思考后退的可能性
 * @param {number} n 
 * @returns 
 */
function climbStairs(n, sy) {
  console.log(n, sy);
  
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  // 递归计算
  return climbStairs(n-1, '1111') + climbStairs(n-2, '22222');
}

/**
 * 解法二：记忆化搜索来提效
 * 通过缓存减少重复计算，属于优化后的递归
 */
const fns = [];
function climbStairs2(n, sy) {
  console.log(n, sy);
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }
  if (fns[n] === undefined) {
    console.log('33333' ,fns);
    fns[n] = climbStairs2(n-1, '1111') + climbStairs2(n-2, '2222');
  }
  
  return fns[n];
}

/**
 * 解法三：动态规划
 * 递归思维：自顶向下
 * 动态规划：自底向上
 * 即基于已知的事实向未知推导
 * @param {number} n 
 * @returns 
 */
function climbStairs3(n) {
  console.log(n);
  const f = [];
  f[1] = 1;
  f[2] = 2;
  for (let i = 3; i <= n; i++) {
    f[i] = f[i-1] + f[i-2];
  }
  return f[n];
}

/**
 * “最值”型问题典范：如何优雅地找硬币
 * 题目描述：给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 提示：最值问题是动态规划的常见对口题型，见到最值问题，应该想到动态规划
 * 状态转移方程：
 * f(36) = Math.min(f(36-c1)+1,f(36-c2)+1,f(36-c3)+1......f(36-cn)+1)
 * @param {array} coins 硬币面额数组
 * @param {number} amount 目标金额
 * @returns 
 */
function coinChange(coins, amount) {
  const f = [];
  // f[x]=y; x为金额,f[x]为组成该金额最少所需硬币数
  // 边界条件 当需要组成金额为0时，需要的硬币数肯定为0
  f[0] = 0;
  for (let money = 0; money <= amount; money ++) {
    f[money] = Infinity;
    for (let cIndex = 0; cIndex < coins.length; cIndex ++) {
      if (money-coins[cIndex] >= 0) {
        // 状态转移方程 找出他的前一步拿出任意一个硬币情况所需硬币数量的最小值
        console.log(`money:${money},cIndex:${cIndex},coins[cIndex]:${coins[cIndex]}, money-coins[cIndex]:${money-coins[cIndex]}`,`Math.min(${f[money]},${f[money-coins[cIndex]]+1})`);
        f[money] = Math.min(f[money], f(money-coins[cIndex]) + 1);
        console.log(`f[${money}]`, f[money]);
      }
    }
  }
  if (f[amount] === Infinity) {
    return -1;
  }
  return f[amount];
}