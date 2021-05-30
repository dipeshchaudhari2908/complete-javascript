if (true) {
    console.log('I am still if block')
} else {
    console.log('I am outside of if blocks')
}

var whoIshere = 'abc'

if (whoIshere === 'user') {
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
} else if (whoIshere === 'teacher') {
    console.log('Greeting message for TEACHER')
    console.log('Allow access to his all courses')
} else {
 console.log('MESSAGE: please verify your email')   
}