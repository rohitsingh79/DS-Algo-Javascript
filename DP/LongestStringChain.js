// https://leetcode.com/problems/longest-string-chain/

var longestStrChain = function(words) {
  // sort the arrays
  let sortedArray = words.sort((a,b)=>a.length-b.length ); 
  console.log(sortedArray);
    let result = 0;
//   iterate through each array word
  let hMap = new Map();
  
  for(let word of words){
    hMap.set(word , 1);

    for(let i = 0;i<word.length;i++){
        let temp = word;
        temp = temp.slice(0,i)+temp.slice(i+1)
        if(hMap.has(temp)){
            hMap.set(word , Math.max(hMap.get(temp)+1 , hMap.get(word)))
        }
        
    }
    // console.log(hMap);
    result = Math.max(result , hMap.get(word))
  }

  return result
  
};

console.log(longestStrChain(["ksqvsyq","ks","kss","czvh","zczpzvdhx","zczpzvh","zczpzvhx","zcpzvh","zczvh","gr","grukmj","ksqvsq","gruj","kssq","ksqsq","grukkmj","grukj","zczpzfvdhx","gru"]))

