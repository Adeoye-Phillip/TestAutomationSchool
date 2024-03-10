// Task
// You now have more books in your library. You should manage them all in one place. Any idea how you can achieve that?... Arrays!

// Create a books array. 
// 1. Each element of this array will be a book object. 
// 2. Each book object will have the following properties
// title (string)
// description (string)
// numberOfPages (number)
// authour (string)
// reading (boolean)
// 3. Use a for-loop to loop through the books array and log all books where the reading status is true to the console


// Solution:
const books = [
    {
        title: 'TAS',
        description: 'Test Automation Simplified',
        numberOfPages: 200,
        author: 'Ibironke',
        reading: true
    },
    {
        title: 'LifeGate',
        description: 'Worded to bring life to men',
        numberOfPages: 300,
        author: 'Adeoye Phillip',
        reading: true
    },
    {
        title: 'Just A Random Book',
        description: 'I really dont know',
        numberOfPages: 10,
        author: 'Unknown',
        reading: false
    },
    {
        title: 'The Unbelivable',
        description: 'Faith is believing the unbelivable',
        numberOfPages: 30,
        author: 'Adeoye Phillip',
        reading: true
    },
    {
        title: 'Moving Mountains',
        description: 'Faith is a force that can move mountains',
        numberOfPages: 250,
        author: 'Adeoye Phillip',
        reading: true
    }
]
// Use a for-loop to loop through the books array and log all books where the reading status is true to the console
for (let i = 0; i < books.length; i++) {
    if (books[i].reading) {
        console.log(books[i].title);
    }
}