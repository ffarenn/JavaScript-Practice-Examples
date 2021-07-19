// FIND SMALLEST NUMBER IN MASSIVE SCRIPT (no repeat)

// const numbers = [20, 112, 52, 654, 1, 67686, 7474];
// let smallestNumber = numbers[0];

// console.log(smallestNumber);

// for (const number of numbers) {
//     console.log(number);

//     if (number < smallestNumber) {
//         smallestNumber = number
//     }
// }

// console.log(smallestNumber);

// reverse

// const numbers = [20, 112, 52, 654, 1, 67686, 7474];
// let biggestNumber = numbers[0];

// console.log(biggestNumber);

// for (const number of numbers) {
//     console.log(number);

//     if (number > biggestNumber) {
//         biggestNumber = number
//     }
// }

// console.log(biggestNumber);


const numbers = [20, 112, 52, 654, 1, 67686, 7474];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number
    }
}

console.log(smallestNumber);