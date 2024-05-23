/*
  Напишіть функцію fib(n), яка повертає n-е число Фібоначчі.
  Використайте кешування.
*/

/**
 * Складність за часом — O(N).
 * Складність за пам'яттю — O(N).
 */
const getCachedFibonacci = () => {
  const map = new Map();

  const fibonacci = (number) => {
    if (number < 2) {
      return number;
    }

    if (!map.has(number)) {
      const result = fibonacci(number - 1) + fibonacci(number - 2);
      map.set(number, result);
    }

    return map.get(number);
  };

  return fibonacci;
};

const cachedFibonacci = getCachedFibonacci();
console.log(cachedFibonacci(21));
