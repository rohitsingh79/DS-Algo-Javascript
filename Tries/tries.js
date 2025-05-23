//---------------- Tries-------------
//https://www.geeksforgeeks.org/trie-insert-and-search/
//tree like data structure used for storing dynamic set of strings
// efficient retrieval ans storage of keys in large dataset
// 1. insert in a trie  O(1)
// 2. search in a trie  O(N)
// 3. delete in a trie 
// All take O(n) operations

class TrieNode {
    constructor(val) {
        this.child = new Array(26).fill(null);
        this.data = val || null;
        this.wordEnd = false;
    }

}

function insertKey(root, key) {
    //TC (26*length of the key)~O(n) n is the lenght of the word
    let curr = root;
    for (const c of key) {

        const index = c.charCodeAt(0) - 'a'.charCodeAt(0);

        if (curr.child[index] === null) {

            curr.child[index] = new TrieNode(c);
        }

        curr = curr.child[index];

    }
    curr.wordEnd = true;

    // console.log('trie after insertion' , JSON.stringify(root));

}

function searchKey(root, key) {

    //TC (26*length of the key)
    //TC (26*length of the key)~O(n) n is the lenght of the word
    let curr = root;

    for (const c of key) {

        const index = c.charCodeAt(0) - 'a'.charCodeAt(0);

        if (curr.child[index]) {
            curr = curr.child[index];
        }
        else return false;

    }
    return curr.wordEnd;
}

function deleteKey(root, key) {
//  1. a. end of string is reached and no children for last node return null
//     b. end of string is reached and still has children unmark the node to false

// 2.for each intermediate node check if node has children
//  a. if it does not belong to any word then make it null
//   b. if it belongs then return root eg: (geeks and geek)

    function isAllChildrenEmpty(root) {
        for (let i = 0; i < 26; i++) {
            if (root.child[i]) return false;
        }
        return true;

    }

    function helper(root, key, index) {
        if (root == null) null;
        if (index === key.length) {

            if (root.wordEnd) root.wordEnd = false; // if it is not a leaf node

            if (isAllChildrenEmpty(root)) root = null;   // no other node can be formed

            return root;
        }
        const charIndex = key[index].charCodeAt(0) - 'a'.charCodeAt(0);
        root.child[charIndex] = helper(root.child[charIndex], key, index + 1)
        if (isAllChildrenEmpty(root) && !root.wordEnd) root = null;   // ex: geeks and geek
        return root;
    }

    helper(root, key, 0)
}

const trie = new TrieNode();
console.log('trie' , trie);
insertKey(trie, 'and')
insertKey(trie, 'ant')
insertKey(trie, 'zoo')
insertKey(trie, 'geeks')
insertKey(trie, 'geek')
insertKey(trie, 'baa')
console.log(searchKey(trie, 'and'))
console.log(searchKey(trie, 'ant'))
console.log(searchKey(trie, 'zoo'))
console.log(searchKey(trie, 'geeks'))
console.log(searchKey(trie, 'geek'))
console.log(searchKey(trie, 'baa'))
deleteKey(trie, 'baa');
deleteKey(trie , 'geek')
deleteKey(trie , 'zoo')
console.log('check baa-->' ,searchKey(trie, 'baa'))
console.log('check geeks-->' ,searchKey(trie, 'geeks'))
console.log('check geek-->' ,searchKey(trie, 'geek'))
console.log('check zoo-->' ,searchKey(trie, 'zoo'))

 
// ********************************** Alternative approach *************************************
class TrieNode{

    constructor(){
        this.children = {};
        this.end = false;
    }
}


let Trie = function() {

    this.root = new TrieNode();
};


/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let  curr = this.root;
    for(const w of word){

        if(!curr.children[w]){
            curr.children[w] = new TrieNode();

        }
        curr = curr.children[w];
    }

    curr.end = true;

};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {

    let curr = this.root;
    for(const w of word){
        if(!curr.children[w]) return false;

        curr = curr.children[w]; // move forward in the trie

    }

    return curr.end? true:false


};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

   let curr = this.root
    for(const p of prefix){
        if(!curr.children[p]) return false;
        curr = curr.children[p]; // advance to the nex
    }
    return true

};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
