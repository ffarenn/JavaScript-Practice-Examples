// array.prototype.filter() - filtering elements of an object

const numbers = [5, 6464, 4, 4, 4, 874];

const filteredNumbers = numbers.filter(number => number > 15 || number < 200000);

// must return TRUE or FALSE

console.log('filtered', filteredNumbers);

//  ----------- Example

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Mango1', timePlayed: 3100, points: 540, online: true },
    { id: 'player-3', name: 'Mango2', timePlayed: 31000, points: 5400, online: false },
    { id: 'player-4', name: 'Mango3', timePlayed: 310000, points: 54000, online: true },
    { id: 'player-5', name: 'Mango4', timePlayed: 3100000, points: 540000, online: false },
];

// lets get players online

const onlinePlayers = players.filter(player => player.online);
console.log(onlinePlayers);

// offline

const offlinePlayers = players.filter(player => !player.online);
console.log(offlinePlayers);

// get players with time over 250

const hardcorePlayers = players.filter(player => player.timePlayed > 3100);
console.log(hardcorePlayers);


