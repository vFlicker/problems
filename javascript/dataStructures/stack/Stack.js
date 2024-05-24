export class Stack {
  #elements = [];

  static of(...elements) {
    const stack = new Stack();

    for (const element of elements) {
      stack.push(element);
    }

    return stack;
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

  push(element) {
    this.#elements.push(element);
  }

  pop() {
    if (this.isEmpty) {
      return null;
    }

    return this.#elements.pop();
  }

  peek() {
    if (this.isEmpty) {
      return null;
    }
    
    return this.#elements[this.#elements.length - 1];
  }

  clear() {
    this.#elements = [];
  }
}
