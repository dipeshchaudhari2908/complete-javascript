

const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Record videos')
myTodos.push('Go to Gym')

myTodos.forEach(function(todo, index) {
    console.log(`Your task no. ${index + 1} is: ${todo}`);
})