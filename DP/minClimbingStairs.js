//top down approach

// var minCostClimbingStairs = function(cost) {
    
//     let dp = new Array(cost.length+1).fill(-1)
    
//     function minCost(cost,n ,dp){
//         // base case
//         if(n<=1){

//             return 0;
//         }

//         if(dp[n]!==-1){
//             return dp[n]
//         }
        
//         let mn ;
//         let mn1 = cost[n-1]+minCost(cost,n-1,dp);
//         let mn2 = cost[n-2]+minCost(cost ,n-2,dp);
//         dp[n] =  Math.min(mn1,mn2);
//         return dp[n]
        
//     }
//     let n = cost.length;
//     return minCost(cost , n,dp)
    
// };

// console.log(minCostClimbingStairs([10,15,20]));

// bottom up approach
var minCostClimbingStairs = function(cost) {
    
    
};


console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));