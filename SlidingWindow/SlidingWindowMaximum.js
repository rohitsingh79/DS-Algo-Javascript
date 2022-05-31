/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// maximum element in every subarray of size k
var maxSlidingWindow = function(nums, k) {
    let i =0;
    let j=0;
    let ans = [];
    let list = [];

    while(j<nums.length){
        // check if the list is empty
        if(list.length==0){
            // push the new element
            list.push(nums[j])
        }
        else{
            // pop untill the max element is found
            while(list.length!==0 && list[list.length-1]<nums[j]){
                list.pop();
            }
            list.push(nums[j]);
            
        }
       if(j-i+1<k){
           j++;
       }
       else if (j-i+1==k){
        //push the front of the queue to the result arr
        ans.push(list[0]);
        // remove the calculation for i
        if(nums[i]==list[0]){
            list.shift();
        }
        i++;
        j++;
       }
    
    }
};


// let arr = [1,2,3,1,4,5,2,3,6]; let k=3;
maxSlidingWindow([1,2,3,1,4,5,2,3,6] , 3);

// let arr1 = [8,5,10,7,9,4,15,12,90,13]; let k=4