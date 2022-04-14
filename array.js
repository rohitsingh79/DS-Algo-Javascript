//Dynamic programing
// fibonacci series with memoization
// counting the steps
// 0 ,1 ,1 ,2, 3, ,5,8

let dpArray = new Array(7).fill(-1)

function fib(num){
	if(num<=1){
		return dpArray[num] = 1
	}

	if(dpArray[num]!=-1){
		return dpArray[num];
	}

	dpArray[num] = fib(num-2)+fib(num-1);
	return dpArray[num];
}

// console.log(fib(6));

// Best time to buy the stocks

var maxProfit = function(prices) {
    
    let left = 0;
    let right = left+1;
    let max = 0;
    let profit = 0;
    
    while(right<prices.length){
        // check for the condition
        if(prices[left]<prices[right]){
			// console.log(prices[left] , prices[right])
            profit = prices[right]-prices[left];
           if(profit>max){
			   max = profit;
		   }	
        }
        else{
            left = right
        }
        right+=1;
    }
    return max
    
};

// console.log(maxProfit([7,1,5,3,6,4]));

// Kandane's Algorithm
// maximum subarray
nums = [5,4,-1,7,8]
function maxSubArray(arr){

	var maxint = Math.pow(2, 53)
    var max = -maxint - 1
	let maxArr = 0;
	for(let i = 0;i<arr.length;i++){
		maxArr = maxArr+arr[i];
		console.log(maxArr);
		if(maxArr>max){
			max = maxArr;
			console.log(max)
		}
		if(maxArr<=-1){
			maxArr = 0;
		}
	}
	return max;

}

// console.log(maxSubArray([-1,0]));

// maximum loot case with alternate house
let hval = [1,2,3,1];
function loot(hval){
	let picked = 0;
	let sum1 = 0;
	let sum2 = 0;
	let nonPicked =1;
	for(let i=picked ; i<hval.length;i+=2){
		sum1  = sum1+hval[i];
	}
	for(let i=nonPicked ; i<hval.length;i+=2){
		sum2  = sum2+hval[i];
	}

	return Math.max(sum1 , sum2)

}
console.log(loot(hval));



