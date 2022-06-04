
var numSubarrayProductLessThanK = function(nums, k) {
    if(k<=1)    return 0;
    let n = nums.length;
    let left = 0, ans = 0, prod = 1;
    for(let right = 0;right<n; right++){
        prod*=nums[right];
        while(prod>=k){
            prod/=nums[left++];
        }
        ans+=right - left +1;
    }
    return ans;
};
console.log(numSubarrayProductLessThanK([10,5,2,6],100));

//10,5
//5,2
//5,2,6

// in each sliding window , each of the element will also be less than the product