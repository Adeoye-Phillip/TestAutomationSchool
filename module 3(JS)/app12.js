// Creating Function in JavaScript
function MyFunction() {     // function declaration
    console.log("My first function")
}
MyFunction();   // function call


// Function, Parameter, and Argument
function greeting(name) {  // name here is the parameter
    console.log("Good morning, " + name + '!') // This is the function body
}
greeting('Adeoye'); // Adeoye here is the argument (Return value)


// A Function that add two numbers together
function addNumber(firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber;
    console.log(sum);
}
addNumber(30.2, 40.5);