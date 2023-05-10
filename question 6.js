function arrayofobjects(arr, prop) {
  let arrayofobjects = [];

  for (let i = 0; i < arr.length; ++i) {
    arrayofobjects.push(arr[i][prop]);
  }
  return arrayofobjects;
}

let objArray = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];

let result = arrayofobjects(objArray, "name");
console.log(result);
