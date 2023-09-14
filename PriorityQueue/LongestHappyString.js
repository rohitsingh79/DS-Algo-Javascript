//1405. Longest Happy String
//https://leetcode.com/problems/longest-happy-string/description/

// my leet code profile 
//https://leetcode.com/rohitsingh79/


var longestDiverseString = function(a, b, c) {

    const q = new MaxPriorityQueue({

        compare: (a,b) => a.count < b.count,
    });

    if(a) q.enqueue({char:'a' , count: a});
    if(b) q.enqueue({char:'b' , count: b});
    if(c) q.enqueue({char:'c' , count: c});

    let str = '';

    let threeCharsReached = false;

    while(q.size()){

        const temp = q.dequeue();

        str+=temp.char;

        temp.count--;

        // check for  more than 3 characters

        if(temp.count && str[str.length-2]== temp.char){

            threeCharsReached = {char:temp.char , count:temp.count};

            continue;
        }

        else if(threeCharsReached){
            q.enqueue(threeCharsReached);
            threeCharsReached = false;
        }

        if(temp.count>0) q.enqueue(temp);
    }

    return str;
};