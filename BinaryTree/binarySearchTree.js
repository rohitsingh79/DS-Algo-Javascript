//--------BST----------------------------//
//https://www.udemy.com/course/datastructurescncpp/learn/lecture/13190284#content
//https://www.cs.usfca.edu/~galles/visualization/BST.html
//1.insert
//2.inorder traversal (gives nodes list in sorted order)
//3.find
//4.delete
//5.create a BST from preorder - (recursive and iterative)
//6. construct a BST from postorder (recursive and iterative)

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

function recursiveConstructBSTFromPreorder() {
    //https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/
    // const preOrder = [10, 5, 1, 7 , 40 , 50]
    const preOrder = [30, 20, 10, 15, 25, 40, 50, 45]
    let pIndex = 0;
    let n = preOrder.length;
    function findInd(val, start, end) {
        let i;
        for (i = start; i <= end; i++) {
            if (preOrder[i] > val) return i;
        }
        return i;
    }

    function helper(start, end) {

        if (start > end) return null; // return null when they crossover 

        let node = new Node(preOrder[pIndex]);

        pIndex++;

        if (start === end) return node; // return the node if they are the leaf node

        let nextMax = findInd(node.data, start, end); // find the index of the next starting node return infinity in case the next greater is not present

        node.left = helper(start + 1, nextMax - 1);

        node.right = helper(nextMax, end);

        return node;
    }

    let ans = helper(0, n - 1);
    inOrder(ans)
}

function irtativeConstructBSTFromPreOrder() {
    // const preOrder = [10, 5, 1, 7 , 40 , 50]
    const preOrder = [30, 20, 10, 15, 25, 40, 50, 45]
    let pIndex = 0;
    let n = preOrder.length;

    function helper() {
        let root = new Node(preOrder[pIndex]);
        pIndex++;
        let st = [];
        let temp = root
        while (pIndex < n) {
            if (preOrder[pIndex] < temp.data) {
                st.push(temp);
                temp.left = new Node(preOrder[pIndex]);
                temp = temp.left;
                pIndex++;
            }
            else {
                if (!st.length) {

                    temp.right = new Node(preOrder[pIndex]);
                    temp = temp.right;
                }

                else {
                    while (st.length && st[st.length - 1].data < preOrder[pIndex]) {
                        temp = st.pop();
                    }
                    temp.right = new Node(preOrder[pIndex]);
                    temp = temp.right;
                }

                pIndex++;
            }

        }
        inOrder(root);
    }
    helper();

}
function recurConstructBSTfromPostOrder() {
    //https://www.geeksforgeeks.org/construct-a-binary-search-tree-from-given-postorder/
    // start from right and 
    // when end becomes greater than start return null
    // when the start == end return the leaft node
    //TC O(n^2)

    let postOrder = [1, 7, 5, 50, 40, 10];

    let n = postOrder.length;

    let pIndex = n - 1;

    function fIndex(start, end, val) {
        let i;
        for (i = start; i >= end; i--) {

            if (postOrder[i] < val) return i
        }
        return i;
    }

    function helper(end, start) {

        if (end > start) return null;

        let node = new Node(postOrder[pIndex]);

        pIndex--;

        if (end === start) return node;

        let nextMinIndex = fIndex(start, end, node.data);

        node.right = helper(nextMinIndex + 1, start - 1);
        node.left = helper(end, nextMinIndex);

        return node;
    }
    let ans = helper(0, n - 1);
    inOrder(ans);
}

function iterConstructBSTfromPostOrder() {
    //https://www.geeksforgeeks.org/construct-a-binary-search-tree-from-given-postorder/
    //T.C O(N)
    let postOrder = [1, 7, 5, 50, 40, 10];
    let n = postOrder.length;
    let pIndex = n - 1;

    function helper() {
        let st = [];
        let node = new Node(postOrder[pIndex]);
        pIndex--;
        let temp = node;

        while (pIndex >= 0) {
            if (postOrder[pIndex] > temp.data) {
                // add as a right child
                temp.right = new Node(postOrder[pIndex]);
                st.push(temp);
                temp = temp.right;
                pIndex--;

            }

            else {
                // for left child
                while (st.length && st[st.length - 1].data > postOrder[pIndex]) {
                    temp = st.pop();

                }

                temp.left = new Node(postOrder[pIndex]);
                pIndex--;
                temp = temp.left;

            }

        }
        inOrder(node);
    }
    helper();
}

// insert();
// inOrder();
// search();
// deleteInBst();
// recursiveConstructBSTFromPreorder();
// irtativeConstructBSTFromPreOrder();
// iterConstructBSTfromPostOrder();
// recurConstructBSTfromPostOrder();

