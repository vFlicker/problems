class Cache {
  #map = new Map();

  constructor(size) {
    this.size = size;
  }

  get #first() {
    return this.#map.keys().next().value;
  }

  get(key) {
    return this.#map.get(key);
  }

  set(key, value) {
    if (this.#map.size === this.size) {
      this.delete(this.#first);
    }

    this.#map.set(key, value);
  }

  delete(key) {
    this.#map.delete(key);
  }
}

export {};
