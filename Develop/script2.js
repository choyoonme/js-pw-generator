// Assignment Code
var specialChar = true

//assign a variable pointing to button in the html
var generateBtn = document.querySelector("#generate");

passwordText.value = password;

//make functions to generate random characters, including lowercase, uppercase, numbers, and special characters in password

//main function to recall in the functions that follow
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//function to return random uppercase letters if selected
function randomUpperCase() {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var index = getRandomInt(0, 25);
    return upperCase[index];
}
//function to return random lowercase letters if selected
function randomLowerCaseLetter() {
    const letter = randomUpperCase()
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
}




//Add event listener to the generateBtn
//Target the html tag we want to trigger
//Tell it what event to listen for
//Give it a function to run when the event happens
generateBtn.addEventListener("click", writePassword);

//Write function to generate password value in the input field

//declared result as an empty string outside of the for loop so we can reassign it and have access to it
//for loop will generate a character and add it to the result
//after loop runs 3 times a result will three random characters 
function generatePassword() {
    let result = "";
    for (let i = 0; i < charLength.length; i++) {
        result = result + getCharacter();
        console.log(result);
    }
    window.alert(result);
    return ("unique password");
}

function charLength() {
    const answer = prompt("Enter how many characters you password requires:");
    if (answer < 8 || answer > 128) {
        window.alert("Character length should be between 8 and 128.");
    } else {
        return true;
    }
}

function specChar() {
    const answer = prompt("Confirm that it needs a special character.");
    if (answer === "yes") {
        return true;
    } else {
        return false;
    }
}

function upperCase() {
    const answer = prompt("Confirm that it needs uppercase letters.");
    if (answer === "yes") {
        return true;
    } else {
        return false;
    }
}

function number() {
    const answer = prompt("Confirm that it needs a number.");
    if (answer === "yes") {
        return true;
    } else {
        return false;

    }
}

function getCharacter() {
    let wantsUppercase = false;
    //declared a variable and assigned it to the return value of a functiond
    const wantsLetter = doesUserWantLetter()
        //only evaluating this code for when the user wants a letter
    if (wantsLetter) {
        //declared wants uppercase outside of the if statement so we can reuse it. if we declared it here it would only exist in this scope
        wantsUppercase = doesUserWantUppercase()
    }
    //declaring a variable we can reassign to each conditional statement
    var character = null;
    //if both user wants letter and upper then they'll get it
    if (wantsLetter && wantsUppercase) {
        //if they want it uppercase
        //generate an uppercase letter
        character = randomUpperCase();
    }
    //if user wants letter and lower result will be lower
    if (wantsLetter && !wantsUppercase) {
        character = randomLowerCaseLetter();
    }
    //if user doesnt want letter result assign result to a random number
    if (!wantsLetter) {
        character = getRandomInt(0, 9);
    }
    //if they want a letter but they want it lowercase
    //generate a lowercase letter
    //if they dont want a letter
    //generate a random number
    return character;
}