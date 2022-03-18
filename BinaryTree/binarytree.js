class Node
{
	constructor(item)
	{
		this.data = item;
		this.left = this.right=null;
	}
}

let root;
root = new Node(1);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(7);
root.left.right = new Node(11);
root.right.left = new Node(17);

console.log(root)

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
// // Iterative method to find height of Binary Tree or max depth
// function findHeight(node){
// if(node==null){
//     return -1;
// }

// //create an empty queue
// let q = [];
// let curr;
// //initial height;
// var height = 0;
// //push the root to the queue
// q.push(node);
// // console.log('pushed into the queue', q);
// while(q.length>0){
    
//     let size = q.length;
//     console.log('queue length', size);
//     height = height+1;
//     while(size>0){
//         //pop from the front
//         curr = q.shift();
//         size--;
//         if(curr.left!=null){
//             q.push(curr.left);
//         }
//         if(curr.right!=null){
//             q.push(curr.right)
//         }

//     }
// }
// return height;

// }

// const height = findHeight(root)
// console.log(height);

//**************************************************************************************************************/
// function to check if a binary tree is a binary search tree or not
// function checkBinaryTree(root){

//     function isBst(node , min , max){
//         if(node==null){
//             return true
//         }
//         if(node.data<min || node.data>max){
//             return false;
//         }
//         return isBst(node.left , min , node.data) && isBst(node.right , node.data , max)
//     }
//     return isBst(root);

// }

// const flag = checkBinaryTree(root);
// console.log(flag);

//**************************************************************************************************************/
// function to check if a binary tree is a symmetrical tree or not recursive approach
function checkSymmetry(root){

   function isSymmetry(node1 , node2){
       if(node1==null && node2==null){
           return true;
       }
       if(node1.data===node2.data){
           return (isSymmetry(node1.left , node2.right) && isSymmetry(node1.right , node2.left))
       }
       return false;
   }
   return isSymmetry(root.left , root.right);

}

// const flag = checkBinaryTree(root);
console.log('my tree is', root);
const flag = checkSymmetry(root);
console.log(flag);