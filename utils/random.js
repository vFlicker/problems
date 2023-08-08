export const random = (min, max) => {
  const interval = max - min; // Інтервал, в якому можуть бути наші числа
  const shift = min; // Пошук випадкового числа починатиметься не з нуля, а з min

  return Math.round(Math.random() * interval + shift);
};
