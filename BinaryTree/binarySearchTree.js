//--------BST----------------------------//
//https://www.udemy.com/course/datastructurescncpp/learn/lecture/13190284#content
//https://www.cs.usfca.edu/~galles/visualization/BST.html
//1.insert
//2.inorder traversal (gives nodes list in sorted order)
//3.find
//4.delete

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let root;
function insert() {

    function helper(root, val) {
        if (root === null) return new Node(val);
        if (val < root.data) {

            root.left = helper(root.left, val);
        }
        else root.right = helper(root.right, val);
        return root;
    }
    // root = new Node(50);
    // helper(root, 10);
    // helper(root, 40);
    // helper(root, 20);
    // helper(root, 30);
    root = new Node(30);
    helper(root , 20);
    helper(root , 40);
    helper(root , 10);
    helper(root , 25);
    helper(root , 35);
    helper(root , 50);

    console.log('root', root);
}

function inOrder() {
    // inorder always gives the value of the tree in sorted order
    function helper(root) {
        if (!root) return;
        helper(root.left);
        console.log('data-->', root.data);
        helper(root.right);
    }
    helper(root);
}

function search() {
    // recursive
    function rSearch(root, val) {
        if (root == null) return false;
        if (root.data == val) return true;
        let leftRes = rSearch(root.left, val);
        let rightRes = rSearch(root.right, val);
        return leftRes || rightRes;
    }

    console.log(rSearch(root, 10));

}

function deleteInBst() {
    function height(root) {
        if (root === null) return 0;
        let leftHeight = height(root.left);
        let rightHeight = height(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    function inOrderPre(root) {
        while (root && root.right !== null) {
            root = root.right;
        }
        return root;
    }
    function inOrderSucc(root) {
        while (root && root.left !== null) {
            root = root.left;
        }
        return root;
    }

//     50
// |    
// 10  
//         |
//         40
//     |
//     20  
//         |    
//         30

    function helper(root, val) {

        if (!root) return null;

        if (root.data === val) {

            if (!root.left && !root.right) return null

            if (height(root.left) > height(root.right)) {

                let inOrderPreNode = inOrderPre(root.left);

                root.data = inOrderPreNode.data;

                root.left = helper(root.left, inOrderPreNode.data)
            }

            else {
                let inOrderSuccNode = inOrderSucc(root.right);

                root.data = inOrderSuccNode.data;

                root.right = helper(root.right, inOrderSuccNode.data)
            }
        }

        else {
            if (val < root.data) {
                root.left = helper(root.left, val);
            }
            else root.right = helper(root.right, val);
        }
        return root;

    }
    console.log('before deletion-------')
    inOrder();
    helper(root, 20);
    console.log('after deletion---------')
    inOrder();
}

insert();
inOrder();
search();
deleteInBst();
