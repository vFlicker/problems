/*
  Створіть функцію, яка приймає рядок і повертає рядок,
  зашифрований Rot13. Якщо рядок містить числа
  або спеціальні символи, їх слід повертати такими,
  якими вони є. Лише літери з латинського/англійського
  алфавіту мають бути зміщені, як у оригінальній
  «реалізації» Rot13.
*/

export const rot13 = (message) => {
  const input = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const output = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';

  return message.replace(/[a-z]/gi, c => output[input.indexOf(c)]);
}

console.log(rot13('Hello World!')); // Uryyb Jbeyq!
