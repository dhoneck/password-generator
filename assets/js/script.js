// Assignment code here
// Checks if string only contains numbers
function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}

function generatePassword() {
  console.log("*** Attempting To Generate Password ***");

  // Ask user for length of the password
  pwLength = prompt("How many characters should your password be? (8-128)");
  console.log("User selected character length: " + pwLength);
  
  // Validate length - integer between 8 and 128
  var lengthValid = false;
  if (containsOnlyNumbers(pwLength)) { // pwLength is an integer
    pwLength = parseInt(pwLength);
    if (pwLength >= 8 && pwLength <= 128) { // pwLength is valid
      console.log("Password length, " + pwLength + ", is between 8 and 128.")
      lengthValid = true;
    } else { // pwLength is invalid
      console.log("Password length, " + pwLength + ", is not between 8 and 128.");
      return "Invalid length provided. Try again.";
    }
  } else { // pwLength is not an integer
    console.log("Password length, " + pwLength + ", is not an integer.");
    return "Invalid length provided. Try again.";
  }

  // Ask user what type of characters to use in password
  pwCharTypes = prompt(
  "What kind of characters should your password contain?\n" +
  "(l) - Lowercase\n" +
  "(u) - Uppercase\n" + 
  "(n) - Numeric\n" +
  "(s) - Special Characters\n" +
  "(a) - All Types\n" +
  "Please enter at least one option.\n" +
  "Add multiple types in one line with no spaces (e.g. lun)."
  );
  console.log("User selected character types: " + pwCharTypes);
  
  // TODO: Validate character types

  // Generate password that matches the selected criteria
  // Define different character types
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Convert pwCharTypes from 'a' to 'luns' to include all character types
  if (pwCharTypes == "a") {
    pwCharTypes = "luns";
  }

  var possibleChars = "";
  if (pwCharTypes.includes("l") || pwCharTypes.includes("a")) {
    console.log("Includes l");
    possibleChars += lowercase;
  }

  if (pwCharTypes.includes("u")) {
    console.log("Includes u");
    possibleChars += uppercase;
  }

  if (pwCharTypes.includes("n")) {
    console.log("Includes n");
    possibleChars += numeric;
  }

  if (pwCharTypes.includes("s")) {
    console.log("Includes s");
    possibleChars += special;
  }
  console.log("All possible characters: " + possibleChars);
  
  // Grab random characters from possibleChars to generate password
  var pw = "";
  for (var i = 0; i < pwLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    pw += possibleChars[randomIndex];
  }

  // Display password in an alert or write to the page
  console.log("PW: " + pw);
  return pw;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
