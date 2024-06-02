// Q1. At restaurant you eat something display final bill amount 

let dal = prompt("Enter dal quantities :")
let roti = prompt("enter roti quantities :")
let iceCream = prompt("enter icecream quantities :")

let billAmount = (dal*100) + (roti*10) + (iceCream*30)
alert(billAmount)


// Q2. Calculate the amount with 18% GST 

let dal = prompt("Enter dal quantities :")
let roti = prompt("enter roti quantities :")
let iceCream = prompt("enter icecream quantities :")

let billAmount = (dal*100) + (roti*10) + (iceCream*30) + (18/100)*(dal*100) + (roti*10) + (iceCream*30)
alert(billAmount)

