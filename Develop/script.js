// Assignment Code
var generateBtn = document.querySelector("#generate");
var specStr = "!'()*+,-./:;<=>?@[^_`{|}~";
var numStr = "0123456789";
var letterStr = "abcdefghijklmnopqrstuvwxyz";
var letterArr = letterStr.split('');
var numArr = numStr.split('');
var specArr = specStr.split('');


// Function to pick random letter from my letterArr array
function generateLetter(){
  // I assign randomLetter to a random index in my letterArr array
  var randomLetter = Math.floor(Math.random() * letterArr.length);
  // I assign chosenLetter to the value from that random index in randomLetter
  var chosenLetter = letterArr[randomLetter];

  return chosenLetter;
}

// Function to pick random number from my numArr array
function generateNumber(){
  var randomNum = Math.floor(Math.random() * numArr.length);
  var chosenNum = numArr[randomNum];

  return chosenNum;
}

// Function to pick random special character from my SpecArr array
function generateSpec(){
  var randomSpec = Math.floor(Math.random() * specArr.length);
  var chosenSpec = specArr[randomSpec];

  return chosenSpec;
}

// Function to filter password to meet the user's criteria
function generatePassword(totChar, lowerCase, upCase, numChar, specChar) {
  // Creating arrays to push random letters in, their length is the number of characters the user desires
  var randomLetterArr = [];
  var randomUpLetterArr = [];
  var randomNumberArr = [];
  var randomSpecialArr = [];
  // This array is all of my other random character arrays (randomLetterArr, randomNumberArr & randomSpecialArr) concatenated 
  var randomPassword = [];

  switch(true){

    case lowerCase && upCase && numChar && specChar:
    // This for loop is iterating i up to the user's desired characters and calling my function to generate a random character each time. Then, I am pushing each random   character into its respective array.
      for(let i=0; i<totChar; i++){
        var letter = generateLetter();
        var upLetter = generateLetter();
        // Creating my array of Uppercase letters
        upLetter = upLetter.toUpperCase();
        var number = generateNumber();
        var special = generateSpec();
        randomLetterArr.push(letter);
        randomUpLetterArr.push(upLetter);
        randomNumberArr.push(number);
        randomSpecialArr.push(special);
      }
  }
  // I concatenate all of the random character arrays into my randomArr array.
  var randomArr = randomLetterArr.concat(randomNumberArr).concat(randomSpecialArr).concat(randomUpLetterArr);
  // This for loop pushes a random character from the concatenated array to myrandomPassword array until it reaches the length of the user's desired number ofcharacters 
  for(let i=0; i<totChar; i++){
    var randomArrIndex = Math.floor(Math.random() * randomArr.length);
    var randomArrValue = randomArr[randomArrIndex];
    randomPassword.push(randomArrValue);
  }
  // I am turning my array randomPassword into a string using the join() method
  var randomPasswordString = randomPassword.join('');
  // This function returns my string of random characters with the length the user desired
  return randomPasswordString;
}

// This function prompts the user and returns all of the user's inputs into an array.
function inputPrompts(){
  var firstPrompt = prompt("Enter desired number of characters (8-128): ");
  if((firstPrompt != null) && !(firstPrompt < 8) && !(firstPrompt > 128)){
    alert("Number of characters: " + firstPrompt);
  }else{
    alert("Passwords must be between 8 and 128 characters");
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

// When generate button is clicked, the user is prompted to set password criteria
// generateBtn.addEventListener("click", firstPrompt);
