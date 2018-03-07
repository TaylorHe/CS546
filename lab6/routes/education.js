/*
	Taylor He
	CS 546 Lab 6
	I pledge my honor that I have abided by the Stevens Honor System.
*/

const express = require('express');
const router = express.Router();
const data = [
	{ 
		"schoolName" : "DeMasi Elementary School",
		"degree" : "Elementary School Diploma?",
		"favoriteClass" : "3rd Grade math, best math boxes evar.",
		"favoriteMemory" : "Mrs. Pringle gave out pringles in her class."
	},
	{ 
		"schoolName" : "Cherokee High School",
		"degree" : "High School Diploma",
		"favoriteClass" : "Mr. Schultz, 10th grade history teacher. Taught nothing the whole class and graded papers based on number of pages written.",
		"favoriteMemory" : "copy-pasting song lyrics on my history paper and getting a 100 because it was over 4 pages long. Schultz obviously didn't read it."
	},
	{ 
		"schoolName" : "Stevens Institute of Technology",
		"degree" : "Bachelors of Science in Computer Science",
		"favoriteClass" : "CS 546, obviously",
		"favoriteMemory" : "Spontaneously going to new york and declaring backruptcy after a $60 meal"
	}
];
router.get('/', async (req, res) => {
	res.json(data) 
});

module.exports = router;

