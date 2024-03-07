// Find Name which has given char at the end of the Name

function ChecklastChar(names , char) {
  let currentName = "";
  let resultArray = [];

  for (i = 0; i < names.length; i++) {
    if (names[i] === " " || i === names.length - 1) {
      if (currentName[currentName.length - 1] === char) {
        resultArray.push(currentName.trim());
      }
      currentName = "";
    } else {
      currentName = currentName + names[i];
    }
  }
  return resultArray;
}

console.log(ChecklastChar("shubham sagar pritam panda", "m"));
