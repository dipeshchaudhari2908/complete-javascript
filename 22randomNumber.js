
let numOne = 22
let numTwo = 7

result = 22/7

console.log(result);
console.log(result.toFixed(2));
let floatRes = result.toFixed(2);
console.log(Math.floor(floatRes));
console.log(Math.ceil(floatRes));

console.log('-------------Random-----------');

console.log(Math.random() * 10);

console.log('----------------------');

console.log('-----Generate Number----------');
let upper = 25
let lower = 20

let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower

console.log(myRandom);