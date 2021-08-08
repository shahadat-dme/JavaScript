// Area Calculating Mixin
let areaCalculator = {
    calculatorArea() {
        console.log(this.length * this.breadth); 
    }
}; 

// Usage: 
class Rectangle {
    constructor(length, breadth) {
        this.length = length; 
        this.breadth = breadth; 
    } 
}

// copy the methods
Object.assign(Rectangle.prototype, areaCalculator); 

// now Rectangle class can use calculatorArea
new Rectangle(5, 6).calculatorArea(); // 30
