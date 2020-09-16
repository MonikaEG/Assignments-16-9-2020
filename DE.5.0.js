'use strict';


let placesToVisit = ['Jackson', 'Los Angeles', 'New York City', 'Santa Fe', 'Seattle', 'Wyoming'];

let first = placesToVisit[0] //Jackson

let last = placesToVisit[placesToVisit.length -1] //Wyoming


//Using for loop to loop through array.
var i;
for (i = 0; i < placesToVisit.length; i++) {
    document.write(placesToVisit + "<br>")
    console.log(placesToVisit + "<br>") //Lines up the cities/array in the console on a single line.
}

//Alternative loop to assign number values to each city.
placesToVisit.forEach(function(item, index, array) {
    console.log(item, index)
})


//Remove the first 2 cities from the array using the splice() function.
let pos = placesToVisit.indexOf('Jackson') //Indicates starting position of the array.

let removedItems = placesToVisit.splice(pos, 2) //2 defines how many items are removed from the starting position.

console.log(removedItems) //Writes the removed items in the console.

console.log(placesToVisit) //Writes the remaining cities in the console.
