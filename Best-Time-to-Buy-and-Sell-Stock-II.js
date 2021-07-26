// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0
  let minVal = Infinity
  // loop through profit list, compare yesterday's price [i - 1] with today's price [i]
  for (let i = 0; i < prices.length; i++) {
    minVal = Math.min(minVal, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - minVal)

  }
  
  console.log(maxProfit);
  return maxProfit
};

prices = [7,1,5,3,6,4]
maxProfit(prices)
