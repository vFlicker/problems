/*
  Сортування значень у стеку.
*/

import { Stack } from './Stack.js'

/**
 * Складність за часом — `O(n^2)`
 * Складність за пам'яттю — `O(n)`
 */
const stackSort = (inputStack) => {
  const sortedStack = new Stack(); // Стек, в який будемо сортувати

  while (!inputStack.isEmpty) { // Поточний елемент зі вхідного стеку
    const currentItem = inputStack.pop();

    while (!sortedStack.isEmpty && sortedStack.peek() > currentItem) {
      // Переміщуємо більші елементи назад в вхідний стек
      inputStack.push(sortedStack.pop());
    }

    // Додаємо поточний елемент на правильну позицію в відсортований стек
    sortedStack.push(currentItem);
  }

  return sortedStack.elements;
};

const data = Stack.of(34, 3, 31, 98, 92, 23);
console.log(stackSort(data)); // [3, 23, 31, 34, 92, 98]
