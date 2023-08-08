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

import { random } from "../../utils/index.js";

const getWinner1 = (players) => {
  const playersCopy = [...players];
  const eliminated = [];
  let index = 0;

  while (playersCopy.length !== 1) {
    // Вибираємо випадковий крок для видалення гравця.
    const step = random(1, 3);

    // Обчислюємо початковий індекс для видалення, враховуючи циклічність списку.
    const start = (index + step) % playersCopy.length;

    // Видаляємо гравця з обчисленого індексу і зберігаємо його ім'я.
    const login = playersCopy.splice(start, 1)[0];

    // Додаємо об'єкт із ім'ям гравця та кількістю позицій до масиву результатів.
    eliminated.push({ login, step });

    index = start; // Оновлюємо індекс для наступної ітерації.
  }

  return eliminated;
};

const getWinner2 = (players) => {
  const playersQueue = [...players];
  const eliminated = [];

  // Цикл буде працювати поки не знайдемо переможця
  while (playersQueue.length !== 1) {
    const step = random(1, 3); // Вибираємо випадковий крок для видалення гравця.

    // Цикл буде працювати поки не дійшли до людини, що вилітає
    for (let i = 0; i < step; i++) {
      const firstPlayer = playersQueue.shift(); // Беремо гравця, першого в черзі на видалення
      playersQueue.push(firstPlayer); // і кладемо його в кінець тих, хто чекає видалення
    }

    // Як тільки дійшли до видаленого — видаляємо його з черги і кладемо в наш масив результатів гри
    const eliminatedLogin = playersQueue.shift();

    eliminated.push({
      login: eliminatedLogin,
      step,
    });
  }

  return eliminated;
};

console.log(getWinner2([
  'GottaSaiyan',
  'Mountaintrid',
  'Rectionom',
  'JoshChase',
  'DreamLess',
  'BlondiePlanet',
  'Breakingbing',
  'Goldenelox',
]));
