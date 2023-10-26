/*
  Напишіть функцію, яка повертає суму всіх кратних 3 або 5 нижче переданого числа. Крім того, якщо число від’ємне, поверніть 0.
*/

const multiples1 = (number) => {
  let result = 0;

  for (let currentNumber = 3; currentNumber < number; currentNumber++) {
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      result += currentNumber;
    } else if (currentNumber % 3 === 0) {
      result += currentNumber;
    } else if (currentNumber % 5 === 0) {
      result += currentNumber;
    };
  }

  return result;
};

const multiples2 = (number) => {
  let result = 0;

  for (let currentNumber = 3; currentNumber < number; currentNumber++) {
    if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
      result += currentNumber;
    };
  }

  return result;
};

console.log(multiples2(10)); // 23
