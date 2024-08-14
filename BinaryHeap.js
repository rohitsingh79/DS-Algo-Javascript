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

    deleteFromBinaryHeap();


}

BinaryHeap();