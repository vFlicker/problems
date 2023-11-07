/*
  Дано масив цілих чисел розміром N, знайти перший
  неповторюваний елемент у цьому масиві.
*/

/**
 * Складність за часом — O(N).
 * Складність за пам'яттю — O(N).
 */
const findFirstUniqueElement = (numbers) => {
  const elementCount = new Map();

  for (const number of numbers) {
    let repeatedQuantity = 1;

    if (elementCount.has(number)) {
      repeatedQuantity += elementCount.get(number);
    }

    elementCount.set(number, repeatedQuantity);
  }

  for (const [number, repeatedQuantity] of elementCount.entries()) {
    if (repeatedQuantity === 1) {
      return number;
    }
  }

};

console.log(findFirstUniqueElement([-1, 2, -1, 3, 0])); // 2
console.log(findFirstUniqueElement([9, 4, 9, 6, 7, 4])); // 6
