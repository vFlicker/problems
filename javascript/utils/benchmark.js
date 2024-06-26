export const benchmark = (name, callback) => {
  const start = performance.now();

  const result = callback();

  const end = performance.now();

  const time = (end - start) / 1000;

  console.log(`${name} took ${time.toFixed(5)} seconds with result ${result}`);
};
