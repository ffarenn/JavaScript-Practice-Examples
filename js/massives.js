// How to create massives ? - add []

const friends = ['Mando'];

console.log(friends);

// 2 strokes + length 

const lol = ['Mando', 'Kiwi']; 

console.log(lol.length);

// checking index number with table -table- 

const cars = ['BMW', 'Audi', 'Volvo', 'Mercedes'];
console.table(cars);

// show massives in stroke order

const flower = ['Camommile', 'Rose', 'Tulip'];
console.log(flower[0]);
console.log(flower[2]);
console.log(flower[flower.length - 1]);

// index number of massive 

const lastIndex = flower.length - 1;
console.log(lastIndex);

// Replace elements in massives

const birds = ['Pelican', 'Owl', 'Avoket'];
birds[1] = 'Bittern';
birds[birds.length - 1] = 'Tern'
console.log(birds);

// ----------

// PRIMITIVES
// REFERENTIAL EQUALITY

let a = 10;
let b = a;

console.log(a);
console.log(b);

let bird = 8;
let car = bird;
// let car = 12;
console.log(bird);
console.log(car);

// ------------

// link pointer
const c = [1, 2, 3];
const d = c;

console.log('c', c);
console.log('d', d);

c[0] = 500;

console.log('c', c);
console.log('d', d);

// true
console.log(a === b);
// false
console.log([1, 2, 3] === [1, 2, 3]);

const art = ['ss', 'pp', 'bb'];
const picture = art;

console.log('art', picture);
console.log('art', art);
console.log('picture', picture);

art[1] = 'vv';
// empty element between 3 and 4
art[4] = 'tt';

console.log('art', picture);
console.log('art', art);
console.log('picture', picture);

console.log(art === picture);

// ------------

// ITTERATIONS (cycles) - for - 

const fruits = ['Mango', 'Kiwi', 'Poly', 'Banana'];
console.table(fruits);
const lastIndexFruits = fruits.length - 1;

for (let i = 0; i <= lastIndexFruits; i += 1) {
    console.log('yyyy')
    console.log('i')
}

for (let i = 0; i <= lastIndexFruits; i += 1) {
    console.log('i')
}

for (let i = 0; i <= lastIndexFruits; i += 1) {
    console.log(fruits[i])
}

// adding cycles for individual indexes

for (let i = 0; i <= lastIndexFruits; i += 1) {
    fruits[i] += '-1'
}

//  shows index of the element
for (let i = 0; i <= lastIndexFruits; i += 1) {
    fruits[i] += `-${ i }`;
}

console.table(fruits);

for (let i = 0; i <= lastIndexFruits; i += 1) {
    fruits[2] += '-Orange-'
}

console.table(fruits);

for (let i = 0; i > fruits.length; i += 1) {
    fruits[1] += '-Orange-'
}

console.table(fruits);


const bikes = ['Suzuki', 'Honda', 'CRV', 'Yamaha', 'Isuzu'];
console.table(bikes);
const lastIndexBikes = fruits.length - 1;

for(let o = 0; o < lastIndexBikes; o += 1) {
    console.log(bikes);
}

for(let o = 0; o <= lastIndexBikes; o += 1) {
    bikes[o] += '-bike';
    bikes[1] += '+250hp';
    bikes[4] += 'check';
    console.log(bikes);
}

//  VARIABLES for...of (declarative code)
const names = ['Suzuki', 'Honda', 'CRV', 'Yamaha', 'Isuzu'];
// console.table(names);

// for (const variable of names)
for (const name of names) {
    console.log(name);
}