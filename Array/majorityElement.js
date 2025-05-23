function majorityElement(arr) {
    // Size of the given array
    let n = arr.length;
    let cnt = 0; // Count
    let el; // Element

    // Applying the algorithm
    for (let i = 0; i < n; i++) {
     
        if(cnt === 0){  // if count has reached zero  we have a new target element
            cnt++;
            el = arr[i]; 
        }
        else if(arr[i] === el){
            cnt++;
            
        }
        
        else cnt--;
    }

    // Checking if the stored element is the majority element
    let cnt1 = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === el) {
            cnt1++;
        }
    }

    if (cnt1 > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}