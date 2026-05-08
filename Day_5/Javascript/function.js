function heySiri() {
    console.log("Hello Siri");
}

heySiri()

//function with parameters
function add(a,b) {
    console.log(a+b);
}

add(3,2);

//fucntion with return value
function multiply(a,b) {
    return a*b;
}

let result = multiply(2,5)
console.log(result)
//also can write like :-
console.log(multiply(2,5))

//arrow function 
let addition = (a,b) => {
    return a+b;
}
console.log(addition(10,5))

//Arrow function -- shorter version
let additions = (a,b) => a+b;
console.log(additions(10,10))