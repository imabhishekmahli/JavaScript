var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("Discount Percentage is :",discountPercent)

displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + "% off")

var results = listingPrice > sellingPrice

console.log(results)
console.log(typeof results)