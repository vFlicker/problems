/*
  Перевірити, чи є масиви такими, що не перетинаються.
*/

/**
 * Складність за часом — `O(n * m)`
 * Складність за пам'яттю — `O(1)`
 */
const isIntersection1 = (firstArray, secondArray) => {
  for (const element of firstArray) {
    if (secondArray.includes(element)) {
      return true;
    }
  }

  return false;
};

/**
 * Складність за часом — `O(n + m)`
 * Складність за пам'яттю — `O(m)`
 */
 const isIntersection2 = (firstArray, secondArray) => {
  const set = new Set(secondArray);

  for (const element of firstArray) {
    if (set.has(element)) {
      return true;
    }
  }

  return false;
};

console.log(isIntersection1([1, 2, 3, 4, 5, 4], [10, 1]));
console.log(isIntersection2([1, 2, 3, 4, 5, 4], [10, 1]));
