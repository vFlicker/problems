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
const findSum = (array, value) => {
  const values = new Set();
  // 9 - 3 = 6
  values.add(value - array[0]); // Set(1) { 6 }

  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i];
    
    if (values.has(currentValue)) return true;

    // 9 - 5 = 4
    values.add(value - currentValue);
  };

  return false;
}

const array = [3, 5, 1, 4];
console.log(findSum(array, 9));
