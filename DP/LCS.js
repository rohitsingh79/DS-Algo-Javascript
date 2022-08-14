// Delete Operation for Two Strings


// Input: word1 = "sea", word2 = "eat"
// Output: 2
// Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

// var minDistance = function(word1, word2) {

//     let dp = new Array(word1.length+1);
//     for(let i=0;i<=word1.length;i++){
//         dp[i] = new Array(word2.length+1).fill(0);
//     }

//     function LCS(word1 , word2,m,n,dp){
//         // base condition
//         if(m===0 || n===0){return 0}

//         //memoisation
//         if(dp[m][n]>0){ return dp[m][n]}

//         if(word1[m-1]===word2[n-1]){
//             return 1+ LCS(word1 , word2 , m-1,n-1,dp)
//         }
//         else {
//              dp[m][n] = Math.max(LCS(word1,word2,m-1,n,dp),LCS(word1,word2,m,n-1,dp));
//         }
//         return dp[m][n]

//     }
//    let ans =  LCS(word1,word2,word1.length,word2.length,dp)
//    let s1 = word1.length;
//    let s2 = word2.length;
//    minDeletions = (s1+s2) - (2*ans);
//    console.log(minDeletions)


// };

var longestCommonSubsequence = function (text1, text2) {
    let n1 = text1.length;
    let n2 = text2.length;
    let dp = new Array(n1+1);
    for (let i = 0; i <= n1; i++) {
        dp[i] = new Array(n2+1).fill(-1);
    }
    function helper(i, j, text1, text2,dp) {
        if (i == 0 || j == 0) return 0;
        if(dp[i][j]!==-1) return dp[i][j];
        if (text1[i - 1] === text2[j - 1]) {
            return  1 + helper(i - 1, j - 1, text1, text2,dp);
        }
        else {
            let op1 = helper(i - 1, j, text1, text2,dp);
            let op2 = helper(i, j - 1, text1, text2,dp);
            dp[i][j] = Math.max(op1,op2);
            return Math.max(op1,op2);;
        }
    }
    return helper(n1, n2, text1, text2,dp)
};

console.log(longestCommonSubsequence('abcde', 'ace'));



