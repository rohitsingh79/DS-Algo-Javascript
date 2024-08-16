//---------------- Binary Heap - (complete binary tree either max or min heap)-------------
// 1. consruct binary heap from array (logn time)

function BinaryHeap() {
    // priority queue  uses binary tree , to prioritze the priority
    // based on min or max value

    //Binary heap are constructed using array
    // https://www.geeksforgeeks.org/binary-heap/

    //30 , 20 , 15 , 5 , 10 , 12 ,6

    //[30 , 20]
    //[20 , 30 , 15 ]
    //[15 , 20 , 30 , 5]
    //[15 , 5 , 30 , 20]
    //[5 , 15 , 30 , 20 , 10]
    //[5 , 10 , 30 , 20 , 15 , 12]
    //[5 , 10 , 12  , 20 , 15 , 30]
    //[5 , 10 , 12 , 20 , 15 , 30 , 6]
    //[5 , 10 , 6 , 20 , 15 , 30 , 12]

    let arrHeap = [];

    function insert(k) {
        arrHeap.push(k);
        let currentEleIndex = arrHeap.length - 1;
        let parentIndex = Math.floor((currentEleIndex - 1) / 2);
        let parent = arrHeap[parentIndex];
        let current = arrHeap[currentEleIndex];
        while (currentEleIndex > 0 && parent < current) {
            [arrHeap[currentEleIndex], arrHeap[parentIndex]] = [arrHeap[parentIndex], arrHeap[currentEleIndex]];

            currentEleIndex = parentIndex
            parentIndex = Math.floor((currentEleIndex - 1) / 2);
            parent = arrHeap[parentIndex];
            current = arrHeap[currentEleIndex];
        }
    }

    insert(30)
    insert(20)
    insert(15)
    insert(5)
    insert(10);
    insert(12);
    insert(1)

    console.log('arrHeap', arrHeap);

    function deleteFromBinaryHeap() {

        //https://www.geeksforgeeks.org/insertion-and-deletion-in-heaps/

        // [30, 20, 15, 5, 10, 12, 1]
        // [1, 20, 15, 5, 10, 12]

        // //1st operation
        // [20, 1, 15, 5, 10, 12]

        // //2nd operation
        // [20, 10, 15, 5, 1, 12]

        let n = arrHeap.length;
        [arrHeap[n-1], arrHeap[0]] = [arrHeap[0], arrHeap[n-1]]

        arrHeap.pop();
        const updatedLen = arrHeap.length;

        let currentEleIndex = 0;
        let leftChildIndex = (2 * currentEleIndex) + 1;
        let rightChildIndex = (2 * currentEleIndex) + 2;

        while (leftChildIndex < updatedLen || rightChildIndex < updatedLen) {

            if (arrHeap[leftChildIndex] > arrHeap[rightChildIndex]) {
                [arrHeap[currentEleIndex], arrHeap[leftChildIndex]] = [arrHeap[leftChildIndex], arrHeap[currentEleIndex]]

                currentEleIndex = leftChildIndex;

            }

            else {
                [arrHeap[currentEleIndex], arrHeap[rightChildIndex]] = [arrHeap[rightChildIndex], arrHeap[currentEleIndex]]
                currentEleIndex = rightChildIndex;
            }

             leftChildIndex = (2 * currentEleIndex) + 1;
             rightChildIndex = (2 * currentEleIndex) + 2;

        }

        console.log('arrHeap after deletion-->', arrHeap);
    }


    function heapify(){
    // this method is fastest way to create the heap
    //https://www.geeksforgeeks.org/building-heap-from-array/
    //T.C O(n)--> better than normal top down create approach

    //             1
    //           /    \
    //         3        5
    //       /  \     /  \
    //     4      6  13  10
    //    / \    / \
    //   9   8  15 17


    //             17
    //           /    \
    //         15       13
    //       /  \     /  \
    //     9      6  5  10
    //    / \    / \
    //   4   8  3   1

    let arr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17];
    let n = arr.length

    function heapify(nodeIndex){
        // calc the left and right child
        let left = 2*nodeIndex+1;
        let right = 2*nodeIndex+2;

        if(left>=n && right>=n) return;

        let largestIndex;

        if(arr[left]>arr[right]) {
            largestIndex = left;
            [arr[nodeIndex] , arr[left]] = [arr[left] , arr[nodeIndex]];
            
        }

        else {
            largestIndex = right;
             [arr[nodeIndex] , arr[right]] = [arr[right] , arr[nodeIndex]]
        }

        heapify(largestIndex);
    }


    function buildHeap(){
        // get the last non leaf node index
        let lastNonLeafNode = n-1
         lastNonLeafNode = Math.floor((lastNonLeafNode-1)/2);
        // [1 , 3,, 5, 4 , 6]
        // start from right to left
        for(let  i = lastNonLeafNode ; i>=0; i--){
            heapify(i);
        }
    }

    buildHeap();

    console.log('final ans arr-->' ,arr);
    }

    deleteFromBinaryHeap();
    heapify();

}

BinaryHeap();

//https://www.geeksforgeeks.org/how-to-implement-priority-queue-using-heap-or-array/

//-----------priority queue using binary heap--------


//1. create a class for maxheap
//2 . define function for insert , delete , heapifyup , heapifydown
//3 . create a priority queue class to insert , delete
class maxHeap {
    constructor() {
        this.heap = []; // heap is represented using an array 
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp(); // heapify by rearranging the elements
    }

    delete() {
        let n = this.heap.length;
        let eleToBeDeleted = this.heap[0];
        [this.heap[n - 1], this.heap[0]] = [this.heap[0], this.heap[n - 1]]
        this.heapifyDown();
        return eleToBeDeleted;

    }

    heapifyUp() {
        let len = this.heap.length;
        len = len - 1;
        let parentIndex = Math.floor((len - 1) / 2);
        let currentIndex = len;
        while (parentIndex >= 0 && this.heap[parentIndex] < this.heap[currentIndex]) {
            [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]]
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }

    heapifyDown() {
        this.heap.pop();
        let len = this.heap.length;
        let parentIndex = 0;
        let leftChildIndex = (2 * parentIndex) + 1;
        let rightChildIndex = (2 * parentIndex) + 2;
        let largestIndex;

        while (leftChildIndex < len) {
            if (rightChildIndex < len) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    largestIndex = rightChildIndex;
                }
                else largestIndex = leftChildIndex;
            }
            else {
                if (this.heap[parentIndex] < this.heap[leftChildIndex]) { // edge case when there is only one left child left
                    largestIndex = leftChildIndex;
                }
                else break;
            }

            [this.heap[parentIndex], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[parentIndex]]
            parentIndex = largestIndex;
            leftChildIndex = (2 * parentIndex) + 1;
            rightChildIndex = (2 * parentIndex) + 2;
        }
    }
}


//Q1: [5 , 10 , 6 , 20 , 15 , 30 , 12]
//soln: [30, 15, 20, 5,10,  6, 12]
// const maxHeap1 = new maxHeap();
// maxHeap1.insert(5)
// maxHeap1.insert(10)
// maxHeap1.insert(6)
// maxHeap1.insert(20)
// maxHeap1.insert(15)
// maxHeap1.insert(30)
// maxHeap1.insert(12)

class PriorityQueue {
    constructor(){
        this.heap = new maxHeap();
    }

    insert(val){
        this.heap.insert(val);
    }

    delete(){
        return this.heap.delete();
    }
}

const pq = new PriorityQueue();
console.log('pq' , pq)
pq.insert(5)
pq.insert(10)
pq.insert(6)
pq.insert(20)
console.log('pq after insertion' , pq)
console.log('value deleted' , pq.delete());
console.log('value deleted' , pq.delete());
console.log('pq after deletion' , pq)



