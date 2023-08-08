/*
  Напишіть функцію, яка генерує масив рядків для анімації печаті. На вході отримується рядок у форматі "ab#c", де символ '#' вказує на стирання попереднього символу. Функція повертає масив рядків, які відображають послідовну печать заданого рядка зі зникаючими символами.

  Наприклад, для вхідного рядка "ab#c" функція поверне масив:
  [
    "a",      // Перша буква "a".
    "ab",     // Печать букв "a" та "b".
    "a",      // Печать букви "a" після стирання "b".
    "ac"      // Печать букв "a" та "c".
  ]
*/

const printAnimation = (string) => {
  const stack = [];
  const animation = [];

  for (const character of string) {
    if (character === '#') {
      stack.pop();
    } else {
      stack.push(character);
    }

    animation.push(stack.join(''));
  }

  return animation;
};

console.log(printAnimation("ab#c")); // ["a", "ab", "a", "ac"]

export {};
