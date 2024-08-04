//https://www.geeksforgeeks.org/introduction-to-binary-tree/
//https://www.geeksforgeeks.org/iterative-postorder-traversal/




class Node {
    constructor(item) {
        this.data = item;
        this.left = this.right = null;
    }
}

let root;
// root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);

// console.log(root)

//**************************************************************************************************************/
// for symmtery tree 1
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

// for symmetry tree 2
let secondLeft;
let secondRight;
root = new Node(1);
secondLeft = new Node(2);
secondRight = new Node(2);
root.left = secondLeft;
root.right = secondRight;
secondLeft.right = new Node(3);
secondRight.right = new Node(3);

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


// iterative  inorder
function iterativeInOrder(root) {
    // left --> root--> node
    let st = [];
    while (root !== null || st.length) {
        if (root) {
            // move to the left
            st.push(root);
            root = root.left;
        }
        else {
            // pop the element from the stack
            root = st.pop();
            console.log(' node-->data ', root.data);
            root = root.right;

        }

    }
}

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

// iterative preorder traversal
function iterativePrePorder(root){

    let st = [];

    while(root!==null || st.length){

        if(root){

            console.log('node-->data' , root.data);
            st.push(root);
            root = root.left;
        }

        else {

           // pop the node
           root = st.pop();
           root = root.right;
        }

    }
}

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
    
    // console.log(preOrderIterative1(root))
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
        if (node1 == null && node2 || node1 && node2==null ) {
            return false;
        }
        if (node1.data !== node2.data) {
            return false;
           
        }
        console.log(node1.data , node2.data);
        return (isSymmetry(node1.left, node2.right) && isSymmetry(node1.right, node2.left));
    }
    return isSymmetry(root.left, root.right);

}

// const flag = checkBinaryTree(root);
// console.log('my tree is', root);
const flag = checkSymmetry(root);
console.log(flag);


//****************************************************************************************************************** */
// Binary Tree: Implement a class with insert, delete, find, and various traversals (inorder, postorder, preorder, left view, right view, top view, bottom view, BFS).
class Node {

    constructor(val) {

        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function insert(root, data) {

    if (!root) {

        return new Node(data);
    }

    // bfs push the root to q

    let q = [];

    q.push(root);

    while (q.length) {

        const node = q.shift();

        if (node.left == null) {
            node.left = new Node(data);
            break;
        }

        else q.push(node.left)

        if (node.right == null) {

            node.right = new Node(data);
            break;
        }
        else q.push(node.right);
    }

    return root;


}

let root = null;
root = insert(root, 10)
root = insert(root, 20)
root = insert(root, 30)
root = insert(root, 40)
root = insert(root, 50)
root = insert(root, 60)
root = insert(root, 70)
console.log('root', root)


//******************************************************************************************************************** */

// Binary Tree: Implement a class with insert, delete, find, and various traversals (inorder, postorder, preorder, left view, right view, top view, bottom view, BFS).

//1 . insert
//2 . traversal - recursive(pre order , post order)
//3 . traversal - iterative(pre order , post order)
//4 . construct binary tree from pre order and inorder traversal
//5 . deletion
class Node {

    constructor(val) {

        this.data = val;
        this.left = null;
        this.right = null;
    }
}

// Node class with horizontal distance data
class NodeHd{

    constructor(data){

        this.data = data;
        this.left = this.right = null;
        this.hd = 0;

    }
}

function insert(root, data) {

    if (!root) {

        return new Node(data);
    }

    // bfs push the root to q

    let q = [];

    q.push(root);

    while (q.length) {

        const node = q.shift();

        if (node.left == null) {
            node.left = new Node(data);
            break;
        }

        else q.push(node.left)

        if (node.right == null) {

            node.right = new Node(data);
            break;
        }
        else q.push(node.right);
    }

    return root;


}

let root = null;
root = insert(root, 10)
root = insert(root, 20)
root = insert(root, 30)
root = insert(root, 40)
root = insert(root, 50)
root = insert(root, 60)
root = insert(root, 70)
console.log('root', root)

function recursivepPreOrderTraversal(root) {
    if (root == null) return
    console.log(root.data);
    recursivepPreOrderTraversal(root.left);
    recursivepPreOrderTraversal(root.right)
}

function recursiveInOrderTraversal(root) {
    if (!root) return;
    recursiveInOrderTraversal(root.left);
    console.log(root.data);
    recursiveInOrderTraversal(root.right)

}

function recursivePostorder(root) {
    if (!root) return;
    recursivePostorder(root.left);
    recursivePostorder(root.right);
    console.log(root.data);

    // 40 50 20 60 70 30 10
}

function iterativeInOrder(root) {
    // left --> root--> node
    let st = [];
    while (root !== null || st.length) {
        if (root) {
            // move to the left
            st.push(root);
            root = root.left;
        }
        else {
            // pop the element from the stack
            root = st.pop();
            console.log(' node-->data ', root.data);
            root = root.right;

        }

    }
}

function iterativePrePorder(root) {
    let st = [];

    while (root !== null || st.length) {

        if (root) {

            console.log('node-->data', root.data);
            st.push(root);
            root = root.left;
        }

        else {

            // pop the node
            root = st.pop();
            root = root.right;
        }

    }
}

function iterativePostOrderUsingTwoStack(root){
    //https://www.geeksforgeeks.org/iterative-postorder-traversal/
    // 1st iteration = [1]  , 2nd stack =  []
    // 2nd itr = [2 , 3]      2nd stack = [1]
    // 3rd itr = [2 , 6 , 7]  2nd stack = [1 , 3] 
    // 4th itr = [2 , 6]      2nd stack = [1 , 3 , 7]
    // 5th it = [2]           2nd stack = [1 , 3 , 7 , 6]
    //6th itr = [4 , 5]       2nd stack = [1 , 3 , 7 , 6 , 2]
    // 7th itr = [4]          2nd stack = [ 1, 3 , 7 , 6 , 2 , 5]
    //8th itr = []            2nd stack = [1 , 3 , 7 ,6 ,2 , 5 , 4]
    
    let st1 = [];
    let st2 = [];
    
    st1.push(root);
    
    while(st1.length){
    
        let temp = st1[st1.length-1];
        st1.pop();
        st2.push(temp);
        if(temp.left) st1.push(temp.left);
        if(temp.right) st1.push(temp.right);
    
    }
    // console.log('postorder traversal' , st2);
    
    while(st2.length){
        let temp = st2[st2.length-1];
        console.log('data-->' , temp.data);
        st2.pop();
    }
    
}

function constructBinaryTree() {
//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/submissions/1341471422/
// TC-->O(n^2) since we are traversing through the preorder once and make it root and for 
// each element we are searching for it in the inorder which takes n time (n*n) 
// let preorder = [3 , 9 , 20 , 15 ,7];
// let inorder = [9 , 3 , 15 , 20 , 7];

    let indexUnique = 0;
    function search(val) {
        return inorder.findIndex((entry) => entry === val)
    }
    function constructBinarytree(start, end) {
        // recursive function 
        // create a base case
        if (end < start) return null;

        let rootIndexVal = preorder[indexUnique];

        let rootNode = new Node(rootIndexVal);

        let indexInInorder = search(rootIndexVal);

        indexUnique++;

        rootNode.left = constructBinarytree(start, indexInInorder - 1);
        rootNode.right = constructBinarytree(indexInInorder + 1, end);

        return rootNode;

    }
    let finalTree = constructBinarytree(0, preorder.length - 1);
    console.log('finalTree', finalTree)

}

function deleteDeepest(root){
    //https://www.geeksforgeeks.org/deletion-binary-tree/

    function deleteDeepestNodeLeaf(root , rightMostNode){

        let q = [];
        q.push(root);

        let temp = null;

        while(q.length){

            temp = q.shift();
            if(temp==rightMostNode){ temp = null; return } // make null incase of root node

            if(temp.left!==null){
                if(temp.left===rightMostNode){
                    temp.left = null
                    return;
                }
                else q.push(temp.left);

            }

            if(temp.right!==null){

                if(temp.right===rightMostNode){

                    temp.right = null;
                    return;
                }

                else q.push(temp.right);
            }
           
        }
    }

    function deleteNode(val){

        let node = root;

        if(node.data === val) node = null;

        // use level order traversal iterative using  queue to find the nodes

        let q = [node];

        let nodeToBeDeleted = null;

        let temp;

        while(q.length){

             temp  = q.shift();

            if(temp.data === val){
                nodeToBeDeleted = temp; // this is the node to be deleted
            }

            // add the left of the tree to the queue

            if(temp.left) q.push(temp.left);
            if(temp.right) q.push(temp.right);
        }

        // if you find the node to be deleted then assign  it the right most node

        if(nodeToBeDeleted){
            nodeToBeDeleted.data = temp.data;
            // delete the deepest node
            // we can make the temp null here also but it will not do
            // we need to iterate through the tree and make the parent of this right most node to null
            // since the parent holds the address of the right most node
            deleteDeepestNodeLeaf(root , temp)
        }


    }

    deleteNode(12);

    console.log('final ans' , root)
}

function find(root , val){
  //https://www.geeksforgeeks.org/search-a-node-in-binary-tree/
  //TC O(n) --> traverse n nodes
  //Auxiliary spcae complexity O(n): we need to stack for each node which is n

    if(root.val) return true;

    if(!root) return false;

    let res1 = find(root.left , val);

    if(res1) return true;

    let res2 = find(root.right , val);

    return res2;

}

function leftView(){
    //https://www.geeksforgeeks.org/print-left-view-binary-tree/
    // left most node at each level

    let maxLevel = 0;
    let ans = [];
    function helper(root , level){
        if(root==null) return;
        if(maxLevel<level){ ans.push(root.data);  maxLevel = level}// which means we need to print the node
        helper(root.left , level+1);
        helper(root.right , level+1)
    }

    helper(root , 1);
    console.log('ans' ,ans)

    //T.C--> O(N)
    //SC-->O(N)
    function itrHelper(){
        if(!root) return;
        let itrRes = [];
        let q = [];
        q.push(root);
        while(q.length){
            let n = q.length
            for(let i = 0; i<n; i++){
                let top = q.shift();
                if(i==0) itrRes.push(top.data);
                if(top.left) q.push(top.left);
                if(top.right) q.push(top.right)
            }
            
        }

        console.log('itrRes' , itrRes)

    }

    itrHelper();
}

function rightView(){
    //https://www.geeksforgeeks.org/print-right-view-binary-tree-2/

    let ans = [];
    let maxLevel = 0;
    function rightViewRecursive(root , level){
        // base case
        if(!root) return;
        if(maxLevel<level){ans.push(root.data); maxLevel = level}
        rightViewRecursive(root.right , level+1);
        rightViewRecursive(root.left , level+1)
    }
    rightViewRecursive(root , 1);
    console.log('ans' , ans);

    function rightRecursiveItr(){

        if(!root) return null;

        let ansItr = [];
        let q = []
        q.push(root);

        while(q.length){
            let  n = q.length;
            for(let i = 0; i<n ;i++){
                let top = q.shift();
                if(i==n-1) ansItr.push(top.data);
                if(top.left) q.push(top.left);
                if(top.right) q.push(top.right);
            }
        }

        console.log('ansItr' , ansItr)
    }
    rightRecursiveItr();
}

function heightOfBT(root) {
    //https://www.geeksforgeeks.org/find-the-maximum-depth-or-height-of-a-tree/
    function helper(root) {
        // base case 
        if (!root) return 0;
        // recursively find height of the left subtree
        let leftSubtreeHeight = helper(root.left);
        let rightSubtreeHeight = helper(root.right);
        return Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
    }
    console.log('height' , helper(root));
}

function countNodes(){
    function helper(root){
        if(!root) return 0;
        let leftNodes = helper(root.left);
        let rightNodes = helper(root.right);
        return leftNodes+rightNodes+1;
    }
    console.log(helper(root))
}

function topViewBT(){
    //https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/
    let rootNode = new NodeHd(1);
    rootNode.left = new NodeHd(2);
    rootNode.right = new NodeHd(3);
    rootNode.left.right = new NodeHd(4);
    rootNode.left.right.right = new NodeHd(5);
    rootNode.left.right.right.right = new NodeHd(6);
    iterativeInOrder(rootNode)
    let mp =  {};
    let q = [];
    q.push(rootNode);
    while(q.length){
        let top = q.shift();
        if(!mp[top.hd]) mp[top.hd] = top.data;
        if(top.left) {
            top.left.hd = top.hd-1;
            q.push(top.left);
        }
        if(top.right){
            top.right.hd = top.hd+1;
            q.push(top.right);
        }
    }
    console.log('mp' , mp);
    let  arr = Object.entries(mp).sort((a,b) => a[0]-b[0]);
    for(const [key , value] of arr){
        console.log('data-->' , value)
    }
    

}

function bottomViewBt(){
    //https://www.geeksforgeeks.org/bottom-view-binary-tree/
    // same as top view with one condition change
    //mp[hd] = data // keeping on updating till the last data
}