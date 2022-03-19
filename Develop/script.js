// Assignment code here function that is triggered by the button being pressed
function generatePassword() {
  console.log("button was clicked");
  // Set password returns the user inputted string
  var length = setPasswordLength();
  if (length > 8 && length < 128) {
    characterSelection();
  }
}

var passwordField = document.getElementById("password");
var generateButton = document.getElementById("generate");

// Add event listener to generate button
generateButton.addEventListener("click", generatePassword);

function setPasswordLength() {
  var length = "";

  while (length === "" || length === null) {
    length = prompt("How many characters do you want your password to be?");
    if (length < 8) {
      prompt("Your password is too short!");
    } else if (length > 128) {
      prompt("Your password is too long!");
    }

    console.log("Your password is  " + length + "   characters long.");
    return length;
  }
}

function characterSelection() {
  if ("Do you want upper case letters?")
    if (confirm("Do you want lower case letters?")) {
    }
  if (confirm("Do you want numbers?")) {
    if (confirm("Do you want special characters?"));
  }

  console.log(characterSelection);

  var getRandom = {
    lower: getLower,
    upper: getUpper,
    number: getNumber,
    symbol: getCharacter,
  };
  function getLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function getUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  function getCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 125) + 131);
  }

  // Write password to the #password input
  function writePassword(lower, upper, number, symbol, length) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  }
}
