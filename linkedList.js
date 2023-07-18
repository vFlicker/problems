/* Linked List */

// При отриманні чергового елемента для вставки в масив ми починаємо просуватися цим масивом зліва направо. Порівнюємо елемент, що вставляється з поточним. Якщо він менший за поточний, то йдемо порівнювати його з наступним, а якщо більше - вставляємо його на цю позицію і зрушуємо кожен з елементів на один вправо (у випадку зі зв'язковим списком вказуємо вставленій ноді батьком попередній елемент, а дитиною - той, на якому зупинилися).

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  get isEmpty() {
    return this.head === null;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    this.length += 1;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
  }

  insert(index, data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      let count = 0;

      while (currentNode !== null && count < index - 1) {
        currentNode = currentNode.next;
        count += 1;
      }

      if (currentNode === null) {
        throw new Error('Index out of range');
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }

    this.length += 1;
  }

  search(data) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  remove(index) {
    let currentNode = this.head;
    let count = 0;

    while (currentNode !== null && count < index - 1) {
      currentNode = currentNode.next;
      count += 1;
    }

    if (currentNode === null) {
      throw new Error('Index out of range');
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      currentNode.next = currentNode.next.next;
    }

    this.length--;
  }
}

const linkedList = new LinkedList();

console.log({length: linkedList.length});
console.log({isEmpty: linkedList.isEmpty});

linkedList.append('2');
linkedList.append('4');
linkedList.append('5');

linkedList.prepend('1');

linkedList.insert(2, '3');

console.log(linkedList.search('3'));

linkedList.remove(0);

console.dir(linkedList, {depth: null});

console.log({isEmpty: linkedList.isEmpty});
console.log({length: linkedList.length});

let count = 0;
const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
  console.log(array);

        count++
          // Якщо поточний більше наступного, змінюємо їх місцями
          if (array[j] > array[j + 1]) {
              [array[j], array[j + 1]] = [array[j + 1], array[j]];
          }
      }
  }

  return array;
};

const array = [2, 1, 3, 5, 4];
console.log(bubbleSort(array));
console.log(count);

