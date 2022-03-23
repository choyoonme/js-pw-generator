//Declare variables for password character content. Instead of declaring a variable for lowercase, use .toLowerCase on the uppercase variable.
const letters = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
const spec = "~!@#$%^&*()";
const numeric = "0123456789";

//Target button in HTML document and use an event listener to trigger function when clicked on.
document
    .querySelector("button")
    .addEventListener("click", handleClick);

//Write a function that includes defining variables for password criteria: (1)character length, (2)uppercase letters, (3)lowercase letters, (4)numbers, or (5)special characters. Assign variables to prompt/confirm criteria.
function handleClick() {
    let length = prompt("Enter the number (between 8 and 128) of characters your password requires:");
    let upperCase = confirm("Confirm whether your password requires uppercase letters. (OK for yes, Cancel for no)");
    let lowerCase = confirm("Confirm whether your password requires lowercase letters. (OK for yes, Cancel for no)");
    let number = confirm("Confirm whether your password requires numbers. (OK for yes, Cancel for no)");
    let specChar = confirm("Confirm whether your password requires special character. (OK for yes, Cancel for no)");
    //Declare a variable for collected ternary criteria and for the generated password
    let temp = "";
    let password = "";

    /*Write ternary statements in place of if/else statements

    if (upperCase === true) {
        temp = temp + letters 
    } else {
        temp = temp + ""
    }
    */

    temp += upperCase ? letters : "";
    temp += lowerCase ? letters.toLowerCase() : "";
    temp += number ? numeric : "";
    temp += specChar ? spec : "";

    //Write a for loop to run through the character length that the user specifies in the first prompt and the boolean results of temp and use Math.random and Math.floor to round down.
    for (let i = 0; i < length; i++) {
        password += temp[Math.floor(Math.random() * temp.length)]
    };

    //Target textarea in document to enter password result.
    document.querySelector("textarea").innerText = password;
}