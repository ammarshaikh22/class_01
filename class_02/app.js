"use strict";
//function overloading
// function overload(a:number, b:number):number
// function overload(a: string, b: string): string
// function overload(a:boolean, b:boolean):boolean
// function overload(a:any, b:any):any {
//     return a + b
// }
// console.log(overload(2,3))
//function callBack
// const callMe = () => {
// }
// callMe()
// setTimeout(() => {
//     console.log("First add milk")
// }, 2000)
// setTimeout(() => {
//     console.log("Tea leave")
// }, 1000)
// setTimeout(() => {
//     console.log("Add sugar")
// }, 2000)
// setTimeout(() => {
//     console.log("Tea ready")
// }, 5000)
//async
const callOther = (callBack) => {
    console.log("I a callOther");
    callBack();
};
const call = () => {
    console.log("I am callback");
};
callOther(call);
