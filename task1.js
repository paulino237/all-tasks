
function findUniquePairs(numbers, target) {
  if (!Array.isArray(numbers) || numbers.length < 2) return [];

  const seen = new Set();
  const uniquePairs = new Map();

  for (const currentNum of numbers) {
    const complement = target - currentNum;

    if (seen.has(complement)) {
      // Sort the pair to handle order-based duplicates
      const pair = currentNum < complement ? [currentNum, complement] : [complement, currentNum];
      uniquePairs.set(pair.join(','), pair);
    }
    
    seen.add(currentNum);
  }

  return Array.from(uniquePairs.values());
}

// Example usage: decomment the lines below to test the function and tap command node task1.js in terminal
//const arr = [1, 2, 3, 4, 5, 1, 5];
//console.log(findUniquePairs(arr, 3));