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