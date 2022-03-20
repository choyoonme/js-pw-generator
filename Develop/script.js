// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";
var confirm = ["yes", "yup", "yeah"];


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    var event = prompt("How many characters does your password require?");
    if (event >= 8 && event < 12) {
        alert("Great!")
    } else {
        alert("You need a minimum of 8 characters and and maximum of 12.")
    }
    // WHEN asked for character types to include in the password
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    var event = confirm("What character types does your password require?");
    if (event === true) {
        alert("Got it!")
    } else {
        alert("Special characters are recommended.")
    }
    var event = prompt("Will it require both uppercase and lowercase letters?");
    if (confirm === true) {
        alert("Ok!")
    } else {
        alert("Using a combination is always a good idea.")
    }

    passwordText.value = password;

}


function generatePassword() {
    return ("unique password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);