/*
 * Taylor He
 * CS 546
 * I pledge my honor that I have abided by the Stevens Honor System.
 *	- Taylor He
 */
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) {
	try {
		if (arguments.length !== 1) {
			throw "Error: Wrong number of arguments.";
		}
		if (typeof path !== 'string') {
			throw "You must provide a path as a string";
		}
		// Use this to fix deprecation warning
		return await fs.readFileAsync(path, 'utf8');
	} catch(error) {
		throw error;
	}
}

async function getFileAsJSON(path) {
	try {
		if (arguments.length !== 1) {
			throw "Error: Wrong number of arguments.";
		}
		if (typeof path !== 'string') {
			throw "You must provide a path as a string";
		}
		// Use this to fix deprecation warning
		return JSON.parse(await getFileAsString(path));
	} catch(error) {
		throw error;
	}
}


async function saveStringToFile(path, text) {
	try {
		if (arguments.length !== 2) {
			throw "Error: Wrong number of arguments.";
		}
		if (typeof path !== 'string' || typeof text !== 'string') {
			throw "You must provide path and text as strings";
		}
		fs.writeFileAsync(path, text, 'utf8');
		return true;
	} catch(error) {
		throw error;
	}
}

async function saveJSONToFile(path, obj) {
	try {
		if (arguments.length !== 2) {
			throw "Error: Wrong number of arguments.";
		}
		if (typeof path !== 'string' || typeof obj !== 'object') {
			throw "You must provide path as a string and obj as an object";
		}

		fs.writeFileAsync(path, await JSON.stringify(obj), 'utf8');
		return true;
	} catch(error) {
		throw error;
	}
}


// async function main() {
// 	try{
// 		const test1 = await getFileAsString("./chapter1.txt");
// 		//console.log(c);
// 		const test2 = await getFileAsJSON("./package.json");
// 		//console.log(e);
// 		const test3 = await saveStringToFile("./ch.txt", "meow mix");
// 		console.log(test3);
// 		const test4 = await saveJSONToFile("./j.txt", {s: 3});
// 		console.log(test4);

// 	} catch (error) {
// 		throw error;
// 	}
	
// }
//main();

module.exports = {
    firstName: "Taylor", 
    lastName: "He", 
    studentId: "10407544",
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
};
