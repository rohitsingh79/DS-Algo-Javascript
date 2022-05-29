// use sliding window to count the anagrams
//Input : forxxorfxdofr
// Output : 3
// Explanation : Anagrams of the word for - for, orf, 
// ofr appear in the text and hence the count is 3.
let ans = 0;
function count(s, a , k) {

    // create a hashmap
    let hMap = new Map();
    for (let i = 0; i < a.length; i++) {
        if (!hMap.get(a[i])) {
            hMap.set(a[i], 1);
        }
        else {
            let count1 = hMap.get(a[i]);
            hMap.set(a[i], count1 + 1);
        }
    }
    console.log('Orignal hashMap',hMap);
    // take the count of the hashmap
    let count = hMap.size;
    // navigate the sliding window
    let i = 0;
    let j = 0;
    while (j < s.length) {
        // decrement the count of the letter present in the hashmap

        if (hMap.has(s[j])) {
            let c = hMap.get(s[j])
            c = c - 1;
            hMap.set(s[j], c);
            if (c == 0) {
                // decrement the count of the anagram (3)
                count = count - 1;
            }
            console.log(hMap);
            console.log(count);
        }

        // increment j untill window size is achieved
        if (j - i + 1 < k) {
            j++;
        }
        //window size matched
        else if (j - i + 1 === k) {
            if (count === 0) {
                // found one anagram
                ans++;
            }
            // remove the calculation for i from count while sliding
            if (hMap.get(s[i]) === 0) {
                count++;
            }

            let count2 = hMap.get(s[i]);
            count2 = count2 + 1;
            hMap.set(s[i], count2)
            i++;
            j++;
        }
    }
    console.log('ans',ans);
}

count('aabaabaa', 'aaba' , 4);

//aaba
//abaa
//baab {a:1 , b:-1}
//aaba {a:0 . b:0}
//abaa