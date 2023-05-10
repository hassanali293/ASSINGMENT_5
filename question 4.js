const array = ["hi", "hello", "hey", "howdy"];
function filterStrings(array) {
  let newstr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) newstr.push(array[i]);
  }
  return newstr;
}

console.log(filterStrings(array));
