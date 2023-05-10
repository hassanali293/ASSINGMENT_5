function findPair(array, target) {
    let i =0
  for (let i = 0; i < array.length - 1; i++) {
      let j=0
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [array[i], array[j]];
      }
    }
  }
  return null;
}


let array = [1, 2, 3, 4];
let target = 5;
let pair = findPair(array, target);
console.log(pair); 
