function countVisibleTowers (height){
    let n = height.length;
    let ans= new Array(n).fill(0);
    function calc (height) {
        let stack = [];
        console.log('stack',stack);
        for(let i=0;i<n;i++){
            ans[i] += stack.length;
            console.log('ans',ans);
            while(stack.length>0 && height[stack[stack.length-1]]<=height[i]){
                stack.pop();
                console.log('stack',stack);
            }
            stack.push(i);
            console.log(stack);
        } 
    }
    calc(height)
    console.log('ans after the ist',ans);
    height.reverse (), ans.reverse()
    console.log('ans after reverse',ans)
    calc(height)
    ans.reverse()
    return ans
    }


console.log(countVisibleTowers([5,2,10,1]))