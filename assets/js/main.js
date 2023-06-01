console.log('Arrays JS');

const names = ['Carlos', 'Julio', 'Pepe', 'Mari Carmen de todos los santos'];
let longest;
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  if (!longest || name.length > longest.length) {
    longest = name;
  }
  
}
console.log(longest);

const grades = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (const grade of grades) {
  sum += grade;
}
console.log('Amount', sum);

const numbers = [-1];
let even;
let i = 0;
while (even === undefined && i < numbers.length) {
  const number =  numbers[i];
  if (number % 2 === 0) {
    even = number;
  }
  i++;
}
console.log('even', even);

let min;
let max;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  if (min === undefined || number < min) {
    min = number;
  }

  if (max === undefined || number > max) {
    max = number;
  }
}
console.log('min', min);
console.log('max', max);

// 33: min = undefined
// 34: i = 0
// 35: number = 1
// 37: min = number = 1

// min = -1
// 34: i = 1
// 35: number = numbers[1] = 2

// min = -1
// 34: i = 2
// 35: number = numbers[2] = 3

//....

// min = -1
// 34: i = 5
// 35: number = numbers[5] = -6
// 37: min = number = -6

