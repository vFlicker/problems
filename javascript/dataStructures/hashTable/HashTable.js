class HashTableNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

/**
 * Клас {@link HashTable} є простою реалізацією Map на основі хеш-таблиці.
 * Вона базується на масиві об'єктів {@link HashTableNode}.
 */
 class HashTable {
  static #DEFAULT_CAPACITY = 8;
  static #COLLISIONS_NUMBER = 3;

  #table = [];
  #size = 0;

  constructor(capacity = HashTable.#DEFAULT_CAPACITY) {
    this.#verifyCapacity(capacity);

    /** @type {HashTableNode[]} */
    this.#table = this.#createTable(capacity);
  }

  /**
   * Приймає ключ і обчислює його індекс за допомогою хеш-коду.
   *
   * @param key ключ
   * @param tableCapacity початковий розмір масиву
   * @return індекс масиву для заданого ключа
   */
  static calculateIndex(key, tableCapacity) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue % tableCapacity;
  }

  /**
   * Повертає кількість елементів в таблиці.
   *
   * @return розмір таблиці
   */
  get size() {
    return this.#size;
  }
  
  /**
   * Перевіряє, чи таблиця є порожньою.
   *
   * @return true, якщо розмір таблиці дорівнює нулю, або false, якщо ні
   */
  get isEmpty() {
    return this.#size === 0;
  }

  /**
   * Створює зв'язок між заданим ключем та значенням і повертає старе значення. Якщо такого ключа не було, повертає `null`.
   * {@link HashTable} не підтримує дублікати ключів, тому якщо ви додаєте той самий ключ, він просто перезаписує значення.
   *
   * @param key ключ
   * @param value значення
   * @return старе значення або null
   */
  put(key, value) {
    this.#resizeIfNeeded();
    return this.#putOnTable(this.#table, key, value);
  }

  /**
   * Отримує значення за заданим ключем.
   *
   * @param key ключ
   * @return значення, збережене в таблиці за заданим ключем, або null, якщо такого ключа немає
   */
  get(key) {
    const hashIndex = HashTable.calculateIndex(key, this.#table.length);
    let currentNode = this.#table[hashIndex];

    while (currentNode !== null) {
      if (currentNode.key === key) {
        return currentNode.value;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * Перевіряє, чи міститься заданий ключ в таблиці.
   *
   * @param key ключ
   * @return true, якщо ключ присутній в таблиці, або false, якщо ні
   */
  containsKey(key) {
    return this.get(key) !== null;
  }

  /**
   * Перевіряє, чи міститься задане значення в таблиці.
   *
   * @param value значення
   * @return true, якщо значення присутнє в таблиці, або false, якщо ні
   */
  containsValue(value) {
    for (let currentNode of this.#table) {
      while (currentNode !== null) {
        if (currentNode.value === value) {
          return true;
        }

        currentNode = currentNode.next;
      }
    }

    return false;
  }

  /**
   * Видаляє елемент за його ключем і повертає видалене значення. Якщо такого ключа немає в таблиці, повертає `null`.
   *
   * @param key ключ
   * @return видалене значення або null
   */
  remove(key) {
    const hashIndex = HashTable.calculateIndex(key, this.#table.length);
    let currentNode = this.#table[hashIndex];
    let previousNode = null;

    while (currentNode !== null) {
      if (currentNode.key === key) {
        const currentValue = currentNode.value;

        if (previousNode === null) {
          this.#table[hashIndex] = currentNode.next;
        } else {
          previousNode.next = previousNode.next.next;
        }

        this.#size -= 1;
        return currentValue;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * Візуалізує хеш-таблицю. Метод створює рядок, що представляє масив як таблицю.
   *
   * @return рядок, що представляє хеш-таблицю
   */
  toString() {
    let message = '';

    for (let i = 0; i < this.#table.length; i++) {
      const parts = [];
      let currentNode = this.#table[i];

      while (currentNode !== null) {
        parts.push(`${currentNode.key}=${currentNode.value}`);
        currentNode = currentNode.next;
      }

      message += `${i}: ${parts.join(' -> ')}\n`;
    }

    return message;
  }

  #resizeIfNeeded() {
    for (let currentNode of this.#table) {
      let collisionsNumber = 0;

      while (currentNode !== null) {
        collisionsNumber += 1;
        currentNode = currentNode.next;
      }

      if (collisionsNumber >= HashTable.#COLLISIONS_NUMBER) {
        this.#resizeTable(HashTable.#DEFAULT_CAPACITY * 2);
        break;
      }
    }
  }

    /**
   * Створює новий базовий масив з заданим розміром і додає всі елементи в новий масив.
   *
   * @param newCapacity новий розмір базового масиву
   */
  #resizeTable(newCapacity) {
    this.#verifyCapacity(newCapacity);
    const newTable = this.#createTable(newCapacity);
    this.#size = 0;

    for (let currentNode of this.#table) {
      while (currentNode !== null) {
        this.#putOnTable(newTable, currentNode.key, currentNode.value);
        currentNode = currentNode.next;
      }
    }

    this.#table = newTable;
  }

  #createTable(capacity) {
    const table = new Array(capacity).fill(null);
    return table;
  }

  #putOnTable(table, key, value) {
    const hashIndex = HashTable.calculateIndex(key, table.length);
    const newNode = new HashTableNode(key, value);

    if (table[hashIndex] === null) {
      table[hashIndex] = newNode;
    } else {
      let currentNode = table[hashIndex];
      let previousNode = null;

      while (currentNode !== null) {
        if (currentNode.key === key) {
          const previousValue = currentNode.value;
          currentNode.value = value;
          return previousValue;
        }
 
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = newNode;
    }

    this.#size += 1;
    return null;
  }

  #verifyCapacity(capacity) {
    if (capacity < 0) {
      throw new Error('Ємність (розмір масиву таблиці) має бути позитивною');
    }
  }
}
