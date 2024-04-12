class Pizza {
    constructor(diameter, type) {
        this.diameter = diameter;
        this.type = type;
    }

    bake() {
        console.log("Your pizza will be ready in 5 minutes");
    }
}

//create a new Pizza instance
let myPepperoniPizza = new Pizza(14, 'pepperoni');

console.log("diameter:", myPepperoniPizza.diameter);
console.log("type:", myPepperoniPizza.type);
// calling the bake method within our Pizza instance
myPepperoniPizza.bake();

// Setting the diamter to 16
myPepperoniPizza.diameter = 16;
console.log(myPepperoniPizza.diameter); // diameter is now updated to the value of 16

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    // C = 2 * PI * radius
    getCircumference() {
        let circumference = 2 * Math.PI * this.radius;
        return parseFloat(circumference.toFixed(2))
    }

    // A = PI * r^2
    getArea() {
        let area = Math.PI * Math.pow(this.radius, 2);
        return area;
    }
}

let myCircle = new Circle(7);
console.log("circumference:", myCircle.getCircumference());
console.log("area:", myCircle.getArea())

class MyClassName {
    constructor(parameter) {
        // Validating
        // If parameter is not 'correct', throw an error message
        if (parameter !== "correct") {
            throw "Your parameter doesnt equal something I want! Boo hiss!"
        }
        this.parameter = parameter;
    }
}

const myClassName = new MyClassName("correct"); //Change from 'incorrect' to 'correct'. Vice versa.
console.log(myClassName.parameter);