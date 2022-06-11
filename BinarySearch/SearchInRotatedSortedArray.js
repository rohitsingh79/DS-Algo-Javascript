
nums = [4,5,6,7,0,1,2]
target = 0;


// check for the pivot element


var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    let mid;
    while(low<=high){
        mid = Math.floor((low+high)/2);
        if(target===nums[mid]){
            return true;
        }
        // check which is the strictly increasing one
        if(nums[mid]>nums[low]){
            // left side is strictly increasing
            // check the range of the target in the strictly increasing array
            if(target>=nums[low] && target<=nums[mid]){
                high  = mid-1;
            }
            else low = mid+1;
        }
        else if(nums[mid]<nums[low]) {
            // right side is strictly increasing
            // check the range
            if(target>=nums[mid] && target<=nums[high]){
                low  = mid+1;
            }
            else high = mid-1;
        }
        else{
            low++;
        }
    }
    return false;
};

console.log(search([1,0,1,1,1] , 0))