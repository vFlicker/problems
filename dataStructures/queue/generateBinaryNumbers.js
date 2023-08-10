/*
  Генерація двійкових чисел від 1 до n за допомогою черги.
*/

import { Queue } from './Queue.js';

/**
 * Складність за часом — `O(n)`
 * Складність за пам'яттю — `O(n)`
 */
const generateBinaryNumbers = (n) => {
  const queue = Queue.of('1');
  const result = [];

  for (let i = 0; i < n; i++) {
    const currentElement = queue.dequeue();

    queue.enqueue(currentElement + '0');
    queue.enqueue(currentElement + '1');

    result.push(currentElement);
  }

  return result;
};

console.log(generateBinaryNumbers(5)); // 1, 10, 11, 100, 101
