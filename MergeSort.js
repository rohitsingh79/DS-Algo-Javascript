var sortArray = function(nums) {

    // merge sort
    function merge(nums,mid,left,right){
        let i = left;
        let j = mid+1;
        let arrLen = right-left+1
        let temp = new Array(arrLen);
        let k = 0;
        while(i<=mid && j<=right){
            // check if nums[i] is greate or smaller than nums[j]
            if(nums[i]<=nums[j]){
                temp[k] = nums[i];
                k++;
                i++;
            }
            else{
                 temp[k] = nums[j];
                k++;
                j++;
            }
        }
        
        //add the remaining elemnts
        // for i
        while(i<=mid){
            temp[k] = nums[i];
            k++;
            i++;
        }
        while(j<=right){
            temp[k] = nums[j];
            k++;
            j++;
        }
        k=0;
        // make the changes in the original array
        for(let i=left;i<=right;i++){
            nums[i] = temp[k];
            k++;
        }
    }
    
    function mergeSort(nums,left,right){
        if(left<right){
            // calculate the mid
            let mid = parseInt((left+right)/2);
            console.log('mid',mid);
            mergeSort(nums,left,mid);
            mergeSort(nums,mid+1,right);
            merge(nums,mid,left,right);
        }
      
    }
    mergeSort(nums,0,nums.length-1);
    return nums;
    
};

console.log(sortArray([38,27,43,3,9,82,10]))