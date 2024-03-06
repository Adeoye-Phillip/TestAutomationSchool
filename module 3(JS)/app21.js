// indexOf: This is used to know the index of a specified element in an array
// If the specified element does not exist in an array, this method will return -1
// If there are multiple occurences of the specified element, this method will return the index of the first occurence of the element

// ACTIVITY 1:
// To Know The Index Of Aug.
const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
console.log(months.indexOf('Aug'))

// ACTIVITY 2:
// When an Element Does Not Exist In An Array (It should return -1)
const months1 = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
console.log(months1.indexOf('Monday'))

// ACTIVITY 3:
// When there are multiple occurences of a specified element (it should return the index of the first occurence of the element)
const months2 = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Feb', 'July', 'Aug', 'Sept']
console.log(months2.indexOf('Feb'))




// lastIndexOf(): This is used to get the index of the last occurence of an element in the array (When there are multiple occurences of a specified element in an array).

// ACTIVITY 1:
// When there are multiple occurences of a specified element (it should return the index of the last occurence of the element)
const months3 = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Feb', 'July', 'Aug', 'Sept']
console.log(months3.lastIndexOf('Feb'))