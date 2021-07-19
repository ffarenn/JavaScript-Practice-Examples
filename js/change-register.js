// CHANGE SCRIPT FOR EVERY SYMBOL IN STROKE

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

for (const letter of letters) {

    //     if (letter === letter.toLowerCase()) {
    //         console.log('This letter is in lowercase', letter);

    //         invertedString += letter.toUpperCase();
    //     } else {
    //         console.log('This letter is in capital register', letter);
    //         invertedString += letter.toLowerCase();
    //     }
    // }
    
    // short version

    invertedString +=
        letter === letter.toLowerCase()
            ? letter.toUpperCase()
            : letter.toLowerCase()
}

console.log('InvertedString: ', invertedString);