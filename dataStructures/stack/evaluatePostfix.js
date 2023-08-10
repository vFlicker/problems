/*
  Обчислення постфіксного виразу за допомогою стека.
*/

import { Stack } from './Stack.js'

const PLUS = '+';
const MINUS = '-';
const MULTIPLY = '*';
const DIVIDE = '/';

const isOperation = (character) => {
  return character === PLUS
    || character === MINUS
    || character === MULTIPLY
    || character === DIVIDE;
};

/**
 * Складність за часом — `O(n)`
 * Складність за пам'яттю — `O(n)`
 */
const evaluatePostfix = (string) => {
  const stack = new Stack();

  for (const character of string) {
    if (isOperation(character) === false) {
      stack.push(Number(character));
    } else {
      const firstNumber = stack.pop();
      const secondNumber = stack.pop();

      switch (character) {
        case PLUS:
          stack.push(secondNumber + firstNumber);
          break;
        case MINUS:
          stack.push(secondNumber - firstNumber);
          break;
        case MULTIPLY:
          stack.push(secondNumber * firstNumber);
          break;
        case DIVIDE:
          stack.push(secondNumber / firstNumber);
          break;
      }
    }
  }

  return stack.pop();
};

console.log(evaluatePostfix('456*+')); // 34
console.log(evaluatePostfix('12345*+*+')); // 47
