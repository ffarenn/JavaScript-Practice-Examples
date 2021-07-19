// EVENS COUNTING SCRIPT

const numbers = [1, 5, 8, 9, 12, 15, 27, 30, 18, 11];

let total = 0;

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);

    // check for evens
    if (numbers[i] % 2 === 0) {
        console.log('EVEN');

        total += numbers[i];
    }
}
console.log('Total: ', total);

// 2nd method 

for (const number of numbers) {
    console.log(number);

    if (number % 2 === 0) {
        console.log('EVEN');

        total += number;
    }
}
 
console.log('Total second method + 1st: ', total);

//  3rd method

for (const number of numbers) {
    console.log(number);

    if (number % 2 === 0) {
        console.log(`${number} - EVEN`);

        total += number;
    }
}
 
console.log('Total second method + 1st: ', total);

// continue + reverse logic 'IF NOT LETS SKIP!'

for (const number of numbers) {

    if (number % 2 !== 0) {
        console.log('Skip itteration', number);
        continue;
    }

      console.log(`${number} - EVEN`);

        total += number;
}
 
console.log('Total: ', total);
