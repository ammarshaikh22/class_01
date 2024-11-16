//promises is a object
//pending
//fullField
//rejected
// const makeTea = (time: number, message: string): Promise<unknown> => {
//     let a = new Promise((res:any, rej) => {
//         setTimeout(() => {
//            rej("rejected")
//         }, time);
//     });
//     return a;
// };

// makeTea(1000, "First add Milk")
//     .then(() => makeTea(2000, "Second add tea leave"))
//     .then(() => makeTea(1000, "Third add sugar"))
//     .then(() => makeTea(3000, "Tea is ready"))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("i am always run"))


