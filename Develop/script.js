// Assignment code here
var  setPasswordLength = function() {
  var length = "";

  while (length === "" || length === null) {
    length = prompt("How many characters do you want your password to be?");
    if (setPasswordLength.length< 8){
      prompt("Your password is too short!");
    } else if (setPasswordLength.length> 128){
        prompt("Your password is too long!")
      }

    
    }
  }
  
  console.log("Your password is  " + length + "   characters long.");
  return +length;
  

const resultEl = document.getElementById('password')
const clipboardEl = document.getElementById('clipboard')
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const symbolEl = document.getElementById('symbol')
const numberEl = document.getElementById('number')
const generateEl = document.getElementById('generate')
const getRandom = {
  lower: getLower,
  upper: getUpper,
  number: getNumber,
  symbol: getCharacter
}
function getLower () {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getUpper () {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getNumber () {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getCharacter () {
  return String.fromCharCode(Math.floor(Math.random()*125)+131);
}
console.log(getCharacter());
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(lower,upper,number,symbol,length) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateEl.addEventListener("click", () => {
  const length = lengthEl.value;
  const hasLower = lowerEl.value; 
  const hasUpper = upperEl.value;
  const hasNumber = numberEl.value;
  const hasSymbol = symbolEl.value;
})



