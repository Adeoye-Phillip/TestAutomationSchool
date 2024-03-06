// Functions: Return Value
// A function can only return a single value

function addNumbers1(firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber;
    return sum;
}
console.log(addNumbers1(4, 5));




// Functions: Return Value
// How to return multiple value in Functions (by using arrays)
function addNumbers2(firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber;
    const product = firstNumber * secondNumber;
    return [sum, product];
}
console.log(addNumbers2(4, 5));



// Functions: Return Value
//  Convert Dollar to Naira
function converter(dollar) {
    // convert Dollar to Naira and return the equivalent Dollar value
    // Conversion rate: $1 = #410
    const naira = dollar * 410;
    return naira;
}
const nairaValue =  converter(250)
console.log(nairaValue)