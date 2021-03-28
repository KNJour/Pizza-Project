var randomToppings = [];
var randomCrust = Math.floor(Math.random() * 3);
var randomCheese = [];
var randomSauce = Math.floor(Math.random() * 3);

if (randomSauce == 0) {
    randomSauce = "Traditional";
} else if (randomSauce == 1) { 
    randomSauce = "extra sauce" }
    else { randomSauce = "BBQ Sauce"
}

if (randomCrust == 0) {
    var randomCrust = "Hand Tossed";
} else if (randomCrust == 1) { 
    var randomCrust = "Deep Dish" }
    else { var randomCrust = "Thin Crust"}

    console.log(randomCrust + " " + randomSauce)

    for (var i = 0; i < 4; i++) {
        randomCheese.push(Math.floor(Math.random() * 3))
    }

    for (var g = 0; g < 4; g++) {
        if (randomCheese[g] == 0) {
            randomCheese[g] = "Mozzarella";
        }
        else if (randomCheese[g] == 1) {
            randomCheese[g] ="Cheddar";
        }
        else if (randomCheese[g] == 2) {
                randomCheese[g] = "Provolone";
    }
        else { randomCheese.pop(randomCheese[g])} 
// start of toppings
        var randomToppings = [];
        for (var i = 0; i < 4; i++) {
            randomToppings.push(Math.floor(Math.random() * 9))
        }
    
        for (var x = 0; x < 9; x++) {
            if (randomToppings[x] == 0) {
                randomToppings[x] = "Pepperoni";
            }
            else if (randomToppings[x] == 1) {
                randomToppings[x] ="Sausage";
            }
            else if (randomToppings[x] == 2) {
                    randomToppings[x] = "Bell Peppers";
            }
            else if (randomToppings[x] == 3) {
                    randomToppings[x] = "Spinach";
            }
            else if (randomToppings[x] == 4) {
                    randomToppings[x] = "Pinneapple";
            }
            else if (randomToppings[x] == 5) {
                    randomToppings[x] = "Bacon";
            }
            else if (randomToppings[x] == 6) {
                    randomToppings[x] = "Onions";
            }
            else if (randomToppings[x] == 7) {
                    randomToppings[x] = "Mushrooms";
            }
            else { randomToppings.pop(randomToppings[x])} 

            var random = {
                crust: randomCrust,
                sauce: randomSauce,
                cheese: [randomCheese],
                toppings: [randomToppings]
            };