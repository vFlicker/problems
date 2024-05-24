/*
  Реалізація стека за допомогою черги.
*/

import { Queue } from '../queue/Queue.js';

class StackIsQueueBased {
  #queue = new Queue();

  static of(...elements) {
    const stack = new StackIsQueueBased();

    for (const element of elements) {
      stack.push(element);
    }

    return stack;
  }

  get size() {
    return this.#queue.size;
  }

  get isEmpty() {
    return this.#queue.size === 0;
  }

  get elements() {
    return this.#queue.elements;
  }

  push(element) {
    this.#queue.enqueue(element);
  }

  pop() {
    if (this.isEmpty) {
      return null;
    }

    for (let i = 0; i < this.#queue.size - 1; i++) {
      this.#queue.enqueue(this.#queue.dequeue());
    }

    return this.#queue.dequeue();
  }

  peek() {
    if (this.isEmpty) {
      return null;
    }
    
    return this.elements[this.elements.length - 1];
  }

  clear() {
    this.#queue.clear();
  }
}
