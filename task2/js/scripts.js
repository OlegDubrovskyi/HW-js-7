var input = prompt("Введите строку");
var searchValue = prompt("Введите искомое значение");

function escapeRegExp(string){
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function english(searchValue, input) {
	var regex = new RegExp(searchValue, 'i');
	return regex.test(input);
}

console.log(english(searchValue, input));