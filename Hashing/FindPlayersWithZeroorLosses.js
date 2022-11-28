// 2225. Find Players With Zero or One Losses
https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/

var findWinners = function(matches) {
    
    let n = matches.length;


    // create map for winners

    let winners = {};

    let loosers = {};

    for(let i=0;i<n;i++){

        const [win , loose] = matches[i];

        if(winners[win]){
            let count = winners[win];

            winners[win] = count+1;
        }
        else {
            winners[win] = 1;
        }

    }    

    for(let i=0;i<n;i++){

        const [win , loose] = matches[i];
        
        if(loosers[loose]){
            let count = loosers[loose];

            loosers[loose] = count+1;
        }
        else {
            loosers[loose] = 1;
        }

    }    

    console.log('winner' , winners);
    console.log('winner' , loosers);

    let result1 = [];

    let result2 = [];

    // run a for loop and check if winners are not their in the looser

    for(const winner in winners ){

        if(!loosers[winner]){

            delete winners[winner];
            
                result1.push(winner);
        }
    }

    for(const looser in loosers ){

        if(loosers[looser]==1){
            
                result2.push(looser);
        }
    }

    console.log('result1' , result1);
    console.log('result2' , result2);
};

findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]);