class Circle {
    constructor(radius) {
        if (radius <= 0) {
            throw 'Radius must be a positive number'
        }
        this.radius = radius
    }

    /*
        STATIC!
        A static property or method is one that we can only use with the class itself, not instances.
    */
    static shape = "Circle"

    /*
        Factory method - a static method within our class that will return an instance of the class.
    */
    static createCircleUsingDiameterInfo(diameter) {
        return new Circle(diameter / 2);
    }

    /*
        Static methods are good for anything that doesn't require any of the instance properties. i.e: this.radius
    */
    static getShape() {
        return "I am a circle"
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

/*
    Factory function - starts the construction process for you
*/
function circleFromDiameter(diameter) {
    let radius = diameter / 2;
    return new Circle(radius); //returns a new instance of Circle
}

// Create an instance of the Circle class called myCircle.
// This instance does NOT have access to our static methods/properties within the Circle class.
let myCircle = new Circle(5);

/*
    For static methods/properties, you need to use the class name and then from there access the method/property
*/
let mySecondCircle = Circle.createCircleUsingDiameterInfo(10);
let shape = Circle.shape;