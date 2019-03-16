function targetTerdekat(arr) {
  // you can only write your code here!
  var kiri=-1;
  var kanan=-1;
  var o=-1;
  var jarak=-1;
  for (i=0; i<arr.length; i++) {
    if (arr[i]==='o') {
      o=i;
    }
  }
  for (j=o; j<arr.length; j++) {
    if (arr[j]==='x') {
      kanan=j;
      break;
    }
  }
  for (k=o; k>=0; k--) {
    if (arr[k]==='x') {
      kiri=k;
      break;
    }
  }

  if ((kiri==-1) && (kanan==-1)) {
    jarak=0;
    return jarak;
  } else if (kiri==-1) {
    jarak=kanan-o;
    return jarak;
  } else if (kanan==-1) {
    jarak=o-kiri;
    return jarak;
  }

  if (kanan<kiri) {
    jarak=kanan-o;
    return jarak;
  } else {
    jarak=o-kiri;
    return jarak;
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2