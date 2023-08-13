class TrieNode {
  constructor () {
    this.storage = new Map();
    this.isEndOfWord = false;
  }
};

class Trie {
  constructor() {
    this._root = new TrieNode();
    this._size = 0;
  }

  /**
   * Повертає кількість слів у дереві.
   *
   * @return {number} кількість слів у дереві
   */
  get size() {
    return this._size;
  }

  /**
   * Вставляє слово у дерево.
   *
   * @param word слово для вставки
   * @returns {boolean} {@code true} якщо слово ще не існує в дереві і було успішно вставлене, {@code false} — інакше
   */
  insert(word) {
    let currentNode = this._root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      
      if (!currentNode.storage.has(letter)) {
        currentNode.storage.set(letter, new TrieNode());
      }

      currentNode = currentNode.storage.get(letter);
    }

    if (currentNode.isEndOfWord === false) {
      this._size += 1;
      currentNode.isEndOfWord = true;
      return true;
    }

    return false;
  }

  /**
   * Перевіряє, чи існує в дереві задане слово.
   *
   * @param {string} word слово для перевірки
   * @returns {boolean} {@code true} якщо слово існує в дереві, {@code false} — інакше
   */
  search(word) {
    const currentNode = this.#getNode(word);
    return currentNode ? currentNode.isEndOfWord : false;
  }

  /**
   * Перевіряє, чи існують слова в дереві, які починаються з заданого префіксу.
   *
   * @param {string} prefix префікс для перевірки
   * @returns {boolean} {@code true} якщо є слова, які починаються з префіксу, {@code false} — інакше
   */
  startsWith(prefix) {
    const currentNode = this.#getNode(prefix);
    return currentNode !== null;
  }

  /**
   * Виводить всі слова у дереві.
   * 
   * * @returns {string[]} масив всіх слів у дереві
   */
  print() {
    const words = [];

    this.#print(this._root, words);

    return words;
  }

  #getNode(word) {
    let currentNode = this._root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];

      if (!currentNode.storage.has(letter)) {
        return null;
      }

      currentNode = currentNode.storage.get(letter);
    }

    return currentNode;
  }

  /**
   * @param {TrieNode} node
   * @param {string[]} words
   * @param {string} word
   */
  #print(node, words, word = '') {
    for (const [currentLetter, currentNode] of node.storage.entries()) {
      this.#print(currentNode, words, word + currentLetter);
    }

    if (node.isEndOfWord) {
      words.push(word);
    }
  }
};
