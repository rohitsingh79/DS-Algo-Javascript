// ############################################## topological sorting#################################################

//https://www.geeksforgeeks.org/topological-sorting/
// it is done only for directed acyclic graph 

// 1 . create an adjacency list and visited node list
// 2. iterate through each node and check for its dependency recurisively (dfs)
// 3. if the dependent node does not have any outdegree , push it to the stack and return
// 4 . if the node is visited again then its a cycle and hence there can be toplogical sorting possible and return []
// 5. if the node is not visited and has futher depenedency , iterate through those and perform steps 3 to steps5
// 6 . return the stack which reperesent the elements in the topological sort


function topologicalSort(edges){

    const graph = new Map();

    const visited = new Array(edges.length)

    let stack = [];

    for (const [node , edge] of edges){

        if(graph.has(node)){

            let value = graph.get(node);

            value.push(edge);

            graph.set(node , value);


        }

        else graph.set(node , [edge])
    }

    console.log('graph' , graph)


    function helper(node){ // dfs algorithm 

        if(visited[node] === 1) return false;
        if(visited[node] === 2) return true;

        visited[node] = 1;

        let edges = graph.get(node);

        if(edges){

            for(const node of edges){

                if(!helper(node)) return false;
            }

        }

        visited[node] = 2;

        stack.push(node);

        return true;


    }

    for(let i = 0; i<edges.length; i++){
        if(!helper(i)) return []
    }

    return stack.reverse();



}

const edges = [[0, 1], [1, 2], [3, 1], [3, 2]];

console.log(topologicalSort(edges))

// ans [ 3, 0 , 1 , 2 ]