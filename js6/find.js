// array.prototype.find() - find unique element of object

const numbers = [5, 6464, 4, 4, 4, 874];

const number = numbers.find(number => number > 10);
console.log(number);



const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Mango1', timePlayed: 3100, points: 540, online: true },
    { id: 'player-3', name: 'Mango2', timePlayed: 3100, points: 5400, online: false },
    { id: 'player-4', name: 'Mango3', timePlayed: 31000, points: 54000, online: true },
    { id: 'player-5', name: 'Mango4', timePlayed: 310000, points: 540000, online: false },
];

// lets find the player

const playerToFind = 'player-3';

const playerWithId = players.find(player => player.id === playerToFind);
console.log(playerWithId);

// lets find player by name 

const playerWithName = players.find(player => player.name === 'Mango2');
console.log(playerWithName);