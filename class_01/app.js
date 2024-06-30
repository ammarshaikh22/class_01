"use strict";
//functions
//default para
//optional para
//rest para
const carMake = (manufacture, model, ...moreProperties) => {
    let car = {
        manufacture: manufacture,
        model: model
    };
    moreProperties.map(([key, value]) => {
        car[key] = value;
    });
    return car;
};
console.log(carMake("Honda", 2024, ["price", 1200000], ["color", "black"]));
