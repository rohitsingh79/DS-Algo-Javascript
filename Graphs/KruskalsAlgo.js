const edges1 = [[1 , 2 , 28] , [1 , 6 , 10] , [2 , 3 , 16] , [2 , 7 ,14],

    [3 , 4 , 12] , [4 , 5 , 22] , [4 , 7 , 18] , [5 , 6 ,25] , [5 , 7 , 24]

]

// ans: 99
// edge1 1 6 10
// edge2 3 4 12
// edge3 2 7 14
// edge4 2 3 16
// edge5 4 7 18
// edge6 4 5 22
// edge7 5 7 24
// edge8 5 6 25


class DSU1{
    constructor(n){
        this.parent = new Array(n).fill(-1);
        this.rank = new Array(n).fill(1);

    }

    find(node){
        if(this.parent[node]===-1) return node;
        return this.find(this.parent[node]);
    }

    union(u , v){

        let fromParent = this.find(u);
        let toParent = this.find(v);

        if(fromParent!==toParent){
            this.parent[fromParent] = toParent;
            this.rank[toParent]++;
        }

        else{
            if(this.rank[fromParent] > this.rank[toParent]){
                this.parent[toParent] = fromParent;
            }
            else{
                this.parent[fromParent] = toParent;

            }
        }
    }
}


function KruskalSpanningTree(){
    const selected = new Array(edges1.length).fill(false)
    const dsu = new DSU1(8);
    let edgeCount = 0;
    let minCost = 0;

    while(edgeCount<6){
        //1 . find the min edge
        // 2. check if they belong to same set and are not forming cycle
        let mini = 1000000;

        let u = 0 , v = 0 , edgeNumber;

        for(let i = 0; i<edges1.length; i++) {
            let dis = edges1[i][2];
            if(dis<mini && !selected[i]) {
                mini = dis;
                u = edges1[i][0];
                v = edges1[i][1];
                edgeNumber = i;
            }
        }
        if(dsu.find(u)!== dsu.find(v)){
            selected[edgeNumber] = true; // mark the edge as taken
            minCost+=edges1[edgeNumber][2]; // add the cost of the edge
            dsu.union(u , v)
            edgeCount++;// make u and v in the same set
        }

        else selected[edgeNumber] = true;// never consider since it will make cycle
    }

    console.log('ans' , minCost)
}

KruskalSpanningTree()