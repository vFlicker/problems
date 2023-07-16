// const Direction = {
//   RIGHT: 'right',
//   DOWN: 'down',
//   LEFT: 'left',
//   UP: 'up',
// };

// const createStepDirection = (stepY, stepX, input) => (y, x, coords, result) => {
//   const findCoord = (x, y) => {
//     const res = coords.find(([foundX, foundY]) => x === foundX && y === foundY);
//     return Boolean(res);
//   };

//   const subArray = input[y + stepY];
//   if (!subArray) return false;

//   const number = subArray[x + stepX];
//   if (!number || findCoord(y + stepY, x + stepX)) return false;

//   coords.push([y + stepY, x + stepX]);
//   result.push(number);

//   return true;
// };

// const snail = (input) => {
//   if (!input[0].length) return [];

//   const coords = [[0, 0]];
//   const result = [input[0][0]];
//   const inputLength = input.flat().length;
//   let currentDirection = Direction.RIGHT;

//   const doRightStep = createStepDirection(0, 1, input);
//   const doDownStep = createStepDirection(1, 0, input);
//   const doLeftStep = createStepDirection(0, -1, input);
//   const doUpStep = createStepDirection(-1, 0, input);

//   while (inputLength !== result.length) {
//     const run = (action, nextDirection) => {
//       const [y, x] = coords[coords.length - 1];
//       const success = action(y, x, coords, result);
//       if (!success) currentDirection = nextDirection;
//     };

//     switch(currentDirection) {
//       case Direction.RIGHT:
//         run(doRightStep, Direction.DOWN);
//         break;
//       case Direction.DOWN:
//         run(doDownStep, Direction.LEFT);
//         break;
//       case Direction.LEFT:
//         run(doLeftStep, Direction.UP);
//         break;
//       case Direction.UP:
//         run(doUpStep, Direction.RIGHT);
//         break;
//     }
//   }

//   return result;
// };

// snail = function(array) {
//   var result;
//   while (array.length) {
//     // Steal the first row.
//     result = (result ? result.concat(array.shift()) : array.shift());
//     // Steal the right items.
//     for (var i = 0; i < array.length; i++)
//       result.push(array[i].pop());
//     // Steal the bottom row.
//     result = result.concat((array.pop() || []).reverse());
//     // Steal the left items.
//     for (var i = array.length - 1; i >= 0; i--)
//       result.push(array[i].shift());
//   }
//   return result;
// }

// function snail(array) {
//   var vector = [];
//   while (array.length) {
//     vector.push(...array.shift());
//     array.map(row => vector.push(row.pop()));
//     array.reverse().map(row => row.reverse());
//   }
//   return vector;
// }

// function snail(array) {
//   const result = [];

//   while (array.length > 0) {
//     // extract the top row
//     result.push(...array.shift());

//     // extract the right column
//     for (let i = 0; i < array.length; i++) {
//       result.push(array[i].pop());
//     }

//     // extract the bottom row (in reverse order)
//     if (array.length > 0) {
//       result.push(...array.pop().reverse());
//     }

//     // extract the left column (in reverse order)
//     for (let i = array.length - 1; i >= 0; i--) {
//       if (array[i].length > 0) {
//         result.push(array[i].shift());
//       }
//     }
//   }

//   return result;
// }

// console.log(snail([
//   [
//     805, 316, 119, 231, 543,
//     374, 982, 773, 495, 509,
//     936, 362, 777, 470, 600,
//     716, 149, 619
//   ],
//   [
//     999, 701, 320, 511, 542,
//      71, 941, 178, 655, 810,
//     239, 221, 325, 445, 223,
//     689, 275, 969
//   ],
//   [
//     859, 520, 121, 378, 365,  9,
//     759, 816, 297, 918, 579, 29,
//     85, 788,  65, 495, 877, 591
//   ],
// ]));

const countJumps1 = (pebbles) => {
  let previousPosition = 0;
  let currentPosition = 0;
  let jumps = 0;
  
  while (currentPosition < pebbles.length - 1) {
    let maxReach = 0;

    for (let i = previousPosition; i < currentPosition + 1; i++) {
      maxReach = Math.max(maxReach, pebbles[i] + i);
    }
    
    previousPosition = currentPosition + 1;
    currentPosition = maxReach;
    jumps += 1;
  }

  return jumps;
}

const countJumps2 = (pebbles) => {
  // Максимальна дальність, яку можна досягти з поточного каменю
  let maxReach = pebbles[0];

  // Кількість кроків, доступних із поточного каменю
  let steps = pebbles[0];

  // Мінімальна кількість стрибків для досягнення поточного каменю
  let jumps = 1;
  
  for (let index = 1; index < pebbles.length; index++) {
    // Досягнуто останнього каміння
    if (index === pebbles.length - 1) return jumps;

    // Оновлюємо максимальну дальність
    maxReach = Math.max(maxReach, index + pebbles[index]);

    // Зменшуємо кількість доступних кроків
    steps--;

    if (steps === 0) {
      // Не залишилося доступних кроків із поточного каменю, тому робимо стрибок
      jumps++;

      // Кількість кроків, доступних із нового поточного каменю
      steps = maxReach - index;
    }
  }
  
  return jumps;
};

const countJumps3 = (pebbles) => {
  let jumps = 0;

  let previousPosition = 0; // Позиция предыдущего оптимального прыжка
  let currentPosition = 0; // Позиция текущего прыжка

  // Пока не допрыгали до конца...
  while (currentPosition < pebbles.length - 1) {
    // Прыгаем!
    jumps++;

    // Нам нужно обойти все камни, которые мы можем достигнуть с предыдущего до текущего прыжка
    // Но так как дальше мы будем менять previousPosition, я заранее сохраняю его
    let candidate = previousPosition;

    // Текущий прыжок становится предыдущим
    previousPosition = currentPosition;

    while (candidate <= previousPosition) {
      // А текущий прыжок — это максимально достижимый камень с предыдущей
      currentPosition = Math.max(currentPosition, candidate + pebbles[candidate]);
      candidate++;
    }
  }

  return jumps;
}

// const data = [2, 3, 3, 1, 4, 1, 1, 5, 6];
// console.log(countJumps1(data));
// console.log(countJumps2(data));
// console.log(countJumps3(data));

// const getNumberOfWays = (steps, maxJumpLength) => {
//   return 0
// }

// console.log(solution(3, 3)); // 4

// // 4 3
// [1, 1, 1, 1] // 4
// [0, 1, 1, 2] // 4
// [0, 1, 2, 1] // 4
// [0, 2, 1, 1] // 4
// [0, 0, 2, 2] // 4
// [0, 0, 1, 3] // 4
// [0, 0, 3, 1] // 4

/* Linked List */

// При отриманні чергового елемента для вставки в масив ми починаємо просуватися цим масивом зліва направо. Порівнюємо елемент, що вставляється з поточним. Якщо він менший за поточний, то йдемо порівнювати його з наступним, а якщо більше - вставляємо його на цю позицію і зрушуємо кожен з елементів на один вправо (у випадку зі зв'язковим списком вказуємо вставленій ноді батьком попередній елемент, а дитиною - той, на якому зупинилися).

class Node {
  constructor(value, next = null) {
      this.value = value;
      this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    const newNode = new Node(value);

    // if (this.tail) {
    //   this.tail.next = newNode;
    // }

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }

  get(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  has(value) {
    return this.get(value) !== null;
  }

  delete(value) {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }

      currentNode = currentNode.next;
    }
  }

  reverse() {
    let lastNode = this.head;

    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }

    let lastLastNode = lastNode;

    for (let index = this.length - 2; index >= 0; index--) {
      let j = index;
      let currentNode = this.head;

      while (j > 0) {
        currentNode = currentNode.next;
        j--;
      }

      lastLastNode.next = new Node(currentNode.value);
      lastLastNode = lastLastNode.next;
    }

    this.head = lastNode;
    return this.head;
  }

  reverse() {
    let previousNode = null; // null
    let currentNode = this.head; // 1
  
    while (currentNode !== null) {
      const nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
  
    this.head = previousNode;
    return this.head;
  }

  values() {
    const values = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values;
  }
}

const linkedList = new LinkedList();

linkedList.add('1');
linkedList.add('2');
linkedList.add('3');
linkedList.add('4');

// console.dir(linkedList.head, {depth: null});
// console.dir(linkedList.reverse(), {depth: null});

// console.log(linkedList.length);

// console.log(linkedList.get('2'));
// console.log(linkedList.get('99'));

// console.log(linkedList.has('2'));
// console.log(linkedList.has('99'));

// linkedList.delete('4');
// linkedList.delete('99');
// console.dir(linkedList.head, {depth: null});

// console.log(linkedList.values());

let itt = 0;

const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        itt++;
          const current = array[j]; // поточний елемент
          const next = array[j + 1]; // наступний елемент

          // якщо поточний більше наступного, змінюємо їх місцями
          if (current > next) {
              array[j] = next;
              array[j + 1] = current;
          }
      }
  }

  return array;
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;

      // знаходимо мінімальний елемент у підмасиві
      for (let j = i + 1; j < array.length; j++) {
        itt++;
          if (array[j] < array[minIndex]) {
              minIndex = j;
          }
      }

      // міняємо місцями поточний елемент і мінімальний елемент
      if (minIndex !== i) {
          const temp = array[i];
          array[i] = array[minIndex];
          array[minIndex] = temp;
      }
  }

  return array;
};

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
      const currentElement = array[i];
      let j = i - 1;

      // Знаходимо позицію для вставки поточного елемента
      while (j >= 0 && array[j] > currentElement) {
          itt++;

          array[j + 1] = array[j];
          j -= 1;
      }

      array[j + 1] = currentElement;
  }

  return array;
};

const array = [1, 2, 3, 4, 5, 6, 9, 8, 7];
// console.log(insertionSort(array));
// console.log(itt);

const getNewSize = (matrix, factor) => {
  const originalRows = matrix.length;
  const originalCols = matrix[0].length;
  const newRows = originalRows * factor;
  const newCols = originalCols * factor;

  const newMatrix = Array.from({ length: newRows }, () => {
    return Array(newCols).fill(null);
  });

  const incrementRow = factor >= 1 ? 1 : originalRows / (originalRows * factor);
  const incrementCell = factor >= 1 ? 1 : originalCols / (originalCols * factor);

  for (let rowIndex = 0; rowIndex < originalRows; rowIndex += incrementRow) {
    for (let cellIndex = 0; cellIndex < originalCols; cellIndex += incrementCell) {
      const value = matrix[rowIndex][cellIndex];

      for (let i = 0; i < factor; i++) {
        for (let j = 0; j < factor; j++) {
          newMatrix[rowIndex * factor + i][cellIndex * factor + j] = value;
        }
      }
    }
  }

  return newMatrix;
};

const input2 = [
  ['00ff00', '00ff00', '00ff00'],
  ['00ff00', 'ffffff', '00ff00'],
  ['00ff00', '00ff00', '00ff00'],
]

const input3 = [
  [ '00ff00', '00ff00', '00ff00', '00ff00', '00ff00', '00ff00' ],
  [ '00ff00', '00ff00', '00ff00', '00ff00', '00ff00', '00ff00' ],
  [ '00ff00', '00ff00', 'ffffff', 'ffffff', '00ff00', '00ff00' ],
  [ '00ff00', '00ff00', 'ffffff', 'ffffff', '00ff00', '00ff00' ],
  [ '00ff00', '00ff00', '00ff00', '00ff00', '00ff00', '00ff00' ],
  [ '00ff00', '00ff00', '00ff00', '00ff00', '00ff00', '00ff00' ]
];

// console.log(getNewSize(input3, 0.5));




// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36, 34, 32, 30, 102, 1000, 6, 8, 14])); // 11
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160


// http://cs-playground-react.surge.sh/