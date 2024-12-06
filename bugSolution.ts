function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct: both arguments are numbers

let strNum = '2';
let numResult = add(1, parseInt(strNum)); // Correct: parsing the string to a number

console.log(result); // Output: 3
console.log(numResult); // Output: 3