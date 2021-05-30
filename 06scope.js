let IAmGlobal = 'someValue'

if (true) {
     let IAmLocal = 'someMoreValue'
    IAmGlobal = 'superman'
    console.log(IAmGlobal);
    console.log(IAmLocal);
}

console.log(IAmGlobal);
console.log(IAmLocal);
