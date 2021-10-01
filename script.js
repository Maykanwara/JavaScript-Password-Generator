// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log (generateBtn);
var specialCharacters = ["[", "]", "!", "/", "^", "$", "|", "?", "*", "+", "(", ")"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
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

var UpperCase = [ "A",
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
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  function generatePassword() {
      var password = '';
  var length = parseInt(prompt ('How many charcters would you like? (8-128)') )
  console.log (length)
  var symbol = confirm("Do you want specialCharacters?")
  console.log(symbol)
  var lowerCaseConfirm= confirm("Do you want lowerCaseCharacters?")
  console.log (lowerCaseConfirm)
  var UpperCase = confirm("Do you want upperCaseCharacters")
  console.log (UpperCase)


    

    return password;
  }















