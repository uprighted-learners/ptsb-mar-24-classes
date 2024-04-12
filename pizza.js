/*
    Practice: Validating Your Pizza
*/

class Pizza {
    constructor(topping) {
        if (topping === 'pineapple') {
            throw "Pizza is no place for pineapple"
        }
        this.topping = topping;
    }
}

let pizza = new Pizza("pepperonni");
console.log(pizza.topping);