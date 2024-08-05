//--------BST----------------------------//
//1.insert
//2.inorder traversal (gives nodes list in sorted order)
//3.find

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(30);

function insert() {

    function helper(root, val) {
        if (root === null) return new Node(val);
        if (val < root.data) {

            root.left = helper(root.left, val);
        }
        else root.right = helper(root.right, val);
        return root;
    }

    helper(root , 20);
    helper(root , 40);
    helper(root , 10);
    helper(root , 25);
    helper(root , 35);
    helper(root , 50);
    console.log('root' , root);
}

function inOrder(){
    // inorder always gives the value of the tree in sorted order
    function helper(root){
        if(!root) return;
        helper(root.left);
        console.log('data-->' ,root.data);
        helper(root.right);
    }
    helper(root);
}

function search(){
    // recursive
    function rSearch(root , val){
        if(root == null) return false;
        if(root.data == val) return true;
        let leftRes = rSearch(root.left , val);
        let rightRes = rSearch(root.right , val);
        return leftRes || rightRes;
    }

    console.log(rSearch(root , 10));

}
insert();
inOrder();
search();