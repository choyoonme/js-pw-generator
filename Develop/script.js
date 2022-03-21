// Assignment Code
var specialChar = true
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

    //Assign a variable to length of password
    //Use a prompt to find out required length
    //Use if () to make sure length falls between 8 and 12
    var passwordLength = prompt("Enter the number of characters your password requires:");
    console.log("Password length: ", passwordLength);
    if (passwordLength < 8 || passwordLength > 12) {
        window.alert("Passwords should have a minumum of 8 and no more than 12 characters.");
        console.log("Password length", passwordLength);
    }
    // Assign variables to prompt whether or not to use upper/lowercase letters, numbers, and/or special character
    //Use IF statement and boolean data types for each prompt
    //Wire everything up to functions
    var letterCase = prompt("Should your password include upper and lowercase letters?");
    console.log(letterCase);
    var number = prompt("Should your password include a number?");
    console.log(number);
    var specCharacter = prompt("Should your password include a special character?");
    console.log(specCharacter);


    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected

    passwordText.value = password;

}

//Add event listener to the generateBtn
//Target the html tag we want to trigger
//Tell it what event to listen for
//Give it a function to run when the event happens
generateBtn.addEventListener("click", writePassword);

//Write function to generate password value in the input field
function generatePassword() {
    return ("unique password");
}