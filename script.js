function validEmail(email) {
	if (!email || typeof email !== 'string') {
	  return false;
	}
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const isMatch = emailPattern.test(email);
	return isMatch;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
