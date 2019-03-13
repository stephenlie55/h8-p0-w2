function angkaPalindrome(num) {
  while (true) {
    num++;
    var str = String(num);
    var strReverse = '';
    for (var i=str.length-1; i>=0; i--) {
      strReverse = strReverse + str[i];
    }
    if (str === strReverse) {
      return Number(str);
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
