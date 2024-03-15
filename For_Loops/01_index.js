// for loop


const myArray = ['shubham', 'hello', 'world']
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}



for (let i = 1; i< 10 ; i++){
    console.log("Outer loop i value is :",  i);
    for (let j = 1; j <=10; j++) {
           console.log(i*j);
    }   
}

