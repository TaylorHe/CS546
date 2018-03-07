/*
	CS 546 Lab 2
    Taylor He
    I plege my honor that I have abided by the Stevens Honor System. 
    	-Taylor He
*/

function volumeOfRectangularPrism(length, width, height) {
	if (arguments.length !== 3) {
		throw "This function requires exactly 3 arguments.";
	}
	// Check if arguments are numbers
	if (typeof(length) !== 'number' || isNaN(length)) {
		throw "The given length is not a number.";
	} 
	if (typeof(width) !== 'number' || isNaN(width)){
		throw "The given width is not a number.";
	}
	if (typeof(height) !== 'number' || isNaN(height)){
		throw "The given height is not a number.";
	}

	// Check that arguments are > 0
	if (length <= 0) {
		throw "The given length should be greater than 0.";
	}
	if (width <= 0) {
		throw "The given width should be greater than 0.";
	}	
	if (height <= 0) {
		throw "The given height should be greater than 0.";
	}	
	return length * width * height;
}

function surfaceAreaOfRectangularPrism(length, width, height) {
		if (arguments.length !== 3) {
			throw "This function requires exactly 3 arguments.";
		}
		if (typeof(length) !== 'number' || isNaN(length)) {
			throw "The given length is not a number.";
		} 
		if (typeof(width) !== 'number' || isNaN(width)){
			throw "The given width is not a number.";
		}
		if (typeof(height) !== 'number' ||isNaN(height)){
			throw "The given height is not a number.";
		}

		// Check that arguments are > 0
		if (length <= 0) {
			throw "The given length should be greater than 0.";
		}
		if (width <= 0) {
			throw "The given width should be greater than 0.";
		}	
		if (height <= 0) {
			throw "The given height should be greater than 0.";
		}	
		return (2 * length * width) + (2 * length * height) + (2 * width * height);
}

function volumeOfSphere(radius) {
	if (arguments.length !== 1) {
			throw "This function requires exactly 3 arguments.";
	}
	if (typeof radius != 'number' || isNaN(radius)) {
		throw "The given radius is not a number.";
	}
	if (radius <= 0) {
		throw "The given radius should be greater than 0.";
	}
	return 4 / 3 * Math.PI * Math.pow(radius, 3);
}

function surfaceAreaOfSphere(radius) {
	if (arguments.length !== 1) {
			throw "This function requires exactly 3 arguments.";
	}
	if (typeof radius != 'number' || isNaN(radius)) {
		throw "The given radius is not a number.";
	}
	if (radius <= 0) {
		throw "The given radius should be greater than 0.";
	}
	return 4 * Math.PI * Math.pow(radius, 2);
}


module.exports = {
    firstName: "Taylor", 
    lastName: "He", 
    studentId: "10407544",
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
};



