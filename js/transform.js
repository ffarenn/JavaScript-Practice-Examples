// Merge elements in to one stroke SCRIPT

const friends = ['Mando', 'Poli', 'Kiwi', 'Ajax'];
let string = '';

for (const friend of friends) {
    string += friend + ',';
}

string = string.slice(0, string.length - 1);
console.log(string);

// Method -Joint-

const strings = friends.join('---');
console.log(strings);

