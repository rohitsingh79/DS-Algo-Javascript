// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// variable sliding window problem

var minSubArrayLen = function(target, nums) {
    
    let i =0;
    let j = 0;
    let min = Infinity;
    let sum = 0;

    while(j<nums.length){
            sum  = sum + nums[j]
        while(sum>=target){
            console.log('sum', sum);
            // remove the calculation for i
           
                // calculate the min
            min = Math.min(min , j-i+1)
            sum = sum - nums[i];
            i++;
              
        }
        j++;
        
    }
    return min===Infinity ? 0: min;

};


