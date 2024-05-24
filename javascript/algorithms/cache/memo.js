/*
  Напишіть функцію, яка кешує результати викликів переданої
  функції і повертає кешовані результати при наступних
  викликах з тими ж аргументами.
*/

const increment = (value) => {
  console.log('Function increment called');
  return value + 1;
}

/**
 * Складність за часом — `О(1)`
 * Складність за пам'яттю — `О(n)`
 */
const memo = (callback) => {
  const cache = new Map();

  return (value) => {
    if (!cache.has(value)) {
      const result = callback(value);
      cache.set(value, result);
    }

    return cache.get(value);
  };
};

const memorizedIncrement = memo(increment);

console.log(memorizedIncrement(1));
console.log(memorizedIncrement(2));
console.log(memorizedIncrement(13));
console.log(memorizedIncrement(13));
console.log(memorizedIncrement(13));
console.log(memorizedIncrement(1));
console.log(memorizedIncrement(3));
