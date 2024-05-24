/*
  Зі списку чисел знайти те, що відрізняється за парністю
  від інших, і повернути його.
*/

/**
 * Складність за часом — `О(n)`
 * Складність за пам'яттю — `О(1)`
 */
const findOutlier1 = (numbers) => {
  let evenCount = 0;
  let evenInteger;
  let oddInteger;

  for (const number of numbers) {
    if (number % 2 === 0) {
      evenCount += 1;
      evenInteger = number;
    } else {
      oddInteger = number;
    }
  }

  return evenCount > 1 ? oddInteger : evenInteger;
};

/**
 * Складність за часом — `О(n)`
 * Складність за пам'яттю — `О(n)`
 */
const findOutlier2 = (numbers) => {
  const remainders = numbers.map((number) => number % 2);
  const sum = remainders.reduce((a, b) => a + b, 0);
  const target = sum > 1 ? 0 : 1;
  const index = remainders.indexOf(target);

  return numbers[index];
};

const cardinal = [2, 4, 7, 8, 10];
console.log(findOutlier1(cardinal)); // 7
