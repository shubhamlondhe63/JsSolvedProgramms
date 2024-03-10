// Guess the output with object and this keyword

var myObject = {
    foo : "bar",
    func : function(){
        var self = this;
        console.log("outer function :" + this.foo);
        console.log("outer function :" + self.foo);
        (function (){
            console.log("inner function : " + this.foo);
            console.log("inner function :" + self.foo);
        } ());
    }
}

myObject.func();