// how to make Uppercase to first character of word if we have one string ;

const str = "hello i am shubham" ;
const newStr = str.split(" ").map((val) => val);

const newArray = newStr.map((item) => {
    return  item.charAt(0).toUpperCase() + item.slice(1) 
}).join(" ");

console.log( newArray );
