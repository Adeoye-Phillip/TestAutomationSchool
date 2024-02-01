// Switch Statement

const day = 'Sunday'

// if (day === 'Friday') {
//     console.log('TGIF')
// } else if (day === 'Saturday') {
//     console.log('Yeh! The weekend is here')
// } else if (day === 'Sunday') {
//     console.log('Happy Sunday!')
// } else {
//     console.log('Go to work!')
// }


// Switch Statement
switch(day) {
    case 'Friday':            
        console.log('TGIF')
        break
    case 'Saturday':
        console.log('Yeh! The weekend is here')
        break
    case 'Sunday':
        console.log('Happy Sunday!')
        break
    default:
        console.log('Go to work!')
}  
// This Switch statement is an alternative to IF..Else..If
// Caseis used to represent a scenario, if the condition is satisfied then that case will be logged, otherwise, it will go to the next case
// break is used to stop the code execution when a condition has been satisfied