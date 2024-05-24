/*
  Написати функцію, яка приймає рядок і повертає
  новий рядок із видаленням усіх голосних.
*/

const removingAllVowels = (str) => str.replace(/[aeiou]/gi, '');

console.log((removingAllVowels("This website is for losers LOL!"))); // "Ths wbst s fr lsrs LL!".
