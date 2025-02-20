// LRU cache implementation using doubly linked list
https://leetcode.com/problems/lru-cache/description/

class ListNode {
    constructor(key , value) {
        this.key = key;
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}

class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.head = new ListNode(null)
        this.tail = new ListNode(null)
        this.head.next = this.tail
        this.tail.prev = this.head
        this.map = new Map()

    }

    _remove(node){
       let nextNode = node.next;
       let prevNode = node.prev;
       prevNode.next = nextNode
        nextNode.prev = prevNode
    }

    _add(node){
        let nextNode = this.head.next;
        this.head.next = node;
        node.next = nextNode;
        node.prev = this.head;
        nextNode.prev = node;
    }

    put(key ,value){
        if(this.map.has(key)){
            this._remove(this.map.get(key));
        }
        const newNode = new ListNode(key , value)  // create new node
        this._add(newNode);
        this.map.set(key , newNode)
        if(this.map.size > this.capacity ){
            const lru  = this.tail.prev
           this._remove(lru)
            this.map.delete(lru.key) // remove the entry from the node
        }
    }

    get(key){
        if(!this.map.get(key)) return -1;
            const node = this.map.get(key);
            this._remove(this.map.get(key));
            this._add(this.map.get(key));
            return node.value
    }
}


// Example usage
let lru = new LRUCache(2);



//
lru.put(1, 1);
lru.put(2, 2);
console.log('lru get1' , lru.get(1));
lru.put(3, 3);
console.log(lru.get(2));
lru.put(4, 4);
console.log(lru.get(1));
console.log(lru.get(3));
console.log(lru.get(4));
