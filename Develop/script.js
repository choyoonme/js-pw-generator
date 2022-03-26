//Declare variables for password character content. Instead of declaring a variable for lowercase, use .toLowerCase on the uppercase variable.
const letters = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
const spec = "~!@#$%^&*()";
const numeric = "0123456789";

//Target button in HTML document and use an event listener to trigger function when clicked on.
document.querySelector("button").addEventListener("click", handleClick);

//Write a function that includes defining variables for password criteria: (1)character length, (2)uppercase letters, (3)lowercase letters, (4)numbers, or (5)special characters. Assign variables to prompt/confirm criteria.
function handleClick() {
    let length = prompt("Enter a number between 8 and 128 for the length that your password requires:");
    let upperCase = confirm("Confirm whether your password requires uppercase letters. (OK for YES, Cancel for NO)");
    let lowerCase = confirm("Confirm whether your password requires lowercase letters. (OK for YES, Cancel for NO)");
    let number = confirm("Confirm whether your password requires numbers. (OK for YES, Cancel for NO)");
    let specChar = confirm("Confirm whether your password requires special character. (OK for YES, Cancel for NO)");
    //Declare a variable for collected ternary criteria and for the generated password
    let temp = "";
    let password = "";

    /*Write ternary statements in place of if/else statements

    if (upperCase === true) {
        temp = temp + letters 
    } else {
        temp = temp + "";
    }
    if (lowerCase === true) {
        temp = temp + letters.toLowerCase() 
    } else {
        temp = temp + "";
    }
    if (number === true) {
        temp = temp + numeric 
    } else {
        temp = temp + "";
    }
    if (specChar === true) {
    } else {
        temp = temp + "";
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