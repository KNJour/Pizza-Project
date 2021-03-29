var toppings = []
var randomToppings = [
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

for (var i = 0; i < randomToppings.length; i++) {
    var temp = Math.floor(Math.random() * 5);
    if ( temp == 0 ) {
        toppings.push(randomToppings[i])
    }
}
console.log(toppings)