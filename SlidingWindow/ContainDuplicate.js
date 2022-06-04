
var containsNearbyDuplicate = function(nums, k) {
    
    // using sliding window
    let j=0;
    let map = new  Map();
    while(j<nums.length){

        if(map.has(nums[j])){
            console.log('found')
            let i = map.get(nums[j]);
            if(Math.abs(j-i)<=k){
                return true
            }
            else{
                map.set(nums[j],j)
            }
        }
        else{
            map.set(nums[j],j)
        }
        console.log('map',map)
        j++;
    }
    return false;
   
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))