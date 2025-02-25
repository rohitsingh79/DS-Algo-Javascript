//https://leetcode.com/discuss/interview-question/3100856/Fixed-Size-Sliding-Window-(Important-Questions-with-Solutions)

// find the first negative in each window of size k ; 
// We are using a sliding window for it to optimise it.
// We take i and j at the start of the array.
// We move j until it reaches the size of the window.
// We also maintain a queue in which we push the -v element of the array given.
// when we reach the size of the sliding window, we check if the queue is empty or not( If queue is empty then no -ve integer is encountered in the window, so we push 0 to our answer vector).
 
// If queue is not empty then we push the first element of the queue in the answer vector.
 
// Before moving the window, we also check if the present start of the window is present in the queue or not, if it is present then we pop it.
// Then we move the window.

function findNegative(nums ,k){
    let i=0;
    let j=0;
    let q = [];
    let ans = [];
    while(j<nums.length){
        // if the curr num is negative push it to the queue
        if(nums[j]<0){
            q.push(nums[j]);
        }
        // reach to the window size
        if(j-i+1<k){
            j++;
        }
        
        if(j-i+1==k){
            // when it reaches the window size
            if(q.length===0){
                ans.push(0)
            }
            else{
                // removes the first element of the array
                ans.push(q[0])
            }

            if(nums[i]===q[0]){
                // remove the calculation for negative value that is not in the window any more
                q.shift();
            }
            i++;
            j++;

        }

    }
    return ans;
}
console.log(findNegative([-8, 2, 3, -6, 10],2));
