
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const m = grid.length || 0
    const n = m && grid[0].length || 0

    if (m === 0 || n === 0 || grid[0][0] !== 0) return -1

    let step = 1
    const queue = [[0, 0]]
    const dires = [[-1, 0], [1, 0], [0, 1], [0, -1], [-1, 1], [-1, -1], [1, 1], [1, -1]]

    while (queue.length) {
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift()

            if (x === m - 1 && y === n - 1) return step

            for (const [dx, dy] of dires) {
                const newX = x + dx, newY = y + dy
                if (_withinBound(newX, newY, m, n) && grid[newX][newY] === 0) {
                    grid[newX][newY] = 1
                    queue.push([newX, newY])
                }
            }
        }

        step += 1
    }

    return -1
};

function _withinBound(x, y, m, n) {
    return 0 <= x && 0 <= y && x < m && y < n
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

    let q = [];

    let n = grid.length;
    let m = grid[0].length;

    for(let i = 0 ; i<n ; i++){

        for(let j = 0; j<m; j++){

            if(grid[i][j] === 2){

                q.push([i , j])  // initially push all the rotten oranges
            } // it is rotten
        }
    }

    let minutes = 0;

    while(q.length){

        let len = q.length;

        minutes++;

        for(let k = 0; k<len ; k++){

            const [x , y] = q.shift();

            const directions = [[0 , 1] , [0 , -1] , [1 , 0] , [-1 , 0]];  // iterate in the 4 directions


            for(let [i , j] of directions){

                if(x+i < 0 || x+i >= n || y+j < 0 || y+j >= m) continue;   // out of boundary

                if(grid[x+i][y+j] === 0 || grid[x+i][y+j] === 2) continue;  // empty space || is already rotten

                // console.log('')

                grid[x+i][y+j] = 2; // mark it as rotten

                q.push([x+i , y+j])  // push new rotten to queue

            }
        }



    }


    for(let i = 0 ; i<n ; i++){

        for(let j = 0; j<m; j++){

            if(grid[i][j] === 1) return -1;


        }
    }

    return minutes === 0? 0: minutes-1


};

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {

    // bfs approach

    // declare a queue

    let q = [];

    // array of visited rooms

    let visited = new Array(rooms.length).fill(false);

    visited[0] = true;

    q.push(rooms[0]);

    // untill the queue is empty

    while(q.length!==0){

        //iterate over all the room keys in one loop

        let roomKeys = q.shift();

        for(const room of roomKeys){

            if(!visited[room]){

                // add the room into the queue
                // if not visited

                visited[room] = true;
                q.push(rooms[room]);
            }

        }

    }

    return visited.every(Boolean);

};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

var floodFill = function (image, sr, sc, color) {

    //BFS approach
    // similar to rotten oranges
    //https://leetcode.com/problems/rotting-oranges/solutions/5901856/js-bfs/

    let srcColor = image[sr][sc];

    let n = image.length;
    let m = image[0].length;

    if(srcColor === color) return image // edge case


    let q = [];

    q.push([sr, sc]);

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]] // iterate in four direction adjacent

    while (q.length) {

        let qLen = q.length;

        while (qLen) {

            const [i, j] = q.shift(); // remove the first element from the queue

            image[i][j] = color;  // mark the node itself as coloured

            for (const [x, y] of directions) {

                if (x + i < 0 || x + i >= n || y + j < 0 || y + j >= m) continue;  // boundary condition out of bound

                if (image[x + i][y + j] === srcColor) { // color matches the current colour which is adjacent

                    image[x + i][y + j] = color;  // mark the color

                    q.push([x + i, y + j])


                }



            }
            qLen--;
        }
    };

    return image

}}