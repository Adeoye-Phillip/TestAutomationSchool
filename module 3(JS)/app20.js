// ARRAY METHOD: UNSHIFT(), SHIFT(), SLICE(), and SPLICE()
// UNSHIFT()
// Used to add element to the beginning of an array, takes on an argument which is the element to be added.
// SCENARIO: We have an array, we used Unshift() to add elements to the beginning of the array
const notEmpty = ['First Element', 'Second Element', 477, true]
notEmpty.unshift('Pre-Element', 'Post-Element')
console.log(notEmpty)




// SHIFT()
// Used to remove the first element in the beginning of an array, does not take on any argument.
// SCENARIO: We have an array, we used shift() to remove the first element in the beginning of the array
const notEmpty0 = ['First Element', 'Second Element', 477, true]
notEmpty0.shift()
notEmpty0.shift()  // If we do shift() again, it will keep removing the first element in the aray until the array is empty
console.log(notEmpty0)



// SLICE()
// Used to remove any number of elements in an array, it takes on two arguments, the first represents the start index, the second represents the end index.
const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
console.log(months.slice(2,6)) // The slice method will return the removed values




// SPLICE() to remove elements from an array
// SCENARIO: We have an array of months1, we used Splice() to remove a number of elements from the array
const months1 = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
// months1.splice(3,9) // The start index, and the number of elements to be removed
// console.log(months1) // When you log the months1, the modified array will be displayed
console.log(months1.splice(3,9)) // When we log the method itself, it will return an array of all the months that was removed




// SPLICE() to add elements to an array
// SCENARIO: We have an array of months1, we used Splice() to add elemnts to the array
const monthsnew = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
console.log(monthsnew, monthsnew.splice(4,3 , 'My custom month')) // monthsnew will log the modified array, while monthsnew.splice will log an array with only the removed value