//https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/
// bfs approach to finding the linear ordering of n vertices
//https://takeuforward.org/data-structure/kahns-algorithm-topological-sort-algorithm-bfs-g-22/

/*   Algorithm to find the topological sort kahn's algo
    // 1. creat an adjacency list
    // 2. create an indegree array list which stores the degree for each vertex
    // 3. push the node with 0 indegree to the queue
    // 4. process until all nodes are removed from queue and visited
 */

// Edges
const edges = [[0, 1], [1, 2], [2, 3], [4, 5], [5, 1], [5, 2]];

let n = edges.length;

const adj = [];

for (let i = 0; i < edges.length; i++) {
    adj.push([])
}

for(const edge of edges){
    // [0,1]
    const from = edge[0];
    const to = edge[1];
    adj[from].push(to)
}

console.log('adjacency list' , adj)

// calc indegree
const indegree = new Array(n).fill(0);

for(let i = 0; i<adj.length; i++){
    const dep = adj[i]; // get the list of dependency
    for(const e of dep){
        indegree[e]++
    }
}

console.log('indegree' , indegree)

// push the node with indegree 1 to queue

 let q = []

for(let i = 0; i<indegree.length; i++){

    if(indegree[i] === 0) q.push(i)

}

console.log('q' , q)

// apply bfs

let ans = []

while(q.length > 0){

    // remove the first elem from the q
    const node = q.shift()
    ans.push(node)
    // get dependencies
    const dep = adj[node];

    // decrement the indegree
    for(const d of dep){

        indegree[d]--
        if(indegree[d] === 0) {
            q.push(d)
        } // push it to q if indegree becomes 0
    }

}

console.log('toplogical sorting' , ans)


//I/P:
//[[0, 1], [1, 2], [2, 3], [4, 5], [5, 1], [5, 2]];

//0/p
// adjacency list [ [ 1 ], [ 2 ], [ 3 ], [], [ 5 ], [ 1, 2 ] ]
// indegree [ 0, 2, 2, 1, 0, 1 ]
// q [ 0, 4 ]
// toplogical sorting [ 0, 4, 5, 1, 2, 3 ]

