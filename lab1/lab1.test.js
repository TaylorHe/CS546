/*
    CS 546 Lab 1
    Taylor He
    I plege my honor that I have abided by the Stevens Honor System. -Taylor He
*/

const lab1 = require("./lab1");

console.log("Question One")
console.log(lab1.questionOne([1, 2, 3]) + "  (Should be 14)"); 
// should output 14
console.log(lab1.questionOne([5, 3, 0]) + "  (Should be 34)"); 
// should output 34
console.log(lab1.questionOne([2, 2, 2]) + "  (Should be 12)"); 
// should output 12
console.log(lab1.questionOne([5, 11, 9]) + " (Should be 227)"); 
// should output 227
console.log(lab1.questionOne([-2, 3, 5]) + "  (Should be 38)")
// should output 38

console.log("\nQuestion Two")
for (i = 0; i < 13; i++){
	console.log(lab1.questionTwo(i)); 
}
// console.log(lab1.questionTwo(7)); 
// should output the fibonacci sequence 0, 1, 1, 2, 3, ..., 144


console.log("\nQuestion Three")
console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere.")); 
// should output 196

console.log("\nQuestion Four")
console.log(lab1.questionFour(10)); 
// should output 3628800 