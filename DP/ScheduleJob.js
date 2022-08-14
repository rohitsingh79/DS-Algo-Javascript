//Minimum Difficulty of a Job Schedule

var minDifficulty = function(jobDifficulty, d) {
    
    // jobDifficulty array consisting of the difficlutyof jobs
    //d number of days

    // the basic case
    let n = jobDifficulty.length;
    if(d>n) return -1;
    
    let dp = new Array(n);
    for(let i =0;i<n;i++){
        dp[i] = new Array(d).fill(Number.MAX_SAFE_INTEGER);
    }

    // calculate the base case
    // fill the last row and column dp[n-1][d]
    dp[n-1][d] = jobDifficulty[n-1];

    //fill the last column , that indicates hardest reamining job on the last day
    for(let i=n-2;i>0;i--){
        dp[i][d] = Math.max(jobDifficulty[i] , dp[i+1][d]);
    }

    // calculate for 2nd and 1st day
    for(let day=d-1;day>0;day--){
        for(let i=day-1;i<n-(d-day);i++){ // outer loop to iterate over each
            let hardest = 0;
            for(let j=i;j<n-(d-day);j++){
                hardest = Math.max(jobDifficulty[j] , hardest);
                dp[i][day] = Math.min(dp[i][day],hardest+dp[j+1][day+1]);
            }
        }
    }
    return dp[0][1];

};

console.log(minDifficulty( [1,1,1],3));