// Accessing Elements Of An Array

const myWeekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const numArray = [90, 60, 50]
const emptyArray = []

const thirdElement = myWeekArray[4] // This is used to access an element in the myWeekArray array
console.log(thirdElement) // When logged, this should display the index 4 element in myWeekArray

// myWeekArray[4] = 45 //This is used to alter the value of an element in an array (in this case, index 4 in myWeekArray)
// console.log(myWeekArray) // When logged, this should display value newly assigned to the index 4 element in myWeekArray, which is now 45


// This can be used to assign elemnts to an empty array
emptyArray [0] = 'First Element'
emptyArray [1] = 'Second Element'
emptyArray [3] = 'Fourth Element'
console.log(emptyArray) // When logged, the newly assigned values will be displayed and the space for index 2 will be empty
// console.log(myWeekArray[6]) // This can be used to log a specific element in the array, using the index number