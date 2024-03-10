// Complex Data Structure

// The properties of an Object can be an array
// Each of the element of an array can be an object

const person = {
    name: 'Nick',
    age: 24,
    sibblings: [
        {
            name: 'Richard',
            age: 20
        },
        {
            name: 'Ken',
            age: 17
        },
        {
            name: 'Jane',
            age: 27
        }
    ], // Each of the element of an array can be an object
    addSibbling: function(name){
        person.sibblings.push(name)
    }
}
person.addSibbling({
    name: 'Henry',
    age: 0
}) // This is used to push Henry to the list of sibblings as an object
person.hairColor = 'black'  // This is used to dynamically add property to the element
console.log(person)
console.log(person.sibblings[1].age) // This is used to log the specific age of Ken from the list of siblings