/*
  Знайти симетричну пару.
*/

/**
 * Складність за часом — `O(n)`
 * Складність за пам'яттю — `O(n)`
 */
const findSymPairs = (arrays) => {
  const map = new Map();
  const result = [];

  for (const array of arrays) {
    const [first, second] = array;
    const currentValue = map.get(second);

    if (currentValue !== undefined && currentValue === first) {
      result.push(array);
    } else {
      map.set(first, second);
    }
  }

  return result;
};

console.log(findSymPairs([
  [0, 1],
  [11, 20],
  [30, 40],
  [5, 10],
  [40, 30],
  [10, 5],
])); // [[ 40, 30 ], [ 10, 5 ]]
