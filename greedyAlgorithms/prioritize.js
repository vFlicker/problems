/*
  Дано список зустрічей. Ваша мета — обрати найбільшу
  кількість зустрічей, на які можна попасти без конфліктів
  у часі, і створити оптимальний розклад для одного
  менеджера.

  Кожна зустріч визначена своїм часом початку
  та часом завершення. Слід розробити алгоритм,
  який ефективно вирішує цю задачу, забезпечуючи успішне
  проведення найбільшої кількості подій та оптимальне
  використання доступного часу.
*/

/**
 * Складність за часом — `О(n^2)`
 * Складність за пам'яттю — `О(n)`
 */
const prioritize1 = (appointments) => {
  const schedule = [];

  while (appointments.length !== 0) {
    const minAppointment = appointments.reduce((prevMinAppointment, currentAppointment) => {
      return prevMinAppointment.end > currentAppointment.end ? currentAppointment : prevMinAppointment;
    }, appointments[0]);
  
    schedule.push(minAppointment);
  
    appointments = appointments.filter((appointment) => appointment.start >= minAppointment.end);
  }

  return schedule;
};

/**
 * На відміну від `prioritize1`, `prioritize2`
 * не використовує жадібний алгоритм.
 *
 * Складність за часом — `О(n * log(n))`
 * Складність за пам'яттю — `О(n)`
 */
const prioritize2 = (appointments) => {
  // Створюємо копію масиву appointments для маніпуляцій
  const sortedAppointments = [...appointments];

  // Сортуємо зустрічі за часом закінчення у порядку зростання
  sortedAppointments.sort((a, b) => a.end - b.end);

  const schedule = [sortedAppointments[0]]; // Додаємо першу зустріч в розклад

  for (let i = 1; i < sortedAppointments.length; i++) {
    const currentAppointment = sortedAppointments[i];

    // Перевіряємо, чи зустріч може бути додана до розкладу
    if (currentAppointment.start >= schedule[schedule.length - 1].end) {
      schedule.push(currentAppointment);
    }
  }

  return schedule;
};

const appointments = [
  {
    title: "Title 1",
    start: 10,
    end: 13,
  },
  {
    title: "Title 2",
    start: 12,
    end: 13,
  },
  {
    title: "Title 3",
    start: 9,
    end: 11,
  },
  {
    title: "Title 4",
    start: 14,
    end: 16,
  },
  {
    title: "Title 5",
    start: 13,
    end: 15,
  },
  {
    title: "Title 6",
    start: 15,
    end: 17,
  },
  {
    title: "Title 7",
    start: 10,
    end: 11,
  },
];

console.log(prioritize1(appointments));
console.log(prioritize2(appointments));
