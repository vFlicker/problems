import { Stack } from '../stack/Stack.js';

export class Queue {
  #elements = [];

  static of(...elements) {
    const queue = new Queue();

    for (const element of elements) {
      queue.enqueue(element);
    }

    return queue;
  }

  get size() {
      return this.#elements.length;
  }

  get isEmpty() {
      return this.#elements.length === 0;
  }

  get elements() {
    return this.#elements;
  }

  enqueue(element) {
      this.#elements.push(element);
  }

  dequeue() {
      if (this.isEmpty) {
          return null;
      }

      return this.#elements.shift();
  }

  front() {
      if (this.isEmpty) {
          return null;
      }

      return this.#elements[0];
  }

  clear() {
      this.#elements = [];
  }

  /**
   * Розвертає перші k елементів.
   *
   *
   * Складність за часом — `O(n + k)`
   * Складність за пам'яттю — `O(n)`
   */
  reverse(k) {
    const temporaryStack = new Stack();
  
    for (let i = 0; i < k; i++) {
      temporaryStack.push(this.dequeue());
    }
  
    while (temporaryStack.size !== 0) {
      this.enqueue(temporaryStack.pop());
    }
  
    for (let i = 0; i < this.size - k; i++) {
      this.enqueue(this.dequeue());
    }
  
    return this.#elements;
  }
}
