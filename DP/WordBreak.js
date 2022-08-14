
//word break problem
var wordBreak = function(s, wordDict) {
    // create a hashmap for dictionary
    let set = new  Set(wordDict);
    let memo = new Map();
   
    function helper(str ,set ,memo){
        if(set.has(str)) return true;
        console.log('memo',memo);
        if(memo.has(str)) return memo.get(str);
        for(let i=0;i<str.length;i++){
            if(set.has(str.substring(0,i)) && helper(str.substring(i), set,memo) ){
                memo.set(str,true)
                return true;
            }
        }
        memo.set(str,false)
        return false;
    
    }

    return helper(s,set,memo);

   
  
};

console.log(wordBreak('aaaab',['a','aa','aaa']));

// let word = 'catsandog';

// let s = word.substring(0,3);
// let s1 = word.substring(3);
// let s2 = s1.substring(0,4);
// let s3 = s1.substring(4)

// console.log(s)
// console.log(s1);
// console.log(s2);
// console.log(s3);

// let memo = new Map();
// console.log(memo.has('str'));