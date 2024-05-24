/*
  Напишіть функцію, яка приймає один параметр level
  (ціле число) і повертає колір з палітри, визначеної
  в масиві colors. Якщо level виявився більше за кількість
  кольорів у палітрі, то функція повинна почати з першого
  кольору в палітрі і переходити до наступних кольорів
  у палітрі, поки не буде вичерпана палітра.
*/

const getColor = (level) => {
  const colors = ['#DCD6F7', '#A6B1E1', '#B4869F'];
  const color = colors[level % colors.length];

  return color;
};

// const getColor = (level) => {
//   const colors = ['#DCD6F7', '#A6B1E1', '#B4869F'];

//   let index = -1;

//   while (level) {
//     if (index >= colors.length - 1) index = 0
//     else index += 1;

//     level -= 1;
//   }

//   return index ? colors[index] : colors[0];
// };
