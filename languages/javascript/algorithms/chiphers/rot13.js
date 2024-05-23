/*
  Створіть функцію, яка приймає рядок і повертає рядок,
  зашифрований Rot13. Якщо рядок містить числа
  або спеціальні символи, їх слід повертати такими,
  якими вони є. Лише літери з латинського/англійського
  алфавіту мають бути зміщені, як у оригінальній
  «реалізації» Rot13.
*/

const FIRST_UPPERCASE_LETTER_CODE = 65;
const FIRST_LOWERCASE_LETTER_CODE = 97;
const ALPHABET_LENGTH = 26;

const isLetter = (char) => {
  const upperFromAtoZ = char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
  const lowerFromAtoZ = char.charCodeAt() >= 97 && char.charCodeAt() <= 122;

  if (upperFromAtoZ || lowerFromAtoZ) {
    return true;
  }

  return false;
}

const rotate = (char, offset) => {
  const isUpperCase = char === char.toUpperCase();
  const ascii_offset = isUpperCase ? FIRST_UPPERCASE_LETTER_CODE : FIRST_LOWERCASE_LETTER_CODE;
  const pi = char.charCodeAt(0) - ascii_offset;
  const ci = (pi + offset) % ALPHABET_LENGTH;
  return String.fromCharCode(ci + ascii_offset);
};

export const rot13 = (text) => {
  let cipherText = '';

  for (const char of text) {
    if (isLetter(char)) {
      cipherText += rotate(char, 13)
    } else {
      cipherText += char;
    }
  }

  return cipherText;
};

console.log(rot13('Hello World!')); // Uryyb Jbeyq!
