//[2,2,2,0,1]
//output: 0

// the idea is to reduce the size of the array by removing the duplicate elemets

var findMin = function(nums) {
   
    
    let min  = nums[0];
    let low = 0;
    let high = nums.length-1;
    
        while(low<high && nums[low]===nums[low+1]){
            low++;
        }
        while(low<high && nums[high]===nums[high-1]){
            high--;
        }

        // check if first element is less than the last element
        if(nums[low]<nums[high]){
            return nums[low]
        }
    
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        min = Math.min(min , nums[mid])

        if(nums[mid]>=nums[low]){
            low = mid+1;
        }
        else {
            high = mid-1
        }
    }
    return min;

};

console.log(findMin([2,2,2,0,1,3]))