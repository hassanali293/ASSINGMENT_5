function getEvenNumbers(arr) {
    const evenNumbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }
  
    return evenNumbers;
  }
  const arr = [1, 2, 3, 4, 5, 6];
  const evenNumbers = getEvenNumbers(arr);
  console.log(evenNumbers); // Output: [2, 4, 6]
  