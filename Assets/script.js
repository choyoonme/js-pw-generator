// Assignment Code
//assign a variable to point to button in the html
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    //change the value in the text area to a generated password
    passwordText.value = password;

}

// Add event listener to generate button
//target the html we want to trigger, tell it what event to listen for and give it a function to run when the event happens
generateBtn.addEventListener("click", writePassword);

function getFunky() {
    console.log("🕺🏿");
}
// instructions for creating an event handler
//create a function to run
function makeItFunky() {
    var dance = document.querySelector("h1");
    dance.textContent = "🕺🏿"
}
//target html we want to trigger and assign it to variable
var getFunked = document.querySelector("#funk")
    //tell it what event to listen for and what function to run
getFunked.addEventListener("click", makeItFunky);
//functions need action names and variables are nouns
function frownYourFace() {
    var cry = document.querySelector("h1");
    cry.textContent = "☹️"
}

var getSadButton = document.querySelector("#sad");

getSadButton.addEventListener("click", frownYourFace);