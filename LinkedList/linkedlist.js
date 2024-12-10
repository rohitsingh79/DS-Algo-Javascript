
class Node {
    constructor(value){
        this.data = value;
        this.next=null;
    }
}

//**********************************************************************************************************************
// first linked list 
head1 = new Node(1);
let second1 = new Node(2);
let third1 = new Node(3);
let fourth1 = new Node(-4);
head1.next =  second1;
second1.next = third1;
third1.next = fourth1;

//**********************************************************************************************************************
//second linked list
head2 = new Node(1);
let second2 = new Node(3);
let third2 = new Node(4);
head2.next =  second2;
second2.next = third2;


//**********************************************************************************************************************
// print the linked list
function printList(node){
    let nodeList = ""
    while(node!=null){
        nodeList+=node.data+"-->";
        node = node.next;
    }
    console.log(nodeList+'null');
    }

//printList(head1);   


//**********************************************************************************************************************
// reverse the linked list
function reverseList(node){
var next = node;
var prev = null;
var curr = null;
while(next!=null){
curr = next;
next = next.next;
curr.next = prev;
prev = curr;

}
node = curr;
return node;
}

let reverse = reverseList(head1);
// console.log('reverse list');
// printList(reverse);  

//**********************************************************************************************************************
//merge two sorted list
function sortList(list1,list2){
    let list3 = new Node();
    let dummyNode = list3;
    while(list1!=null && list2!=null){
        if(list1.data<list2.data){
            list3.next = list1;
            list1 = list1.next;
        }
        else{
            list3.next = list2;
            list2 = list2.next;
        }
        list3 = list3.next;
        }

    if(list1!=null){
        list3.next = list1;
    }

    if(list2!=null){
        list3.next = list2
    }
    return dummyNode.next;

    }

    let list1 = new Node(1);
    let sec1 = new Node(2);
    let thir1 = new Node(3);
    let four1 = new Node(3);
    
    list1.next =  sec1;
    sec1.next = thir1;
    thir1.next = four1;

    let list2 = new Node(1);
    let sec2 = new Node(2);
    let thir2 = new Node(2);
    let four2 = new Node(3);
    
    list2.next =  sec2;
    sec2.next = thir2;
    thir2.next = four2;

   let sortedList =  sortList(list1 ,list2)
//    console.log('sorted list');
//    printList(sortedList)

//**********************************************************************************************************************
//find if a linked list is palindrome

let palindromeList = new Node(1);
let sec3 = new Node(2);
let thir3 = new Node(2);
let four3 = new Node(1);

palindromeList.next =  sec3;
sec3.next = thir3;
thir3.next = four3;


function isPalindrome(list){
    // find the middle
    let fast = list;
    let slow = list;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // reverse the other half

    let prev = null;
    let curr = null;
    let next = slow;
    while(next){
        curr = next
        next = next.next;
        curr.next = prev;
        prev = curr;
    }

    while(prev){
        if(prev.data!=list.data){
            return false
        }
        prev = prev.next;
        list = list.next;
    }
    return true;
  
    

}
// console.log(isPalindrome(palindromeList));


//**********************************************************************************************************************
// reverse the linked list in place 
// using 3 pointers prev , curr and next
var reverseBetween = function(head, left, right) {compcomp
    
    //create the dummy node
    let dummy = new ListNode(0);
    dummy.next = head;
    let tail = dummy;
    
    // traverse till you find the left position
    let pos = 1;
    let curr = head;
    let start;
    let prev=null;
    while(pos<=right){
        
        // reach to the left
        if(pos<left){
            tail = curr;
            curr = curr.next;
            pos++;
        } 
        else{
        start = curr;
        // reverse the list 
            while(pos<=right){
                let nextNode = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nextNode;
                pos++;
            } // including left and right
        }
        
       
    }
    
    //connect the nodes
    tail.next = prev;
    start.next = curr;
    
    return dummy.next;
};



//
// Applications of Linked Lists:
// Linked Lists can be used to implement stacks, queue, deque, sparse matrices and adjacency list representation of graphs.
// Dynamic memory allocation in operating systems and compilers (linked list of free blocks).
// Manipulation of polynomials
// Arithmetic operations on long integers.
// In operating systems, they can be used in Memory management, process scheduling (for example circular linked list for round robin scheduling) and file system.
// Algorithms that need to frequently insert or delete items from large collections of data.
// LRU cache, which uses a doubly linked list to keep track of the most recently used items in a cache.
// Applications of Linked Lists in real world: 
// The list of songs in the music player are linked to the previous and next songs. 
// In a web browser, previous and next web page URLs can be linked through the previous and next buttons (Doubly Linked List)
// In image viewer, the previous and next images can be linked with the help of the previous and next buttons (Doubly Linked List)
// Circular Linked Lists can be used to implement things in round manner where we go to every element one by one.
// Linked List are preferred over arrays for implementations of Queue and Deque data structures because of fast deletions (or insertions) from the front of the linked lists.


