
var string = prompt("Введите строку");

function remove(string) {
	var re = /(\s)+/g;
	return string.replace(re, ' ');
	
}

console.log(remove(string));
	
	
		
   

	