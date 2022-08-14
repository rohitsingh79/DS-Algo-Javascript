function maximumIndex( N, B)
{
    var max_index = 0;
 
    // Calculate maximum possible
    // index that can be reached
    for (var i = 1; i <= N; i++) {
 
        max_index += i;
    }
    console.log('max index',max_index);
 
    var current_index = max_index, step = N;
 
    while (1) {
 
        // Check if current index and step
        // both are greater than 0 or not
        while (current_index > 0 && N > 0) {
 
            // Decrement current_index by step
            current_index -= N;
            console.log('currIndex',current_index);
 
            // Check if current index is
            // equal to B or not
            if (current_index == B) {
 
                // Restore to previous index
                current_index += N;
            }
 
            // Decrement step by one
            N--;
        }
 
        // If it reaches the 0th index
        if (current_index <= 0) {
 
            // Print result
            console.log(max_index);
            break;
        }
 
        // If max index fails to
        // reach the 0th index
        else {
 
            N = step;
 
            // Store max_index - 1 in current index
            current_index = max_index - 1;
 
            // Decrement max index
            max_index--;
 
            // If current index is equal to B
            if (current_index == B) {
 
                current_index = max_index - 1;
 
                    // Decrement current index
                    max_index--;
            }
        }
    }
}

console.log(maximumIndex(3,2));
