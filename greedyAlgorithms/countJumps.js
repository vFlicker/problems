/*
  Напишіть функцію, яка приймає масив з цифр на камінні
  і повертає мінімальну кількість кроків для проходження.
*/

/**
 * Складність за часом — `О(n)`
 * Складність за пам'яттю — `О(1)`
 */
const countJumps = (pebbles) => {
  let steps = 0;
  let currentIndex = 0;

  while (currentIndex < pebbles.length - 1) {
    let maxDistance = 0;
    let nextIndex = 0;

    for (let i = 1; i <= pebbles[currentIndex]; i++) {
      const currentStep = pebbles[currentIndex + i];

      if (maxDistance < currentStep + i) {
        maxDistance = currentStep + i;
        nextIndex = i;
      }
    }

    steps += 1;
    currentIndex += nextIndex;
  }

  return steps;
}

console.log(countJumps([2, 3, 1, 1, 4])); // 2
console.log(countJumps([2, 3, 3, 1, 4, 1, 1, 5, 6])); // 3
