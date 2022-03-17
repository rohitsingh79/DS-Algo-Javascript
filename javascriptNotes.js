
// arrow function takes the this keyword lexically
//normal function takes the this keyword with which it is bind to

// let person = {
//     name:"rohit",
//     displayName:function(){
//         console.log(this.name) // rohit

//         // setTimeout(function(){
//         //     console.log(this.name) // prints the window object with normal function keyword
//         // },1000)

//          setTimeout(()=>{
//             console.log(this.name) // prints the name 'rohit'as the arrow function takes the lexial env
//         },1000)

//     }
// }

// let person1 = {
//     name:'Rohit',
//     displayName:function(){
//         console.log('hello')
//         console.log(this.name) // this will print the window object
//     }
// }

// person1.displayName();

// when not to use arrow function
// cannot use arrow funtion with the new keyword

// function person () {
// }

// console.log(new person()) // o/p person object with constructor

// let person = ()=> {
// }

// console.log(new person()) // error person is not a constrcutor

 //************************************************************************************************************

 // destructuring array and obj using esg javascript

//  const users = [
//      ['Dipesh' , 'Malvia'],
//      ['Rohit','Singh'],
//      ['Sahil','Kakkar']
//  ]

//  const newArray = users.map(([firstname,lastname],index)=>{
//      return {firstname , lastname} // object literal of es6 , if the object and the value name are same , we can keep only one value
//  });

//  console.log(newArray);

 // destructuring arrays

//  const obj = {
//      name:'rohit',
//      location:['singapore','india', 'italy']
//  }

//  const {location:[,, loc]} = obj; // referencing the location as lco;
//  console.log(loc);

//************************************************************************************************************
// call back , call back hell and to call back is overcome by the async await and promises

// call back function
// call back function are synchronous in nature and not async
// function asyncFn(cb){
//     cb();
// }

// asyncFn(()=>{
//     console.log('Iam a call back function')
// })

//promises
// const promise = new Promise((resolve , reject)=>{
//     throw "err";
// if(false){
//     const person = {name:'Dipesh'}
//     resolve(person)
// }
// else{
//     const err = {errCode:'1001'}
//     reject(err)
// }
// })

// // resolve the returned promise
// promise
// .then(  
// (val)=>console.log(val),
// )
// .catch((err)=>console.log(err))
// .finally(()=>console.log('clean up'))


// call functions are synchronous in nature 
// while the promises are asynchronous in nature

// function asyncFn(){
//     return Promise.resolve();
// }

// asyncFn().then(()=> console.log(firstName));
// const firstName = 'Rohit';

// chaining of promises

// const promise = new Promise((resolve , reject)=>{
// resolve('Iam done resolving')
// })

// promise.then((val)=>{
// console.log(val);
// return "done1"
// })
// .then((val1)=>{
// console.log(val1)
// return "done2"
// }).then((val2)=>{
//     console.log(val2)
// })

console.log(null==undefined);
console.log(null===undefined);

console.log(Boolean('false')===Boolean(false))
