let name = function (friend) {
    console.log("My Name is Dipesh");
    console.log(`Hey ${friend} How are you?`);
}

name('John')

console.log('---------------------------------');
let fullNameMaker = function(firstName, lastName) {
    console.log('Welcome to LCO');
    console.log(`Happy to have you, ${firstName} ${lastName}`);
}

fullNameMaker('John','Doe')
console.log('---------------------------------');

let myAdder = function (num1, num2) {
    let added = num1 + num2
    return added
}


console.log('One way call: '+ myAdder(5,3));
let result = myAdder(3,3)
console.log('Second way call: ' + result);