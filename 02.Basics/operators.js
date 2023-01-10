// var num1 = 69;
// var num2 = 69;

// console.log(num1 + num2)


// D = (L - S)/L * 100

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("Discount Percentage is :",discountPercent)

displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + "% off")