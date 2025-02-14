//https://leetcode.com/problems/longest-increasing-subsequence/description/

var lengthOfLIS = function(nums) {
    // using dynamic programing
    let dp = new Array(nums.length+1);
    for(let i=0;i<nums.length;i++){
        dp[i] = new Array(nums.length+1).fill(-1);
    }
    // write the recursive relation
    function helper(nums , index , prev,dp){
        
        // base case
        if(index === nums.length) return 0;
        if(prev!==-1 && dp[prev][index]!=-1){
            return dp[prev][index];
        }
        let op1 = 0;
        if(prev===-1 || nums[index]>nums[prev]){
             op1 =  1+helper(nums , index+1,index,dp);
        }
        
            let op2 = helper(nums , index+1,prev,dp)
            if(prev!==-1){
                dp[prev][index] = Math.max(op1,op2);
            }
            return Math.max(op1,op2);
       
            
        
    }
    return helper(nums,0,-1,dp);
   
};

console.log(lengthOfLIS([1,2,5,3,4]));