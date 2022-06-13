// Input: nums = [1,1,4,2,3], x = 5
// Output: 2
// Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
// let nums = [5207,5594,477,6938,8010,7606,2356,6349,3970,751,5997,
//     6114,9903,3859,6900,7722,2378,1996,8902,228,4461,90,
//     7321,7893,4879,9987,1146,8177,1073,7254,5088,402,4266,
//     6443,3084,1403,5357,2565,3470,3639,9468,8932,3119,5839,8008,
//     2712,2735,825,4236,3703,2711,530,9630,1521,2174,5027,4833,3483,
//     445,8300,3194,8784,279,3097,1491,9864,4992,6164,2043,5364,9192,9649,9944,
//     7230,7224,585,3722,5628,4833,8379,3967,5649,2554,5828,4331,3547,7847,5433,3394,
//     4968,9983,3540,9224,6216,9665,8070,31,3555,4198,2626,9553,9724,4503,1951,9980,3975,
//     6025,8928,2952,911,3674,6620,3745,6548,4985,5206,5777,1908,6029,2322,2626,2188,5639]

// x = 565610;

var minOperations = function(nums, x) {
    let i = 0;
    let j= 0;
    let sum = 0;
    let n = nums.length;
    let max = Number.MIN_VALUE;
    let arrSum = 0;
    for(let a of nums){
        arrSum  = arrSum +a;
    }
   let targetSum = arrSum - x;
   console.log('targetSum',targetSum);
   if(targetSum<0){ return -1;}
   if(targetSum===0){ 
    console.log('inside the zero sum checking')   
    return n;}

   while(j<n){
       // calculate the sum
       sum = sum + nums[j];
       console.log('sum', sum);
       console.log('i,j',i,j);
       if(sum<targetSum){
           j++;
       }
       else if(sum===targetSum){
           console.log('target sum is equal')
           max = Math.max(max , j-i+1);
           j++;
       }
       else{
           while(sum>targetSum && i<j){
               sum = sum - nums[i];
               i++;
           }
           
           if(sum===targetSum){
            max = Math.max(max , j-i+1);
           }
           j++;
       }
   }
   if(max === Number.MIN_VALUE) return -1;
   else return n-max;
};

console.log(minOperations([8828,9581,49,9818,9974,9869,9991,10000,10000,10000,9999,9993,9904,8819,1231,6309]
,134365))