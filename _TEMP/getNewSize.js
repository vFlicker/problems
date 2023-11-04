const getNewSize = (matrix, factor) => {
  const originalRows = matrix.length;
  const originalCols = matrix[0].length;
  const newRows = originalRows * factor;
  const newCols = originalCols * factor;

  const newMatrix = Array.from({ length: newRows }, () => {
    return Array(newCols).fill(null);
  });

  const incrementRow = factor >= 1 ? 1 : originalRows / (originalRows * factor);
  const incrementCell = factor >= 1 ? 1 : originalCols / (originalCols * factor);

  for (let rowIndex = 0; rowIndex < originalRows; rowIndex += incrementRow) {
    for (let cellIndex = 0; cellIndex < originalCols; cellIndex += incrementCell) {
      const value = matrix[rowIndex][cellIndex];

      for (let i = 0; i < factor; i++) {
        for (let j = 0; j < factor; j++) {
          newMatrix[rowIndex * factor + i][cellIndex * factor + j] = value;
        }
      }
    }
  }

  return newMatrix;
};

const input2 = [
  ['00ff00', '00ff00', '00ff00'],
  ['00ff00', 'ffffff', '00ff00'],
  ['00ff00', '00ff00', '00ff00'],
]

const input3 = [
  [ '00ff00', '00ff00', '00ff00', '00ff00', '00ff00', '00ff00' ],
  [ '00ff00', '00ff00', '00ff00', '00ff00', '00ff00', '00ff00' ],
  [ '00ff00', '00ff00', 'ffffff', 'ffffff', '00ff00', '00ff00' ],
  [ '00ff00', '00ff00', 'ffffff', 'ffffff', '00ff00', '00ff00' ],
  [ '00ff00', '00ff00', '00ff00', '00ff00', '00ff00', '00ff00' ],
  [ '00ff00', '00ff00', '00ff00', '00ff00', '00ff00', '00ff00' ]
];

console.log(getNewSize(input3, 0.5));
