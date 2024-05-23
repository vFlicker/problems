/*
  Напишіть функцію, яка приймає ціле невід’ємне число
  (секунди) як вхідні дані та повертає час у зручному
  для читання форматі (ГГ:ХХ:СС)
*/

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 3600;

const normalize = (number) => number.toString().padStart(2, 0);

const humanReadable = (seconds) => {
  const hh = Math.floor(seconds / SECONDS_PER_HOUR);
  const mm = Math.floor(seconds % SECONDS_PER_HOUR / SECONDS_PER_MINUTE);
  const ss = seconds % SECONDS_PER_MINUTE;

  return `${normalize(hh)}:${normalize(mm)}:${normalize(ss)}`;
};

console.log(humanReadable(86461)); // '24:01:01';
