const myObject = {
    name : "Shubham",
    age : 28
}

console.log("myObject is  : ", myObject.name);

// now we will use for in loop

for (const key in myObject ) {

    // when we use for in loop with object it gives key of object.
    console.log(`key is ${key} and value is ${myObject[key]}`);
}

// Output for above code will be 

// myObject is  :  Shubham
// key is name and value is Shubham
// key is age and value is 28