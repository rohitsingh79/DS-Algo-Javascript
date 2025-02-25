// // Input: s = "abcabcbb"
// // Output: 3
// // Explanation: The answer is "abc", with the length of 3.

//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// var lengthOfLongestSubstring = function(s) {
    
//     let i = 0;
//     let j=0;
//     let hMap = new Map();
//     let max = -1;
//     while(j<s.length)
//     {
//         if(hMap.has(s[j])){
//             let charCount  = hMap.get(s[j]);
//             hMap.set(s[j],charCount+1)
//         }
//         else{
//             hMap.set(s[j],1);
//         }
//         if(hMap.size === j-i+1){
//             max = Math.max(max ,j-i+1);
//             j++;
//         }
//         else if(hMap.size<j-i+1){
//             // decrement for i untill both the sizes are equal
//             while(hMap.size!==j-i+1){
//                 let charCount = hMap.get(s[i]);
//                 hMap.set(s[i],charCount-1)
//                 if((hMap.get(s[i]))===0){
//                     hMap.delete(s[i])
//                 }
//                 i++;
//             }
//             j++;
//         }
//     }
//     console.log(max);
// };

// lengthOfLongestSubstring('abcabcbb')

// let words = ["foo","bar"];
// let wordLength = words[0].length
// let wordCount = words.length

// console.log(wordLength);
// console.log(wordCount);

var minimumCardPickup = function(cards) {
   let i = 0;
   let j=0;
   let hMap = new Map();
   let min  = Number.MAX_SAFE_INTEGER;
   while(j<cards.length)
   {
        if(hMap.has(cards[j])){
            hMap.set(cards[j],hMap.get(cards[j])+1);
        }
        else{
            hMap.set(cards[j],1);
        }

        while(i<j && hMap.get(cards[j])>1){
            // keep updating the minimum
            min = Math.min(min,j-i+1);
            hMap.set(cards[i],hMap.get(cards[i])-1);
            i++;
        
        }
        j++;
  
   }
   return min;
};

console.log(minimumCardPickup([95,11,8,65,5,86,30,27,30,73,15,91,30,7,37,26,55,76,60,43,36,85,47,96,6]));

