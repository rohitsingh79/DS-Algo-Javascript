// https://leetcode.com/problems/coin-change/


// Input: coins = [1,2,5], amount = 11

// var coinChange = function(coins, amount) {
//     // base case 

//     let dp = new Array(coins.length);
//     for(let i=0;i<coins.length;i++){
//         dp[i] = new Array(amount+1).fill(-1);
//     }
//     function helper(coins , amount , i ,dp){
//         if(amount === 0 ){ return 0};
//         if(i===coins.length) { return Number.MAX_SAFE_INTEGER-1}
//         if(amount<0) {return Number.MAX_SAFE_INTEGER-1}

//         if(dp[i][amount]!==-1){ return dp[i][amount]}
//         if(coins[i]<=amount){
//             let min = Math.min(1+helper(coins , amount-coins[i],i,dp) , helper(coins,amount,i+1,dp));
//              dp[i][amount] = min;
//              console.log('dp after each iteration', dp);
//              return dp[i][amount];
//         }
//         else{
//            return dp[i][amount] = helper(coins,amount,i+1,dp);
//         }


//     }
//     let result = helper(coins , amount , 0 , dp);
//     return result === Number.MAX_SAFE_INTEGER-1?-1:result;

// };

// console.log(coinChange([1,2],4));

// bottom up approach
var coinChange = function (coins, amount) {
    // base case 
let n = coins.length;
    let dp = new Array(n+ 1);
    for (let i = 0; i <=n; i++) {
        dp[i] = new Array(amount+1);   
    }  
    // intitalise the base case
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= amount; j++) {
            if (i === 0) { dp[i][j] = Number.MAX_SAFE_INTEGER - 1; } // if you have zero coins , no sum is possible
            else if (j === 0) { 
                dp[i][j] = 0 }
            else {
                if (coins[i - 1] <= j) {
                    dp[i][j] =  Math.min(1 + dp[i][j - coins[i - 1]], dp[i - 1][j]);
                }
                else {
                    dp[i][j] = dp[i - 1][j]
                }
            }

        }


    }
    // console.log('final dp array');
    // console.log(dp);
    return dp[3][11]


};

console.log(coinChange([1,2,5], 11));