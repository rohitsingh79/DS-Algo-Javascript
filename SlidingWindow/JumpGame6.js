// https://leetcode.com/problems/jump-game-vi/

var maxResult = function(nums, k) {
    // create a seprate dp[] for storing sum
     // create a seprate dq for storing the max index
     
     let n = nums.length;
     
     let dq = new Array();
     let dp = new Array(n);
     
     // push the base case
     dq.push(nums[0]);
     dp[0] = nums[0];
     for(let i=1;i<nums.length;i++){
        
        // check if the top of the queue is in the window range of current element
        if(i-k-1>=0 && dp[i-k-1]===dq[0]){
            dq.shift();
        }

        // get the top of the queue
        let max = dq[0];
        dp[i] = nums[i]+max;

        //pop untill the max value is grater than all elements in the queue
        while(dp[i]>dq[dq.length-1]){
            dq.pop();
        }
        dq.push(dp[i])
     }
     console.log('dp',dp);
     console.log('dq',dq);
     return dp[n-1];

     
 };

 let n1 = [1,-1,-2,4,-7,3];
 let k=2;
 console.log(maxResult(n1 , k));