function groupAnimals(animals) {
  // you can only write your code here!
  var strcmp = new Intl.Collator(undefined, {numeric:true, sensitivity:'base'}).compare;

  var result = [];
  var huruf_awal = animals[0][0];
  var animals_temp = [];

  for (var i=0; i<animals.length; i++) {
    for (var j=i+1; j<animals.length; j++) {
      check=strcmp(animals[i], animals[j]);;
      if (check==1) {
        var temp=animals[i];
        animals[i]=animals[j];
        animals[j]=temp;
      }
    }
  }
  console.log(animals);

  for (var i=0; i<animals.length; i++) {
    if (animals[i][0]===huruf_awal) {
      animals_temp.push(animals[i]);
    } else {
      animals_temp = [];
      huruf_awal = animals[i][0];
      animals_temp.push(animals[i]);
      result.push(animals_temp);
    }
  }
  return result;
}

// TEST CASES
 console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]