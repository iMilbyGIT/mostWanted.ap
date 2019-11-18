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
      searchResults = searchByMulipleTraits(people);
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
    displayPersonInfo(person);
    // alert(person.firstName + " " + person.lastName + " is a" + " " + person.gender + ", was born on" + " " + person.dob + ", is " + person.height + "inches tall, weighs " + person.weight + "lbs, has " + person.eyeColor + " eyes, and currently works as a " + person.occupation + ".");
    break;
    case "family":
    displayFamily(person);
    // alert(person.firstName + " " + person.lastName + "is married to" + " " + searchForSpouse(people, familyID));
    break;
    case "descendants":
    alert(person.firstName + " " + person.lastName + "'s Descendant Info Is:");
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

function searchByMulipleTraits(people){
  let person;

    let searchByTrait = prompt("Would you like to search by gender, dob, height, weight, eye color, or occupation? Type quit to return to main menu.");
    switch(searchByTrait){
      case "gender":
        people = searchByGender(people);
        break;
      case "dob":
        people = searchByDob(people);
        break;
      case "height":
        people = searchByHeight(people);
        break;
      case "weight":
        people = searchByWeight(people);
        break;
      case "eye color":
        people = searchByEyeColor(people);
        break;
      case "occupation":
        people = searchByOccupation(people);
        break;
      case "quit":
        app(people);
        break;
      default:
         return searchByMulipleTraits(people);
        break;
    };
    let response = promptFor(displayPeopleForPrompt(people) + "\n" + "Is the person you are looking for listed here? Please type yes or no", chars);
    if(response === "no"){
      return searchByMulipleTraits(people)};
    if(response === "yes"){
      return searchByName(people);
    }
    }


function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars).toLowerCase();
  let lastName = promptFor("What is the person's last name?", chars).toLowerCase();
  let foundPerson = people.filter(function(person){
    if(person.firstName.toLowerCase() === firstName && person.lastName.toLowerCase() === lastName){
    return true;
    }
    else{
      return false;
    }
  })
  return foundPerson[0];
}

function searchByGender(people){
  let gender = promptFor("Is this person a male or female?", chars).toLowerCase();
  let foundGender = people.filter(function(person){
    if(person.gender.toLowerCase() === gender){
    return true;
    }
    else{
      return false;
    }
  })
  return foundGender;
}

function searchByDob(people){
  let dob = promptFor("Please enter in mm/dd/yyyy format", chars);
  let foundDob = people.filter(function(person){
    if(person.dob === dob){
    return true;
    }
    else{
      return false;
    }
  })
  return foundDob;
}

function searchByHeight(people){
  let height = promptFor("In Inches, how tall is this person?", chars);
  let peopleFoundWithThatHeight = people.filter(function(person){
    if(person.height == height){
    return true;
    }
    else{
      return false;
    }
  })
  return peopleFoundWithThatHeight;
}

function searchByWeight(people){
  let weight = promptFor("How much does this person weight? (whole number in lbs)", chars);
  let foundWeight = people.filter(function(person){
    if(person.weight == weight){
    return true;
    }
    else{
      return false;
    }
  })
  return foundWeight;
}

function searchByEyeColor(people){
  let eyeColor = promptFor("What is this person's eye color?", chars).toLowerCase();
  let foundEyeColor = people.filter(function(person){
    if(person.eyeColor.toLowerCase() === eyeColor){
    return true;
    }
    else{
      return false;
    }
  })
  return foundEyeColor;
}

function searchByOccupation(people){
  let occupation = promptFor("What is this person's occupation?", chars).toLowerCase();
  let foundOccupation = people.filter(function(person){
    if(person.occupation.toLowerCase() === occupation){
    return true;
    }
    else{
      return false;
    }
  })
  return foundOccupation;
}


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}
function displayPeopleForPrompt(people){

let thing =  people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n");
return thing;
}



function displayPersonInfo(person){
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Date of Birth: " + person.dob + "\n";
  personInfo += "Height (in): " + person.height + "\n";
  personInfo += "Weight (lbs): " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  alert(personInfo);
  
}

function displayFamily(person){
  let personFamily = "Parent(s): " + person.parents + "\n";
  personFamily += "Current Spouse: " + person.currentSpouse + "\n";
  alert(personFamily);
  // let idFlip;
  let personParents = person.parents;
  let personSpouse = person.currentSpouse;

  }


function findFamily(person, people){
  let resultOfFilterForFamily = people.filter(function (per){
      if(person.currentSpouse === per.id){
        return true;
      }else{
        return false;
      }
  });
  console.log(resultOfFilterForFamily[0].firstName);
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