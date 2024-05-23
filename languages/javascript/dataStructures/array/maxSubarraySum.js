/*
  Знайти максимальної суми послідовності, що розташована в масиві.
*/

/**
 * Складність за часом — `O(n^3)`
 * Складність за пам'яттю — `O(n)`
 */
const maxSubarraySum1 = (numbers) => {
  let maxSum = 0;

  for (let i = 1; i <= numbers.length; i++) {
    for (let j = 0; j <= numbers.length - i; j++) {
      const subArray = numbers.slice(j, j + i);
      const currentMax = subArray.reduce((acc, item) => acc + item, 0);
      
      maxSum = Math.max(maxSum, currentMax);
    }
  }

  return maxSum;
};

/**
 * Складність за часом — `O(n)`
 * Складність за пам'яттю — `O(1)`
 */
const maxSubarraySum2 = (numbers) => {
  let maxSum = 0;
  let currentSum = 0;

  for (const number of numbers) {
    currentSum = Math.max(0, currentSum + number);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubarraySum1([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
