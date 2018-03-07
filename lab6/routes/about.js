/*
	Taylor He
	CS 546 Lab 6
	I pledge my honor that I have abided by the Stevens Honor System.
*/

const express = require('express');
const router = express.Router();
const data = {
			"name" : "Taylor He",
			"cwid" : "10407544",
			"biography" : "paragraph1.\nParagraph2.",
			"favoriteShows" : ["Breaking Bad", "Making Mad", "Faking Lad"],
			"hobbies" : ["video games", "games of the electronic variety", "el games"]
		};

router.get('/', async (req, res) => {
	res.json(data) 
});

module.exports = router;

