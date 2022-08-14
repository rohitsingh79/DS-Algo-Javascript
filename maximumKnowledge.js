function getMaxknowledge (d, s, e,a,k){
    n = s.length;
    let l = new Array();
    temp = 0;
    for(let i=0;i<n;i++){
      let t1= []
      t1.push(s[i],a[i]);
      let t2= []
      t2.push(e[i],-a[i])
      l.push(t1,t2);
    }  
        console.log(l)
    l.sort();  
    console.log(l);
    console.log(l[0][1])
    let v= []
    let ans = 0
    for(let i=0;i<2*n;i++){
        a2 = l[i][1];
        console.log(a2)
        temp=0
        if (a2>0){
            v.push (a2)
            console.log('v',v);
            v.sort((a,b)=>b-a);
            console.log('v after sort',v);
            let min = Math.min(k,v.length);
            for(let i=0;i<min;i++){
                temp += v[i];
            }
                
            console.log('temp',temp);
            ans = Math.max (ans, temp)
            console.log('ans',ans);
        }   
        else v.filter((item)=>item!==a2);
    }        
    return ans 
}
console.log(getMaxknowledge(10,[2,6,4,3],[8,9,7,5],[800,1600,200,400],2))
