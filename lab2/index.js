/*
    Taylor He
    CS 546
    I pledge my honor that I have abided by the Stevens Honor System. 
        -Taylor He
*/

var geometry = require('./geometry.js');
var utilities = require('./utilities.js');


/* Function to reduce repetitive code (try/catch)
 * eval() takes a string and evaluates it to a command. 
 */
function tryCatchError(command) {
    try{
        console.log(eval(command));
    } catch(error) {
        console.log(error);
    }
}

//////////////////////////////////////
// Test geometry.js. 5 per function //
//////////////////////////////////////
console.log("//////////////////\n geometry.js:\n//////////////////");

tryCatchError("geometry.volumeOfRectangularPrism()");        // Error
tryCatchError("geometry.volumeOfRectangularPrism(1,1,1,2)"); // Error
tryCatchError("geometry.volumeOfRectangularPrism(1,1,NaN)"); // Error
tryCatchError("geometry.volumeOfRectangularPrism(1,1,1)");   // 1
tryCatchError("geometry.volumeOfRectangularPrism(2,2,2)");   // 8
console.log("");
tryCatchError("geometry.surfaceAreaOfRectangularPrism(1,1,0)"); //Error
tryCatchError("geometry.surfaceAreaOfRectangularPrism(1)");     // Error
tryCatchError("geometry.surfaceAreaOfRectangularPrism(1,1,NaN)"); // Error
tryCatchError("geometry.surfaceAreaOfRectangularPrism(null,3,6)"); // Error
tryCatchError("geometry.surfaceAreaOfRectangularPrism(2,2,2)"); // 24
console.log("");
tryCatchError("geometry.volumeOfSphere(1,1,1)");    // Error
tryCatchError("geometry.volumeOfSphere(-1)");       // Error
tryCatchError("geometry.volumeOfSphere(null)");   // Error
tryCatchError("geometry.volumeOfSphere(NaN)");      // Error
tryCatchError("geometry.volumeOfSphere(4)");        // ~268.08
console.log("");
tryCatchError("geometry.surfaceAreaOfSphere(1,1,0)");   // Error
tryCatchError("geometry.surfaceAreaOfSphere(NaN)");     // Error
tryCatchError("geometry.surfaceAreaOfSphere(0)");       // Error
tryCatchError("geometry.surfaceAreaOfSphere(null)");        // Error
tryCatchError("geometry.surfaceAreaOfSphere(4)");       // ~201.06


////////////////////////////////////////
// Test utilities.js. ~5 per function //
////////////////////////////////////////
console.log("\n//////////////////\n utilities.js:\n//////////////////");

tryCatchError('utilities.deepEquality({"name": "T"}, {"name": "T", "age": 20})'); // false
tryCatchError("utilities.deepEquality(3,2)"); // Error
tryCatchError("utilities.deepEquality({},{'none':3})"); // Error
tryCatchError("utilities.deepEquality({'name': 'taylor'}, {'name': 'notTaylor'})"); // false
tryCatchError("utilities.deepEquality({'name': 'taylor'}, {'name': 'taylor'})");    // true
tryCatchError("utilities.deepEquality({'name': null}, {'name': null})");    // true
tryCatchError("utilities.deepEquality({'name': 'taylor', 'nested' : {'nest2': 3}}, \
    {'name': 'taylor', 'nested' : {'nest2': 3}})");  // true

console.log("");
tryCatchError("utilities.uniqueElements({})"); // Error
tryCatchError("utilities.uniqueElements(2,3,4,[])"); // Error
tryCatchError("utilities.uniqueElements(null)"); // Error
tryCatchError("utilities.uniqueElements([1,1,1,1,'1'])");   // 2
tryCatchError("utilities.uniqueElements([1,2,3,4,5,6,7])"); // 7
console.log("");
tryCatchError("utilities.countOfEachCharacterInString([])"); // Error
tryCatchError("utilities.countOfEachCharacterInString('d', 3)"); // Error
tryCatchError("utilities.countOfEachCharacterInString(null)"); // Error
tryCatchError("utilities.countOfEachCharacterInString('')"); // {}
tryCatchError("utilities.countOfEachCharacterInString('HhHh')"); //{H:2, h:2}





