// array.prototype.map()

const numbers = [21, 454, 87, 87, 44, 78];

const doubleNums = numbers.map(function (number) {
    console.log(number);
})

//  returns value of whatever you put in function
// const doubleNums2 = numbers.map(function (number) - shorter version below

const doubleNums2 = numbers.map(number => {
    console.log(number);
    return number * 3;
})
// returns same lenth array

console.log('doubleNums', doubleNums);
console.log('doubleNums2', doubleNums2);

// Example

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Mango1', timePlayed: 3100, points: 540, online: true },
    { id: 'player-3', name: 'Mango2', timePlayed: 3100, points: 5400, online: false },
    { id: 'player-4', name: 'Mango3', timePlayed: 31000, points: 54000, online: true },
    { id: 'player-5', name: 'Mango4', timePlayed: 310000, points: 540000, online: false },
];

const playerNames = players.map(player => {
    // short version - const playerNames = players.map(player => player.name);
    console.log(player);
    return player.name;
});
console.log('playerNames', playerNames);

// const playerIds
const playerIds = players.map(player1 => player1.id);
console.log('playerId', playerIds);


// Upgrade player points by 10%

const updatedPlayers = players.map(player => {
    console.log(player);
    return {
        ...player,
        points: player.points * 1.1,
    };
});
console.table(updatedPlayers);
console.log(updatedPlayers);
// short version
const updatedPlayers2 = players.map(player => ({
        ...player,
        points: player.points * 1.1,
}));
console.table(updatedPlayers2);
console.log(updatedPlayers2);

// Update one person

const playerIdToUpdate = 'player-3';


// ------- 1st example ----------

const updatedPlayers3 = players.map(player => {
    if (playerIdToUpdate === player.id) {
        console.log('Found it');

        return {
            ...player,
            timePlayed: player.timePlayed + 100,
            name: player.name + ' dghghdfgh',
        }}

    return player;
});

console.log(updatedPlayers3);


// ---------- shorter example -----------

const updatedPlayers4 = players.map(player => {
    return playerIdToUpdate === player.id ?   
         {
            ...player,
            timePlayed: player.timePlayed + 100,
            name: player.name + ' dghghdfgh',
        }

    : player;
});

console.log(updatedPlayers4);

// ---------- shortest example ----------

const updatedPlayers5 = players.map(player =>  playerIdToUpdate === player.id ?   
         {
            ...player,
            timePlayed: player.timePlayed + 100,
            name: player.name + ' dghghdfgh',
        }
    : player);

console.log(updatedPlayers5);

