var passwordField = document.getElementById("password");
var generateButton = document.getElementById("generate");

// Assignment code here function that is triggered by the button being pressed
function generatePassword() {
  console.log("button was clicked");
  // Set password returns the user inputted string
  var length = setPasswordLength();
  if (length > 8 && length < 128) {
    passwordField.value = characterSelection(length);
  }
}

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

function characterSelection(setPasswordLength) {
  var upperCase = confirm("Do you want upper case letters?");
  var lowerCase = confirm("Do you want lower case letters?");
  var numbers = confirm("Do you want numbers?");
  var specialCharacters = confirm("Do you want special characters?");

  var password = characterTypes(
    upperCase,
    lowerCase,
    numbers,
    specialCharacters,
    setPasswordLength
  );
  console.log("characterSelection - password", password);
  return password;
}

function characterTypes(
  upperCase,
  lowerCase,
  numbers,
  specialCharacters,
  setPasswordLength
) {
  //evaluate character type
  var charSet = "";

  if (lowerCase) {
    charSet = charSet + "abcdefghijklmnopqrstuvwxyz";
  } else if (upperCase) {
    charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (numbers) {
    charSet = charSet + "0123456789";
  } else if (specialCharacters) {
    charSet = charSet + " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }
  //return value
  var retVal = "";
  for (var i = 0; i < setPasswordLength; i++) {
    //picks a character within charSet at index of random number
    retVal =
      retVal + charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;

  //If user wants upper case then include them in password
  // var uppercase;
  // var lowercase;
  // var numbers;
  // var specialCharacters;
  // if (upperCase) {
  //   return getUpper();
  // } else if (lowerCase) {
  //   return getLower();
  // } else if (numbers) {
  //   return getNumber();
  // } else if (specialCharacters) {
  //   return getCharacter();
  // } else {
  //   return "";
  // }
}

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
  console.log(password);
}
