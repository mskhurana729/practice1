class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacentVertices = [];
  }
  addAdjacentVertexForDirectedGraph(vertex) {
    this.adjacentVertices.push(Vertex);
  }
  addAdjacentVertex(vertex) {
    this.adjacentVertices.push(vertex);
    vertex.adjacentVertices.push(this);
  }
}
export default Vertex;
let alice = new Vertex('alice');
let bob = new Vertex('bob');
let cynthia = new Vertex('cynthia');
alice.addAdjacentVertex(bob);
alice.addAdjacentVertex(cynthia);
bob.addAdjacentVertex(cynthia);
cynthia.addAdjacentVertex(bob);

function dfsTraverse(vertex, visitedVertices = {}) {
  visitedVertices[vertex.value] = true;
  console.log(vertex.value);
  for (const adjacentVertex of vertex.adjacentVertices) {
    if (!visitedVertices[adjacentVertex.value]) {
      dfsTraverse(adjacentVertex, visitedVertices);
    }
  }
}
// if we want to use depth-first search to search for single vertex
function dfs(vertex, searchValue, visitedVertices = {}) {
  visitedVertices[vertex.value] = true;
  if (vertex.value === searchValue) {
    return vertex;
  }
  for (const adjacentVertex of vertex.adjacentVertices) {
    if (adjacentVertex.value === searchValue) {
      return adjacentVertex;
    }
    if (!visitedVertices[adjacentVertex.value]) {
      const vertexWeAreSearchingFor = dfs(
        adjacentVertex,
        searchValue,
        visitedVertices
      );
      if (vertexWeAreSearchingFor) {
        return vertexWeAreSearchingFor;
      }
    }
  }
  return null;
}

// Breadth first search

function bfsTraverse(startingVertex) {
  const queue = new Queue();
  const visitedVertices = {};
  visitedVertices[startingVertex.value] = true;
  queue.enqueue(startingVertex);
  while (queue.read()) {
    const currentVertex = queue.dequeue();
    console.log(currentVertex.value);
    for (const adjacentVertex of currentVertex.adjacentVertices) {
      if (!visitedVertices[adjacentVertex.value]) {
        visitedVertices[adjacentVertex.value] = true;
        queue.enqueue(adjacentVertex);
      }
    }
  }
}
// bfs to search for a single vertex
function bfsTraverse(startingVertex, searchValue) {
  const queue = new Queue();
  const visitedVertices = {};
  visitedVertices[startingVertex.value] = true;
  queue.enqueue(startingVertex);
  while (queue.read()) {
    const currentVertex = queue.dequeue();
    console.log(currentVertex.value);
    if (currentVertex.value === searchValue) {
      return currentVertex;
    }
    for (const adjacentVertex of currentVertex.adjacentVertices) {
      if (!visitedVertices[adjacentVertex.value]) {
        visitedVertices[adjacentVertex.value] = true;
        queue.enqueue(adjacentVertex);
      }
    }
  }
  return null;
}

// weighted graphs in code
class WeightedGraphVertex {
  constructor(value) {
    this.value = value;
    this.adjacentVertices = new Map();
  }
  addAdjacentVertex(vertex, weight) {
    this.adjacentVertices.set(vertex, weight);
  }
}

class City {
  constructor(name) {
    this.name = name;
    this.routes = new Map();
  }
  addRoute(city, price) {
    this.routes.set(city, price);
  }
}
// Dijkstra's Algorithm

const atlanta = new City('Atlanta');
const boston = new City('Boston');
const chicago = new City('Chicago');
const denver = new City('Denver');
const elPaso = new City('El Paso');

atlanta.addRoute(boston, 100);
atlanta.addRoute(denver, 160);
boston.addRoute(denver, 180);
boston.addRoute(chicago, 120);
chicago.addRoute(elPaso, 80);
denver.addRoute(chicago, 40);
denver.addRoute(elPaso, 140);
elPaso.addRoute(boston, 100);

function dijkstraShortestPath(startingCity, finalDestination) {
  const cheapestPriceTable = {};
  const cheapestPreviousStopoverCityTable = {};
  let unvisitedCities = [startingCity];
  const visitedCities = {};

  cheapestPriceTable[startingCity.name] = 0;
  let currentCity = startingCity;
  while (unvisitedCities.length > 0) {
    visitedCities[currentCity.name] = true;
    unvisitedCities = unvisitedCities.filter((city) => city !== currentCity);
    for (const adjacentCity of currentCity.routes.key()) {
      const price = currentCity.routes.get(adjacentCity);
      if (!visitedCities[adjacentCity.name] && !unvisitedCities[adjacentCity]) {
        unvisitedCities.push(adjacentCity);
      }
      const priceThroughCurrentCity =
        cheapestPriceTable[currentCity.name] + price;
      if (
        !cheapestPriceTable[adjacentCity.name] ||
        priceThroughCurrentCity < cheapestPriceTable[adjacentCity.name]
      ) {
        cheapestPriceTable[adjacentCity.name] = priceThroughCurrentCity;
        cheapestPreviousStopoverCityTable[adjacentCity.name] = currentCity.name;
      }
    }
    let cheapestPrice = Infinity;
    for (const city of unvisitedCities) {
      if (cheapestPriceTable[city.name] < cheapestPrice) {
        cheapestPrice = cheapestPriceTable[city.name];
        currentCity = city;
      }
    }
  }
  const shortestPath = [];
  let currentCityName = finalDestination.name;
  while (currentCityName) {
    shortestPath.unshift(currentCityName);
    currentCityName = cheapestPreviousStopoverCityTable[currentCityName];
  }
  return shortestPath;
}
// we want to write a function to find the shortest path in unweighted graphs. shortest path in this is the fewest number of vertices to get from one vertex to another.
// this function will accepts two vertexes as parameter and will return an array of precise path
/**
 * we will use memotization for level and visitedVertexes
 * to make this function we will first make a visitedVertex objects which will keep track of the vertexes which we have already visited.
 *  const shortestPathTable = {};
  const shortestPreviousStopoverTable = {};
  let unvisitedVertexQueue = new Queue();
  unvisitedVertexQueue.enqueue(startingVertex);
  const visitedVertexes = {};
  visitedVertexes[startingVertex.value] = true;
  shortestPathTable[startingVertex.value] = 0;

 * then while queue.read()
 *    currentVertex = queue.dequeue();
 *
 * if currentVertex is not present in shortestPath table then we will
 *    then we will enqueue the adjacent vertex of adjacentVertices
 *        if adjacentVertex is not present in visitedVertex
 *
 *
 *
 */

function findShortestPath(firstVertex, secondVertex, visitedVertices) {
  const queue = new Queue();
  const previousVertexTable = {};
  visitedVertices[firstVertex.value] = true;
  queue.enqueue(firstVertex);
  while (queue.read()) {
    const currentVertex = queue.dequeue();
    for (const adjacentVertex of currentVertex.adjacentVertices) {
      if (!visitedVertices[adjacentVertex.value]) {
        visitedVertices[adjacentVertex.value] = true;
        queue.enqueue(adjacentVertex);
        previousVertexTable[adjacentVertex.value] = currentVertex.value;
      }
    }
  }
  const shortestPath = [];
  let currentVertexValue = secondVertex.value;
  while (currentVertexValue !== firstVertex.value) {
    shortestPath.unshift(currentVertexValue);
    currentVertexValue = previousVertexTable[currentVertexValue];
  }
  shortestPath.unshift(firstVertex.value);
  return shortestPath;
}
