/*
  Визначити, чи масив є підмножиною іншого масиву.
*/

/**
 * Складність за часом — `О(n + m)`
 * Складність за пам'яттю — `О(n)`
 */
const isSubset = (array, subArray) => {
  let map = new Map();

  for (const element of array) {
    let frequency = 1;

    if (map.has(element)) {
      frequency += map.get(element);
    }

    map.set(element, frequency);
  }

  for (const element of subArray) {
    let frequency = map.get(element);

    if (frequency > 0) {
      map.set(element, frequency - 1);
    } else {
      return false;
    }
  }

  return true;
};

console.log(isSubset([1, 2, 3, 4, 5, 4], [2, 3, 4, 4]));
