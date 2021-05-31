
let userEmail = 'abc123ac'
let password = '123'

// console.log(password.length);
// console.log(userEmail.toLowerCase());

let userChecker = function(myString){
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true
    } else{
        return false
    }
}

let passChecker = function(pass){
    if ((pass.includes(1234)) &&(pass.length > 8)) {
        return true
    } else{
        return false
    }
} 

console.log(userChecker(userEmail));
console.log(passChecker(password));