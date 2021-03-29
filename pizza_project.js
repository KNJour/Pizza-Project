function randomPizza() {
    var randomCrust = Math.floor(Math.random() * 3);
    var randomSauce = Math.floor(Math.random() * 3);

    if (randomSauce == 0) {
        randomSauce = "Traditional";
    } else if (randomSauce == 1) { 
        randomSauce = "extra sauce" }
        else { randomSauce = "BBQ Sauce"
    }

    if (randomCrust == 0) {
         randomCrust = "Hand Tossed";
    } else if (randomCrust == 1) { 
        randomCrust = "Deep Dish" }
        else { randomCrust = "Thin Crust"}
    
    // start of cheese
    var randomCheeses = []
    var cheeses = [
        "Mozzarella",
        "Cheddar",
        "Fontina",
        "Parmasan",
        "Feta",
    ];
    
    for (var i = 0; i < cheeses.length; i++) {
        var temp = Math.floor(Math.random() * 5);
        if ( temp == 0 ) {
            randomCheeses.push(cheeses[i]);
        }
    }
    // start of toppings
    var randomToppings = []
    var toppings = [
        "Pepperoni",
        "Mushrooms",
        "Sausage",
        "Ham",
        "Bacon",
        "Chicken",
        "Spinach",
        "Green Peppers",
        "Banana",
        "Garbage, from the trash",
        "Onions",
        "Alligator",
    ];
    
    for (var i = 0; i < toppings.length; i++) {
        var temp = Math.floor(Math.random() * 5);
        if ( temp == 0 ) {
            randomToppings.push(toppings[i])
        }
    }
                var random = {
                    crustType: randomCrust,
                    sauceType: randomSauce,
                    cheeses: [randomCheeses],
                    toppings: [randomToppings]
                };
        return random;
    
            }
    var mysteryPizza = randomPizza();
    console.log(mysteryPizza)
    function pizzaOven(crustType, sauceType, cheeses, toppings) {
        var pizza = {
        crust: crustType,
        sauce: sauceType,
        cheese: [cheeses],
        toppings: [toppings]
        };
        return pizza;
    }
    var myPizza = pizzaOven("deep-dish", "traditional", ["Mozzarella"], ["Pepperoni", "Sausage"])
    console.log(myPizza);
