/*
  Написати функцію distances, яка за допомогою двох
  рядків first і second, буде обчислювати відстань
  редагування від first до second, повертаючи
  (як список списків) матрицю операційних витрат,
  понесених на цьому шляху.

  У кожному елементі матриці має зберігатися кортеж
  (cost, operation), де вартість — це number,
  а операція — це Operation.
*/

const Operation = {
  INSERTED: 'I',
  DELETED: 'D',
  SUBSTITUTED: 'S',
};

/**
 * У кожну комірку таблиці алгоритм заповнення передбачає
 * вибір мінімального значення із трьох можливих опцій:
 *
 * 1. Вставка — `const[i][j - 1] + 1`.
 *
 * 2. Видалення — `const[i - 1][j] + 1`.
 *
 * 3. Заміна:
 *   3.1. Якщо i-тий символ строки first
 *        дорівнює j-тому символу строки
 *        second — `const[i - 1][j - 1]`.
 *   3.2 В іншому випадку — `const[i - 1][j - 1] + 1`.
 *
 * Складність за часом — `O(n * m)`
 * Складність за пам'яттю — `O(n * m)`
 */
const distances = (first, second) => {
  const rowLength = first.length + 1;
  const columnLength = second.length + 1;

  /**
   * @typedef {number} MyTupleIndex0
   * @typedef {string} MyTupleIndex1
   * @typedef {[MyTupleIndex0, MyTupleIndex1]} MyTuple
   *
   * @type {MyTuple[][]}
   */
  const table = Array.from({ length: rowLength}, () => {
    return Array.from({ length: columnLength }, () => [0, null]);
  });

  // Додаємо значення для базових випадків
  // (перший рядок і перша колонка)
  for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
    for (let cellIndex = 0; cellIndex < columnLength; cellIndex++) {
      if (rowIndex === 0 && cellIndex > 0) {
        table[rowIndex][cellIndex] = [cellIndex, Operation.INSERTED];
      }

      if (rowIndex > 0 && cellIndex === 0) {
        table[rowIndex][cellIndex] = [rowIndex, Operation.DELETED];
      }
    }
  }

  // Заповнюємо клітинки таблиці
  for (let rowIndex = 1; rowIndex < rowLength; rowIndex++) {
    for (let cellIndex = 1; cellIndex < columnLength; cellIndex++) {
      const insertCost = table[rowIndex][cellIndex - 1][0] + 1;
      const deleteCost = table[rowIndex - 1][cellIndex][0] + 1;
      const substituteCost = first[rowIndex - 1] === second[cellIndex - 1]
        ? table[rowIndex - 1][cellIndex - 1][0]
        : table[rowIndex - 1][cellIndex - 1][0] + 1;

      const minCost = Math.min(insertCost, deleteCost, substituteCost);

      switch (minCost) {
        case insertCost:
          table[rowIndex][cellIndex] = [insertCost, Operation.INSERTED];
          break;
        case deleteCost:
          table[rowIndex][cellIndex] = [deleteCost, Operation.DELETED];
          break;
        case substituteCost:
          table[rowIndex][cellIndex] = [substituteCost, Operation.SUBSTITUTED];
          break;
      }
    }
  }

  return table[rowLength - 1][columnLength - 1];
};

console.log(distances('cat', 'ate'));
