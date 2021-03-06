  /**
   *    给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
   *    你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
   *    返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
   * 
   * 
   *          示例 1：
   *            输入：[7,1,5,3,6,4]
   *            输出：5
   *            解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
   *            注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
   *         示例 2：
   *            输入：prices = [7,6,4,3,1]
   *            输出：0
   *            解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
   *        https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/jian-dan-yi-dong-mai-mai-gu-piao-de-zui-s4knt/
   **/ 


  function maxProfit(prices) {
    let min = prices[0]  // 先定义第一天为最低价格
    let profit = 0   //利润
    for (let i = 1; i < prices.length; i++) {
      if(prices[i] < min) {  //如果发现比最低价格还低的，更欣最低价格
        min = prices[i]
      } else if (prices[i] - min > profit) {  // 如果发现当前利润比之前高的，更新利润
        profit = prices[i] - min
      }
    }
    return profit
  }