/*
  Дано масив чисел array і ціле число value. Необхідно
  перевірити, чи існують два різних числа в масиві array,
  сума яких дорівнює value. Якщо такі числа існують,
  то функція повертає true, в іншому випадку - false.
*/

/**
 * Складність за часом — `O(n)`
 * Складність за пам'яттю — `O(n)`
 */
export const findSum = (numbers, value) => {
  const values = new Set();
  // 9 - 3 = 6
  values.add(value - numbers[0]); // Set(1) { 6 }

  for (let i = 1; i < numbers.length; i++) {
    const currentValue = numbers[i];
    
    if (values.has(currentValue)) {
      return true
    };

    // 9 - 5 = 4
    values.add(value - currentValue);
  };

  return false;
}

const array = [3, 5, 1, 4];
console.log(findSum(array, 9));
