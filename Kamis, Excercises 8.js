function pasanganTerbesar(num) {
  // you can only write your code here!
  var numStr = String(num);
  var terbesar = Number(numStr[0]+numStr[1]);
  for (var i=0; i<str.length; i++) {
    var tempnum = Number(numStr[i]+numStr[i+1]);
    if(tempnum > terbesar){
      terbesar = tempnum;
    };
  }
  return terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99