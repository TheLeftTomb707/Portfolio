// Use insert() function to insert the number in textview.
function insert(num) {
document.display.textview.value = document.display.textview.value + num;
}

// Use equal() function to return the result based on passed values.
function equal() {
var exp = document.display.textview.value;
if(exp) {
document.display.textview.value = eval(exp)
}
}