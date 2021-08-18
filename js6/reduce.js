// array.prototype.reduce() - check and returns everything, also replaces everything

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => {
    console.log('number, number');
    console.log('acc', acc);

    return 100 + number;
}, 0);
console.log(total);
    
// short version

const total2 = numbers.reduce((acc, number) => acc + number, 0);
    console.log(total2);

// accumulator = 0 -> number = 5 -> 0 + 5
// accumulator = 5 -> number = 10 -> 5 + 10
// accumulator = 15 -> number = 15 -> 15 + 15
// accumulator = 30 -> number = 20 -> 30 + 20


        // lets count total salary

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

const totalSalary = Object.values(salary).reduce((total, value) => {
    return total + value;
}, 0);
console.log(totalSalary);


//  lets count total playing hours

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Mango1', timePlayed: 3100, points: 540, online: true },
    { id: 'player-3', name: 'Mango2', timePlayed: 3100, points: 5400, online: false },
    { id: 'player-4', name: 'Mango3', timePlayed: 31000, points: 54000, online: true },
    { id: 'player-5', name: 'Mango4', timePlayed: 310000, points: 540000, online: false },
];

const totalTimePlayed = players.reduce(
    (time, player) => time + player.timePlayed, 0,
);

console.log(totalTimePlayed);

// counting total sum

const cart = [
    { label: 'a', price: 100, quantity: 2 },
    { label: 'b', price: 120, quantity: 3 },
    { label: 'c', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
    (amount, value) => amount + value.price * value.quantity, 0);
console.log(totalAmount);
    
//  collecting tags of twits

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['sfd', 'nodejssdfsd'] },
    { id: '002', likes: 17, tags: ['jsfsds', 'fsdsdsss13', 'nofsdfsddejs'] },
    { id: '003', likes: 20, tags: ['jssdfsdf', 'nodsfsdfdsdejs'] },
    { id: '004', likes: 1, tags: ['sdssjs', '11111', 'nodddejs'] },
];

const allTags = tweets.reduce((tags, tweet) => {
    tags.push(...tweet.tags);

    return tags
}, []);

// BEST OPTION HOW TO DO

const allTags2 = tweets.reduce((tags, tweet) => {

    return [...tags, ...tweet.tags]
}, []);



console.log(allTags);
console.log(allTags2);


//  lets do the stats

// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);
//     if (acc[tag]) {
//         acc[tag] += 1;

//         return acc;
//     }
//     acc[tag] = 1;

//     return acc;
// }, {})
// console.log(tagsStats);


// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);
//     if (acc[tag]) {
//         // acc[tag] += 1;

//         return {
//             ...acc,
//             [tag]: acc.tag + 1
//         };
//     }
//     // acc[tag] = 1;
    
//     return {
//         ...acc,
//         [tag]: 1,
//     };
// }, {})
// console.log(tagsStats);

const tagsStats = allTags.reduce((acc, tag) => {
    console.log(acc);
    // if (acc[tag]) {
    //     // acc[tag] += 1;

    //     return {
    //         ...acc,
    //         [tag]: acc.tag + 1
    //     };
    // }
    // acc[tag] = 1;
    
    return {
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    };
}, {})
console.log(tagsStats);