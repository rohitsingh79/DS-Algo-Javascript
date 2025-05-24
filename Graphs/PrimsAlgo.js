//https://leetcode.com/discuss/interview-question/object-oriented-design/5039916/Exploring-Prim's-Algorithm%3A-A-Beginner's-Guide/
// prim's Algorithm

// console.log('adjMatrix' , adjMatrix)

// psuedo code
// step1: find the min edge in the entire matrix
// step2: mark the vertices of the edge as 0 in near[] matrix
// step3: include the edge in the t[2][e-2] array 
// step4: update the near matrix to check if the other vertices are closer to the newly added edge
// step5: repeat step2 till step4 untill all the entries in t are filled


// construct the adjacency matrix

let adjMatrix = []

adjMatrix.push([1000000000, 1000000000, 1000000000, 1000000000,
    1000000000, 1000000000, 1000000000, 1000000000
]);

for (let i = 1; i <= 7; i++) {

    adjMatrix.push(new Array(8).fill(1000000000));
}


function addEdge(u, v, w) {

    adjMatrix[u][v] = w;
    adjMatrix[v][u] = w;

}

function printEdge() {2


    for (let i = 1; i < adjMatrix.length; i++) {
        for (let j = 1; j < adjMatrix[1].length; j++) {

            if (adjMatrix[i][j] !== '-') {
                console.log(`edge ${i} --> ${j} = ${adjMatrix[i][j]}`)
            }

        }
    }

}

let r = adjMatrix.length;
let c = adjMatrix[1].length;
let u;
let v;

let near = new Array(8).fill(-1)
let t = [];
t.push(new Array(6));
t.push(new Array(6));

console.log('near', near);
console.log('t', t)

let min = 10000;

function prims() {

    // 1. find the min edge greedily
    for (let i = 1; i < r; i++) {
        for (let j = 1; j < c; j++) {

            if (adjMatrix[i][j] < min) {
                min = adjMatrix[i][j];
                u = i;
                v = j;

            }

        }
    }

    console.log('u', u);
    console.log('v', v);

    // update the first entry
    t[0][0] = u;
    t[1][0] = v;

    near[u] = 0;
    near[v] = 0;

    console.log('near', near)

    for (let i = 1; i < r; i++) {
        if (near[i] !== 0) {

            if (adjMatrix[i][u] < adjMatrix[i][v]) // whether near to u or v
            {
                near[i] = u;
            }
            else near[i] = v;
        }


    }

    console.log('near after initialization', near);


    // step3: find the next min edge from the nearest

    let k;

    // there will n-1 edges 
    // if there are 9 vertices there will be 6 edges
    // r = adjMatrix.length there we need to add the edges from 0 to 5 only to include 6 edges

    for (let i = 1; i <=r-3; i++) {

        let min = 10000000000

        for (let j = 1; j < r; j++) {

            if (near[j] !== 0 && adjMatrix[j][near[j]] < min) {
                min = adjMatrix[j][near[j]];
                k = j;
            }

        }

        t[0][i] = k;
        t[1][i] = near[k];
        near[k] = 0;


        // step4: update the near array for each iteration

        for(let j = 1; j<r; j++){

            if(near[j]!==0 && adjMatrix[j][k] < adjMatrix[j][near[j]]){
                near[j] = k;
            }

        }

        console.log('ans t' ,t)

    }


}

addEdge(1, 6, 5);
addEdge(1, 2, 25);
addEdge(6, 5, 20);
addEdge(5, 4, 16);
addEdge(4, 3, 8);
addEdge(4, 7, 14);
addEdge(5, 7, 18);
addEdge(3, 2, 12);
addEdge(2, 7, 10);
prims();


//----------------------------------------Prims using Priority queue-------------------------------------//
function Prims(graph){
    let n = graph.length;
    const dist = Array(n).fill(10000);
    const visited = Array(n).fill(false);
    let cost1 = 0;
    const pq = new MinPriorityQueue((x) => x[0]) // 0th will be the distance take the least one
    pq.push([0 , 1]);  // distance , vertex
    dist[1] = 0;

    while(!pq.isEmpty()){

        const top = pq.dequeue();
        let weight = top[0]; // current ditance weight
        let u = top[1]; // current elmeent 


        // inlcude the weight in the cost
        if(visited[u]) continue;

        
        cost1+=weight;
        visited[u] = true;

        for(const edge of graph[u]){

            const toEdgeVertex =  edge[0];
            const distanceToVertex = edge[1];

            if(!visited[toEdgeVertex]){

                if(distanceToVertex < dist[toEdgeVertex]){
                    dist[toEdgeVertex] = distanceToVertex // update the distance
                    pq.enqueue([distanceToVertex , toEdgeVertex])
                }
            }
        }

    }

    console.log('cost of the new created MST' , cost1)
    console.log('dist' , dist)

}


const adjacenyList = [
  [],
  [
    [2, 28],
    [6, 10],
  ],
  [
    [1, 28],
    [7, 14],
    [3, 16],
  ],
  [
    [2, 16],
    [4, 12],
  ],
  [
    [5, 22],
    [7, 18],
    [3, 12],
  ],
  [
    [6, 25],
    [7, 24],
    [4 , 22]
  ],
  [
    [1, 10],
    [5, 25],
  ],
  [
    [5, 24],
    [4, 18],
    [2, 14],
  ],
];

// adjacency list --> vertex , distance

Prims(adjacenyList)

