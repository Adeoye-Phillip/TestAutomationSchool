// CONDITIONAL STATEMENT: IF Statement
const age = 23

if(age>=18) {
    console.log('You are Eligible To Vote🎉') // If statement does not take into account what should happen if the specified condition evaluates to True, it is only interested in what happens if the specified condition evaluates to True.
}



// CONDITIONAL STATEMENT: IF...ELSE Statement
const age1 = 15

if(age1>=18) {
    console.log('You are Eligible To Vote🎉')
} else {                                        
    console.log('You Are Too Young To Vote😒')
}
// IF...ELSE Statement is interested in what happens when the specified conditions evaluate True and False



// IF ...ELSE ...IF Statement
const age2 = 78

if(age2 >= 18 && age2 <= 65) {
    console.log('You are Eligible To Vote🎉')
} else if(age2 > 65) {
    console.log('You are too old to Vote👴')
} else {
    console.log('You are too young to Vote👶')
}
// In a scenario like this, the first code that meets the condition specified will be executed.