const arr = [1, 2, 4, 5, 2, 4, 7, 8, 8, 3, 6];

const newArray = arr.filter((element, index, arr) => {
  return arr.indexOf(element) !== index;
});

console.log(newArray);
