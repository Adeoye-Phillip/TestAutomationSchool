// Task
// Add a toggleReadingStatus method to your books objects. 
// The method should update the value of the reading property of the book object.
// Remember to log the reading property to the console to confirm the current status.

const books = {
    title: 'Test Automation Simplified', 
    description: 'It simplifies test automation for all manual testers', 
    numberOfPages: '1000', 
    author: 'Adeoye Phillip', 
    reading: true,
    toggleReadingStatus: function(){
        if(books.reading === true){
            books.reading = false
        } else {
            books.reading = true
        }
    }
}

books.toggleReadingStatus()
console.log(books.reading)