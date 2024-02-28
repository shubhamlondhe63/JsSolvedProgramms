// make copy of Object using spread operatot and Change the value so that the Reference object will not change

const user1 = {
    name : "Shubham",
    lastName : "Londhe",
    fullName : function (){
        this.name + " " + this.lastName ;
    } 
}


//const user2 = user1 ;

const user2 = {...user1} ;  // it will create new object with same property and values

user2.name = "Shubh"; 

console.log("User 1 is :" , user1 );
console.log("User 2 is :" , user2 );