/*
  Дано відсортований масив чисел array і ціле число value.
  Необхідно перевірити, чи існують два різних числа в
  масиві array, сума яких дорівнює value. Якщо такі числа
  існують, то функція повертає true,
  в іншому випадку — false.
*/

/**
 * Складність за часом — `О(n)`
 * Складність за пам'яттю — `О(1)`
 */
export const findSum = (numbers, value) => {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
    const calculatedValue = numbers[leftPointer] + numbers[rightPointer];

    if (calculatedValue === value) {
      return [numbers[leftPointer], numbers[rightPointer]];
    }

    if (calculatedValue > value) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  return [];
}

console.log(findSum([-9, -5, -2, -1, 1, 4, 9, 11], 3)); // [-1, 4]
