// scripts.js

var a = prompt('Enter  a');
var b = prompt('Enter  b');
value = (a * a) + (2 * a * b) - (b * b);
alert('Calculation is, ' + value);
console.log('Calculation (a * a) + (2 * a * b) - (b * b) with a: ' + a + ' and  b: ' + b + ' is equal to: ' + value);
if (value > 0) {
	console.log('wynik dodatni');
}
else if (value < 0) {
	console.log('wynik ujemny');
}
else {
	console.log('wynik równy 0');
}
