/*
  Напишіть функцію rgb так, щоб передача десяткових значень
  RGB призвела до повернення шістнадцяткового представлення.
  Дійсні десяткові значення для RGB – 0–255.
  Будь-які значення, що виходять за межі цього діапазону,
  мають бути округлені до найближчого дійсного значення.
*/

const toHex = (number) => {
  const normalizedNumber = Math.max(Math.min(number, 255), 0);
  return normalizedNumber.toString(16).padStart(2, '0').toUpperCase();
}

const rgb = (r, g, b) => {
  const hexR = toHex(r);
  const hexG = toHex(g);
  const hexB = toHex(b);

  return `${hexR}${hexG}${hexB}`
};

console.log(rgb(-10, 300, 47)); // '00FF2F'
