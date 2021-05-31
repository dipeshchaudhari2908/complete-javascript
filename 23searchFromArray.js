//  trello todo app version 4

const myTodos = ['Buy Bread','Go to Gym','Record videos']

console.log(myTodos.indexOf('Buy Bread'));


const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
},{
    title: 'Go to Gym',
    isDone: false,
},{
    title: 'Record videos',
    isDone: true,
}]

const index = newTodos.findIndex(function(todo, index){
    return todo.title === 'Go to Gym'
})

console.log(index);


console.log('---------------------------------------------');

//Method 1
const findTodo = function(myTodos, title){
    const index = myTodos.findIndex(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return myTodos[index]
}

let printMe = findTodo(newTodos, 'Go To gym')
console.log(printMe);

