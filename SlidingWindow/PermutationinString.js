// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

//https://leetcode.com/problems/minimum-size-subarray-sum/description/

var checkInclusion = function(s1, s2) {
    
    let windowSize = s1.length;
    let map1 = new Map();
    // create the hashmap

    let j = 0;
    let i=0;
    while(j<s2.length){
        if(j-i+1 < windowSize){
            j++;
        }
        
        else if(j-i+1 == windowSize){
            map1.clear();
            for(let s of s1){
                map1.has(s)? map1.set(s,map1.get(s)+1): map1.set(s,1);
            }
            let mapCount = s1.length;
            let k = i;

            while( map1.has(s2[k]) && k<=j){
                let count = map1.get(s2[k]);
                count = count-1;
                map1.set(s2[k],count);
                if(count===0){
                    map1.delete(s2[k])
                }
                mapCount--;
                k++;
            }

            if(mapCount===0){
                return true;
                
            }
            i++;
            j++;
           
        }
        
    }
    return false

};

console.log(checkInclusion('abc','ccccbbbbaaaa'));


