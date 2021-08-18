// array.prototype.every() - returns true if agree to statements
// array.prototype.some() - returns at least one element from stated argument

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Mango1', timePlayed: 3100, points: 540, online: true },
    { id: 'player-3', name: 'Mango2', timePlayed: 3100, points: 5400, online: false },
    { id: 'player-4', name: 'Mango3', timePlayed: 31000, points: 54000, online: true },
    { id: 'player-5', name: 'Mango4', timePlayed: 310000, points: 540000, online: false },
];

// false, not all are online
const isOnline = players.every(player => player.online);
console.log('is online', isOnline);

const isOnlineSome = players.some(player => player.online);
console.log(isOnlineSome);


// lets find hardcore players

const hardCorePlayers = players.some(player => player.timePlayed > 3100);
console.log(hardCorePlayers);
