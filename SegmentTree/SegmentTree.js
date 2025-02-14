//------------------------Segment Tree------------------------//
//https://gist.github.com/varaprasadh/7f89b77b7592a59b123a15040901fa5b#file-segmenttree-cpp-L80
//https://www.youtube.com/watch?v=2bSS8rtFym4
//https://www.youtube.com/watch?v=a9WoSN2tN8o


// leetcode problem


// 1. construct segment tree
// 2. find range sum

// arr - [1 , 2 , 5 , 6 , 7  , 9 ]
//final binary tree - [30, 8, 22, 3, 5, 13, 9, 1, 2, 0, 0, 6,7, 0, 0, 0] 


// binary tree arr to hold the sun range values
const binaryTreeArr = new Array(16).fill(0)
const arr = [1, 2, 5, 6, 7, 9];

const getMid = (s, e) => Math.floor((s + e) / 2); // get mid values

function constructSegmentTree() {

    const n = arr.length;

    function helper(start, end, currIndex) {

        if (start === end) {
            binaryTreeArr[currIndex] = arr[start]
            return arr[start]

        };

        const mid = getMid(start, end);

        const leftChild = 2 * currIndex + 1;
        const rightChild = 2 * currIndex + 2;

        binaryTreeArr[currIndex] = helper(start, mid, leftChild) + helper(mid + 1, end, rightChild);

        return binaryTreeArr[currIndex];

    }

    helper(0, n - 1, 0)
    console.log('binaryTreeArr', binaryTreeArr)
}

function findRangeSum() {
    function helper(rangeStartIndex, rangeEndIndex, treeStartIndex, treeEndIndex, currIndex) {
        if (rangeStartIndex <= treeStartIndex && rangeEndIndex >= treeEndIndex) {
            return binaryTreeArr[currIndex];
            // if it lies entirely in the range return the value
        }
        if ((treeStartIndex>rangeEndIndex || treeEndIndex<rangeStartIndex)) return 0; // no overlap return 0

        // if is a subset call the left and right child recusively
        const mid = getMid(treeStartIndex, treeEndIndex);
        const ans = helper(rangeStartIndex, rangeEndIndex, treeStartIndex, mid, (2 * currIndex) + 1)
            + helper(rangeStartIndex, rangeEndIndex, mid + 1, treeEndIndex, (2 * currIndex) + 2);
        return ans;
    }

    let ans = helper(1, 4, 0, arr.length-1, 0);
    console.log('ans', ans);
}

function updateIndex(){

    const updatValBy = 8;
    const indexToUpdate = 3; // in the main arr [1 , 2 , 5 , 6 , 7  , 9 ]
    arr[indexToUpdate]+=updatValBy; // update the index


    function helper(ind , treeLeftIndex , treeRightIndex , currIndex){

        // base case
        if(ind<treeLeftIndex || ind > treeRightIndex) return;

        // update the value as you traverse down

        binaryTreeArr[currIndex]+=updatValBy;

        if(treeLeftIndex!==treeRightIndex){
            let mid = getMid(treeLeftIndex , treeRightIndex);
            helper(ind , treeLeftIndex , mid , (2*currIndex)+1);
            helper(ind , mid+1 , treeRightIndex , (2*currIndex)+2);
             
        }
    }

    helper(indexToUpdate , 0 , arr.length-1 , 0)
    console.log('binaryTreeArr' , binaryTreeArr)

}

constructSegmentTree();
findRangeSum()
updateIndex();