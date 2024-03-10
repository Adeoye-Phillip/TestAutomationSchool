// OBJECT
// They are used to represent entities in our code
// Each element is represented by a 'Key & Value'

// Object literal
// Activity 1: Accessing an Object
const myObject = {name: 'car', color: 'red', price: 25000} // Each "Key Value Pair", is seperated by comma

const door = {
    isOpen: false,
    material: 'Wood',
    height: 8
}
console.log(door.material)
// Another Way To Access An Object
console.log(door['material'])





// METHOD
// When the value of a property is a function, we call it a method.
// Think of Method as a Function we create to be able to manipulate an Object

// ACTIVITY 1: Making a Function the value of a property to make a Method
const door1 = {
    isOpen: false,
    material: 'Wood',
    height: 8,
    toggleOpenAndClose: function(){
        if(door1.isOpen===true) {
            door1.isOpen = false
        } else {
            door1.isOpen = true
        }
    } // Since toggleOpenAndClose has taken a function, we can call it a method.
}
door1.toggleOpenAndClose() // This is used to call the toggleOpenAndClose() to close the door if it was opened, or open the door if it was closed.
console.log(door1.isOpen)


// ACTIVITY 2:
const person = {
    name: 'Nick',
    age: 24,
    sibblings: ['Richards', 'Ken', 'Jane'], // The properties of an Object can be an array
    addSibbling: function(name){
        person.sibblings.push(name)
    }
}
person.addSibbling('Henry') // This is used to add Henry to the sibblings
person.hairColor = 'black'  // This is used to dynamically add property to the element
console.log(person)