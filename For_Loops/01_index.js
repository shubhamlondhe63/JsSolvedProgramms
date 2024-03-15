// for loop

const myArray = ["shubham", "hello", "world"];
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
//   console.log(element);
}

for (let i = 1; i < 10; i++) {
//   console.log("Outer loop i value is :", i);
  for (let j = 1; j <= 10; j++) {
    // console.log(i * j);
  }
}

// with object we cannot iterate througth the

const myObject = {
  firstName: "Shubham",
  LastName: "Londhe",
  age: 25,
};

const keys = Object.keys(myObject);  // this will return an array of keys 
console.log("keys are : ", keys);

for (let i = 0; i < keys.length; i++) {             // we are iterating to array here
  const key = keys[i];
//   console.log(key + ": " + myObject[key]);
}


// lets understand For Of loop 

// for (const key of myObject) {
//   console.log( key );         // for of loop does not work wih objects 
// }



