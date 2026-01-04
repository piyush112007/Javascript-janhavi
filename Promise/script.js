//Asynchronous Behaviour of Javascript

console.log("HEllo 1st Task")
console.log("HEllo 2nd Task")
console.log("HEllo 3rd Task")
setTimeout(() => {
    console.log("Hello 4th Task")
},5000);
setTimeout(() => {
    console.log("Hello 5th Task")
},2000);
console.log("HEllo 6th Task")

// Basic Syntax of a promise

// This is variable method 
// const value = new Promise((resolve, reject) => {
//     let sucesss = 1;
//     if (sucesss){
//         resolve("Sucessfully Value obtained")
//     }
//     else{
//         reject("Value was not found")
//     }
// })

// value.then(result =>
//     console.log(result))
// .catch(result =>
//     console.log(result))
// .finally((v)=>{console.log("Execution")})

// #HACK: This is function Method
// function promise() {
//     return new Promise((resolve, reject) => {
//     let sucesss = 1;
//     if (sucesss){
//         resolve("Sucessfully Value obtained")
//     }
//     else{
//         reject("Value was not found")
//     }
// })}
// let value = promise()

// value.then(result =>
//     console.log(result))
// .catch(result =>
//     console.log(result))
// .finally(result =>console.log("Execution complete"))

// This is Timeout promise

// function promise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(4599)
//         },2000)
//     })
// }
// let value = promise()
// console.log(value)