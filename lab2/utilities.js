/*
	CS 546 Lab 2
    Taylor He
    I pledge my honor that I have abided by the Stevens Honor System. -Taylor He
*/

function deepEquality(obj1, obj2) {
	if (arguments.length !== 2) {
		throw "deepEquality takes exactly 2 arguments.";
	}
	if (!(obj1 instanceof Object) || !(obj1 instanceof Object)) {
		throw "Both parameters must be Objects."
	}
	if (Object.keys(obj1).length !== Object.keys(obj1).length) {
		return false;
	}
	for (key of Object.keys(obj1)) {
		// if the key doesn't exist in obj2, then they're not equal
		if (!(key in obj2)){
			return false;
		}
		// If the value of both are Objects, we have to recurse
		if ((obj1[key] instanceof Object) && (obj1[key] instanceof Object)) {
			if (!deepEquality(obj1[key], obj2[key])){
				return false;
			}
		}
		// If one is an Object and one isn't, then they are not equal
		if ((obj1[key] instanceof Object) ^ (obj1[key] instanceof Object)) {
			return false;
		}
		// Finally, if they're not objects and not equal, return false
		if (obj1[key] !== obj2[key]) {
			return false;
		}
	}
	return true;
}

function uniqueElements(arr) {
	if (arguments.length !== 1) {
		throw "uniqueElements takes exactly 1 argument.";
	}
	if (!(arr instanceof Array)) {
		throw "Input must be an Array."
	}
	return new Set(arr).size;
}

function countOfEachCharacterInString(str) {
	if (arguments.length !== 1) {
		throw "countOfEachCharacterInString takes exactly 1 argument.";
	}
	if (typeof str !== 'string') {
		throw "Input must be a string.";
	}
	occurence_dictionary = {};
	for (character of str) {
		if (character in occurence_dictionary) {
			occurence_dictionary[character] += 1;
		} else {
			occurence_dictionary[character] = 1;
		}
	}
	return occurence_dictionary;
}

module.exports = {
    firstName: "Taylor", 
    lastName: "He", 
    studentId: "10407544",
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
};

