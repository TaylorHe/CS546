/*
 * Taylor He
 * CS 546
 * I pledge my honor that I have abided by the Stevens Honor System.
 *	- Taylor He
 */
const filedata = require("./fileData.js");
const tm = require("./textMetrics.js");
async function run(file) {
	try {
		str = await filedata.getFileAsString(file.slice(0,-4) + ".result.json");
		console.log(str);
	} catch (error) {
		//console.log("or here");
		stri = await filedata.getFileAsString(file);
		str = await tm.simplify(stri)
		await filedata.saveStringToFile(file.slice(0,-4) + ".debug.txt", str);
		await filedata.saveJSONToFile(file.slice(0,-4) + ".result.json", await tm.createMetrics(str));
		console.log(await filedata.getFileAsJSON(file.slice(0,-3) + "result.json"));
	}	
}

async function main() {
	try {
		await run('chapter1.txt');
	} catch (error) {
		console.log(error);
	}

	try {
		await run('chapter2.txt');
	} catch (error) {
		console.log(error);
	}

	try {
		await run('chapter3.txt');
	} catch (error) {
		console.log(error);
	}
	
}
main();
module.exports = {
    firstName: "Taylor", 
    lastName: "He", 
    studentId: "10407544",
	run
};

