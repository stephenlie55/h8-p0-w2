function palindrome(kata) {
  var a='';
  var b='';
  for (var i=0; i<(Math.floor(kata.length/2)); i++) {
    a = a + kata[i];
  }
  for (var j=kata.length-1; j>=(Math.ceil(kata.length/2)); j--) {
    b = b + kata[j];
  }
  if (a == b) {
    return true;
  } else return false;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false