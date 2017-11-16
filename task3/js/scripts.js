
var string = prompt("Введите строку");

function getWordsLength(string) {
	var regex =  new RegExp(/([A-Za-zа-ё])+/,'ig');
	return string.match(regex).length;
}
console.log(getWordsLength(string));
	
		
   

	