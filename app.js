"use strict" /* Build all of your functions for displaying and gathering
information below (GUI). */

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  // let searchByTrait;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchResults = searchByTrait(people);
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    alert(person.firstName + " " + person.lastName + "'s Info Is:" + person.gender + " " + person.dob + " " + person.height + " " + person.weight + " " + person.eyeColor + " " + person.occupation);
    break;
    case "family":
    alert(person.firstName + " " + person.lastName + "'s Family Info Is:"
    break;
    case "descendants":
    alert(person.firstName + " " + person.lastName + "'s Descendant Info Is:"
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}


function searchByTrait(people){
	let gender = promptFor("Is this person a male or female?", chars);
	let dob = promptFor("Please Enter Birthday As MM/DD/YYYY?", chars);
	let height = promptFor("How tall is this person? This should be a whole number and converted into inches. There are 12 inches per foot.", chars);
	let weight = promptFor("How much does this person way? Please enter as a whole number.", chars);
	let eyeColor = promptFor("What color is this person's eyes?", chars);

	let foundTrait = people.filter(function(person){
		if(person.gender === gender && person.dob === dob && person.height === height && person.weight === weight && person.eyeColor === eyeColor){
			return mainMenu(person);
		}
		else{
			return false;
		}
	})
	return foundTrait;
}


function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars).toLowerCase();
  let lastName = promptFor("What is the person's last name?", chars).toLowerCase();

  let foundPerson = people.filter(function(person){
    if(person.firstName.toLowerCase() === firstName && person.lastName.toLowerCase() === lastName){
    return mainMenu(person);
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson[0];
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
