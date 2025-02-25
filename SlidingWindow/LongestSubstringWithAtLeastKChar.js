
//https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/
//https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/4140333/full-explanation-3-approaches-best-solution-beats-100-0-users/
// use divide and conquer

var longestSubstring = function(s, k) {
    let n = s.length;

    // base condition
    //1. if only one single char is present and its length is less than k , we cannnot have any substring
    if(k>n || n==0) return 0;
    //2.all the characters appear once so the entire length is a string 
    if(k<=1){
        return n;
    }

    // create a hashmap for all the char
    let map = new Map();
    for( str of s){
        map.has(str)? map.set(str ,map.get(str)+1) : map.set(str,1);
    }

    // iterate till you find character that has lenght<k
    let l=0;
    while(l<n && map.get(s[l])>=k){
        l = l+1;
    }



//     console.log(l)
//    console.log('substring',s.substr(0,l))
//     // if you reach the end then , the whole substring is a candidate
//     if(l>n-1) return l;

//     // else split and check the left end and the right hand side
//     let l1 = longestSubstring(s.substr(0,l),k);
//     // optimization if after left split , we have characters in the right that has count less than k
//     while(l<n && s[l]<k) l++; 

//     // ternary operator to check if the rest of the characters in the right side has count less than k
//     let l2 = (l<n)?longestSubstring(s.substring(l)):0;
//     return Math.max(l1,l2);
    

};

console.log(longestSubstring('geeks',2));