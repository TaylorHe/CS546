/*
	Taylor He
	CS 546 Lab 6
	I pledge my honor that I have abided by the Stevens Honor System.
*/

const express = require('express');
const router = express.Router();
const data = 
{
	"storyTitle" : "That Time I Did The Thing",
	"story" : "I want to tell you about the time I did the thing. What thing, you may ask? Well let me tell you all about it.\nIt was a normal day outside, pretty normal. Was it cold? Was it hot? Sunny? Cloudy? Nah. Normal.\nAnd I was walking down the street. Just a regular street. I had my normal hands in my regular jean pockets, when I saw a person doing the thing! Oh man, I rushed over excitedly, wanting to join the person and participate in the activity. Fortunately, when I got there, the person was not just one person, the person was part of a group of people who were all doing the thing. There were so many people around the area, probably, like, a lot of people. However, just to my luck, they were all finishing up the activities. I was late to the jawn! I quickly tried to fit in with the group of people, but the arbitrary number of humans were not very welcoming."
};

router.get('/', async (req, res) => {
	res.json(data) 
});

module.exports = router;

