/*
  Задача полягає в розробці алгоритму для веб-застосунку
  завантаження файлів, де файли розбиті на частини
  різного розміру, і потрібно вибрати частини файлів
  для завантаження в пакети обмеженого розміру
  (наприклад, 10 МБ), з метою максимізації використаного
  простору в кожному пакеті.
*/

/**
 * У кожну комірку таблиці алгоритм заповнення передбачає
 * вибір максимального значення із двох можливих опцій:
 *
 * 1. Перше значення — це максимум рішення попередньої
 * підзадачі (яке знаходиться над поточною коміркою),
 * якщо воно існує.
 * 
 * 2. Друге значення — це розмір максимальної кількості
 * частин, які можуть бути вміщені в поточний розмір,
 * плюс максимум рішення попередньої підзадачі
 * для залишеного простору, якщо такий існує.
 *
 * Складність за часом — `O(n * m)`
 * Складність за пам'яттю — `O(n * m)`
 */
const prioritize = (filePartSizes, chunkSize) => {
  // Створюємо таблицю
  const table = Array.from({ length: filePartSizes.length }, () => {
    return Array.from({ length: chunkSize }, () => 0);
  });

  // Заповнюємо послідовно кожний рядок таблиці
  for (let rowIndex = 0; rowIndex < filePartSizes.length; rowIndex++) {
    for (let cellIndex = 0; cellIndex < chunkSize; cellIndex++) {
      // Рахуємо максимальну кількість місця, яку ми можемо зайняти частинами поточного розміру.
      const currentFilePartSize = filePartSizes[rowIndex];
      const currentChunkSize = cellIndex + 1; // Чанки починаються з 1 МБ, а не з 0, тому додаємо 1
      const maxPartsInCurrentSize = Math.floor(currentChunkSize / currentFilePartSize) * currentFilePartSize;

      // Рахуємо максимальну кількість даних, яку можна розмістити в просторі який залишився
      const remainingSpace = currentChunkSize - maxPartsInCurrentSize;
      const maximumRest = table[rowIndex - 1] && table[rowIndex - 1][remainingSpace - 1] || 0;
 
      // const maximumRestBad = remainingSpace >= 0
      //   ? table[rowIndex - 1] ? table[rowIndex - 1][remainingSpace] : 0
      //   : 0;

      // Обчислюємо значення за допомогою формули
      const byFormula = maxPartsInCurrentSize + maximumRest;

      // Записуємо результат в таблицю
      if (rowIndex > 0) {
        const maxPreviousValue = table[rowIndex - 1][cellIndex];
        table[rowIndex][cellIndex] = Math.max(maxPreviousValue, byFormula);
      } else {
        table[rowIndex][cellIndex] = byFormula;
      }
    }
  }

  return table[filePartSizes.length - 1][chunkSize - 1];
};

console.log(prioritize([8, 5, 4, 7], 11)); // 11
console.log(prioritize([2, 5, 7], 10)); // 10
