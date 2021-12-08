// Assignment Code
var generateBtn = document.querySelector("#generate");
var specStr = "!'()*+,-./:;<=>?@[^_`{|}~";
var numStr = "0123456789";
var letterStr = "abcdefghijklmnopqrstuvwxyz";
var letterArr = letterStr.split('');
var numArr = numStr.split('');
var specArr = specStr.split('');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generateLetter(){
  var randomLetter = Math.floor(Math.random() * letterArr.length);
  var chosenLetter = letterArr[randomLetter];

  return chosenLetter;
}

function generateNumber(){
  var randomNum = Math.floor(Math.random() * numArr.length);
  var chosenNum = numArr[randomNum];

  return chosenNum;
}

function generateSpec(){
  var randomSpec = Math.floor(Math.random() * specArr.length);
  var chosenSpec = specArr[randomSpec];

  return chosenSpec;
}

function generatePassword() {

  var randomPassword = chosenLetter.concat(chosenNum).concat(chosenSpec);

  return randomPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
