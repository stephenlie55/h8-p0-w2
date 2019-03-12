// Excercise 12
function konversiMenit(menit) {
  var a=0;
  var b=0;
  if (menit<60) {
    a=0;
    b=menit%60
  } else {
    a=Math.floor(menit/60);
    b=menit%60;
  };
  if (String(b).length ==1) {
    b = '0' + b;
  };
  return a+':'+b;
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00