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

    console.log('temp' , temp)
    // make the changes in the original array
    for(let i=left;i<=right;i++){
        nums[i] = temp[k];
        k++;
    }
}


var mergeSorting = function(nums1){

    let trackArr = new Array(nums1.length).fill(0);
    const map = new Map();
    for(let i=0;i<nums1.length;i++){
        map.set(nums1[i],i);
    }


    function printArray(low,mid,high){
        console.log('till mid');
        let resMid = [];
        let MidEnd = [];
        for(let i=0;i<=mid;i++){
            resMid.push(nums1[i]);
        }
        console.log(resMid);
        console.log('mid to end');
        for(let j=mid+1;j<=high;j++){
            MidEnd.push(nums1[j]);
        }
        console.log(MidEnd);
    }

    function mergeArr(low,mid,high,arr){
        let count = 0;
        // declare 2 variables i and j
        let i = low;
        let j = mid+1;
        let arrLen = high-low+1
        // iterator for the new array
        let k =0;
        // create a new Array
        let res = new Array(arrLen);
        printArray(low,mid,high);
        // compare the contents of the two arrays
        while(i<=mid && j<=high){
            if(arr[i]<=arr[j]){
                res[k] = arr[i]
                // get the index
                let index = map.get(arr[i]);
                trackArr[index] = trackArr[index]+count;
                k++;
                i++;
            }
            else{
                res[k] = arr[j];
                k++;
                j++;
                count++;
                console.log('count',count);
            }
        }
    
        while(i<=mid){
           res[k] = arr[i];
           let index = map.get(arr[i]);
           trackArr[index] = trackArr[index]+count;
           console.log('trackArr',trackArr);
           k++;
           i++;
        }
    
        while(j<=high){
            res[k] = arr[j];
            k++;
            j++;
        }
    
         k=0;
        // copy the contents of the array into the main array
        for(let i=low;i<=high;i++){
            arr[i] = res[k];
            k++;
        }
        console.log('-----------------');
    
    }
    
    function sort1(low,high,arr){
        // sort untill ther is only one element
        if(low<high){
            //find the middle
            let mid = parseInt((low+high)/2);
            // split into left half and right half
            sort1(low,mid,arr);
            sort1(mid+1,high,arr);
            // now merge the function
            mergeArr(low,mid,high,arr)
        }
    }
    sort1(0,nums1.length-1,nums1);
    console.log(trackArr);
    const sum = trackArr.reduce((sum,item) => sum+item,0);
    console.log('sum',sum);
    return nums1;
}

var merge = function (arr, low, mid, high) {
    let temp = [], l = low, r = mid + 1;
    while (l <= mid && r <= high) {
        if (arr[l] <= arr[r]) {
            temp.push(arr[l]);
            l++;
        } else {
            temp.push(arr[r]);
            r++;
        }
    }
    while (l <= mid) {
        temp.push(arr[l]);
        l++;
    }
    while (r <= high) {
        temp.push(arr[r]);
        r++;
    }
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
};

const countPairs = (arr, low, mid, high) => {
    let r = mid + 1, count = 0;
    for (let i = low; i <= mid; i++) {
        while (r <= high && arr[i] > 2 * arr[r]) r++;
        count += r - (mid + 1);
    }
    return count;
}

const mergeSort = (arr, low, high) => {
    let count = 0;
    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        count += mergeSort(arr, low, mid);
        count += mergeSort(arr, mid + 1, high);
        count += countPairs(arr, low, mid, high);
        merge(arr, low, mid, high);
    }
    return count;
}

var reversePairs = function (nums) {
    return mergeSort(nums, 0, nums.length - 1);
}

console.log(mergeSorting([3,1,2]));
