// LOGIN FIND SCRIPT

const logins = ['dfgdfg', 'sdgsgggf', 'fdgdfgfdgdf', 'dfgdfdddss'];
const loginToFind = 'fdgdfgfdgdf'
let show = `User ${loginToFind} not found`;

// 1 method using -for

for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];

    console.log('Login: ', logins);

    if (login === loginToFind) {
       show = `User ${loginToFind} found`;
        break;
    }
}

console.log(show);

// 2 method for...of

for (const login of logins) {
    console.log('Login: ', login);
    console.log(`${login} === ${loginToFind}: `, login === loginToFind);

    if (login === loginToFind) {
       show = `User ${loginToFind} found`;
        break;
    }
}

console.log(logins.includes(loginToFind));

// 3rd method - declarative code

const message = logins.includes(loginToFind) ? `User ${loginToFind} found` : `User ${loginToFind} not found`;

console.log(message);


// Find car

const car = ['Audi', 'BMW', 'Lexus'];
const carToFind = 'BMW'

const messages = car.includes(carToFind) ? `car ${carToFind} found` : `car ${carToFind} not found`;
console.log(messages);