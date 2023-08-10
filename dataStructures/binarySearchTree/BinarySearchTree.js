class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  _root = null;
  _size = 0;

  /**
   * Цей метод створює дерево з наданих елементів.
   *
   * @param elements елементи для додавання
   * @returns новий список елементів, які були передані як параметри методу
   */
  static of(...elements) {
    const binarySearchTree = new BinarySearchTree();

    for (const element of elements) {
      binarySearchTree.insert(element);
    }

    return binarySearchTree;
  }

  /**
   * Повертає кількість елементів у дереві.
   *
   * @returns кількість елементів у дерева
   */
  get size() {
    return this._size;
  }

  /**
   * Вставляє елемент в дерево.
   *
   * @param element елемент для вставки
   * @returns {boolean} {@code true} якщо елемент ще не існує в дереві і був успішно вставлений, {@code false} — інакше
   */
  insert(element) {
    const isInserted = this.#insertElement(element);

    if (isInserted) {
      this._size += 1;
    }

    return isInserted;
  }

  /**
   * Перевіряє, чи міститься елемент у дереві.
   *
   * @param element елемент для перевірки
   * @returns {boolean} {@code true} якщо дерево містить заданий елемент, {@code false} — інакше
   */
  contains(element) {
    return this.#contains(this._root, element);
  }

  /**
   * Поверне батьківський вузол у заданому бінарному дереві.
   *
   * @param element елемент батьківський вузол якого треба повернути
   * @returns батьківський вузол якщо дерево містить заданий елемент, або null, якщо такого елемента немає
   */
  getParent(element) {
    return this.#getParent(this._root, element);
  }

  /**
   * Знаходить k-е максимальне значення у дереві.
   *
   * @param {number} k значення елементу у дереві, яке потрібно знайти
   * @returns значення k-го максимального елемента або null, якщо такого елемента немає
   */
  KthLargest(k) {
    const stack = [];

    this.#KthLargest(this._root, stack);

    if (stack.length < k) {
      return null;
    } else {
      return stack[stack.length - k];
    }
  }

  /**
   * Знаходить всі значення, розташовані на відстані k від кореневого вузла.
   *
   * @param {number} k відстань, на якій шукаються значення від кореневого вузла
   * @returns {number[]} масив значень, розташованих на відстані k від кореневого вузла
   */
  findKDistant1(k) {
    const values = [];

    this.#findKDistant(this._root, values, k, 0);

    return values;
  }

  /**
   * Знаходить всі значення, розташовані на відстані k від кореневого вузла,
   * використовуючи пошук у ширину (BFS).
   *
   * @param {number} k відстань, на якій шукаються значення від кореневого вузла
   * @returns {number[]} масив значень, розташованих на відстані k від кореневого вузла
   */
  findKDistant2(k) {
    const queue = [this._root];
    const values = [];
    let depth = 0;

    while (queue.length !== 0) {
      const { length } = queue;
 
      if (depth === k) {
        for (let i = 0; i < length; i++) {
          values.push(queue[i].value);
        }

        break;
      }

      for (let i = 0; i < length; i++) {
        const currentNode = queue.shift();

        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }

        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }

      depth += 1;
    }

    return values;
  }

  /**
   * Повертає максимальну кількість переходів між кореневим вузлом та будь-яким іншим вузлом; 0 - якщо дерево порожнє або містить лише 1 елемент.
   *
   * @returns максимальна кількість переходів
   */
  depth() {
    return this._root !== null ? this.#depth(this._root) - 1 : 0;
  }

  /**
   * Повертає максимальну суму шляху в дереві починаючи з `_root`.
   *
   * Складність за часом — `O(V)`, де `V` — кількість нод
   * Складність за пам'яттю — `O(V)`, де `V` — кількість нод
   *
   * @returns максимальна кількість переходів
   */
  getMaxPathSumFromRoot() {
    return this.#getMaxPathSumFromRoot(this._root);
  }

  /**
   * Повертає максимальну суму шляху в дереві.
   *
   * Складність за часом — `O(V)`, де `V` — кількість нод
   * Складність за пам'яттю — `O(V)`, де `V` — кількість нод
   *
   * @returns максимальна кількість переходів
   */
  getMaxPathSum() {
    const max = { value: 0 };

    this.#getMaxPathSum(this._root, max);

    return max.value;
  }

  /**
   * Обходить дерево, спочатку відвідуючи поточний вузол, а потім рекурсивно відвідуючи його ліве та праве піддерева.
   *
   * @param consumer приймає посилання на вузол під час обходу
   */
  preOrderTraversal(consumer) {
    this.#preOrderTraversal(this._root, consumer);
  }

  /**
   * Обходить дерево у природньому порядку елементів.
   * 
   * @param consumer приймає посилання на вузол під час обходу
   */
  inOrderTraversal(consumer) {
    this.#inOrderTraversal(this._root, consumer);
  }

  /**
   * Обходить дерево, спочатку рекурсивно відвідуючи ліве та праве піддерева поточного вузла, а потім відвідуючи сам поточний вузол.
   *
   * @param consumer приймає посилання на вузол під час обходу
   */
  postOrderTraversal(consumer) {
    this.#postOrderTraversal(this._root, consumer);
  }

  /**
   * Видаляє елемент з дерева.
   *
   * @param element елемент для видалення
   * @returns значення елемента якщо елемент існує в дереві і був успішно видалений, {@code null} — інакше
   */
  remove(element) {
    const removedElement = this.#remove(this._root, element);

    if (removedElement !== null) {
      this._size -= 1;
    }

    return removedElement;
  }

  #insertElement(element) {
    if (this._root === null) {
      this._root = new BinarySearchTreeNode(element);
      return true;
    } else {
      return this.#insertIntoSubTree(this._root, element);
    }
  }

  #insertIntoSubTree(subTreeRoot, element) {
    if (subTreeRoot.value > element) {
      return this.#insertIntoLeftSubtree(subTreeRoot, element);
    } else if (subTreeRoot.value < element) {
      return this.#insertIntoRightSubtree(subTreeRoot, element);
    } else {
      return false;
    }
  }

  #insertIntoLeftSubtree(currentNode, element) {
    if (currentNode.left === null) {
      currentNode.left = new BinarySearchTreeNode(element);
      return true;
    } else {
      return this.#insertIntoSubTree(currentNode.left, element);
    }
  }

  #insertIntoRightSubtree(currentNode, element) {
    if (currentNode.right === null) {
      currentNode.right = new BinarySearchTreeNode(element);
      return true;
    } else {
      return this.#insertIntoSubTree(currentNode.right, element);
    }
  }

  #contains(currentNode, element) {
    if (currentNode === null) {
      return false;
    } else if (currentNode.value > element) { // go left
      return this.#contains(currentNode.left, element);
    } else if (currentNode.value < element) { // go right
      return this.#contains(currentNode.right, element);
    } else if (currentNode.value === element) {
      return true;
    }
  }

  #getParent(currentNode, element, parentNode = null) {
    if (currentNode === null) {
      return null;
    } else if (currentNode.value > element) { // go left
      return this.#getParent(currentNode.left, element, currentNode);
    } else if (currentNode.value < element) { // go right
      return this.#getParent(currentNode.right, element, currentNode);
    } else if (currentNode.value === element) {
      return parentNode;
    }
  }

  #KthLargest(currentNode, array) {
    if (currentNode !== null) {
      this.#KthLargest(currentNode.left, array);
      array.push(currentNode.value);
      this.#KthLargest(currentNode.right, array);
    }
  }

  #findKDistant(currentNode, values, k, depth) {
    if (currentNode !== null) {
      if (depth === k) {
        values.push(currentNode.value);
      }

      this.#findKDistant(currentNode.left, values, k, depth + 1);
      this.#findKDistant(currentNode.right, values, k, depth + 1);
    }
  }

  #depth(currentNode) {
    if (currentNode === null) {
      return 0;
    } else {
      const leftNodeDepth = this.#depth(currentNode.left);
      const rightNodeDepth = this.#depth(currentNode.right);
  
      return 1 + Math.max(leftNodeDepth, rightNodeDepth);
    }
  };

  #getMaxPathSumFromRoot(currentNode) {
    if (currentNode === null) {
      return 0;
    } else {
      const maxLeftPath = this.#getMaxPathSumFromRoot(currentNode.left);
      const maxRightPath = this.#getMaxPathSumFromRoot(currentNode.right);
  
      return currentNode.value + Math.max(maxLeftPath, maxRightPath);
    }
  }

  #getMaxPathSum(currentNode, max) {
    if (currentNode === null) {
      return 0;
    } else {
      const maxLeftPath = Math.max(this.#getMaxPathSum(currentNode.left, max), 0);
      const maxRightPath = Math.max(this.#getMaxPathSum(currentNode.right, max), 0);

      max.value = Math.max(max.value, maxLeftPath + maxRightPath + currentNode.value);

      return currentNode.value + Math.max(maxLeftPath, maxRightPath);
    }
  }

  #preOrderTraversal(currentNode, consumer) {
    if (currentNode !== null) {
      consumer(currentNode.value);
      this.#preOrderTraversal(currentNode.left, consumer);
      this.#preOrderTraversal(currentNode.right, consumer);
    }
  }

  #inOrderTraversal(currentNode, consumer) {
    if (currentNode !== null) {
      this.#inOrderTraversal(currentNode.left, consumer);
      consumer(currentNode.value);
      this.#inOrderTraversal(currentNode.right, consumer);
    }
  }

  #postOrderTraversal(currentNode, consumer) {
    if (currentNode !== null) {
      this.#postOrderTraversal(currentNode.left, consumer);
      this.#postOrderTraversal(currentNode.right, consumer);
      consumer(currentNode.value);
    }
  }

  #remove(currentNode, element, parentNode = null) {
    if (currentNode === null) {
      return null
    } else if (currentNode.value > element) {
      return this.#remove(currentNode.left, element, currentNode);
    } else if (currentNode.value < element) {
      return this.#remove(currentNode.right, element, currentNode);
    } else if (currentNode.value === element) {
      return this.#removeNode(currentNode, element, parentNode);
    }
  }

  #removeNode(currentNode, element, parentNode) {
    if (currentNode.left === null && currentNode.right === null) {
      this.#removeLeafNode(currentNode, parentNode);
    } else if (currentNode.left === null || currentNode.right === null) {
      this.#removeNodeWithOneChild(currentNode, parentNode);
    } else if (currentNode.left !== null && currentNode.right !== null) {
      this.#removeNodeWithTwoChildren(currentNode, element);
    }

    return element;
  }

  #removeLeafNode(currentNode, parentNode) {
    if (parentNode === null) {
      this._root = null;
    } else if (parentNode.left === currentNode) {
      parentNode.left = null;
    } else if (parentNode.right === currentNode) {
      parentNode.right = null;
    }
  }

  #removeNodeWithOneChild(currentNode, parentNode) {
    const childNode = currentNode.left || currentNode.right;

    if (parentNode.left === currentNode) {
      parentNode.left = childNode;
    } else if (parentNode.right === currentNode) {
      parentNode.right = childNode;
    }
  }

  #removeNodeWithTwoChildren(currentNode, element) {
    const minRightNode = this.#findMinNode(currentNode.right);

    if (minRightNode.left === null) {
      currentNode.value = minRightNode.value;
      currentNode.right = currentNode.right.right;
    } else {
      currentNode.value = minRightNode.value;
      currentNode.right = this.#remove(currentNode.right, element, currentNode);
    }
  }

  #findMinNode(currentNode) {
    if (currentNode.left === null) {
      return currentNode;
    } else {
      return this.#findMinNode(currentNode.left);
    }
  }
}
