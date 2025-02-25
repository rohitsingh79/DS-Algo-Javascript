/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//https://leetcode.com/problems/subarrays-with-k-different-integers/description/
 var subarraysWithKDistinct = function(nums, k) {
    function countDistinct(nums,k){
        let i = 0;
        let j = 0;
        let n = nums.length;
        let count = 0;
        let map = new Map();
        
        while(j<n){
            if(map.has(nums[j])){
                map.set(nums[j],map.get(nums[j])+1);
            }
            else{
                 map.set(nums[j],1);
            }
            while(map.size>k){
                let count = map.get(nums[i]);
                if(count==1){
                    map.delete(nums[i])
                }
                else {
                    map.set(nums[i],map.get(nums[i])-1)
                }
                i++;
            }
            count = count+(j-i+1)
            j++;
        }
        return count;
    }
    
    let countWithAtmostK = countDistinct(nums ,k);
    let countWithAtmostk1 = countDistinct(nums ,k-1);
    console.log(countWithAtmostK ,countWithAtmostk1 )
    return countWithAtmostK-countWithAtmostk1
    
};

console.log(subarraysWithKDistinct([1,2,1,2,3],2))