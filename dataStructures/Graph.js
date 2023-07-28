class GraphNode {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }

  get neighborsSize() {
    return this.neighbors.length;
  }

  getNeighborByIndex(index) {
    return this.neighbors[index];
  }

  addNeighbor(node) {
    this.neighbors.push(node);
  }

  removeNeighbor(nodeToRemove) {
    this.neighbors = this.neighbors.filter((node) => node !== nodeToRemove);
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    const newNode = new GraphNode(value);
    this.nodes.push(newNode);
  }

  removeNode(value) {
    const nodeToRemove = this.getNodeByValue(value);

    if (!nodeToRemove) {
      return false;
    }

    for (const node of this.nodes) {
      node.removeNeighbor(nodeToRemove);
    }

    this.nodes = this.nodes.filter((node) => node !== nodeToRemove);

    return true;
  }

  getNodeByValue(value) {
    const foundNode = this.nodes.find((node) => node.value === value);
    return foundNode || null;
  }

  addEdge(value1, value2) {
    const node1 = this.getNodeByValue(value1);
    const node2 = this.getNodeByValue(value2);

    if (!node1 || !node2) {
      return false;
    }

    node1.addNeighbor(node2);

    return true;
  }

  removeEdge(value1, value2) {
    const node1 = this.getNodeByValue(value1);
    const node2 = this.getNodeByValue(value2);

    if (!node1 || !node2) {
      return false;
    }

    node1.removeNeighbor(node2);

    return true;
  }

  getGraphRepresentation() {
    const graphRepresentation = [];

    for (const node of this.nodes) {
      const neighbors = node.neighbors.map((neighbor) => neighbor.value).join(", ");
      graphRepresentation.push(`Adjacency list of vertex ${node.value}: head -> ${neighbors}`);
    }

    return graphRepresentation.join("\n");
  }

  /**
   * Пошук в ширину з використанням черги.
   */
  BFS(value) {
    const node = this.getNodeByValue(value);
    const result = [];

    if (!node) {
      return result;
    }

    const queue = [node];
    const visited = new Set();

    while (queue.length !== 0) {
      const currentNode = queue.shift();

      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        result.push(currentNode.value);
        queue.push(...currentNode.neighbors);
      }
    }

    return result;
  }

  /**
   * Пошук в глибину з використанням стеку.
   */
  DFS1(value) {
    const node = this.getNodeByValue(value);
    const result = [];

    if (!node) {
      return result;
    }

    const stack = [node];
    const visited = new Set();

    while (stack.length !== 0) {
      const currentNode = stack.pop();

      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        result.push(currentNode.value);
        stack.push(...currentNode.neighbors);
      }
    }

    return result;
  }

  /**
   * Пошук в глибину з використанням рекурсії. 
   */
  DFS2(value) {
    const node = this.getNodeByValue(value);
    const result = [];

    if (!node) {
      return result;
    }

    const visited = new Set();

    const recursiveSearch = (node) => {
      if (!visited.has(node)) {
        visited.add(node);
        result.push(node.value);

        for (const neighborNode of node.neighbors) {
          recursiveSearch(neighborNode);
        }
      }
    };

    recursiveSearch(node);

    return result;
  }

  /**
   * Перевірка, чи є граф деревом.
   *
   * Складність за часом — `O(V + E)`.
   * Складність за пам'яттю — `O(V)`.
   */
  isTree() {
    const visited = new Set();
    const stack = [this.nodes[0]]; // Починаємо обхід графа з першого вузла

    while (stack.length !== 0) {
      const node = stack.pop();

      if (visited.has(node)) {
        // Якщо ми зустрічаємо вузол, який уже був відвіданий, є цикл
        return false;
      }

      visited.add(node);

      for (const neighborNode of node.neighbors) {
        stack.push(neighborNode);
      }
    }

    // Якщо є будь-які невідвідані вузли, граф не зв'язаний і не є деревом
    return visited.size === this.nodes.length;
  }

  /**
   * Кількість ребер у графі.
   */
  countEdges() {
    let count = 0;

    for (const node of this.nodes) {
      count += node.neighborsSize;
    }

    return count;
  }
}

const graph = new Graph();

graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 4);

console.log(graph.DFS2(0));
