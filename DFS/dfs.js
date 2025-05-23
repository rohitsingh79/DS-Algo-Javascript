var closedIsland = function(grid) {
    let count = 0;
    let row = grid.length;
    let column = grid[0].length;
    for(let i = 0; i<grid.length; i++){

        for(let j=0; j<grid[0].length; j++){
            if (grid[i][j] == 0){
                if (helper(i,j))count++;
            }
        }
    }

    function helper(i,j){
        if (i < 0 || j < 0 || i>=row || j>=column) return false;
        if (grid[i][j]) return true;
        grid[i][j] = true;

        let top = helper(i - 1, j)
        let bottom = helper(i + 1, j)
        let left = helper(i, j-1)
        let right = helper(i, j + 1);
        return top && bottom && left && right;

    }
    return count
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    //T.C O(row*col)
    //S.C auxiliary stack space for recursion

    let row = grid.length;
    let col = grid[0].length;

    function dfs(i , j) {

        if(i<0 || i>=row || j<0 || j>=col  || grid[i][j]!=='1') return ;

        grid[i][j] = '2';   // mark it as visited

        dfs(i+1 , j)
        dfs(i-1 , j)
        dfs(i , j-1)
        dfs(i , j+1)
    }

    let count = 0;

    for(let i  = 0; i< row; i++){

        for(let j = 0; j< col ; j++){

            if(grid[i][j] === '1')

                count++;

            dfs(i, j)

        }
    }

    return count;

};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    let n = grid.length;

    let m = grid[0].length;

    function helper(i ,j){

        if(i<0 || j<0  || i>=n || j>=m)
            return 0;

        if(grid[i][j]==0) return 0;

        grid[i][j] = 0;

        return 1+helper(i+1,j)+helper(i-1,j)+helper(i,j+1)+helper(i,j-1);

    }

    let maxi = 0;

    for(let i=0;i<n;i++){

        for(let j=0;j<m;j++){

            let len = helper(i,j);

            maxi = Math.max(len , maxi);

        }
    }

    return maxi;
};