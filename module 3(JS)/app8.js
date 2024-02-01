// Logical Operators will always return True or False

// AND Operator --> &&
const userName = 'Victory'
const age = 12
const logic = age === 12 && userName === 'Victory' // And operator will evaluate to True if the 2 expressions evaluate to True, It will otherwise evaluate to False if any of the expressions evaluate to False

console.log(logic)


// OR Operator --> ||
const logic1 = age === 12 || userName === 'Success' // OR operator only need one of the expressions to be True to return True, It only returns False when all expressions involve are False
console.log(logic1)


// NOT Operator --> ! (Used to trigger the boolean value)
const logic2 = age === 24 || userName === 'Success'
console.log(!logic2) //When you put NOT in front of True it becomes False, and when you put NOT in front of False it becomes True