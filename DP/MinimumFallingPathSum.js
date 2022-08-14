var minFallingPathSum = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let min = Number.MAX_SAFE_INTEGER;
    let res1;
    
    function helper(i , j, matrix){
        
        
        //base condition
        if(j<0) return Number.MAX_SAFE_INTEGER;

        if(j>matrix.length-1) return Number.MAX_SAFE_INTEGER;

        if(i==matrix.length-1) return matrix[i][j];
        
       let min1 = helper(i+1,j,matrix);
       let min2 = helper(i+1,j+1,matrix)
       let min3 = helper(i+1,j-1,matrix)
       
       console.log('min1',min1);
       console.log('min2',min2);
        console.log('min3',min3);
       
       let mini = Math.min(min1,min2);
        mini = Math.min(mini,min3)
       let res = matrix[i][j]+mini;
       console.log('result',res);
        return res   
    }
    
    for(let j=0; j<m;j++){
       res1 = helper(0,j,matrix)
        min = Math.min(min , res1);
    }
    return min;
};

console.log(minFallingPathSum([[-19,57],[-40,-5]]));
