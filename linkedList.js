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

  /**
   * Реалізовує розворот однозв'язного списку.
   * 
   * Цей метод буде працювати повільніше ніж `_reverse2`,
   * через те, що ми кожен раз оновлюємо наш head.
   */
  _reverse1() {
    if (this.head === null) {
      // Порожній список, немає що розгортати
      return;
    }

    const currentNode = this.head;
  
    // Поки currentNode не стане останнім елементом, продовжуємо
    while (currentNode.next !== null) {
      // Запам'ятовуємо новий хед
      // (це наступний елемент після currentNode)
      const newHead = currentNode.next;

      // Змінюємо елемент на котрий вказує currentNode
      currentNode.next = currentNode.next.next;
  
      // Тепер новий хед вказує на хед
      newHead.next = this.head;
  
      // Змінюємо хед
      this.head = newHead;
    }
  }

  /**
   * Реалізовує розворот однозв'язного списку.
   */
  _reverse2() {
    // Ініціалізуємо змінну prevNode як null. Вона буде
    // використовуватись для створення нового розвернутого
    // списку, який буде поступово доповнюватись нодами.
    let prevNode = null;

    // Ініціалізуємо змінну currentNode з початку списку
    // (head).
    let currentNode = this.head;

    // Продовжуємо цикл, доки не дійдемо до кінця списку.
    while (currentNode !== null) {
      // Зберігаємо посилання на наступний елемент старого
      // списку.
      const nextNode = currentNode.next;

      // Перевстановлюємо вказівник на наступний елемент,
      // щоб поточна нода вказувала на попередню ноду,
      // змінюючи напрямок списку.
      // Це додає поточну ноду до нового списку.
      currentNode.next = prevNode;

      // Новий список буде посилатися нашу поточну ноду
      prevNode = currentNode;

      // Старий список вказує на наступний елемент
      currentNode = nextNode;
    }

    this.head = prevNode;
  }
}

const linkedList = new LinkedList();

const data = Array.from({ length: 10000 }, (_, index) => `${index + 1}`);

// for (const item of data) {
//   linkedList.append(item);
// }

linkedList.append('1');
linkedList.append('2');
linkedList.append('3');
linkedList.append('4');
linkedList.append('5');

// benchmark('reverse', () =>linkedList._reverse());
linkedList._reverse2();
console.dir(linkedList, {depth: null});

function benchmark(name, callback) {
  const start = performance.now();

  callback();

  const end = performance.now();

  const time = (end - start) / 1000;

  console.log(`${name} took ${time.toFixed(5)} seconds`);
}


