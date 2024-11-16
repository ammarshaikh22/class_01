//CallBack Hell and Promises With Making Tea Example
const makeTea = (time, message, cb) => {
    setTimeout(() => {
        console.log(message);
        cb();
    });
};
makeTea(1000, "First add Milk", () => {
    makeTea(2000, "Second add Tea leave", () => {
        makeTea(1000, "Third add sugar", () => {
            makeTea(3000, "Tea is Done", () => {
            });
        });
    });
});
export {};
// makeTea(1000, "First add Milk")
// makeTea(2000, "Second add Tea leave")
// makeTea(1000, "Third add sugar")
// makeTea(3000, "Tea is Done")
