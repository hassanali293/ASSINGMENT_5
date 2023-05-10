function getLengths(array) {
  let lengths = [];
  for (let i = 0; i < array.length; i++) {
    lengths.push(array[i].length);
  }
  return lengths;
}


let strings = ["hi", "hello", "hey", "howdy"];
let lengths = getLengths(strings);
console.log(lengths);
