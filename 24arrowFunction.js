// Arrow function 

// simple function
console.log('-------simple function----');
const sayHello = function (name){
    return "Hey there, " + name + "!"
}

console.log(sayHello('Dipesh'));


// Arrow function

console.log('----------------Arrow Function----------');

const Hello = (name) => {
     return `hey there ${name} !`
}

console.log(Hello('Urvi'));

//todo trello app
console.log('---------------ToDoApp------------');


const todos = [{
    title: 'Buy Bread',
    isDone: true,
},{
    title: 'Go to Gym',
    isDone: true,
},{
    title: 'Record videos',
    isDone: false,
}]

const thingsDone = todos.filter((todo) => {
        return todo.isDone === true
})

console.log(thingsDone);