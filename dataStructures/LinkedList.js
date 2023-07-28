class LinkedListNode {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  _head = null;
  _tail = null;
  _size = 0;

  /**
   * Цей метод створює список з наданих елементів.
   *
   * @param elements елементи для додавання
   * @returns новий список елементів, які були передані як параметри методу
   */
  static of(...elements) {
    const linkedList = new LinkedList();

    for (const element of elements) {
      linkedList.append(element);
    }

    return linkedList;
  }

  /**
   * Перевіряє, чи є список порожнім.
   *
   * @returns {boolean} {@code true} якщо список порожній, {@code false} - інакше
   */
  get isEmpty() {
    return this._head === null;
  }

  /**
   * Повертає кількість елементів у списку.
   *
   * @returns кількість елементів
   */
  get size() {
    return this._size;
  }

  /**
   * Повертає перший елемент списку. Операція виконується за постійний час O(1).
   *
   * @returns перший елемент списку
   * @throws Error якщо список порожній
   */
   get first() {
    this.#checkElementExist();
    return this._head.value;
  }

  /**
   * Повертає останній елемент списку. Операція виконується за постійний час O(1).
   *
   * @returns останній елемент списку
   * @throws Error якщо список порожній
   */
  get last() {
    this.#checkElementExist();
    return this._tail.value;
  }

  /**
   * Додає елемент в кінець списку.
   *
   * @param element елемент для додавання
   */
  append(element) {
    const newNode = new LinkedListNode(element);

    if (this._head === null) {
      this._head = this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }

    this._size += 1;
  }

  /**
   * Додає елемент в початок списку.
   *
   * @param element елемент для додавання
   */
  prepend(element) {
    const newNode = new LinkedListNode(element);

    this.#addAsHead(newNode);

    this._size += 1;
  }

  /**
   * Додає новий елемент на певну позицію у списку.
   *
   * @param index індекс нового елемента
   * @param element елемент для додавання
   * @throws Error якщо наданий індекс виходить за межі списку
   */
  insert(index, element) {
    const newNode = new LinkedListNode(element);

    if (index === 0) {
      this.#addAsHead(newNode);
    } else if (index === this._size) {
      this.#addAsTail(newNode);
    } else {
      this.#add(index, newNode);
    }

    this._size += 1;
  }

  /**
   * Додає елемент у відсортований список.
   *
   * @param element елемент для додавання
   */
  sortInsert(element) {
    const newNode = new LinkedListNode(element);
    
    if (this._head === null || this._head.value > element) {
      this.#addAsHead(newNode);
    } else {
      let currentNode = this._head;

      while (currentNode.next !== null && currentNode.next.value <= element) {
        currentNode = currentNode.next;
      }

      if (currentNode.next === null) {
        this.#addAsTail(newNode);
      } else {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
    }

    this._size += 1;
  }

  /**
   * Змінює значення елемента списку за певним індексом.
   *
   * @param index позиція елемента для зміни
   * @param element нове значення елемента
   * @throws Error якщо наданий індекс виходить за межі списку
   */
  set(index, element) {
    const currentNode = this.#findNodeByIndex(index);
    currentNode.value = element;
  }

  /**
   * Повертає елемент за його позицією індексу.
   *
   * @param index індекс елемента
   * @returns значення елемента
   * @throws Error якщо наданий індекс виходить за межі списку
   */
  getByIndex(index) {
    const currentNode = this.#findNodeByIndex(index);
    return currentNode.value;
  }

  /**
   * Отримання N-го вузла з кінця списку.
   */
  getNthFromLastByIndex(index) {
    const currentNode = this.#findNodeByIndex(this._size - index - 1);
    return currentNode.value;
  }

  /**
   * Видаляє елемент за його позицією індексу.
   *
   * @param index індекс елемента
   * @returns видалений елемент
   * @throws Error якщо наданий індекс виходить за межі списку
   */
  remove(index) {
    this.#checkIndex(index);

    let deletedElement;

    if (index === 0 && this._head !== null) {
      deletedElement = this._head.value;
      this.#removeHead();
    } else {
      const previousNode = this.#findNodeByIndex(index - 1);

      deletedElement = previousNode.next.element;
      previousNode.next = previousNode.next.next;

      if (index === this._size - 1) {
        this._tail = previousNode;
      }
    }

    this._size -= 1;

    return deletedElement;
  }

  /**
   * Перевіряє, чи існує певний елемент у списку.
   * 
   * @param element шуканий елемент
   * @returns {boolean} {@code true} якщо елемент існує, {@code false} - інакше
   */
  contains(element) {
    let currentNode = this._head;

    while (currentNode !== null) {
      if (currentNode.value === element) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  /**
   * Видаляє всі елементи зі списку.
   */
  clear() {
    this._head = this._tail = null;
    this._size = 0;
  }

  /**
   * Видаляє всі дублікати зі списку.
   */
  removeDuplicates() {
    const values = new Set();
    let currentNode = this._head;
    let previousNode = null;

    while (currentNode !== null) {
      if (!values.has(currentNode.value)) {
        values.add(currentNode.value)
        previousNode = currentNode;
      } else {
        previousNode.next = currentNode.next;

        if (currentNode.next === null) {
          this._tail = previousNode;
        }

        this._size -= 1;
      }

      currentNode = currentNode.next;
    }
  }

  /**
   * Розвертає однозв'язного списку.
   */
  reverse1() {
    // Ініціалізуємо змінну previousNode як null. Вона буде
    // використовуватись для створення нового розвернутого
    // списку, який буде поступово доповнюватись нодами.
    let previousNode = null;

    // Ініціалізуємо змінну currentNode з початку списку
    // (head).
    let currentNode = this._head;

    // Продовжуємо цикл, доки не дійдемо до кінця списку.
    while (currentNode !== null) {
      // Зберігаємо посилання на наступний елемент старого
      // списку.
      const nextNode = currentNode.next;

      // Перевстановлюємо вказівник на наступний елемент,
      // щоб поточна нода вказувала на попередню ноду,
      // змінюючи напрямок списку.
      // Це додає поточну ноду до нового списку.
      currentNode.next = previousNode;

      // Новий список буде посилатися нашу поточну ноду
      previousNode = currentNode;

      // Старий список вказує на наступний елемент
      currentNode = nextNode;
    }

    this._tail = this._head;
    this._head = previousNode;
  }

  /**
   * Розвертає однозв'язного списку. Використовує стек.
   */
  reverse2() {
    const stack = [];
    let currentNode = this._head;

    while (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.next;
    }

    this._tail = this._head;
    this._head = stack.pop();
    let newHead = this._head;

    while (stack.length !== 0) {
      newHead.next = stack.pop();
      newHead = newHead.next;
    }

    newHead.next = null;
  }

  /**
   * Розвертає однозв'язного списку. Використовує рекурсію.
   */
  reverse3() {
    const recursive = (previousNode, currentNode) => {
      if (currentNode === null) {
        return previousNode;
      }
  
      // Це старий список
      // 1 крок: nextNode2 --> 2
      // 2 крок: nextNode3 --> 3
      const nextNode = currentNode.next;
  
      // Це новий список
      // 1 крок: nextNode2 --> null
      // 2 крок: nextNode3 --> null
      currentNode.next = previousNode;
  
      // 1 крок: currentNode --> 1, nextNode --> 2
      // 2 крок: currentNode --> 2, nextNode --> 3
      return recursive(currentNode, nextNode);
    }

    this._tail = this._head;
    this._head = recursive(null, this._head);
  }

  /**
   * Робить список циклічним.
   */
  doCircular() {
    let currentNode = this._head;

    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = this._head.next;
  }

  /**
   * Визначає наявність циклу в списку.
   *
   * Складність за часом — `O(n)`.
   * Складність за пам'яттю — `O(n)`.
   *
   * @returns {boolean} {@code true} якщо цикл існує, {@code false} - інакше
   */
   isCircular1() {
    const nodes = new Set();

    let currentNode = this._head;

    while (currentNode !== null) {
      if (nodes.has(currentNode)) {
        return true;
      }

      nodes.add(currentNode);
      currentNode = currentNode.next;
    }

    return false;
  }

  /**
   * Визначає наявність циклу в списку.
   * Метод "Черепахи" і "Зайця".
   *
   * Складність за часом — `O(n)`.
   * Складність за пам'яттю — `O(1)`.
   * 
   * @returns {boolean} {@code true} якщо цикл існує, {@code false} - інакше
   */
  isCircular2() {
    let tortoise = this._head;
    let hare = this._head.next;

    while (tortoise !== null && hare !== null) {
      tortoise = tortoise.next;
      hare = hare.next.next;

      if (tortoise === hare) {
        return true;
      }
    }

    return false;
  }

  #addAsHead(newNode) {
    newNode.next = this._head;
    this._head = newNode;

    if (this._head.next === null) {
      this._tail = newNode;
    }
  }

  #addAsTail(newNode) {
    this._tail.next = newNode;
    this._tail = newNode;
  }

  #add(index, newNode) {
    const previousNode = this.#findNodeByIndex(index - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
  }

  #findNodeByIndex(index) {
    this.#checkIndex(index);

    if (index === this._size - 1) {
      return this._tail;
    } else {
      return this.#nodeAt(index);
    }
  }

  #nodeAt(index) {
    let currentNode = this._head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  #removeHead() {
    this._head = this._head.next;

    if (this._head === null) {
      this._tail = null;
    }
  }

  #checkIndex(index) {
    if (index < 0 || index >= this._size) {
      throw new Error(`Індекс ${index} виходить за межі списку.`)
    }
  }

  #checkElementExist() {
    if (this._head === null) {
      throw new Error('Список порожній.');
    }
  }
}

