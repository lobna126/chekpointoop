 class CoffeeShop {
    constructor(name, menu) {
        this.name = name;
        this.menu = menu; 
    }

    serve = (customerName, drink) => {
      
        if (this.menu.includes(drink)) {
            return `Welcome to ${this.name}, ${customerName}! Here’s your ${drink}. Enjoy!`;
        } else {
            return `Sorry, ${customerName}, we don't serve ${drink}!`;
        }
    }

    showMenu() {
        return `Our menu includes: ${this.menu.join(', ')}.`;
    }

    addDrink(drink) {
        this.menu.push(drink); 
    }
}


const myCoffeeShop = new CoffeeShop("Java Jive", ["Espresso", "Latte", "Mocha"]);

console.log(myCoffeeShop.serve("Alice", "Latte")); 
console.log(myCoffeeShop.serve("Bob", "Cappuccino")); 
console.log(myCoffeeShop.showMenu()); 

myCoffeeShop.addDrink("Cappuccino"); 
console.log(myCoffeeShop.showMenu());

