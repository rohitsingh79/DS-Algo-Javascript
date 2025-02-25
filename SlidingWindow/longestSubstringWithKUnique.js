// S = "aabacbebebe", K = 3
// Output: 7
// Explanation: "cbebebe" is the longest 
// substring with K distinct characters.

//https://www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/

function longestSubstring(arr , k){

    let i=0;
    let j=0;
    // assume there is no max at initial
    let max = -1;
    let hMap = new Map();

    // iterate over the window
    while(j<arr.length){

        // calculation
        if(hMap.has(arr[j])){
            let charCount = hMap.get(arr[j]);
            charCount = charCount+1;
            hMap.set(arr[j],charCount);
        }
        else{
            // initialize it to 1
            hMap.set(arr[j],1);
        }


        // iterate till the window size is reached
        if(hMap.size<k){
            j++;
        }
        else if(hMap.size==k){
            // check if the current window is max
            max = Math.max(max , j-i+1); //update the max size
            j++;
            console.log(hMap);

        }
        else if(hMap.size>k){
            // remove the calculation for i since window size is more than k
            if(hMap.has(arr[i])){
                let charCount = hMap.get(arr[i]);
                charCount = charCount-1;
                if(charCount==0){
                    hMap.delete(arr[i]);
                }
                else{
                    hMap.set(arr[i],charCount);
                }
                
            }
            i++;
            j++;
            
        }
        
    }
   
    return max;
}
longestSubstring("aaaa",2);
//S = "aabacbebebe", K = 3
//S = "aaaa", K = 2