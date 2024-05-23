class WeightGraphNode {
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

  addNeighbor(node, weight) {
    this.neighbors.push({ node, weight });
  }

  removeNeighbor(nodeToRemove) {
    this.neighbors = this.neighbors.filter((node) => node !== nodeToRemove);
  }
}

class WeightGraph {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    const newNode = new WeightGraphNode(value);
    this.nodes.push(newNode);
  }

  getNodeByValue(value) {
    const foundNode = this.nodes.find((node) => node.value === value);
    return foundNode || null;
  }

  addEdge(value1, value2, weight) {
    const node1 = this.getNodeByValue(value1);
    const node2 = this.getNodeByValue(value2);

    if (!node1 || !node2) {
      return false;
    }

    node1.addNeighbor(node2, weight);
    node2.addNeighbor(node1, weight);

    return true;
  }

  /**
   * Знаходить найкоротший шлях між двома вершинами
   * використовуючи алгоритм Дейкстри.
   *
   * @param {number} startValue Значення початкової вершини.
   * @param {number} endValue Значення кінцевої вершини.
   * @returns {number} Довжина найкоротшого шляху між вершинами.
   */
  dijkstraDistance(startValue, endValue) {
    const startNode = this.getNodeByValue(startValue);
    const endNode = this.getNodeByValue(endValue);
  
    // Ініціалізуємо всі вершини як недосяжні, використовуючи нескінченність.
    const distances = new Array(this.nodes.length).fill(Infinity);
    // Встановлюємо початкову вершину з відстанню 0.
    distances[startNode.value] = 0;
  
    const visited = new Set();
    const queue = [startNode];
  
    // Продовжуємо обробку вершин доти, поки черга не порожня.
    while (queue.length !== 0) {
      // Сортуємо чергу вершин за зростанням відстаней.
      // Використання пріоритетної черги прискорить алгоритм.
      queue.sort((a, b) => distances[a.value] - distances[b.value]);

      const currentNode = queue.shift();
      visited.add(currentNode);
  
      // Проходимо через усі сусідні вершини для поточної вершини.
      for (const { node, weight } of currentNode.neighbors) {
        const totalDistance = distances[currentNode.value] + weight;

        // Якщо нова відстань коротша за попередню...
        if (totalDistance < distances[node.value]) {
          // Оновлюємо відстань.
          distances[node.value] = totalDistance;

          // Якщо вершину ще не було відвідано...
          if (!visited.has(node)) {
            // Додаємо її до черги для обробки.
            queue.push(node);
          }
        }
      }
    }
  
    return distances[endNode.value];
  }
}

const graph = new WeightGraph();

graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);

graph.addEdge(0, 1, 8);
graph.addEdge(0, 2, 12);
graph.addEdge(0, 3, 4);
graph.addEdge(1, 2, 5);
graph.addEdge(1, 4, 3);
graph.addEdge(2, 3, 2);
graph.addEdge(2, 5, 6);
graph.addEdge(3, 5, 15);
graph.addEdge(4, 5, 4);

console.log(graph.dijkstraDistance(0, 5));

export {};
