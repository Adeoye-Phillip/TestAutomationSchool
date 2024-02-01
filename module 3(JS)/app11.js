// WHILE LOOP
let star = 1 // Starting Point
while (star <= 10) { // Condition
    if (star === 1) {
        console.log(star +' star')
    } else {
        console.log(star +' stars')
    }
    star = star + 1 // Increment
}




// FOR LOOP
for (let star = 0; star <= 20; star = star + 1) {       // In For Loops: You will put the start, condition and increment on one line, they will be seperated by semi-colon.
    if (star===0 || star===1) {
        console.log(star + ' star')
    } else {
        console.log(star + ' stars')
    }
   
}

// For Loop
for (let number = 1; number <=100; number++) {
    if (number % 2 === 0) {
        console.log(number + ' is an even number✅')
    } else {
        console.log(number + ' is an odd number❌')
    }
}