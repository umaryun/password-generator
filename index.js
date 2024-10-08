//get all possible characters
const generateBtn = document.getElementById("generate");
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const specialCharacters = "!@#$%^&*()-=?_+/;:}{[]|`~";


generateBtn.onclick = function () {
    const numberOfCharacters = document.getElementById("number-of-characters").value;
    const allowUpperCase = document.getElementById("upperCaseCharacters");
    const allowLowerCase = document.getElementById("lowerCaseCharacters");
    const allowNumbers = document.getElementById("numbers");
    const allowSpecials = document.getElementById("specialCharacters");
    let password = document.getElementById("password");
    let allowedCharacters = ""; //all possible charcters for the password generation
    let generatedPassword = "";

    
    if (Number(numberOfCharacters) <= 0) {
        password.textContent = "Password must be at least 1(one)";
        document.getElementById("number-of-characters").value = 1;
    } else {
        //Add the selected to the string combination of all allowed characters
        if (allowUpperCase.checked) {
            allowedCharacters += upperCaseLetters;
            allowUpperCase.checked = false;
        }
        if (allowLowerCase.checked) {
            allowedCharacters += lowerCaseLetters;
            allowLowerCase.checked = false;
        }
        if (allowNumbers.checked) {
            allowedCharacters += numbers;
            allowNumbers.checked = false;
        }
        if (allowSpecials.checked) {
            allowedCharacters += specialCharacters;
            allowSpecials.checked = false;
        }   
        if (allowedCharacters == "") {
            password.textContent = "An option must be selected";
        } else { // run once all requirements are met
            for (let i = 1; i <= Number(numberOfCharacters); i++) {
                // add and individual random character to the result on each iteration
                let randomIndex = Math.floor(Math.random() * allowedCharacters.length + 1);
                generatedPassword += allowedCharacters[randomIndex];
            }
            // display the result and reset the input to 1
            password.textContent = `Password: ${generatedPassword}`;
            document.getElementById("number-of-characters").value = 1;
        }
    }
}
