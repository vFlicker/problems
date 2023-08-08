/*
  Напишіть функцію, яка буде прогнозувати для користувача,
  що встав у чергу (queue) на сервер із slots,
  скільки йому доведеться прочекати.
*/

import { benchmark, random } from "../../utils/index.js";

/**
 * На швидкодію функції впливає те, скільки годин може
 * проводити на сервері користувач. Чим більше годин він
 * буде проводити на сервері, тим більше разів буде буде
 * працювати цикл `for` і відбуватися фільтрація.
 *
 * Чим більше слотів на сервері, тим швидше відпрацює
 * ця функція. Тому що цикл `for` і фільтрація будуть
 * відбуватися меншу кількість разів.
 */
const predict1 = (queue, slots) => {
  let time = 0;

  while (queue.length >= slots) {
    time += 1;

    for (let i = 0; i < slots; i++) {
      queue[i] -= 1;
    }

    queue = queue.filter((item) => item !== 0);
  }

  return time;
};

/**
 * Чим більша кількість користувачів і слотів,
 * тим повільніше буде працювати функція. Але кількість
 * годин яку проводить користувач, не впливають на час
 * виконання функції.
 */
const predict2 = (queue, slots) => {
  const computers = new Array(slots).fill(0);

  while (queue.length !== 0) {
    const time = queue.shift();

    const minTime = Math.min(...computers);
    const indexForMinTime = computers.indexOf(minTime);

    computers[indexForMinTime] += time;
  }

  return Math.min(...computers);
};

const data = Array.from({ length: 20_000 }, () => random(1, 10));
const count = 100;

benchmark('predict1', () => predict1(data, count));
benchmark('predict2', () => predict2(data, count));
