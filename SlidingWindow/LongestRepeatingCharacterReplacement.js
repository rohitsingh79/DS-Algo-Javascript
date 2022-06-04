// let m = new Map([['a', 2], ['b',4], ['c',6]])

// console.log("Max:", Math.max(...m.values()))

// console.log(...m.values());

// sliding window problem

var characterReplacement = function(s, k) {
    
    let left = 0;
    let right=0;
    let map = new Map();
    let res = 0;
    // for loop to iterate over the  string

    while(right<s.length){

        // create the hashmap of the current windoe
        map.has(s[right])?map.set(s[right],map.get(s[right])+1):map.set(s[right],1);
        // if window size - max char is less than k , keep updating the res
        let max = Math.max(...map.values());
        let windowSize = right-left+1;

        if((windowSize-max)<=k){
            res = Math.max(res , windowSize);
        }

        // move the left pointer untill it reaches k , since we need to do only k replacement
        while(windowSize-max>k){
            map.set(s[left],map.get(s[left])-1)
            left++;
            max = Math.max(...map.values());
            windowSize = right-left+1;
        }
        right++;

    }
    console.log('result',res);
};

characterReplacement('ABAA',0)