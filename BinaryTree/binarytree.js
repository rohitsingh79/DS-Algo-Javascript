class Node {
    constructor(item) {
        this.data = item;
        this.left = this.right = null;
    }
}

let root;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// console.log(root)

// let secondLeft;
// let secondRight;
// root = new Node(1);
// secondLeft = new Node(2);
// secondRight = new Node(2);
// root.left = secondLeft;
// root.right = secondRight;
// secondLeft.left = new Node(3);
// secondLeft.right = new Node(4);
// secondRight.left = new Node(4);
// secondRight.right = new Node(3);

//**************************************************************************************************************/
// level order traversal using queue data structure
function levelOrderTraversal(root) {
    let q = [];
    let curr;
    q.push(root);
    while (q.length > 0) {
        curr = q.shift();
        console.log(curr.data)
        if (curr.left != null) {
            q.push(curr.left);
        }
        if (curr.right) {
            q.push(curr.right)
        }
    }
}
// console.log("level order traversal")
// levelOrderTraversal(root)

//**************************************************************************************************************/


// inorder traversal
//Left-->node-->Right
function inOrderTraversal(root){
    if(root==null){
        return;
    }
    inOrderTraversal(root.left);
    console.log(root.data);
    inOrderTraversal(root.right);
}
// console.log('inorder traversal')
// inOrderTraversal(root)

//**************************************************************************************************************/
// preorder traversal
//node-->Left-->Right
function preOrderTraversal(root){
    if(root==null){
        return;
    }
    console.log(root.data);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
}
// console.log('pre order traversal')
// preOrderTraversal(root)

//**************************************************************************************************************/
// preorder traversal using iterative method
// using stack 
// O(n) - time complexity and O(n) - space complexity
function preOrderIterative1(root){
    let stack = [];
    stack.push(root);
    let curr ;
    while(stack.length>0){
        // pop the top most element
    
        curr = stack[stack.length-1];
        stack.pop();
        console.log(curr.data)
        if(curr.right){
            stack.push(curr.right)
        }
        if(curr.left){
            stack.push(curr.left)
        }
    }
    }
    
    console.log(preOrderIterative1(root))
//**************************************************************************************************************/

//post Order traversal
//Left-->Right-->Node
function postOrderTraversal(root){
    if(root==null){
        return;
    }
    
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.data);
}
// console.log('post order traversal')
// postOrderTraversal(root)

//**************************************************************************************************************/
// find the number of leaf nodes
// use inorder traversal

let countOfLeafNodes = 0;
function countLeafNodes(root){
    function inOrderTraversal(root){

        if(root==null){
            return;
        }
        inOrderTraversal(root.left);
        if(root.left === null && root.right=== null){
            countOfLeafNodes++  
        }
        inOrderTraversal(root.right);
    }
 
    inOrderTraversal(root)
}

// countLeafNodes(root);
// console.log('number of leaf nodes is',countOfLeafNodes )


//**************************************************************************************************************/
// // Iterative method to find height of Binary Tree or max depth
function findHeightIteravtive(node){
if(node==null){
    return -1;
}

//create an empty queue
let q = [];
let curr;
//initial height;
var height = 0;
//push the root to the queue
q.push(node);
// console.log('pushed into the queue', q);
while(q.length>0){

    let size = q.length;
    console.log('queue length', size);
    height = height+1;
    while(size>0){
        //pop from the front
        curr = q.shift();
        size--;
        if(curr.left!=null){
            q.push(curr.left);
        }
        if(curr.right!=null){
            q.push(curr.right)
        }

    }
}
return height;

}

// const height = findHeightIteravtive(root)
// console.log(height);


//**************************************************************************************************************/
// recursive  method to find height of Binary Tree or max depth
// max(Left,Right +1)
function findHeightRecursive(node){
    let height;
    let left;
    let right;

if(node==null){
    return 0;
}
left = findHeightRecursive(node.left);
right = findHeightRecursive(node.right);
height = Math.max(left , right) + 1
return height;
}

// console.log(findHeightRecursive(root))
//**************************************************************************************************************/

// function to check if a binary tree is a binary search tree or not
function checkBinaryTree(root){

    function isBst(node , min , max){
        if(node==null){
            return true
        }
        if(node.data<min || node.data>max){
            return false;
        }
        return isBst(node.left , min , node.data) && isBst(node.right , node.data , max)
    }
    return isBst(root);

}

// const flag = checkBinaryTree(root);
// console.log(flag);

//**************************************************************************************************************/
// function to check if a binary tree is a symmetrical tree or not recursive approach
function checkSymmetry(root) {

    function isSymmetry(node1, node2) {
        if (node1 == null && node2 == null) {
            return true;
        }
        if (node1.data === node2.data) {
            return (isSymmetry(node1.left, node2.right) && isSymmetry(node1.right, node2.left))
        }
        return false;
    }
    return isSymmetry(root.left, root.right);

}

// const flag = checkBinaryTree(root);
// console.log('my tree is', root);
// const flag = checkSymmetry(root);
// console.log(flag);





// 2nd approach 
// print all the left nodes and stack the right nodes
// repeat the same process for all the right node
function preOrderIterative2(root){

}