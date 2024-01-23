// This is my new file , in which i will code


const arrowfunction = () =>{
    console.log("This is arrow function");
}

arrowfunction();

const obj1 = {
    firstname : "Shubham", 
    lastName : "Londhe",
    fullName : function (){
        console.log("The fullName is " + this.firstname +" " + this.lastName);
    }
}

obj1.fullName();