// ARRAY METHOD: PUSH() and POP()
// PUSH()
// Used to add element to the end of an array, takes on an argument which is the element to be added.
// SCENARIO: We have an empty array, we used Push() to add elements to the empty array
const emptyArray = []
emptyArray.push('First Element', 'Second Element', 477, true) //All sort of data type can be added
emptyArray.push('Pushed Element')

console.log(emptyArray)


// PUSH()
// SCENARIO: The array is not empty, we used Push() to add element to the end of the array
const notEmpty = ['First Element', 'Second Element', 477, true]
notEmpty.push('Pushed Element')

console.log(notEmpty)





// POP()
// Used to remove the last element of an array, it does not take any argument
// SCENARIO: We have an array, we used POP() to remove the last element in the array
const notEmpty2 = ['First Element', 'Second Element', 477, true]
notEmpty2.pop()
notEmpty2.pop() // If we do POP() again, it will keep emptying the last element in the aray until the array is empty
console.log(notEmpty2)