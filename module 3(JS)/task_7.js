const side1 = 9
const side2 = 6
const side3 = 9

if (side1 === side2 && side2 === side3) {
    console.log('Equilateral Triangle')
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log('Isosceles Triangle')
} else {
    console.log('Scalene Triangle')
}