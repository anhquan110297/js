let input = [ 1, 2, 3, 4, 5 ]
const input2 = [ 1, -4, 12, 0, -3, 29, -150];

let newInput = input.map(element => Math.pow(element,2));
console.log(newInput);

let sumPositiveNumber = input2.filter(number => number > 0).reduce((a ,b) => a + b,0)
console.log(sumPositiveNumber);
input.forEach