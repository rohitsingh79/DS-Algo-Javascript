// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// https://leetcode.com/problems/search-a-2d-matrix/

//1. first search the row that can contain the answer , perform binary search on the rows and columns

// var searchMatrix = function(matrix, target) {
    
//     // read the rows and columns
//     // n no of columns
//     // m no of rows
//     function getRow(matrix , target){
//         let [ n , m] =  [matrix[0].length , matrix.length];

//         let top = 0;
//         let bottom = m-1;
    
//         // perform the binary search
//         while(top<=bottom){
//             let middle = Math.floor((top+bottom)/2);
//             if(target>=matrix[middle][0] && target<=matrix[middle][n-1]) return middle;
    
//             else if (target>matrix[middle][n-1]){
//                 top = middle+1;
//             }
//             else{
//                 bottom = middle-1;
//             }
//         }
//         return -1;
//     }
    
//     let row = getRow(matrix , target);
//     console.log('row',row)
//     if(row===-1) return false;

//     let [ n , m] =  [matrix[0].length , matrix.length];
//     // check in the row for target
//     let low = 0;
//     let high = n-1;

//     while(low<=high){
//         let mid = Math.floor((low+high)/2);
//         if(target === matrix[row][mid]) return true;
//         else if (target>matrix[row][mid]) {low = mid+1 }
//         else high = mid-1;
//     }
//     return false;



       
// };

// console.log(searchMatrix([[1]],0));

var findDuplicate = function(nums) {
    for(let i=0;i<nums.length;i++){
        let index = nums[i];
        // take the abs value
        index = Math.abs(index);
        if(nums[index]<0){
            return Math.abs(nums[i])
        }
        else{
            nums[index] = -nums[index];
        }
    }
    return -1;
};

console.log(findDuplicate([1,3,4,2,2]))

//[1,-3,4,2,2]
//[1,-3,4-2,2]
//[1,-3,4,-2,-2]
//[1,-3,-4,-2,-2]
//[]