import { Stack } from './Stack.js'

/**
 * Складність за часом — `O(n^2)`
 * Складність за пам'яттю — `O(n)`
 */
const temperatures1 = (degrees) => {
  const answers = [];

  for (let i = 0; i < degrees.length; i++) {
    for (let j = i + 1; j < degrees.length; j++) {
      if (degrees[j] > degrees[i]) {
        answers.push(j - i);
        break;
      }
    }
  }

  return answers;
};

/**
 * Складність за часом — `O(n)`
 * Складність за пам'яттю — `O(n)`
 */
 const temperatures2 = (degrees) => {
  const stack = new Stack();
  const answers = [];

  for (let i = degrees.length - 1; i >= 0; i--) {
    while (!stack.isEmpty && stack.peek().value <= degrees[i]) {
      stack.pop();
    }

    if (!stack.isEmpty) {
      answers.push(stack.peek().index - i);
    }

    stack.push({ value: degrees[i], index: i });
  }

  return answers.reverse();
};

temperatures1
console.log(temperatures1([13, 12, 15, 11, 9, 12, 16])); // [2, 1, 4, 2, 1, 1]
console.log(temperatures2([13, 12, 15, 11, 9, 12, 16])); // [2, 1, 4, 2, 1, 1]
