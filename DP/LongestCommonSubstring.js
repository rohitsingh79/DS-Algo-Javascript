// var findLength = function(nums1, nums2) {
    
//     let n = nums1.length;
//     let m = nums2.length;
//     let count = 0;
//     function helper(i,j){
//         // base case
//         if(i<0 || j<0) return 0;

//         let p = 0;
//         if(nums1[i]===nums2[j]) {
//             p = 1+ helper(i-1,j-1);
//             count = Math.max(count , p);
//         }
        
//         helper(i-1,j);
//         helper(i,j-1);
//         return p;
//     }
    
//      helper(n-1,m-1);
//      return count;
    
// };

// console.log(findLength([1,2,3,2,1],[3,2,1,4,7]));

let dp = new Array(100);
console.log('dp',dp);
