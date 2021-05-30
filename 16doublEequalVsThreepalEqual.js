// == vs ===

console.log( 2 == 2);
console.log( 2 == 2.0);
console.log( 2 === 2.0);

console.log('-----------------------');
// in string its same
let myVar = ''
let myVarTwo = ''
console.log(myVar == myVarTwo);
console.log(myVar === myVarTwo);

console.log('--------------------------------');
// in object{} its different

let myObject = {}
let myObjectTwo = {}
console.log(myObject == myObjectTwo);
console.log(myObject === myObjectTwo);

console.log('---------------------------------');

