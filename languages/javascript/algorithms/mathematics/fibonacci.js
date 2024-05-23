/*
  Напишіть функцію fib(n), яка повертає n-е число Фібоначчі.
*/

/**
 * Складність за часом — O(2^N).
 * Складність за пам'яттю — O(N).
 */
 const fibonacci = (number) => {
  if (number < 2) {
    return number;
  }

  return fibonacci(number - 1) + fibonacci(number - 2);
};