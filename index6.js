//  Reverse String without using buit In Function 


let str = "INDIA IS GREAT";

let reverse = '';

for(let i =0 ; i< str.length ; i++) {

 reverse = reverse + str[str.length - i -1];

}

console.log("Reversed String is :", reverse);

