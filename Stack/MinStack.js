//https://leetcode.com/problems/min-stack/

//155. Min Stack

// my leet code profile 
//https://leetcode.com/rohitsingh79/


var MinStack = function() {

    this.stack = [];
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

    let min = this.stack.length === 0 ? val: this.stack[this.stack.length-1].min

    // push the value and the minimum in the entire stack

    this.stack.push({value:val , min:Math.min(val , min)})
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

    // if stack length is more than 0 pop the element

    if(this.stack.length>0){

         this.stack.pop();
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

    if(this.stack.length>0){

        return this.stack[this.stack.length-1].value;
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

     if(this.stack.length>0){

        return this.stack[this.stack.length-1].min;
    }
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */