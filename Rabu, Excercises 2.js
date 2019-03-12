// Excercise 2
function balikString(input) {
	temp='';
	for (var i=input.length-1; i>=0; i--) {
		temp = temp + input[i];
	}
  return temp;
}

balikString('Hello world!');