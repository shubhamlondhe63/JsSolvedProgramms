// Given a string, Reverse each string of the sentence 

// we want reverse the each word of string  if we have string "Hello Shubham How are you?"

let Str = "Hello Shubham How are you?";

var splitStr = Str.split(" ").map( (word) =>{
        return word.split('').reverse().join('')
})

Str = splitStr.join(" ");
console.log(Str);