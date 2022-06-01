// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function(s) {
    
    let i = 0;
    let j=0;
    let hMap = new Map();
    let max = -1;
    while(j<s.length)
    {
        if(hMap.has(s[j])){
            let charCount  = hMap.get(s[j]);
            hMap.set(s[j],charCount+1)
        }
        else{
            hMap.set(s[j],1);
        }
        if(hMap.size === j-i+1){
            max = Math.max(max ,j-i+1);
            j++;
        }
        else if(hMap.size<j-i+1){
            // decrement for i untill both the sizes are equal
            while(hMap.size!==j-i+1){
                let charCount = hMap.get(s[i]);
                hMap.set(s[i],charCount-1)
                if((hMap.get(s[i]))===0){
                    hMap.delete(s[i])
                }
                i++;
            }
            j++;
        }
    }
    console.log(max);
};

lengthOfLongestSubstring('abcabcbb')