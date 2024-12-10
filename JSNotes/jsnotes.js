//1. Polyfill promise 
//2 . use case and example for polyfill promise
//3. LRU cache using map



//---------------------------------------------------------------------------------------------------
  // Polyfill of promise
  // function promisePoly(executor) {
  //   let onResolve;
  //   let val;
  //   let fullfilled = false;
  //   let called = false;
  
  
  //   // fullfilled is called when it goes inside the resolve function
  //   // called is used when the resolved function has been called
  
  //   // step1: execute the executor
  //   // step2: declare the resolve function
  //   // step3: declare a then method on the this keyword
  //   // step4: assign the callback to onResolve variable
  
  //   function resolve(param) {
  //     val = param;
  //     fullfilled = true;
  //     if (typeof onResolve === "function") {
       
  //       onResolve(param);
  
  //       called = true;
  //     }
  //   }
  
  //   this.then = function (callback) {
  //     onResolve = callback;
  
  //     if (fullfilled && !called) {
  //       onResolve(val);
  //     }
  
  //     return this;
  //   };
  
  //   executor(resolve);
  // }
  
  // const promise1 = new promisePoly((resolve, reject) => {
  //   console.log("1");
  //   setTimeout(() => resolve("Rohit"), 1000);
  //   console.log("2");
  // });
  
  // promise1.then((res) => console.log("response from promise", res));
  
  
  
  // const promise2 = new promisePoly((resolve) => {
  
  //   resolve('instantly resolved')
  // })
  
  // promise2.then((res) => console.log(res))
  
  
  // o/p: 
  // 1
  // 2
  // instantly resolved
  // response from promise Rohit
  


// example of where to use the promise

// const fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then((response) => {
//           if (!response.ok) {
//             reject(`HTTP error! status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     });
//   };

//   fetchData("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => {
//       console.log("Fetched Data:", data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });



//------------------------------------------------------------------------------------------
// Promis.all

// const promise1 = new Promise((resolve) => resolve(100));
// const promise2 = new Promise((resolve) => resolve(200));
// const promise3 = new Promise((resolve) => resolve(300));

// Promise.all([promise1, promise2, promise3]).then((res) => console.log(res));

// const promises = [promise1, promise2, promise3];

// function PromisePoly(executor) {
//   let val;
//   let onResolve;
//   let fullfilled = false;
//   let called = false;

//   function resolve(param) {
//     val = param;

//     fullfilled = true;

//     if (typeof onResolve === "function") {
//       called = true;

//       onResolve(param);
//     }

// }

//     this.then = function (callback) {
//       onResolve = callback;

//       if (fullfilled && !called) {
//         onResolve(val);

//         called = true;
//       }

//       return this
//     };

//   executor(resolve);
// }


// implementation of promise.all polyfill
// PromisePoly.all = function (promises) {
//     return new PromisePoly((resolve) => {
//       let result = [];
//       let fullfilledPromise = [];
  
//       promises.forEach((promise, index) => {
//         promise.then((val) => {
//           fullfilledPromise.push(true);
//           result[index] = val;
//           console.log('result' , result)
//           console.log('fullfilledPromise' , fullfilledPromise)
    
//           if (fullfilledPromise.length === promises.length) return resolve(result);
//         });
     
//       });
//     });
//   };
  
//   PromisePoly.all([promise1 , promise2 , promise3]).then((res) => console.log('polyfill res' , res))



//------------------------------------------------------------------------------------------
// LRU cache using map
class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.map = new Map(); // create a map and capacity
    }
  
    getKey(key) {
      // get the key from the cache
  
      if (!this.map.get(key)) return -1;
  
      const val = this.map.get(key);
  
      // delete the key value , since it will be added to the map in the
      // end
  
      this.map.delete(key);
  
      this.map.set(key, val); // set as the recently used key
  
      return val;
    }
  
    putKey(key, value) {
      // 1. already there , just update they key and move it to the last
      // 2. if not there just add the key value pair in the map
  
  
      this.map.delete(key);
      this.map.set(key , value);
  
      // check if there is an overflow condition after adding 
      // and remove the least recently used from the starting
  
      if(this.map.size > this.capacity){
  
          // get the the list of the iterators in the map
  
          const itr = this.map.keys();
          const firstItr = itr.next().value;
          this.map.delete(firstItr)
  
      }
  
    }
  }
  const  lRUCache = new LRUCache(2);
  console.log(lRUCache.putKey(1, 1)); // cache is {1=1}
  console.log(lRUCache.putKey(2, 2)); // cache is {1=1, 2=2}
  console.log(lRUCache.getKey(1));    // return 1
  console.log(lRUCache.putKey(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
  console.log(lRUCache.getKey(2));    // returns -1 (not found)
  console.log(lRUCache.putKey(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
  console.log(lRUCache.getKey(1));    // return -1 (not found)
  console.log(lRUCache.getKey(3));    // return 3
  console.log(lRUCache.getKey(4));    // return 4