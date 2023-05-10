const array = ["hi", "hello", "hey", "howdy"];
function filterStrings(array) {
  let str = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) str.push(array[i]);
  }
  return str;
}

console.log(filterStrings(array));
