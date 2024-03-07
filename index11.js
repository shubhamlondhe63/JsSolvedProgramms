// Find Names if its contains given char inside name.

let str = "shubham pritam gargi sagar ";
let currentStr = "";
let resultString = "";

function findStrContainsChar(Str) {
  for (let i = 0; i < Str.length; i++) {
    if (Str[i] === " " || i === Str.length - 1) {
      if (checkCharInStr(currentStr, "s")) {
        resultString += currentStr + " ";
      }
      currentStr = "";
    } else {
      currentStr = currentStr + Str[i];
    }
  }

  function checkCharInStr(name, char) {
    for (let i = 0; i < name.length; i++) {
      if (name[i] === char) {
        return true;
      }
    }
    return false;
  }

  return resultString.trim();
}

console.log(findStrContainsChar(str));
