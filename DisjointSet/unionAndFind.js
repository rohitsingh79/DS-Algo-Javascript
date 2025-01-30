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

// edges - (0 ,1) (2,3) (1,2) (0,4) (4,3)


// [-1 , -1 , -1 , -1 , -1]
// [0 , 0 ,0 ,0 ,0]

// [1 , -1 , -1 , -1 , -1]   0-->1
//[0 , 1 ,0 ,0 ,0]

// [1 , -1 , 3 , -1 , -1]   2-->3
//[0 , 1 ,0 ,1 ,0]

// [1 , 3 , 3 , -1 , -1]   1-->2
//[0 , 1 ,0 ,2 ,0]


// [3 , 3 , 3 , -1 , 3]   0-->4
//[0 , 1 ,0 ,3 ,0]


// [3 , 3 , 3 , -1 , 3]   4-->3  4 and 3 both pointing to same node so there is a cycle
//[0 , 1 ,0 ,3 ,0]


// optimized approach to find union by rank and compression

function DSUOptimized(){

    const  edges = [[0 ,1] , [2,3] , [1,2] , [0,4] , [4,3]]

    class node {
        constructor() {
            this.parent = -1;
            this.rank = 0;
        }
    }

    let dsuf = [];


    for(let i =0 ; i<5; i++){

        dsuf.push(new node());

    }

    function find(vertex){
        // recursively update the absolute parent of vertex and replace the value
        if(dsuf[vertex].parent === -1) return vertex; // to return at the root level

        dsuf[vertex].parent = find(dsuf[vertex].parent); 

        return dsuf[vertex].parent // to return the intermediate parent

    } 

    function union(from , to){

        // find the absolute parent of from and to
        let fromParent = find(from);
        let toParent = find(to);

        if(fromParent === toParent) return true
        // check the rank which allow to cnstruct a tree with less rank which help us in finding the node in short time for  find function

        else if(dsuf[fromParent].rank>dsuf[toParent].rank){   // assign the node to the tree that has more height
            dsuf[toParent].parent = from;
        }

        else if(dsuf[toParent].rank>dsuf[fromParent].rank){
            dsuf[fromParent].parent = to;
        }

        else {dsuf[fromParent].parent = toParent; dsuf[toParent].rank +=1;}   // similar rank assign to one of node and increase height
    }

    for(const edge of edges){

        console.log('edge', edge)

        const [from , to] = edge

        if(union(from , to)){
            console.log('dsuf' ,dsuf)
            return true;
        }
    }

    return false;

   
}

DSUOptimized();
