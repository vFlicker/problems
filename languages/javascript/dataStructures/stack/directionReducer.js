/*
  Напишіть функцію, яка братиме масив рядків
  і повертатиме масив рядків без непотрібних
  напрямків (W<->E або S<->N поруч).
*/

import { Stack } from './Stack.js'

const cardinalMap = new Map(Object.entries({
  'NORTH': 'SOUTH',
  'SOUTH': 'NORTH',
  'EAST': 'WEST',
  'WEST': 'EAST',
}));

const directionReducer = (cardinal) => {
  const simplifiedDirection = new Stack();

  for (let i = 0; i < cardinal.length; i++) {
    const currentDirection = cardinal[i];
    const oppositeToCurrentDirection = cardinalMap.get(currentDirection);

    if (simplifiedDirection.isEmpty || simplifiedDirection.peek() !== oppositeToCurrentDirection) {
      simplifiedDirection.push(currentDirection);
    } else {
      simplifiedDirection.pop()
    }
  }

  return simplifiedDirection.elements;
};

console.log(directionReducer(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // "WEST"