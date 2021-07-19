// Practice methods of payments using massives

// 1 method

const cart = [54, 28, 105, 70, 92, 17, 120, 90, 25, 12];
// 2 make variable -total- in to the cycle
let total = 0;

// STEPS
// 1 go through massive
for (let i = 0; i < cart.length; i += 1) {
    console.log(cart[i]);
// 3 every elemnt add to total
    total += cart[i];
}

console.log('Total: ', total);

// 2nd method

const card = [54, 28, 105, 70, 92, 17, 120, 90, 25, 12];

for (const overall of card) {
    total += overall;
}
console.log('Total: ', total);

// practice

const carPrice = [200, 300, 500, 600, 600, 900];

    for (const carTotal of carPrice) {
        total += carTotal;
    }
    console.log('Total car price: ', total);


const flowerCost = [2, 4, 5, 6, 3, 12, 14, 15, 12]; 
    for (const totalCost of flowerCost) {
        total += totalCost;
    }
console.log('Total: ', total);

const houseCost = [2, 4, 5, 5, 565, 333, 14, 15, 12];
let houseTotal = 0;

for (let t = 0; t < houseCost.length; t += 1) {
    total += houseCost[t];
}
 
console.log(total);

// adding tax

const stamps = [54, 28, 105, 70, 92, 17, 120, 90, 25, 12];

for (let i = 0; i < cart.length; i += 1) {
    stamps[i] = Math.round(stamps[i] * 1.1);
}

console.log(stamps);

const stamp = [25, 30, 31];

for (let b = 0; b < stamp.length; b += 1) {
    stamp[3] = 18
    stamp[b] = Math.round(stamp[b] * (60/20))
}
console.log(stamp);
