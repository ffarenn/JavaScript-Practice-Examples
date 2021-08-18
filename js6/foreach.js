// Array.prototype.forEach(callback(currentVale, index. array), thisArg)
// callback - argument of forEach
// thisArg - argument for callback
// The first ARGUMENT IS FUNCTION (WHAT TO DO)

// forEach method instead of (for of)

const numbers = [5, 6, 4, 45, 64, 84];

numbers.forEach(function (number, index, array) {
    console.log('number', number);
});
 
console.log(numbers);

