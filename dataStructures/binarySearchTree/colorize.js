/*
  Розфарбуйте фон li різних рівнів вкладеності списків
  у наступні кольори по черзі: #DCD6F7, #A6B1E1, #B4869F.
  Також потрібно передбачити, що рівнів вкладеності
  може бути і більше трьох — просто фарбуйте наступну
  вкладеність, починаючи з першого в цьому списку кольору.
*/

const colors = ['#DCD6F7', '#A6B1E1', '#B4869F'];
const parentElement = 'UL';
const elementToStyle = 'LI';

/**
 * Складність за часом — `O(V + E)`, де `V` — це кількість нод і `E` — це кількість ребер
 * Складність за пам'яттю — `O(V)`
 */
const colorizeBFS = (node) => {
  const queue = [{
    node,
    depth: 0,
  }];

  while(queue.length !== 0) {
    const { node: currentNode, depth: currentDepth } = queue.shift();
    const isStylable = currentNode.tagName === elementToStyle;

    if (isStylable) {
      // Обчислюємо індекс для кольору, враховуючи циклічність списку.
      // Записує колір у властивість `backgroundColor`.
      currentNode.style.backgroundColor = colors[currentDepth % colors.length];
    }

    for (const childNode of currentNode.children) {
      queue.push({
        node: childNode,
        depth: isStylable ? currentDepth + 1 : currentDepth,
      })
    }
  }
};

/**
 * Складність за часом — `O(V + E)`, де `V` — кількість нод і `E` — кількість ребер
 * Складність за пам'яттю — `O(V)`
 */
const colorizeDFS = (node, currentDepth = 0) => {
  const depth = node.tagName === parentElement ? currentDepth + 1 : currentDepth;

  if (node.tagName === elementToStyle) {
    // Обчислюємо індекс для кольору, враховуючи циклічність списку.
    // Записує колір у властивість `backgroundColor`.
    node.style.backgroundColor = colors[currentDepth % colors.length];
  }

  for (const child of node.children) {
    colorizeDFS(child, depth);
  }
};

const body = document.querySelector('body');
colorizeBFS(body);
colorizeDFS(body);
