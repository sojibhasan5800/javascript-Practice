let numbers = [1, 2, 3, 4, 4, 5, 1, 6, 2, 7];

let uniqueNumbers = numbers.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueNumbers); 
