/*
  Знайти другий мінімальний елемент в масиві.
*/

/**
 * Складність за часом — `О(n)`
 * Складність за пам'яттю — `О(1)`
 */
const findSecondMinimalElement = (numbers) => {
  let firstMinElement = Infinity;
  let secondMinElement = Infinity;

  for (const number of numbers) {
    if (number < firstMinElement) {
      secondMinElement = firstMinElement;
      firstMinElement = number;
    } else if (number < secondMinElement && number !== firstMinElement) {
      secondMinElement = number;
    }
  }

  if (secondMinElement === Infinity) {
    return null;
  }
  
  return secondMinElement;
};

console.log(findSecondMinimalElement([12, 13, 1, 10, 34, 1])); // 10
