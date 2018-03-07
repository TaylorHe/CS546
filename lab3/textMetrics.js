/*
 * Taylor He
 * CS 546
 * I pledge my honor that I have abided by the Stevens Honor System.
 *	- Taylor He
 */
 
async function simplify(text) {
	if (arguments.length !== 1) {
		throw "Incorrect number of arguments";
	}
	if (typeof text !== 'string') {
		throw "Input must be a string";
	}
	try {
		curr = await text.toLowerCase();
		//console.log(curr);
		curr = await curr.replace(/[^a-zA-Z\s]/g, '');
		//console.log(curr);
		curr = await curr.replace(/\s/g, ' ');
		//console.log(curr);
		curr = await curr.replace(/  +/g, ' ');
		//console.log(curr);
		curr = await curr.replace(/^\s+|\s+$/g, ''); // I got this from stackoverflow
		//console.log(curr);
		return curr;
	} catch(error) {
		throw error;
	}
	
}
// Since these functions are not exported or used anywhere else,
// error checking is not necessary
async function numLetters(text) {
	count = 0;
	//console.log("IM HERE");
	for(char of text) {
		if (char !== ' ') {
			count ++;
		}
	}
	return count;
}
async function totalWords(text) {
	return text.split(" ").length;
}
async function uniqueWords(text) {
	return new Set(text.split(" ")).size;
}
async function longWords(text) {
	count = 0;
	for (word of text.split(" ")) {
		if (word.length >= 6) {
			count++;
		}
	}
	return count;
}
async function avgWordLen(text) {
	totalLen = 0;
	for (word of text.split(" ")) {
		totalLen += word.length;
	}
	return totalLen / await totalWords(text);
}
async function wordOccurences(text) {
	map = {}
	for (word of text.split(" ")) {
		if (word in map) {
			map[word] += 1;
		} else {
			map[word] = 1;
		}
	}
	return map;
}


async function createMetrics(text) {
	try {
		if (arguments.length !== 1) {
			throw "Wrong number of arguments";
		}
		if (typeof text !== 'string') {
			throw "Argument must be of type string";
		}
		const simplifiedText = await simplify(text);
		//console.log(simplifiedText);
		return {
			'totalLetters' : await numLetters(simplifiedText),
			'totalWords' : await totalWords(simplifiedText),
			'uniqueWords' : await uniqueWords(simplifiedText),
			'longWords' : await longWords(simplifiedText),
			'averageWordLength' : await avgWordLen(simplifiedText),
			'wordOccurences' : await wordOccurences(simplifiedText)
		};
	} catch (error) {
		throw error;
	}

	
}
// async function main() {
// 	s = await simplify(' HELLO 12-+%\tmeow     newline^\t\n\n\n');
// 	console.log(s);
// 	s = await createMetrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23");
// 	console.log(JSON.stringify(s));
// }
//main();

module.exports = {
    firstName: "Taylor", 
    lastName: "He", 
    studentId: "10407544",
	simplify,
	createMetrics
};