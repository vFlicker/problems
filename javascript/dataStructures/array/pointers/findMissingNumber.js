/*
  Знайти пропущене число у відсортованому масиві.
*/

/**
 * За часом — `О(log(n)`
 * За пам'яттю — `О(1)`
 */
const findMissingNumber = (array) => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer <= rightPointer) { // 0 <= 6, 4 <= 6, 4 <= 4
    const middleIndex = Math.floor((leftPointer + rightPointer) / 2); // 3, 5, 4
    const element = array[middleIndex]; // 5, 8, 6
    const wantedElement = middleIndex + array[0]; // 5, 7, 6

    if (element > wantedElement) {
      rightPointer = middleIndex - 1;
    } else if (wantedElement === element) {
      leftPointer = middleIndex + 1;
    }
  }

  return leftPointer + array[0];
};

console.log(findMissingNumber([2, 3, 4, 5, 6, 8, 9])); // 7
