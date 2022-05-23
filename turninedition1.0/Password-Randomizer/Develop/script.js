// Assignment code here
// this code is not needed here
// document.querySelector("#generate");

var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = [
	'!',
	'%',
	'&',
	',',
	'*',
	'+',
	'-',
	'.',
	'/',
	'<',
	'>',
	'?',
	'~',
];
var alphaLower = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];
var alphaUpper = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() {
	
	var confirmLength = parseInt(
		prompt('How many characters would you like your password to contain?')
	);
	
	if (confirmLength < 8 || confirmLength > 128) {
		alert('Password length must be between 8-128 characters Try again');
		
	} else {
	
		alert('password length is correct');
	}
	var confirmSpecialCharacter =(
		prompt('Would you like to use Special Characters?')
	);
	var confirmNumericCharacter =(
		prompt('Would you like to use Numeric Characters?')
	);
	var confirmUpperCase =(
		prompt ('Would you like to use Upper Case?')
	);
	var confirmLowerCase =(
		prompt ('Would you like to use Lower Case?')
	);
} 

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
} 


generateBtn.addEventListener('click', writePassword);

//fully intend to sit down with Walter and hammer out what I'm missing this saturday. Expect re-submission.