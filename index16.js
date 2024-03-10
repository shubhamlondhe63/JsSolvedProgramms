// Understanding of Variables in Javascript

// global scope example
let globalVar = "I am global variable";

function testScope (){
    console.log(globalVar);
}

testScope();

// ----------------------------------------------------------

// Functional Scope or local variable scope

function functionalScope () {

    let localVar =  "I am Functional variable"

    console.log(localVar);
}

functionalScope();


// bloch scope variable

if(true){
     let blockVar = "I am block variable";
     console.log(blockVar);
}

// console.log(blockVar); // it will be undefined because variable is declared using let


if (true){
    var blockvariable = "I am variable Using var"
    console.log(blockvariable);  // it is accessable outof the scope because is it declared using var
}

console.log(blockvariable);


// final output for this is 

// I am global variable
// I am Functional variable
// I am block variable
// I am variable Using var
// I am variable Using var