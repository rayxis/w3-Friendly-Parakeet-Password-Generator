// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	const password     = generatePassword();
	const passwordText = document.querySelector("#password");

	passwordText.value = password;
}

function generatePassword() {
	let charTypes, passwordLength;
	let passwordString = '';
	let passwordChars  = '';

	//  Make sure a number was entered between 8 and 128.
	while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)
		passwordLength = parseInt(prompt("How many characters? [8-128]", "12"));

	//  Loop questions if none of them are answered.
	while (!passwordChars.length) {
		charTypes = [
			{
				question: confirm("Include lowercase?"),
				chars:    "abcdefghijklmnopqrstuvwxyz"
			},
			{
				question: confirm("Include uppercase?"),
				chars:    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
			},
			{
				question: confirm("Include numbers?"),
				chars:    "0123456789"
			},
			{
				question: confirm("Include special characters?"),
				chars:    " !\"#$%&'()*+,-./:;<=>?@[\\]^_{|}~"
			}];

		//  Add each TRUE set of characters to the pool.
		charTypes.forEach(type => {
			if (type.question) passwordChars = passwordChars + type.chars;
		});
		//  If nothing was selected, alert the user. This will loop back to the top.
		if (!passwordChars.length) alert("You must choose at least one character type!");
	}

	//  Use cryptographically strong random values to create a more secure password than a regular
	//   random number generator.
	const bits = new Uint32Array(passwordLength);
	self.crypto.getRandomValues(bits);

	//  Loop through the character length.
	for (let i = 0; i < bits.length; i++) {
		//  Modulus ensures the random numbers stay within the character limit of passwordChars by
		//   looping back through zero in the character position.
		let charIndex = bits[i] % (passwordChars.length - 1);
		passwordString += passwordChars.charAt(charIndex);
	}
	//  Return the password string.
	return passwordString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
