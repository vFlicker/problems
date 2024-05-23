/*
  Напишіть функцію, яка визначатиме переможця у грі видалення гравців зі списку. Гравці видаляються почергово, виходячи зі зміщення на випадкову кількість позицій вперед. Гра триває до тих пір, поки в списку не залишиться лише один гравець.

  При отриманні масиву гравців, наприклад, ['GottaSaiyan', 'Mountaintrid', 'Rectionom', 'JoshChase', 'DreamLess', 'BlondiePlanet', 'Breakingbing', 'Goldenelox'], функція повертає масив об'єктів, де кожний об'єкт містить ім'я гравця, який був видалений, та кількість позицій, на які він був видалений.

  Приклад вихідного масиву:
  [
    {
      "login": "JoshChase",
      "step": 3
    },
    {
      "login": "BlondiePlanet",
      "step": 1
    },
    {
      "login": "Goldenelox",
      "step": 1
    },
    // ... інші гравці ...
  ]
*/

import { random } from '../../utils/index.js';
import { Queue } from './Queue.js'

const getWinner = (players) => {
  const eliminated = new Queue();

  // Цикл буде працювати поки не знайдемо переможця
  while (players.size !== 1) {
    const step = random(1, 3); // Вибираємо випадковий крок для видалення гравця.

    // Цикл буде працювати поки не дійшли до людини, що вилітає
    for (let i = 0; i < step; i++) {
      const firstPlayer = players.dequeue(); // Беремо гравця, першого в черзі на видалення
      players.enqueue(firstPlayer); // і кладемо його в кінець тих, хто чекає видалення
    }

    // Як тільки дійшли до видаленого — видаляємо його з черги і кладемо в наш масив результатів гри
    const eliminatedLogin = players.dequeue();

    eliminated.enqueue({
      login: eliminatedLogin,
      step,
    });
  }

  return eliminated.elements;
};

const data = Queue.of(
  'GottaSaiyan',
  'Mountaintrid',
  'Rectionom',
  'JoshChase',
  'DreamLess',
  'BlondiePlanet',
  'Breakingbing',
  'Goldenelox',
);

console.log(getWinner(data));
