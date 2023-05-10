function findIndex(arr) {
  let i;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      return i;
    }
  }
}
var arr = [1, 5, 15, 20];
var index = findIndex(arr);
console.log(index);
