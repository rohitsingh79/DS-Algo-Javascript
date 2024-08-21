//-----------------Union , Find in DSU-----------------//
//https://www.geeksforgeeks.org/introduction-to-disjoint-set-data-structure-or-union-find-algorithm/
//https://www.youtube.com/watch?v=eTaWFhPXPz4

// 1. union find - find the absolute parent
// 2. disjoint union - make one of the parent of disjoint set as the parent of another disjoint set
// 3 . detect cycle in in a undirected graph - if two nodes share the same parent then the graph contain cycle

// //(0 , 1) (0,3) (2 , 3) (1,2)

// [0, 1, 2, 3]
// [0, 1, 2, 3]

// // make union of (0,1)
// [0, 1, 2, 3]
// [1, 1, 2, 3]

// // make union of (0,3)
// [0, 1, 2, 3]
// [1, 1, 2, 1]


// // make union of (2 , 3)
// [0, 1, 2, 3]
// [1, 1, 1, 1]

function DSU() {

    const vertices = 4;
    const edges = [[0, 1], [0, 3], [2, 3], [1, 2]];
    let dsuf = [0, 1, 2, 3]


    function find(node) {

        if (node === dsuf[node]) return node;

        return find(dsuf[node]);


    }

    function union(from, to) {

        let absRootOfFrom = find(from);
        let absRootOfTo = find(to);

        if (absRootOfFrom !== absRootOfTo) {
            // do union of the two disjoint set
            dsuf[absRootOfTo] = absRootOfFrom
            return false;

        }

        else if (absRootOfFrom === absRootOfTo) return true;

    }


    for (const edge of edges) {
        const [from, to] = edge;
        if (union(from, to)) return true;

    }
    console.log('dsuf', dsuf)
}

console.log(DSU());