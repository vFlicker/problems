/*
  Напишіть функцію, яка приймає ціле невід'ємне число (prod)
  як вхідні дані та повертає два числа послідовності Фібоначчі
  (F(n) і F(n+1)), разом із прапорцем, що показує,
  чи добуток цих чисел дорівнює заданому числу prod.
*/

const productFibonacci1 = (prod) => {
  let [prev, current] = [0, 1];

  while (true) {
    [prev, current] = [current, current + prev]

    if (prev * current === prod) {
      return [prev, current, true];
    }
  
    if (prev * current > prod) {
      return [prev, current, false];
    }
  }
};

const productFibonacci2 = (prod) => {
  let [prev, current] = [0, 1];

  while (prev * current < prod) {
    [prev, current] = [current, prev + current];
  }

  return [prev, current, prev * current === prod];
};

console.log(productFibonacci1(800)); // [21, 34, false];
console.log(productFibonacci2(800)); // [34, 55, false];