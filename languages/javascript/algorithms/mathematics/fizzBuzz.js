/*
  Напишіть функцію яка повертає масив, що містить числа
  від 1 до N, де N – значення параметра. Однак замініть
  певні значення, якщо виконується будь-яка з наведених
  нижче умов:
  - Якщо значення кратне 3: замість цього використовуйте
  значення "Fizz".
  - Якщо значення кратне 5: замість цього використовуйте
  значення "Buzz".
  - Якщо значення кратне 3 і 5: замість цього використовуйте
  значення "FizzBuzz". N ніколи не буде менше 1.
*/

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_current, index) => index + start);
};

/**
 * Складність за часом — O(N).
 * Складність за пам'яттю — O(N).
 */
const fizzBuzz = (start, end) => {
  return range(start, end).map((number) => {
    if (number % 15 === 0) return 'FizzBuzz';
    if (number % 5 === 0) return 'Buzz';
    if (number % 3 === 0) return 'Fizz';
    return number;
  });
}