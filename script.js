// Assignment Code
var generateBtn = document.querySelector("#generate");

  var lowerCase= [
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
    "z",
  ];
  var upperCase=[
    "A",
    "B",
    "C",
    "D",
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
    "Z",
  ];
  var numeric= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
 var  special= [
    "!",
    "#",
    "$",
    "%",
    "&",
    "(",
    ")",
    "*",
    "+",
    "/",
    ":",
    "<",
    ">",
    "=",
    "?",
    "@",
    "[",
    "]",
    "{",
    "}",
    "~",
  ];


// ------------------------------------------------------------------------------------------------------------------

// Write password to the #password input
// this function is telling the (generatePassword) function to display in the text box area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// main function add to if else statements
function generatePassword() {
  var chosenChars = [];
  var finalPass = ''

  var passLength = prompt("Choose a character length 8-128.");
  if(passLength < 8 || passLength > 128) {
    alert("Must choose a valid character length")
    return generatePassword()
  }
  // if statement for length

  var confUppercase = confirm("Would you like to use Uppercase characters?");
  if (confUppercase) {
    chosenChars = chosenChars.concat(upperCase)
  }
  // console.log(chosenChars);

  var confLowercase = confirm("Would you like to use lowercase letters?");
  if (confLowercase) {
    chosenChars = chosenChars.concat(lowerCase)
  }
  // console.log(chosenChars);

  var confNumeric = confirm("would you like to use numbers?");
  if (confNumeric) {
    chosenChars = chosenChars.concat(numeric)
  }
  // console.log(chosenChars);

  var confSpecial = confirm("Would you like to use $peci@| characters?");
  if (confSpecial) {
    chosenChars = chosenChars.concat(special)
  }
  // console.log(chosenChars);

  if(chosenChars.length === 0) {
    alert ("must choose at least one character")
    return generatePassword()
  }

  //loop  here
  for (var i = 0; i < passLength; i++) {
    //generate a random number btw 0 and chosenChars.length
   var randomIdx =  Math.floor(Math.random() * chosenChars.length);
  //  console.log(randomIdx) 
   var randomChar = chosenChars[randomIdx];
  //  console.log(randomChar)
   finalPass += randomChar
  }


  return finalPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------

