/*
  Напишіть функцію cakes(), яка приймає рецепт (об’єкт)
  і доступні інгредієнти (також об’єкт) і повертає
  максимальну кількість тістечок, які Піт може спекти
  (ціле число). Для простоти немає одиниць вимірювання
  кількості (наприклад, 1 фунт борошна
  або 200 г цукру — це просто 1 або 200).
  Інгредієнти, яких немає в об'єктах, можна вважати 0.
*/

const cakes = (recipe, available) => {
  let maxQuantity = Infinity;

  for (const key of Object.keys(recipe)) {
    const availableValue = available[key];

    if (!availableValue) {
      maxQuantity = 0;
      break;
    };

    const recipeValue = recipe[key];
    const quantity = Math.floor(availableValue / recipeValue);

    maxQuantity = Math.min(maxQuantity, quantity);
  }

  return maxQuantity;
};

const recipe1 = {flour: 500, sugar: 200, eggs: 1};
const available1 = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

const recipe2 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
const available2 = {sugar: 500, flour: 2000, milk: 2000};

console.log(cakes(recipe1, available1)); // 2
console.log(cakes(recipe2, available2)); // 0
