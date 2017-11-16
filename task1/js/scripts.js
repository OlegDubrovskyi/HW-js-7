var input = prompt("Введитес строку");

function english(input) {
	var regex = new RegExp('english', 'i');
	return regex.test(input);
}

console.log(english(input));