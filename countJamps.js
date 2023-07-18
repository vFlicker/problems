const countJumps1 = (pebbles) => {
  let previousPosition = 0;
  let currentPosition = 0;
  let jumps = 0;
  
  while (currentPosition < pebbles.length - 1) {
    let maxReach = 0;

    for (let i = previousPosition; i < currentPosition + 1; i++) {
      maxReach = Math.max(maxReach, pebbles[i] + i);
    }
    
    previousPosition = currentPosition + 1;
    currentPosition = maxReach;
    jumps += 1;
  }

  return jumps;
}

const countJumps2 = (pebbles) => {
  // Максимальна дальність, яку можна досягти з поточного каменю
  let maxReach = pebbles[0];

  // Кількість кроків, доступних із поточного каменю
  let steps = pebbles[0];

  // Мінімальна кількість стрибків для досягнення поточного каменю
  let jumps = 1;
  
  for (let index = 1; index < pebbles.length; index++) {
    // Досягнуто останнього каміння
    if (index === pebbles.length - 1) return jumps;

    // Оновлюємо максимальну дальність
    maxReach = Math.max(maxReach, index + pebbles[index]);

    // Зменшуємо кількість доступних кроків
    steps--;

    if (steps === 0) {
      // Не залишилося доступних кроків із поточного каменю, тому робимо стрибок
      jumps++;

      // Кількість кроків, доступних із нового поточного каменю
      steps = maxReach - index;
    }
  }
  
  return jumps;
};

const countJumps3 = (pebbles) => {
  let jumps = 0;

  let previousPosition = 0; // Позиция предыдущего оптимального прыжка
  let currentPosition = 0; // Позиция текущего прыжка

  // Пока не допрыгали до конца...
  while (currentPosition < pebbles.length - 1) {
    // Прыгаем!
    jumps++;

    // Нам нужно обойти все камни, которые мы можем достигнуть с предыдущего до текущего прыжка
    // Но так как дальше мы будем менять previousPosition, я заранее сохраняю его
    let candidate = previousPosition;

    // Текущий прыжок становится предыдущим
    previousPosition = currentPosition;

    while (candidate <= previousPosition) {
      // А текущий прыжок — это максимально достижимый камень с предыдущей
      currentPosition = Math.max(currentPosition, candidate + pebbles[candidate]);
      candidate++;
    }
  }

  return jumps;
}

// const data = [2, 3, 3, 1, 4, 1, 1, 5, 6];
// console.log(countJumps1(data));
// console.log(countJumps2(data));
// console.log(countJumps3(data));

// const getNumberOfWays = (steps, maxJumpLength) => {
//   return 0
// }

// console.log(solution(3, 3)); // 4

// // 4 3
// [1, 1, 1, 1] // 4
// [0, 1, 1, 2] // 4
// [0, 1, 2, 1] // 4
// [0, 2, 1, 1] // 4
// [0, 0, 2, 2] // 4
// [0, 0, 1, 3] // 4
// [0, 0, 3, 1] // 4