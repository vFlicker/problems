/*
  Перемістіть першу літеру кожного слова в кінець,
  а потім додайте «ay» у кінці слова.
  Залиште розділові знаки без змін.
*/

const pigIt = (string) => string.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3");

console.log(pigIt('Pig latin is cool !')); // igPay atinlay siay oolcay !
