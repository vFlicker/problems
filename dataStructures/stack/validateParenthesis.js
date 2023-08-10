/*
  Провалідувати, що дужки коректно розставлені.
*/

import { Stack } from './Stack.js'

/**
 * Складність за часом — `O(n)`
 * Складність за пам'яттю — `O(n)`
 */
const validateParenthesis = (data) => {
  const string = data.trim();

  const bracket = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const openBrackets = new Set(Object.keys(bracket));
  const closeBrackets = new Set(Object.values(bracket));

  const stack = new Stack();

  for (const character of string) {
    if (openBrackets.has(character)) {
      stack.push(character);
    };

    if (closeBrackets.has(character)) {
      const open = stack.pop();

      if (bracket[open] !== character) {
        return false;
      };
    }
  }

  return stack.isEmpty;
};

console.log(validateParenthesis('[([{}{}])]')); // true
console.log(validateParenthesis('([)]')); // false
