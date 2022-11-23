// https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/description/

var nearestExit = function(maze, entrance) {
    
    // number of rows
    let n = maze.length;

    // number of columns
    let m = maze[0].length;

    // declare a queue

    let q = [];

    // declare the 4 cordinates

    // top , right , down , left

    let dx = [-1, 0, 1, 0];

    let dy = [0 , 1 , 0, -1]

    // mark the visited cell in the maze

    maze[entrance[0]][entrance[1]] = '+';

    // level to hold track of the level in bfs

    let level = 0;

    //push the entrance into the queue

    q.push([entrance[0] , entrance[1]]);

    // run a loop till the q is empty

    while(q.length!==0){

        // take the current size of the queue for bfs

        let len = q.length;

        while(len--){

            // pop from the front of the queue

            let first = q.shift();

            let [i , j] = first;

            // we will check if we have reached the end of the queue

            if(!(i==entrance[0] && j==entrance[1]) && (i==0 || j==0 || i==n-1 || j==m-1)){
                return level;
            }


            // else push all the 4 cordinates of the cell in the queue

            // run a for loop

            for(let k=0;k<4;k++){

                let new_i = i+dx[k];

                let new_j = j+dy[k];

                // check if the new cordinates is not visited and is not a wall and is also not out of bound
                // and mark it as visited

                if(new_i>=0 && new_i<n && new_j>=0 && new_j<m && maze[new_i][new_j]!=='+' ){
                    q.push([new_i , new_j]);
                    // mark it as visted
                    maze[new_i][new_j] = '+';
                }
            }

        }

        level++;

    }

    return -1;
    

};