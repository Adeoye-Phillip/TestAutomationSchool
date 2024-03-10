// JSON

// Activity 1: We want to convert a regular JS file to JSON file using .stringify and convert the JSON output back to a regular JS file using .parse
const myObject = {
    name: 'Vehicle',
    type: 'car',
    color: 'black'
}
const json =JSON.stringify(myObject) // This is used to convert Javascript file to JSON
console.log(json)

console.log(JSON.parse(json)) // This is used to convert the JSON output back to a regular JS file in the console