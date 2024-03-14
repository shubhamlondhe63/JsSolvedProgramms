// swapp key and value If you have given an object.

function swapObject(object) {
  const newObject = {};

  for (const key in object) {
    newObject[object[key]] = key;
  }
  return newObject;
}

const myObj = {
  FirstName: "shubham",
  LastName: "Londhe",
  age: 28,
};

const swapped = swapObject(myObj);
console.log(swapped);
