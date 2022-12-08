// Checks if string only contains numbers
function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}

function generatePassword() {
  console.log("*** Attempting To Generate Password ***");

  // Ask user for length of the password
  pwLength = prompt("How many characters should your password be? (8-128)");
  console.log("User selected character length: " + pwLength);
  
  // Validate password length
  if (pwLength == null) { // Prompt was canceled
    return "Password length prompt canceled.";
  } else if (pwLength.length == 0) { // No input entered
    return "No password length provided. Try again.";
  } else if (containsOnlyNumbers(pwLength)) { // Input contains an integer
    pwLength = parseInt(pwLength);
    if (pwLength < 8 || pwLength > 128) { // Input is invalid - not between 8 and 128
      return "Password length is not between 8 and 128. Try again.";
    }
  } else { // Input is invalid - not an integer
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
  
  // Validate password character types
  var validCharTypes = "lunsa";
  if (pwCharTypes == null) { // Prompt was canceled
    return "Character type prompt canceled.";
  } else if (pwCharTypes.length == 0) { // No input entered
    return "No character type(s) provided. Try again.";
  } else { // At least 1 input
    for (var i = 0; i < pwCharTypes.length; i++) { // Loop through each input
      if (!validCharTypes.includes(pwCharTypes[i])) { // Input is invalid
        return "Invalid character type(s) provided. Try again.";
      }
    }
  }

  // Generate password that matches the selected criteria
  // Define different character types
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // If pwCharTypes contains "a" change it to "luns" to include all character types
  if (pwCharTypes.includes("a")) {
    pwCharTypes = "luns";
  }

  // Add possible character types together based on user input
  var possibleChars = "";
  if (pwCharTypes.includes("l")) {
    possibleChars += lowercase;
  }

  if (pwCharTypes.includes("u")) {
    possibleChars += uppercase;
  }

  if (pwCharTypes.includes("n")) {
    possibleChars += numeric;
  }

  if (pwCharTypes.includes("s")) {
    possibleChars += special;
  }
  console.log("All possible characters: " + possibleChars);
  
  // Grab random characters from possibleChars to generate password
  var pw = "";
  for (var i = 0; i < pwLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    pw += possibleChars[randomIndex];
  }

  // Log password and return it
  console.log("Password: " + pw);
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
