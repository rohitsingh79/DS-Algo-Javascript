// function to find the minimum in sorted array 
// function to find the number of times the sorted array is rotated

var findMin = function(nums) {
    // iterative method
    let start = 0;
    let end = nums.length-1;
    let n = nums.length;
    while(start<=end){
        // calculate the middle
        let mid = parseInt((start+end)/2);
        // calc the prev and the next elements 
        let prev = (mid-1 +n)%n;
        let next = (mid+1)%n;
        if(nums[mid]<=nums[prev] && nums[mid]<=nums[next]){
            return nums[mid];
        }
        else if(nums[mid]<=nums[end]){
                    end = mid-1;                
                }
         else if (nums[mid]>=nums[start]){
            start = mid+1;
        }
    }
};

console.log(findMin([4,5,6,7,0,1,2]));