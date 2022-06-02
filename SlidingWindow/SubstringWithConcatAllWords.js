// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
// The output order does not matter, returning [9,0] is fine too.
// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []
// Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]

var findSubstring = function(s, words) {
    
    // get the length of the sliding window
    let result = [];
    let wordsCount = words[0].length;
    let wordsLength = words.length;
    let slidingWindow = wordsCount*wordsLength; // foo:3 ['foo' , 'bar'] = 2 3*2

    //create a hashmap for words
    let map = new Map();
    for(let word of words){
        map.has(word)? map.set(word , map.get(word)+1):map.set(word , 1);
    }

    function checkValidity (tempString){
        // console.log(tempString);
        let visited = new Map();
        // take the words in increment of words count
        for(let i=0;i<tempString.length;i+=wordsCount){
            let word = tempString.substring(i,i+wordsCount);
            visited.has(word)? visited.set(word , visited.get(word)+1):visited.set(word , 1);
        }

        for(let [key , value] of visited){
            if(map.get(key)!==value){
                return false
            }
        }
        return true;


    }

    let i =0;
    let j=0;
    // iterate till the sliding window is reached
    while(j<s.length){
        if(j-i+1===slidingWindow){
            // check if the window contains all the variable in map with the count
            let stringToCheck = s.substring(i , j+1);
            console.log(stringToCheck);
            if(checkValidity(stringToCheck)){
                result.push(i);
            }

            i++; // increment i and j to maintain the sliding window size of 6
        }
        j++;
    }
    console.log(result);

};

findSubstring('barfoofoobarthefoobarman',["bar","foo","the"] )