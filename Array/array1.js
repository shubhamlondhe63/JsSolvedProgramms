// Basic declaration of an array

const myArray = [1,2,3,4,5,6]
console.log(myArray);

// Other way to declare an array 

const newArray = new Array(1,2,5,8,4);
console.log(newArray);

// Methods of an Array 

newArray.push("Shubham");   // push method add new element at the end.
console.log(newArray);

newArray.pop();         // pop method remove last element from array.
console.log(newArray)


newArray.unshift(24, 14);  // add element at start of the array , but it moves to all the elements 
console.log("unshift ", newArray);


// Removing the first element from the array using shift()
const removedElement = newArray.shift();  // it will return an element which is removed
console.log("Removed element: ", removedElement);
console.log("After shift: ", newArray);




