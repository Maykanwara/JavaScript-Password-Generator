// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log (generateBtn);
var specialCharacters = ["[", "]", "!", "/", "^", "$", "|", "?", "*", "+", "(", ")"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var upperCaseCharacters = [ "A",
"B",
"C",
"C",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"]

var result=[]
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
  var passwordText = document.querySelector("#password");

   passwordText.value = password;
return 'may';

}


  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 function generatePassword() {
     
  var length = parseInt(prompt ('How many charcters would you like? (8-128)') )
  console.log (length)
  if (length<8 ||length>128){
    alert("your password must be greater than 8 charactors long or less than 128 charactors")
    generatePassword()
  }

  var symbol = confirm("Do you want specialCharacters?")
  console.log(symbol)
  var lowerCaseConfirm= confirm("Do you want lowerCaseCharacters?")
  console.log (lowerCaseConfirm)
 var UpperCase = confirm("Do you want upperCaseCharacters")
  console.log (UpperCase)

  var numericCharacters = confirm("Do you want numericCharacters")
  console.log (numericCharacters)


  if (symbol === false && lowerCaseConfirm === false && UpperCase === false && numericCharacters === false) {
    alert("your password must have at least one character type selected")
    generatePassword()
  }


while(length >0) {
  if (symbol === true) {
    result.push(specialCharacters[generateRandomNumber(specialCharacters)])
    length--
  }

  if (lowerCaseConfirm === true) {
    result.push(lowerCase[generateRandomNumber(lowerCase)])
    length--
  }

  if (UpperCase === true) {
    result.push(upperCaseCharacters[generateRandomNumber(upperCaseCharacters)])
    length--
  }

  console.log (numericCharacters)
  if (numericCharacters === true) {
    result.push(numbers[generateRandomNumber( numbers )])
    length--
  }
 
}
    

var password = result.join("");
    

   return password;
  
 }

function generateRandomNumber(arr) {
  return Math.floor(Math.random() * arr.length)
}




//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


//The prompts do not ask about numeric characters, and I was able to input a request for less than 8 and more than 128 characters. Although I was able to go through the prompts, no password was generated. Your README is also incomplete. It needs some more descriptions and a screenshot.























