// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
//https://leetcode.com/problems/repeated-dna-sequences/description/


var findRepeatedDnaSequences = function(s) {
    // create the track of each 10 lettter sequence
    let map = new Map();
    let res = [];

    for(let i=0;i<s.length-9;i++){
        let newSubstr = s.substr(i,10);
        if(map.get(newSubstr)==1){
            res.push(newSubstr)
        }
            let count = map.get(newSubstr);
            if(!count){
                map.set(newSubstr,1);
            }
            else{
                map.set(newSubstr,count+1);
            }
            
    }
    console.log('result',res);

};


findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')
// let str = 'AAAAAAAAAAAAA';
// console.log(str.length);