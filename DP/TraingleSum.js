

// you can either move to the j or j+1 of the next row only and take the result of the minmu
// using only recusrsion

function TriangleSum(A,i,j,dp){
    if(i == A.length )
    {
       return 0 ;
    }
    if(dp[i][j]!=-1){
        return dp[i][j];
    }
    let mn ;
    mn = A[i][j]+ Math.min(TriangleSum(A,i + 1,j,dp),TriangleSum(A,i + 1,j + 1,dp));
    return dp[i][j]= mn;

}

function minSumPath(A){
    // call the helper function
    let n = A.length;
    let dp  = new Array(n)
    for(let i=0;i<n;i++){
        dp[i] = new Array(n).fill(-1);
    }
    return TriangleSum(A,0,0,dp)
}



/* Driver program to test above functions */
let A = [ [ 2 ], [ 3, 9 ], [ 1, 6, 7 ] ];
console.log(minSumPath(A));

