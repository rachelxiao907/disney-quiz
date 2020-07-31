//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;

var baymaxScore = 0;
var flounderScore = 0;
var olafScore = 0;
var pascalScore = 0;


//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

// variables for answer choice buttons for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

// variables for answer choice buttons for question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

// variables for answer choice buttons for question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

// variables for answer choice buttons for question 5
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var result = document.getElementById("result");
var restart = document.getElementById("restart");


//#TODO: Add Event Listeners to your answer choice variables.
// Event Listeners allows javascript to detect when a user clicks a button, fills out a form, etc
// Event Listeners – interfaces that wait to detect a given event, like a 'click', and then perform some set of actions
// element.addEventListener(event, function);
q1a1.addEventListener("click", pascal);
q1a2.addEventListener("click", olaf);
q1a3.addEventListener("click", baymax);
q1a4.addEventListener("click", flounder);

// event listeners for answer choice buttons for question 2
q2a1.addEventListener("click", flounder);
q2a2.addEventListener("click", baymax);
q2a3.addEventListener("click", pascal);
q2a4.addEventListener("click", olaf);

// event listeners for answer choice buttons for question 3
q3a1.addEventListener("click", olaf);
q3a2.addEventListener("click", flounder);
q3a3.addEventListener("click", baymax);
q3a4.addEventListener("click", pascal);

// event listeners for answer choice buttons for question 4
q4a1.addEventListener("click", olaf);
q4a2.addEventListener("click", pascal);
q4a3.addEventListener("click", flounder);
q4a4.addEventListener("click", baymax);

// event listeners for answer choice buttons for question 5
q5a1.addEventListener("click", baymax);
q5a2.addEventListener("click", pascal);
q5a3.addEventListener("click", olaf);
q5a4.addEventListener("click", flounder);

restart.addEventListener("click", restartQuiz);


//#TODO: Define quiz functions here
// function functionName(input1, input2){
//     code to be executed if the function is called;
// }
// alert("Some Message");
function baymax() {
  baymaxScore += 1; // += symbol to show increase and reassignment of the variable
  questionCount += 1;
  // alert("BAYMAXXX");

  //We check for when questionCount >= 5 and not questionCount == 5 because we have yet to disable the buttons if the user has
  //selected a choice already. Currently the user can click a button multiple times. 
  if (questionCount >= 5) {
    updateResult();
  }
}

function flounder() {
  flounderScore += 1;
  questionCount += 1;
  // alert("FLOUNDERRR");

  if (questionCount >= 5) {
    updateResult();
  }
}

function olaf() {
  olafScore += 1;
  questionCount += 1;
  // alert("OLAFFF");

  if (questionCount >= 5) {
    updateResult();
  }
}

function pascal() {
  pascalScore += 1;
  questionCount += 1;
  // alert("PASCALLL");

  if (questionCount >= 5) {
    updateResult();
  }
}

function updateResult() {
  if (baymaxScore >= 3) {
    result.innerHTML = "Baymax"; // we need to update the innerHTML attribute of the result header in our HTML file
  } else if (flounderScore >= 3) {
    result.innerHTML = "Flounder";
  } else if (olafScore >= 3) {
    result.innerHTML = "Olaf";
  } else if (pascalScore >= 3) {
    result.innerHTML = "Pascal";
    //experiment with more combinations that can produce a result
  } else if (baymaxScore == 2 && flounderScore == 1 && olafScore == 1 && pascalScore == 1) {
    result.innerHTML = "Baymax";
  } else if (flounderScore == 2 && baymaxScore == 1 && olafScore == 1 && pascalScore == 1) {
    result.innerHTML = "Flounder";
  } else if (olafScore == 2 && baymaxScore == 1 && flounderScore == 1 && pascalScore == 1) {
    result.innerHTML = "Olaf";
  } else if (pascalScore == 2 && baymaxScore == 1 && flounderScore == 1 && olafScore == 1) {
    result.innerHTML = "Pascal";
  } else {
    result.innerHTML = "The scoring hat is confused... You are Donkey from Shrek";
  }
}

function restartQuiz() {
  result.innerHTML = "You are... ";
  questionCount = 0;
  baymaxScore = 0;
  flounderScore = 0;
  olafScore = 0;
  pascalScore = 0;
}
