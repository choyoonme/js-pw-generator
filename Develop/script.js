// Assignment Code

//assign a variable pointing to button in the html
var generateBtn = document.querySelector("#generate");

//make functions to generate random characters, including lowercase, uppercase, numbers, and special characters in password

//main function to recall in the functions that follow
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//function to return random uppercase letters if selected
function randomLetter() {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var index = getRandomInt(0, 25);
    return upperCase[index];
}
//function to return random lowercase letters if selected
function randomLowerCaseLetter() {
    const letter = randomLetter()
    return letter.toLowerCase()
}
//function to return a random special characters if selected 
function randomSpecChar() {
    var specialChar = "!@#$%^&*()?/;:~";
    var index = getRandomInt(0, 14);
    return specialChar[index];
}

//function to return a random number if selected
function randomNumber() {
    var number = "0123456789";
    var index = getRandomInt(0, 10);
    return number[index];
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    var pwLength = prompt("Enter the number of characters your password requires:");
    console.log("Password length: ", pwLength);
    if (pwLength < 8 || pwLength > 128) {
        window.alert("Passwords should have a minumum of 8 and no more than 128 characters.");
        console.log("Password length", pwLength);
    }

    // WHEN asked for character types to include in the password
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters



    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected

    passwordText.value = password;

}

//Add event listener to the generateBtn
//target the html we want to trigger
//tell it what event to listen for
//give it a function to run when the event happens
function generatePassword() {
    return ("unique password");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);