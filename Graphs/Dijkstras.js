  // greedily take the next shortest edge and update the distance
  // calc the distance from the source node in the starting


  // Steps
  // 1. chose the smallest edge
  // 2. then do the normalization


import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function dijkstra(v, adj, src) {
  const dist = Array(v).fill(Infinity);
  dist[src] = 1;

  const pq = new MinPriorityQueue(
    (x) => x[0] // x = [distance, node]
  );

  pq.enqueue([0, src]);

  while (!pq.isEmpty()) {
    const top = pq.dequeue();
    const dis = top[0];
    const node = top[1];

    console.log("dis", dis, node);

    let edges = adj[node];

    console.log("edges", edges);

    if (edges.length) {   // for first and last edges
      for (const edge of edges) {
        console.log("edge", edge);
        const adjNode = edge[0];
        const edgeWeight = edge[1];
        f (dis + edgeWeight < dist[adjNode]) {
          dist[adjNode] = dis + edgeWeight;
          pq.enqueue([dist[adjNode], adjNode]);
        }
      }
    }
  }
  console.log('dist' , dist)
  return dist;
}

const v = 7;
const adj = [
  [],
  [
    [2, 1],
    [3, 5],
  ],
  [
    [3, 3],
    [4, 10],
    [5, 8],
  ],
  [[5, 2]],
  [
    [5, 3],
    [6, 2],
  ],
  [[4 , 3] ,[6, 7]],
  []
];

// adjacency list --> vertex , distance

dijkstra(7, adj, 1);