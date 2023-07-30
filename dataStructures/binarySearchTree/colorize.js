const colors = ['#DCD6F7', '#A6B1E1', '#B4869F'];
const parentElement = 'UL';
const elementToStyle = 'LI';

const colorizeBFS = (node) => {
  const queue = [{
    node,
    depth: 0,
  }];

  while(queue.length !== 0) {
    const { node: currentNode, depth: currentDepth } = queue.shift();
    const isStylable = currentNode.tagName === elementToStyle;

    if (isStylable) {
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

const colorizeDFS = (node, currentDepth = 0) => {
  const depth = node.tagName === parentElement ? currentDepth + 1 : currentDepth;

  if (node.tagName === elementToStyle) {
    node.style.backgroundColor = colors[currentDepth % colors.length];
  }

  for (const child of node.children) {
    colorizeDFS(child, depth);
  }
};

const body = document.querySelector('body');
colorizeBFS(body);
colorizeDFS(body);
