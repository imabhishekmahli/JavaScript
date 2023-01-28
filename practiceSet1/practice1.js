// Q1. create a variable to type string and try to add a number to it
let a = 'abhishek'
let b = 5
console.log(a+" ",b)

//Q2. use typeof operator to find the datatype of string in the last question>
console.log(typeof(a+b))

//Q3. create a const object in JS. can you change it to hold a number later?
const x = {
    name : 'abhishek',
    age : 25
}
//x = 35
x['friend'] = 'shubham'
console.log(x)