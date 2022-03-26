// var head1;
// var head2;
// var head3

// function printList(node){
//     while(node!=null){
//         console.log(node.data);
//         node = node.next;
//     }
//     }

//function to reverse the linked list
function reverList(node){
    var next = null;
    var curr = node;
    var prev = null;
    while(curr!=null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head1 = prev;
}    

class Node {
    constructor(value){
        this.data = value;
        this.next=null;
    }
}

// // first linked list 
head1 = new Node(1);
let second1 = new Node(2);
let third1 = new Node(3);
let fourth1 = new Node(-4);
head1.next =  second1;
second1.next = third1;
third1.next = fourth1;

// // second linked list
// head2 = new Node(1);
// let second2 = new Node(3);
// let third2 = new Node(4);
// head2.next =  second2;
// second2.next = third2;

// // printList(head1);
// // // reverList(head);
// // console.log('----------------')
// // printList(head2);


// // function sortList(list1,list2){
// //     let list3 = new Node();
// //     let dummyNode = list3;
// //     console.log('dummy node is', list3 );
// //     while(list1!=null && list2!=null){
// //         if(list1.data<list2.data){
// //             list3.next = list1;
// //             list1 = list1.next;
// //         }
// //         else{
// //             list3.next = list2;
// //             list2 = list2.next;
// //         }
// //         list3 = list3.next;
        
       
// //     }

// //     if(list1!=null){
// //         list3.next = list1;
// //     }

// //     if(list2!=null){
// //         list3.next = list2
// //     }
// //     console.log(dummyNode.next);
// //     }

// // }
// // console.log('----------------')
// // sortList(head1,head2);
// // printList(head3);

// // printList(head1);
// // function palindrome(head1){
 
// // }

// // palindrome(head1);

// function addSet(head1){
//     const obj = new Set();

//     while(head1!=null){
//         obj.add(head1);
//         console.log(obj);
//         head1 = head1.next;
//     }  
// }

// addSet(head1);



