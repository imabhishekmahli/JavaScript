let jeansPrice = 2499;
let bagPrice = 15599;

let totalAmount = Math.round((jeansPrice - (41/100)*jeansPrice) - 29  + (bagPrice - (10/100)*jeansPrice) - 272);
console.log(totalAmount)