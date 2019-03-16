function cariMean(arr) {
  var hasil = 0;
  for (var i=0; i<arr.length; i++) {
    hasil = hasil + arr[i];
  }
  var rata = (hasil / arr.length);
  if ((Math.ceil(rata)-rata)>0.5) {
    rata = Math.floor(rata);
  } else {
    rata = Math.ceil(rata);
  }
  return rata;
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7