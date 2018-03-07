/*
    CS 546 Lab 1
    Taylor He
    I plege my honor that I have abided by the Stevens Honor System. -Taylor He
*/

const questionOne = function questionOne(arr) {
    // Calculates the sum of squares in the array
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += (arr[i] * arr[i]);
    }
    return sum;
}

const questionTwo = function questionTwo(num) {
    // Iteratively calculates the nth fibonacci number
    if (num < 1) {
        return 0;
    }
    var a = 0;
    var b = 1;
    var c = 0;
    for (i = 0; i < num; i++) {
        c = a;
        a = b;
        b = c + b;
    }
    return a;
}

const questionThree = function questionThree(text) {
    // Counts the number of vowels in a string, not including 'y'
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    var count = 0;
    for (var i = 0; i < text.length; i++) {
        if (vowels.has(text.charAt(i))) {
            count++;
        }
    }
    return count;
}

const questionFour = function questionFour(num) {
    // Calculates the factorial of n
    if (num < 0) {
        return NaN;
    }
    var fact = 1;
    for (i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

module.exports = {
    firstName: "Taylor", 
    lastName: "He", 
    studentId: "10407544",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};