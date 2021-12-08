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

function generatePassword(totChar, lowerCase, upCase, numChar, specChar) {

  console.log("You hit generatePassword");
  
  // var randomPassword = chosenLetter.concat(chosenNum).concat(chosenSpec);

  // return randomPassword;
}

function inputPrompts(){
  var firstPrompt = prompt("Enter desired number of characters (8-128): ");
  if(firstPrompt != null){
    alert("Number of characters: " + firstPrompt);
  }else{
    alert("Number of characters: none");
  }
  var secondPrompt = window.confirm("Do you wish to include lowercase letters?");
  if(secondPrompt){
    alert("Password will contain lowercase letters");
  }else{
    alert("Password will not contain lowercase letters");
  }
  var thirdPrompt = window.confirm("Do you wish to include uppercase letters?");
  if(thirdPrompt){
    alert("Password will contain uppercase letters");
  }else{
    alert("Password will not contain uppercase letters");
  }
  var fourthPrompt = window.confirm("Do you wish to include numeric characters?");
  if(fourthPrompt){
    alert("Password will contain numeric characters");
  }else{
    alert("Password will not contain numeric characters");
  }
  var fifthPrompt = window.confirm("Do you wish to include special characters?");
  if(fifthPrompt){
    alert("Password will contain special characters");
  }else{
    alert("Password will not contain special characters");
  }
  generatePassword(firstPrompt, secondPrompt, thirdPrompt, fourthPrompt, fifthPrompt);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// When generate button is clicked, the user is prompted to set password criteria
generateBtn.addEventListener("click", inputPrompts);
