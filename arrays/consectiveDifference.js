var numsSameConsecDiff = function(n, k) {
    
    let res = [];
    
    function dfs(str ,i, n, k){
        
        // base case
        if(i == n) {
            res.push(str);
            return
        }
        
        // check if k can be added
        
        let num = parseInt(str[str.length-1]);
      
        if(num+k>=0 && num+k<=9){
            
            let newNum = str;
            let finalNum = num+k
            let numInStr = finalNum.toString();

           let  newNum1 = newNum.concat(numInStr);

            dfs(newNum1,i+1,n,k)
        }
        if(k!=0 && num-k>=0 && num-k<=9){
            
            let newNum = str;
            let addNumber = num-k

            let numInStr = addNumber.toString();

            let  newNum1 = newNum.concat(numInStr);
            dfs(newNum1,i+1,n,k)
        }
        
    }
    
    for(let i=1;i<=9;i++){
        
        let s = i.toString();
     
        dfs(s,1,n,k);
    }
    return res;
};

console.log(numsSameConsecDiff(3,7));