// top down dynamic progrmaing approach with recursive call and memoization
// var deleteAndEarn = function(nums) {

//     let points = new Map();
//     let cache = new Map();

//     function checkMax(maxNum ,cache , points){
//         // base case
//         if(maxNum == 0){ return 0}
//         if(maxNum===1) { return points.get(maxNum) || 0 }

//         if(cache.has(maxNum)){ return cache.get(maxNum)}
//         let gain  = points.get(maxNum) || 0;
//         let max = Math.max(gain+checkMax(maxNum-2 , cache, points) , checkMax(maxNum-1 , cache , points))
//         cache.set(maxNum,max);
//         return cache.get(maxNum);
//     }

//     // create a hashmap for the frequency count
//     let maxNumber = 0;
   
//     for(let num of nums){
//         let getNum = points.get(num) || 0;
//         points.set(num , getNum+num);
//         maxNumber = Math.max(maxNumber,num);
//     }
//     console.log(points);
//     console.log(maxNumber);

//     // call the function with max
//     return checkMax(maxNumber , cache, points)


// }

// bottom up approach
var deleteAndEarn = function(nums) {

    let points = new Map();
    let cache = new Map();

    // create a hashmap for the frequency count
    let maxNumber = 0;
   
    for(let num of nums){
        let getNum = points.get(num) || 0;
        points.set(num , getNum+num);
        maxNumber = Math.max(maxNumber,num);
    }
    console.log(points);
    console.log(maxNumber);

    let maxNumberArray = new Array(maxNumber+1);
    // base case
    maxNumberArray[0] = 0;
    // why we need to fill this , because for i=2 , we will be taking scenario i=1 and i=0
    maxNumberArray[1] = points.get(1) || 0;
    console.log(maxNumber);

    for(let i = 2;i<maxNumberArray.length;i++){
        let gain = points.get(i) || 0;
        maxNumberArray[i] = Math.max((gain+maxNumberArray[i-2]) , maxNumberArray[i-1]);
    }

   return maxNumberArray[maxNumber];
}



console.log(deleteAndEarn([2,2,3,3,3,4]));