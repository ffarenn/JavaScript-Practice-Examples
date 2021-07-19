// CARD EXAMPLE USING METHOD -SPLICE-

const cards = ['Card-1', 'Card-2', 'Card-3', 'Card-4', 'Card-5'];

//  Delete card using -Indexof()

const cardToRemove = 'Card-5'
const index = cards.indexOf(cardToRemove);
console.log(index);

cards.splice(index, 1);

console.table(cards);


// Cards to insert

const cardToInsert = 'Card-6';
const indexo = 3;

cards.splice(indexo, 0, cardToInsert);

console.table(cards);
