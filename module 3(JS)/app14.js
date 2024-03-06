// Global Scope: Variables that can be accessed from anywhere in our code
const myName = "Ben";   // This varibale was created outside the function: it can be accessed anywhere in this code, that makes it global scope.

function greet() {
    console.log("Good morning, " + myName);
}
greet();


// We can have a function inside another function
function greet1() {
    console.log("Good morning, " + myName);
    function innerGreet() {
        console.log("Good evening, " + myName)
    }

    innerGreet();
}

greet1();



// Function Scope: Variables that are created with a function
function greet10() {
    const myName10 = "Ben";   // This variable is created within the function and cannot be accessed outside this function, that makes it a function scope
    console.log("Good morning, " + myName10);
    function innerGreet10() {
        console.log("Good evening, " + myName10)
    }

    innerGreet10();
}

greet10();