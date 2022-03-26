//Notes for javascript
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

// console.log(null==undefined);
// console.log(null===undefined);

// console.log(Boolean('false')===Boolean(false))


// Selecting elmennts from the dom
// document.getElementById('section-1');
// document.getElementsByClassName('class');
// document.querySelector('.head');

// capturing and bubbling phase
// the click method goes from the top to the element that has been clicked in the capturing phase
// and then in the bubbling phase it bubbles back to the the tops

// if we attach the event listener to the child , the event is propogated to the parent div

// call , apply and bind method
// var person = {
//     name:'rohit',
//     hello:function(thing){
//         console.log(this.name + "says hello "+ thing)
//     }
// }

// var obj1 = {
//     name:'Singh'
// }
// person.hello('World');

// call method
// person.hello.call(obj1, 'World')

// apply method
// just adding an array difference
// person.hello.apply(obj1, ['Wolrd'])

//bind method
// it just returns a new function
// var funcCall = person.hello.bind(obj1);

// funcCall('World')

// interview question asked for delay
// function showText(text){
// return new Promise((resolve , reject) => {
//     setTimeout(()=>{
//         resolve(text);
//     },1000)
// })
// }

// Promise.all([showText('hello'), Promise.resolve('world')]).then((res)=>{
//     console.log('response is ' , res);
// })


// temporal dead zone ,
// where the variable let and const are present  in the scope , but they are still not declared


// Array.isArray(['1','2','3'])

// arguments applied to a function
//function func1(a, b, c) {
//console.log(...arguments);
// expected output: 1


//************************************************************************************************************
// infinite currying
function add(a){
    console.log('add called ', a)
return function(b){
if(b){
    return add(a+b);
}
else{
    return a;
}
}
}

console.log(add(5)(6)(9)());