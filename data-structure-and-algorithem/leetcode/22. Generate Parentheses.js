// backtracking

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // if no bracket, or openN == closedN, has to add open
  // if openN > closedN, add either open or closed
  // if openN == closedN == n, end
  const results = [];
  const stack = [];
  function addBracket(openN, closedN ) {
    if (openN === n && closedN === n) {
      results.unshift(stack.join(''));
      return;
    }

    if (openN < n) {
      stack.push('(');
      addBracket(openN + 1, closedN);
      stack.pop();
    }
        
    if (closedN < openN) {
      stack.push(')');
      addBracket(openN, closedN + 1);
      stack.pop();
    }
  }
    
  addBracket(0, 0);
    
  return results;
};

generateParenthesis(3);