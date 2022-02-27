var maxProfit = function(prices) {
  if (prices.length === 1) {
    return 0;
  }
    
  let buy = prices[0];
  let sell = prices[1];

  let max = 0;
    
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, sell - buy);
        
    if (buy > sell) {
      buy = sell;
    }

    sell = prices[i+1];
  }
    
  return max;
};

maxProfit([ 7,1,3,10,2 ]);