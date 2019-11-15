// form a new array that is based off the original.
// primeNumbers is an Array.
// primeNumbersDividedByTwo is the new array that is taking each element(el) of the array(primeNumbers, and dividing them by 2.)
// The new numbers are now the new elements(el) of the array(primeNumbersDividedByTwo)

function primeNumbersDividedByTwo(){
	let primeNumbers = [2,3,5,7,11,13,17,19,23,29,31,37];

	let primeNumbersDividedByTwo = primeNumbers.map(function(el){
		return el / 2;
	}
}



// .map or mapping to an an array of OBJECTS
// each object has two different properties
// without alterting the objects in array(stateInformation)
// abbreviationsAdded is the new array
// we are adding a property called abbreviations (el.abbreviateions)
// el.state is representing the el.state represents the state and value
// return el will use the function el.abbreviations to kick out the new element(el) abbreviation as "WI or FL"

function setStateAbbreviations(){
	let statesInformation = [
		{
			state: "Wisconsin"
			capital: "Madison"
		},
		{
			state: "Florida"
			capital: "Tallahassee"
		}
	];

	let abbreviationsAdded = statesInformation.map(function(el){
		el.abbreviations = prompt("Enter" + el.state + "abbreviation");
		return el;		
	})

}
setStateAbbreviations();






// filter
function getEvenNumbers(){
	let numbers = [1,2,4,5,6,67,23,12,2,4,47];
// we are filtering the numbers array with function el
// if each element divided by two is =0, its true and sends that new number into the new array
// otherwise, return false and it will be tossed aside and NOT make it into the new array

	let evenNumbers = numbers.filter(function(el){
		if(el % 2 === 0){
			return true;
		}
		else{
			return false;
		}
	})
}
getEvenNumbers();




// reducing returns a single value, not an array

getTotalSum(){
	let numbers = [1,2,4,5,6,67,23,12,2,4,47];
// total is argument 1 and first value, a value passed along each time
// el is  the next value still going to represent each element
// total is our running total added to throughout
	let sum = numbers.reduce(function(total, el){
		return total + el;
// this is taking 1+2 and taking that sum of 3, and adding it to 4, and taking the sum of 3+4 for 7, and adding that to the next one in sequence.
// essentially creating a running total. adding two numbers, and taking the sum of those two numbers and adding that to the next number in sequence, and continue
	})
	}
getTotalSum();



// variables contain one value
let name = "mike";
// arrays contain multiple values
let numbers = [1,2,3];
// objects contain properties that describe the object
// objects have name-value pairs (or key-value pairs)
// the key is also the name or label of the value(data)
// two ways to create an empty object
// Object() is a data type
var firstObject = new Object();
var secondObject = {};
// the second way is called creating an 'object literal'. it is the preferred way for performance reasons.

// object literal syntax to initialize an object
var person = {
	name: "Mike",
	age: 31,
	details: {
		maritalStatus: "married",
		occupation: ["instructor", "developer"]
// you can have objects within other objects
// the object of person has many values
// the valuye of details is also a object for the descriptors of marritalstatus and occupation
	}
}

console.log("Personal's name: " + person.name);
// Persons name will log automatically and log the value/detail of name from the person object.
console.log("Person's occupation: " + person.details.occupation);
//  persons occupation will log automatically and log multiple values of the object person.
// start at person (person)
// then you access the details (person.details)
// then you access and log the occupation value of details (person.details.occupation)
console.log(person.details.occupation[1]);
// since occupation does have two different values, the [1] is specifying that we want to log the 2nd occupation value at the first index
console.log(person.details.maritalStatus);




// array of objects
var packersPlayers = [
	{
		firstName: "Aaron",
		lastName: "rodgers",
		jerseyNumber: 12,
		ratings: {
			passing: 100,
			running: 85,
			tackling:20
		}
	},
	{
		firstName: "Clay",
		lastName: "Matthews",
		jerseyNumber: "52",
		ratings: {
			passing: 15,
			running: 90,
			tackling: 100
		}
	},
	{
		firstName: "Aaron",
		lastName: "Jones",
		jerseyNumber: 33,
		ratings: {
			passing: 20,
			running: 98,
			tackling: 45
		}
	}
];

for(let i = 0; i < packersPlayers.length; i++){
	// [i] index is starting at the first value or index 0
	// print the first name of each object, with a space, then the last name of each object (first and last name value of object packersPlayers)
	console.log(packersPlayers[i].firstName + " " + packersPlayers[i].lastName);
}






// Callbacks
// to get code to execute after something else has happened
// a function that is invoked or called after something else happens
// whether or not this runs depends entirely on something else happening, not simply the running of a program
// acheived by passing a function into another function, and it is called back or executed after something else has occured

let logCall = function() {
	console.log("locCall was called back.");
};
setTimeout(logCall, 3000);
// setTimeout is a set function that allows us to execute a function after a specifified length of time via a callback
// we are calling back the function of log, only after 3 seconds have passed
// after 3 seconds it called back the logCall function
// time is expressed in milliseconds





// Recursion
// break a problem into a small part that is repeatable then you repeat that small part to until it solves the problem
// - a recursive function calls itself
//  - has two main parts
	//  must have a termination condition (base case) this is what causes the function to not be called again, otherwise it would get in a loop
	// recursive case - the portion of the function that calls itself
// each call gets a smaller peice of the tree to call on
// factorial is the product of an integer and all the integers below it.
// example: factorial 5 is = 5*4*3*2*1
// whatever number is passed into the function (num) will return the factorial of that number
// multiply the given/original number by 1 less itself, in succession/repeating that process multiple time in that -1(itself) fashion
// fac is the name of the function
var factorial = function fac(num) {
	if (num=== 1) {
		return 1;
	}

	return num * fac(num - 1);
};

var final = factorial(5);
console.log(final);

// this will continue to run the function until it hits one and stops.

// 5*fac(4)
// 5*4*fac(3)
// 5*4*3*fac(2)
// 5*4*3*2*fac(1)
// 5*4*3*2*1
// 5*4*3*2
// 5*4*6
// 5*24
// 120

