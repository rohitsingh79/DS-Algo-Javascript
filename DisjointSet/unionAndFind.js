//-----------------Union , Find in DSU-----------------//
//https://www.geeksforgeeks.org/introduction-to-disjoint-set-data-structure-or-union-find-algorithm/
//https://www.youtube.com/watch?v=eTaWFhPXPz4

// 1. union find - find the absolute parent
// 2. disjoint union - make one of the parent of disjoint set as the parent of another disjoint set
// 3 . detect cycle in in a undirected graph - if two nodes share the same parent then the graph contain cycle


// [[0, 1], [0, 3], [2, 3], [1, 2]];  edges
// [-1 , -1 , -1 , -1] -  parent

//[1 , -1 , -1 , -1]   for edge 0-->1
//[1 , 3 , -1 , -1]  // for edge 0-->3
//[1 , 3 , 3 , -1] //  for edge 2-->3
// for edge 1-2 have the same parent therfore there is a cycle 

function DSU() {

    //https://gist.github.com/SuryaPratapK/3e58ebd6a3fe88f24b6bab14f1e03674
    // if two vertices point to the same 
    const vertices = 4;
    const edges = [[0, 1], [0, 3], [2, 3], [1, 2]];
    let dsuf = [-1, -1, -1, -1]

    function find(node) {

        if (dsuf[node] === -1) return node;

        return find(dsuf[node]);


    }

    function union(from, to) {

        let absRootOfFrom = find(from);
        let absRootOfTo = find(to);

        if (absRootOfFrom !== absRootOfTo) {
            // do union of the two disjoint set
            dsuf[absRootOfFrom] = absRootOfTo
            return false;

        }

        else if (absRootOfFrom === absRootOfTo) {
            console.log('dsuf', dsuf)
            return true
        
        };

    }


    for (const edge of edges) {
        const [from, to] = edge;
        if (union(from, to)) return true;

    }
    console.log('dsuf', dsuf)
}

console.log(DSU());