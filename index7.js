// Working With Object , reasigning value, Inserting new key in Objects


const user1 = {
    name: "Shubham",
    lastName: "Londhe",
    fullName: function() {
        // Use `this` to refer to the properties of the object
        return this.name + " " + this.lastName;
    }
}

const user2 = user1;

user2.name = "Shub";
user2.newKey = "Newkey";

console.log(user1.fullName()); // Output: Shubham Londhe
console.log(user2); // Output: { name: 'Shub', lastName: 'Londhe', fullName: [Function: fullName], newKey: 'Newkey' }




