// Assignment Code
var generateBtn = document.querySelector("#generate");
var specStr = "!'()*+,-./:;<=>?@[^_`{|}~";
var numStr = "0123456789";
var letterStr = "abcdefghijklmnopqrstuvwxyz";
var upStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upArr = upStr.split("");
var letterArr = letterStr.split("");
var numArr = numStr.split("");
var specArr = specStr.split("");

// Function to create password and make it meet the user's criteria
function generatePassword(totChar, lowerCase, upCase, numChar, specChar) {
  var randomPassword = [];
  var randomArr = [];
  function checkCriteria() {
    if (lowerCase) {
      // Using spread syntax to merge my two arrays together Spread Syntax Found Here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
      randomArr.push(...letterArr);
    }
    if (upCase) {
      randomArr.push(...upArr);
    }
    if (numChar) {
      randomArr.push(...numArr);
    }
    if (specChar) {
      randomArr.push(...specArr);
    }
    return randomArr;
  }
  // I call my function checkCriteria to push my random character arrays into the consolidated randomArr array
  checkCriteria();
  // This for loop pushes a random character from the concatenated array to myrandomPassword array until it reaches the length of the user's desired number characters
  for (let i = 0; i < totChar; i++) {
    var randomArrIndex = Math.floor(Math.random() * randomArr.length);
    var randomArrValue = randomArr[randomArrIndex];
    randomPassword.push(randomArrValue);
  }
  // Creating random indexes to use in my dblCheck function so I can further randomize my password
  var randy = Math.floor(Math.random() * randomPassword.length);
  var randy2 = Math.floor(Math.random() * randomPassword.length);
  // This function checks to see if the random password has all criteria, if not, it uses splice to replace the specified index of the random password with a random value from each respective character arrays
  function dblCheckCriteria() {
    if (lowerCase) {
      // This checks for lowercase letters in randomPassword array
      for (let i = 0; i < randomPassword.length; i++) {
        for (let r = 0; r < letterArr.length; r++) {
          if (randomPassword[i] !== letterArr[r]) {
            // If there are no lowercase letters in randomPassword, this replaces the first index of the array with a random lowercase letter
            randomPassword.splice(0, 1, letterArr[randy]);
          }
        }
      }
    }
    if (upCase) {
      // This checks for uppercase letters in randomPassword array
      for (let i = 0; i < randomPassword.length; i++) {
        for (let r = 0; r < upArr.length; r++) {
          if (randomPassword[i] !== upArr[r]) {
            // If there are no uppercase letters in randomPassword, this replaces the second index of the array with a random uppercase letter
            randomPassword.splice(1, 1, upArr[randy2]);
          }
        }
      }
    }
    if (numChar) {
      // This checks for numbers in randomPassword array
      for (let i = 0; i < randomPassword.length; i++) {
        for (let r = 0; r < numArr.length; r++) {
          if (randomPassword[i] !== numArr[r]) {
            // If there are no numbers in randomPassword, this replaces the third index of the array with a random number
            randomPassword.splice(2, 1, numArr[randy]);
          }
        }
      }
    }
    if (specChar) {
      // This checks for special characters in randomPassword array
      for (let i = 0; i < randomPassword.length; i++) {
        for (let r = 0; r < specArr.length; r++) {
          if (randomPassword[i] !== specArr[r]) {
            // If there are no special characters in randomPassword, this replaces the fourth index of the array with a random special character
            randomPassword.splice(3, 1, specArr[randy]);
          }
        }
      }
    }
    return randomPassword;
  }
  // I call my dblCheckCriteria function to verify that there is at least one of each of the user's criteria are in my randomPassword array.
  dblCheckCriteria();
  // I am turning my array randomPassword into a string using the join() method
  var randomPasswordString = randomPassword.join("");
  // This function returns my string of random characters with the length the user desired
  return randomPasswordString;
}
// This function prompts the user and returns all of the user's inputs into an array.
function inputPrompts() {
  var firstPrompt = prompt("Enter desired number of characters (8-128): ");
  if (firstPrompt != null && !(firstPrompt < 8) && !(firstPrompt > 128)) {
    alert("Number of characters: " + firstPrompt);
  } else {
    alert("Passwords must be between 8 and 128 characters");
    return;
  }
  var secondPrompt = window.confirm(
    "Do you wish to include lowercase letters?"
  );
  if (secondPrompt) {
    alert("Password will contain lowercase letters");
  } else {
    alert("Password will not contain lowercase letters");
  }
  var thirdPrompt = window.confirm("Do you wish to include uppercase letters?");
  if (thirdPrompt) {
    alert("Password will contain uppercase letters");
  } else {
    alert("Password will not contain uppercase letters");
  }
  var fourthPrompt = window.confirm(
    "Do you wish to include numeric characters?"
  );
  if (fourthPrompt) {
    alert("Password will contain numeric characters");
  } else {
    alert("Password will not contain numeric characters");
  }
  var fifthPrompt = window.confirm(
    "Do you wish to include special characters?"
  );
  if (fifthPrompt) {
    alert("Password will contain special characters");
  } else {
    alert("Password will not contain special characters");
  }
  // Returning user inputs into an array
  return [firstPrompt, secondPrompt, thirdPrompt, fourthPrompt, fifthPrompt];
}
// Write password to the #password input
function writePassword() {
  // I am getting the return array from the inputPrompts function
  var inputArr = inputPrompts();
  // Setting each element of the array to a new variable
  var input1 = inputArr[0];
  var input2 = inputArr[1];
  var input3 = inputArr[2];
  var input4 = inputArr[3];
  var input5 = inputArr[4];
  // When I call the generatePassword function, I am passing in my user inputs
  var password = generatePassword(input1, input2, input3, input4, input5);
  // console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
