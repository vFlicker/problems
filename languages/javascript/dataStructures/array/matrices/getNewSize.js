/*
  Написати функцію, яка на вхід отримує матрицю і коефіцієнт
  і на основі цього коефіцієнту зменшує, або збільшує
  розмір матриці.

  Наприклад:
    - Якщо маємо на вході матрицю розміром 6х6 і коефіцієнт
    0.5, на виході маємо тримати матрицю розміром 3х3.
    - Якщо маємо на вході матрицю розміром 2х2 і коефіцієнт
    3, на виході маємо тримати матрицю розміром 6х6.
*/

/**
 * Складність за часом — `О(n * m)`, де n і m — розмір старої матриці
 * Складність за пам'яттю — `О(n * m)`, де n і m — розмір нової матриці
 */
export const getNewSize = (matrix, factor) => {
  const oldWidth = matrix[0].length;
  const oldHeight = matrix.length;
  const newWidth = oldWidth * factor;
  const newHeight = oldHeight * factor;

  const newMatrix = Array.from({ length: newHeight }, () => {
    return Array.from({ length: newWidth }, () => null);
  });

  for (let rowIndex = 0; rowIndex < newHeight; rowIndex++) {
    for (let cellIndex = 0; cellIndex < newWidth; cellIndex++) {
      const oldRowIndex = Math.floor(rowIndex / factor);
      const oldCellIndex = Math.floor(cellIndex / factor);
      newMatrix[rowIndex][cellIndex] = matrix[oldRowIndex][oldCellIndex];
    }
  }

  return newMatrix;
};

const input2 = [
  ['00ff00', '00ff00', '00ff00'],
  ['00ff00', 'ffffff', '00ff00'],
  ['00ff00', '00ff00', '00ff00'],
];

const input3 = [
  ['00ff00', '00ff00', '00ff00', '00ff00', '00ff00', '00ff00'],
  ['00ff00', '00ff00', '00ff00', '00ff00', '00ff00', '00ff00'],
  ['00ff00', '00ff00', 'ffffff', 'ffffff', '00ff00', '00ff00'],
  ['00ff00', '00ff00', 'ffffff', 'ffffff', '00ff00', '00ff00'],
  ['00ff00', '00ff00', '00ff00', '00ff00', '00ff00', '00ff00'],
  ['00ff00', '00ff00', '00ff00', '00ff00', '00ff00', '00ff00'],
];

console.log(getNewSize(input2, 2));
console.log(getNewSize(input3, 0.5));
